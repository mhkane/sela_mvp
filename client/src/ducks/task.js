
export const types = {
	ADD_TASK: 'sela/task/ADD_TASK',
  DELETE_TASK: 'sela/task/DELETE_TASK',
  COMPLETE_TASK: 'sela/task/COMPLETE_TASK',
};

const initialState = {};

export default (state = initialState, action) => {
  const newState = Object.assign({}, state);
  switch (action.type) {
  	case types.ADD_TASK:
  		return {...state, 
        [action._id] : {
          _id: action._id, 
          description: action.description, 
          dueDate: action.dueDate}
      }
    case types.DELETE_TASK:
      delete newState[action._id];
      return newState;
    case types.COMPLETE_TASK:
      newState[action._id].completed = true;
      return newState;
  	default:
  		return state
  }
};

export const actionTors = {
	add: (task) => ({type: types.ADD_TASK, ...task}),
  delete: (taskId) => ({type: types.DELETE_TASK, _id: taskId}),
  complete: (taskId) => ({type: types.COMPLETE_TASK, _id: taskId}),
};