import dA from "../../actions/project-funder/dashboard";
const initstate = {
  add: {
    action: {
      type: "",
      message: ""
    }
  },
  single: {
    action: {
      type: "",
      message: ""
    },
    video_to_watch: {
      src: "",
      playing: false
    },
    info: {}
  },
  all: {
    action: {
      type: "",
      message: ""
    },
    collection: []
  }
};

export default (state = initstate, payload) => {
  switch (payload.type) {
    case dA.FETCH_TASK_IN_PROGRESS:
      return {
        ...state,
        single: {
          ...state.single,
          action: {
            type: dA.FETCH_TASK_IN_PROGRESS,
            message: ""
          }
        }
      };

    case dA.FETCH_TASK_SUCCESSFUL:
      return {
        ...state,
        single: {
          ...state.single,
          action: {
            type: dA.FETCH_TASK_SUCCESSFUL,
            message: payload.message || "Task Fetched Successfully"
          },
          info: payload.info
        }
      };

    case dA.FETCH_TASK_FAILED:
      return {
        ...state,
        single: {
          ...state.single,
          action: {
            type: dA.FETCH_TASK_FAILED,
            message: payload.message || "Could Not Fetch Task Info."
          }
        }
      };

    case dA.FETCH_TASKS_IN_PROGRESS:
      return {
        ...state,
        all: {
          action: {
            type: dA.FETCH_TASKS_IN_PROGRESS,
            message: ""
          }
        }
      };

    case dA.FETCH_TASKS_SUCCESSFUL:
      return {
        ...state,
        all: {
          action: {
            type: dA.FETCH_TASKS_SUCCESSFUL,
            message: payload.message || "Tasks Fetched Successfully"
          },
          collection: []
        }
      };

    case dA.FETCH_TASKS_FAILED:
      return {
        ...state,
        all: {
          action: {
            type: dA.FETCH_TASKS_FAILED,
            message: payload.message || "Could Not Fetch Tasks."
          }
        }
      };

    case dA.ADD_TASK_IN_PROGRESS:
      return {
        ...state,
        add: {
          action: {
            type: dA.ADD_TASK_IN_PROGRESS,
            message: ""
          }
        }
      };

    case dA.ADD_TASK_SUCCESSFUL:
      return {
        ...state,
        add: {
          action: {
            type: dA.ADD_TASK_SUCCESSFUL,
            message: payload.message || "Task Added Successfully"
          }
        }
      };

    case dA.ADD_TASK_FAILED:
      return {
        ...state,
        add: {
          action: {
            type: dA.ADD_TASK_FAILED,
            message: payload.message || "Could Not Add A Task."
          }
        }
      };

    case dA.WATCH_VIDEO:
      return {
        ...state,
        single: {
          ...state.single,
          video_to_watch: {
            src: payload.src,
            playing: payload.playing
          }
        }
      };

    case dA.CLEAR_VIDEO:
      return {
        ...state,
        single: {
          ...state.single,
          video_to_watch: {}
        }
      };

    default:
      return state;
  }
};