let b = "https://sela-develop.herokuapp.com/";

export default {
  b,
  email_verification: b + "account/verify?token=",
  resend_verification: b + "verify/account/resend",
  approve: b + "a/approve",
  revoke: b + "a/revoke",
  update_password: b + "password/reset?token=", // ?token=
  fetch_stakeholder_info: b + "users/i",
  notifications:{
    get: b + "notifications",
    marked_viewed: b + "notifications/mark-as-read"
  },
  contractor: {
    fetch_projects_you_joined: b + "stakeholder/projects",
    fetch_projects_you_proposed: b + "projects/",
    join_or_reject_project: b + "project/" //5c0f90284e5aae025ca8d233/accept
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