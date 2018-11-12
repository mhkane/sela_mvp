import ax from "axios";
import dA from "../../actions/project-funder/dashboard";
import e from "../../../endpoints";
import { retrieveToken } from "../../../helpers/TokenManager";

export const addDoc = obj => {
  return dispatch => {
    dispatch({ type: dA.ADD_DOCUMENT_IN_PROGRESS });
    ax({
      url: e.add_document,
      method: "POST",
      data: obj,
      headers: {
        "x-access-token": retrieveToken()
      }
    })
      .then(({ data }) => {
        dispatch({
          type: dA.ADD_DOCUMENT_SUCCESSFUL
        });
      })
      .catch(({ response }) => {
        let message;
        if (response) {
          message = response.message || response.data.message;
        } else {
          message = "connection error";
        }
        dispatch({ type: dA.ADD_DOCUMENT_FAILED, message });
      });
  };
};

// export const fetchTasks = projectId => {
//   return dispatch => {
//     dispatch({ type: dA.FETCH_TASKS_IN_PROGRESS });
//     ax({
//       url: e.tasks + "/" + projectId,
//       method: "GET",
//       headers: {
//         "x-access-token": retrieveToken()
//       }
//     })
//       .then(({ data }) => {
//         dispatch({
//           type: dA.FETCH_TASKS_SUCCESSFUL,
//           tasks: data
//         });
//       })
//       .catch(({ response }) => {
//         let message;
//         if (response) {
//           message = response.message || response.data.message;
//         } else {
//           message = "connection error";
//         }
//         dispatch({ type: dA.FETCH_TASKS_FAILED, message });
//       });
//   };
// };

// export const fetchTaskInfo = taskId => {
//   return dispatch => {
//     dispatch({ type: dA.FETCH_TASK_IN_PROGRESS });
//     ax({
//       url: e.tasks + "/" + taskId,
//       method: "GET",
//       headers: {
//         "x-access-token": retrieveToken()
//       }
//     })
//       .then(({ data }) => {
//         dispatch({
//           type: dA.FETCH_TASK_SUCCESSFUL,
//           info: data.info
//         });
//       })
//       .catch(({ response }) => {
//         let message;
//         if (response) {
//           message = response.message || response.data.message;
//         } else {
//           message = "connection error";
//         }
//         dispatch({ type: dA.FETCH_TASK_FAILED, message });
//       });
//   };
// };
