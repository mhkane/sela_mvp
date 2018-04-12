# settings.py
import os
from os.path import join, dirname
from dotenv import load_dotenv
import telegram 
from telegram.ext import Updater
from telegram.error import NetworkError, Unauthorized
import logging
from time import sleep
import pymongo
from stellar_base.builder import Builder
from stellar_base.asset import Asset




# Accessing variables.
dotenv_path = join(dirname(__file__), '.env')
load_dotenv(dotenv_path)
telegram_token = os.getenv('SELA_BOT_API')
mongo_uri = os.getenv('MONGOLAB_URI')
client = pymongo.MongoClient(mongo_uri)
db = client.get_default_database()
sela_issuer = os.getenv('ISSU_PUB_KEY')
dest_address = os.getenv('LUM_WALL')
sender_s_key = os.getenv('DIST_SEC_KEY')
amount = 1

seed = sender_s_key
builder = Builder(secret=seed, network='public')
# builder = Builder(secret=seed, network='public') for LIVENET
bob_address = dest_address
amount = 2
memo = os.getenv('MEMO')
token = os.getenv('SELA_TOKEN')
builder.append_payment_op(bob_address, amount, token,sela_issuer)
builder.add_text_memo(memo) # string length <= 28 bytes
builder.sign()
# Uses an internal horizon instance to submit over the network
builder.submit()

users = db['users']
Bisike = users.find({'first_name': 'Bisike'})
for us in Bisike:
    print(us)
query = {'first_name': 'Bisike'}
users.update(query, {'$set': {'telegram_id': 'test'}})

# Using variables.
print(telegram_token)
bot = telegram.Bot(token=telegram_token)
updater = Updater(token=telegram_token)
dispatcher = updater.dispatcher
logging.basicConfig(format='%(asctime)s - %(name)s - %(levelname)s - %(message)s',
	level=logging.INFO)

"""Simple Bot to reply to Telegram messages.
This is built on the API wrapper, see echobot2.py to see the same example built
on the telegram.ext bot framework.
This program is dedicated to the public domain under the CC0 license.
"""

"""
This Bot uses the Updater class to handle the bot.
First, a few callback functions are defined. Then, those functions are passed to
the Dispatcher and registered at their respective places.
Then, the bot is started and runs until we press Ctrl-C on the command line.
Usage:
Example of a bot-user conversation using ConversationHandler.
Send /start to initiate the conversation.
Press Ctrl-C on the command line or send a signal to the process to stop the
bot.
"""

from telegram import (ReplyKeyboardMarkup, ReplyKeyboardRemove)
from telegram.ext import (Updater, CommandHandler, MessageHandler, Filters, RegexHandler,
                          ConversationHandler)

import logging

# Enable logging
logging.basicConfig(format='%(asctime)s - %(name)s - %(levelname)s - %(message)s',
                    level=logging.INFO)

logger = logging.getLogger(__name__)

REGISTER, REGISTER_HANDLER, UPLOAD_TYPE, INTERVIEW, TASK_REPORT, PHOTO_TRANSCRIPT,VIDEO, PHOTO, VIDEO_SUCCESS, TRANSCRIPT, END= range(11)

Interview_Type = 'Interview'
Task_Report_Type = 'Task Report'
Interview_Instruction = 'You chose interview. There are 2 ways to upload interview. Video or Photo+Transcript. Pick:'
Video = 'Video'
Photo_Transcript = 'Photo + Transcript'
Other = 'Other'
End = 'End'
New_Video = 'New Video'
New_Photo_Transcript = 'New Photo'
Video_Instruction = 'You chose to upload your interview in video format. Please upload your video'
Photo_Instruction = 'You chose to upload your interview in photo + transcript format. Please upload your photo now then your transcript'
Task_Report_Instruction_Success ='You chose task report. Please choose the project for which you are reporting'
User_Not_Found_Message = 'Hello, I do not recognize you. Please register by sending over your Sela user name. Would you like to register ?'
Register_Instruction = 'Register'




def start(bot, update):

    chat_id = update.message.chat.id
    reply_keyboard = [[Interview_Type, Task_Report_Type, 'Other']]
    users = db['users'].find({'telegram_id': chat_id})
    count = users.count() 
    if count == 0:
        reply_keyboard = [[Register_Instruction, Other]]
        update.message.reply_text(User_Not_Found_Message,
        reply_markup= ReplyKeyboardMarkup(reply_keyboard, one_time_keyboard=True))
        return REGISTER 
    elif count == 1:
        ''' Find user and hold conversation with him also think about time outs'''
        update.message.reply_text(
        'Hi! My name is Sela Bot. I will hold a conversation with you. '
        'Send /cancel to stop talking to me.\n\n'
        'Are you here to upload an interview or a Task Report ?',
        reply_markup=ReplyKeyboardMarkup(reply_keyboard, one_time_keyboard=True))
        return UPLOAD_TYPE
    else :
        return END

def register(bot, update):
    ''' Handle user registration '''
    registration = update.message.text
    register_prompt = 'Great ! We will register you now. Provide your user name on the Sela platform'
    if registration == Register_Instruction:
        update.message.reply_text(register_prompt,reply_markup=ReplyKeyboardRemove())
        return REGISTER_HANDLER
    else : 
        return END 

def register_handler(bot,update):
    ''' Handle user registration '''
    user_name = update.message.text
    users_query = db['users'].find({'first_name': user_name})
    count = users_query.count()
    if count == 0:
        error_message = 'Sorry, we did not find the corresponding user. Would you like to try again'
        reply_keyboard = ['Yes','No']
        update.message.reply_text(error_message,reply_markup=reply_keyboard)
        return REGISTRATION_ERROR
    elif count == 1:
        query = {'first_name': user_name}
        users.update(query, {'$set': {'telegram_id': update.message.chat.id}})
        success_message = 'Congratulations, you have been registered. Your account has been linked to Sela. To start a conversation, press /start'
        update.message.reply_text(success_message,reply_markup = ReplyKeyboardRemove())
    else :
        return END




def upload_type(bot, update):
    upload = update.message.text
    if(upload== Interview_Type):
        reply_keyboard = [[Video, Photo_Transcript]]
        update.message.reply_text(
            Interview_Instruction,
            reply_markup=ReplyKeyboardMarkup(reply_keyboard, one_time_keyboard=True))
        return INTERVIEW 
    elif(upload == Task_Report_Type):
        #Load user's projects and include them in the keyboard.
        update.message.reply_text(Task_Report_Instruction_Success, replk)
        return TASK_REPORT 



    logger.info("Up of %s: %s", user.first_name, update.message.text)
    update.message.reply_text('I see! Please send me a photo of yourself, '
                              'so I know what you look like, or send /skip if you don\'t want to.',
                              reply_markup=ReplyKeyboardRemove())

    return PHOTO

def task_report(bot,update):
    '''Todo : Grab Telegram ID, From ID grab user, from user grab projects and present list of project'''
    return True 

def get_project_tasks(bot,update):
    '''Todo : Given project ID, find tasks where there has been no observation or where the user has not already put obs'''
    return True

def get_observation_type_task(bot,update):
    ''' Todo : Ask observation in video, photo, or testimonial'''
    return True
def get_observation_status(bot,update):
    ''' Todo : Given observation ask whether it confirms a task is done or not'''
    return True

def interview(bot, update):
    media_type = update.message.text
    if(media_type== Video):
        reply_keyboard = [[Video, Photo_Transcript]]
        update.message.reply_text(
            Video_Instruction,
            reply_markup=ReplyKeyboardRemove())
        return VIDEO 
    elif(upload == Photo_Transcript):
        #Load user's projects and include them in the keyboard.
        update.message.reply_text(Task_Report_Instruction_Success, replk)
        return TASK_REPORT 

def video(bot, update):
    video_file = bot.get_file(update.message.video.file_id)
    video_file.download('temp.mp4')
    video_thanks= 'Thanks for uploading this interview. You can decide to upload a new video, a photo + transcript or end'
    reply_keyboard = [[New_Video, New_Photo_Transcript, End]]
    update.message.reply_text(
        video_thanks,
        reply_markup=ReplyKeyboardMarkup(reply_keyboard,one_time_keyboard=True))
    return VIDEO_SUCCESS
def video_success(bot, update):
    new_submission = update.message.text
    if(new_submission== New_Video):
        update.message.reply_text(
            Video_Instruction,
            reply_markup=ReplyKeyboardRemove())
        return VIDEO 
    elif(new_submission == New_Photo_Transcript):
        #Load user's projects and include them in the keyboard.
        update.message.reply_text(Task_Report_Instruction_Success, replk)
        return TASK_REPORT 
    elif(new_submission == End):
        return END


def photo(bot, update):
    user = update.message.from_user
    photo_file = bot.get_file(update.message.photo[-1].file_id)
    photo_file.download('user_photo.jpg')
    logger.info("Photo of %s: %s", user.first_name, 'user_photo.jpg')
    update.message.reply_text('Gorgeous! Now, send me your location please, '
                              'or send /skip if you don\'t want to.')

    return LOCATION


def skip_photo(bot, update):
    user = update.message.from_user
    logger.info("User %s did not send a photo.", user.first_name)
    update.message.reply_text('I bet you look great! Now, send me your location please, '
                              'or send /skip.')

    return LOCATION


def location(bot, update):
    user = update.message.from_user
    user_location = update.message.location
    logger.info("Location of %s: %f / %f", user.first_name, user_location.latitude,
                user_location.longitude)
    update.message.reply_text('Maybe I can visit you sometime! '
                              'At last, tell me something about yourself.')

    return BIO


def skip_location(bot, update):
    user = update.message.from_user
    logger.info("User %s did not send a location.", user.first_name)
    update.message.reply_text('You seem a bit paranoid! '
                              'At last, tell me something about yourself.')

    return BIO


def bio(bot, update):
    user = update.message.from_user
    logger.info("Bio of %s: %s", user.first_name, update.message.text)
    update.message.reply_text('Thank you! I hope we can talk again some day.')

    return ConversationHandler.END


def end(bot, update):
    user = update.message.from_user
    logger.info("User %s canceled the conversation.", user.first_name)
    update.message.reply_text('Bye! I hope4 we can talk again some day.',
                              reply_markup=ReplyKeyboardRemove())

    return ConversationHandler.END

def cancel(bot, update):
    user = update.message.from_user
    logger.info("User %s canceled the conversation.", user.first_name)
    update.message.reply_text('Bye! I hope4 we can talk again some day.',
                              reply_markup=ReplyKeyboardRemove())

    return ConversationHandler.END


def error(bot, update, error):
    """Log Errors caused by Updates."""
    logger.warning('Update "%s" caused error "%s"', update, error)


def main():
    # Create the EventHandler and pass it your bot's token.
    updater = Updater(telegram_token)

    # Get the dispatcher to register handlers
    dp = updater.dispatcher

    # Add conversation handler with the states GENDER, PHOTO, LOCATION and BIO
    conv_handler = ConversationHandler(
        entry_points=[CommandHandler('start', start)],

        states={
            UPLOAD_TYPE: [RegexHandler('^(Interview|Task Report|Other)$', upload_type)],
            INTERVIEW: [RegexHandler('^(Video|Photo + Transcript)$', interview)],
            REGISTER: [RegexHandler('^(Register|Other)$', register)],
            REGISTER_HANDLER: [MessageHandler(Filters.text, register_handler)],
            VIDEO: [MessageHandler(Filters.video, video)],
            VIDEO_SUCCESS: [RegexHandler('^(New Video| New Photo + Transcript|End)$', video_success)],
            END : [RegexHandler('End', end)] 
        },

        fallbacks=[CommandHandler('cancel', cancel)]
    )

    dp.add_handler(conv_handler)

    # log all errors
    dp.add_error_handler(error)

    # Start the Bot
    updater.start_polling()

    # Run the bot until you press Ctrl-C or the process receives SIGINT,
    # SIGTERM or SIGABRT. This should be used most of the time, since
    # start_polling() is non-blocking and will stop the bot gracefully.

    '''        PHOTO: [MessageHandler(Filters.photo, photo),
                    CommandHandler('skip', skip_photo)],

            LOCATION: [MessageHandler(Filters.location, location),
                       CommandHandler('skip', skip_location)],

            BIO: [MessageHandler(Filters.text, bio)]'''

    updater.idle()


if __name__ == '__main__':
    main()