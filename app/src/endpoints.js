let b = "";

// if (process.env.NODE_ENV === "development") {
  // b = "http://localhost:3009/";
// } else {
  b = "https://selabeta.herokuapp.com/";
// }

export default {
  b,
  approve: b + "a/approve",
  revoke: b + "a/revoke",
  update_password: b + "password/reset?token=", // ?token=
  fetch_stakeholder_info: b + "users/i",
  notifications:{
    get: b + "notifications",
    marked_viewed: b + "notifications/mark-as-read"
  },
  signin: b + "login",
  a_signin: b + "a/login",
  a_users: b + "a/users",
  signup: b + "register",
  update: b + "update",
  send_recovery_mail: b+ "forgot-password",
  verify_user_token: b + "verifyToken",
  fetch_projects: b + "projects?",
  fetch_project: b + "project/",

  fetch_organizations: b + "organizations",
  add_project: b + "project",
  add_document: b + "documents",

  tasks: b + "tasks",
  trn: b + "trn",

  fetch_users: b + "users",
  fetch_locations: b + "locations",
  add_stakeholder: b + "project/stakeholder",
  fetch_tasks: b + "projects" //:id/tasks
};
