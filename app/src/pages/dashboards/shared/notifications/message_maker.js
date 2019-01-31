import React from 'react';
import moment from 'moment';
import  Link  from 'react-router-dom/Link';
import connect from 'react-redux/lib/connect/connect';
import { showStakeHolderModal } from '../../../../store/action-creators/modal';
import { join_or_reject_project } from '../../../../store/action-creators/contractor/project';

const Timediff = (startDate) => {

    var a = moment(new Date());//now
    var b = moment(startDate);

    var duration = moment.duration(a.diff(b));

    var hours = duration.asHours();
    var days = duration.asDays();
    var minutes = duration.asMinutes();

    if(Boolean(Math.floor(days))){
        return Math.floor(days) + " day(s) ago";
    }
    
    if(Boolean(Math.floor(hours))){
        return Math.floor(hours) + " hours ago";
    }

    if(Boolean(Math.floor(minutes))){
        return Math.floor(minutes) + " minutes ago";
    }
}


export default connect()(({data, dispatch})=>{

    let type = data.type;

    let is_stakeholder_present = Boolean(data.stakeholder);
    let image = data.stakeholder.profilePhoto;
    let name = data.stakeholder.lastName + " " + data.stakeholder.firstName;
    let project_name = data.project.name;
    let project_id = data.project._id;

    let user_link = () => dispatch(showStakeHolderModal(data.stakeholder._id));
    
    let project_link = `/projects/${data.project.id}/description`;

    let date = data.updatedOn;

    switch(type){
        case "YOU_SENT_INVITATION_TO_JOIN":

        return <div className='xs-12 row'>
        <div className="xs-4 sm-3  md-1 t-c">
            <img src= { is_stakeholder_present && image ? 
                image 
                : "http://placehold.it/200"
                } alt=""/>
        </div>

        <div className="xs-8 sm-9 md-11">
            <p>You sent a request to <Link to="#" onClick={user_link}><strong>{name}</strong></Link> to join this project <a target="_blank" href={project_link}><strong>{project_name}</strong></a></p>
            <span> {Timediff(date)} </span>
        </div>    
    </div>

        default:
        let join = ()=> dispatch(join_or_reject_project( true, project_id ));
        let reject = ()=> dispatch(join_or_reject_project( false, project_id ));
        
        return <div className='xs-12 row'>
        <div className="xs-4 sm-3  md-1 t-c">
            <img src= { is_stakeholder_present && image ? 
                image 
                : "http://placehold.it/200"
                } alt=""/>
        </div>

        <div className="xs-8 sm-9 md-11">
            <p> <Link to="#" onClick={user_link}><strong>{name}</strong></Link> requested you join the <a target="_blank" href={project_link}><strong>{project_name}</strong></a> project.</p>
            <span> {Timediff(date)} </span>
            <button className='accept' onClick={join}>Accept</button><button className='reject' onClick={reject}>Reject</button>
        </div>    
    </div>
}
})