const b = "https://sela-labs.herokuapp.com/";

export default {
  signin: b + "login",
  signup: b + "register",
  send_recovery_mail: "",
  verify_user_token: b + "verifyToken",

  fetch_projects: b + "projects",
  fetch_project: b + "project/",
  add_project: b + "projects",
  add_task: b + "task",
  fetch_taks: b + "projects" //:id/tasks
};
