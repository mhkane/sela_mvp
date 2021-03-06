import { combineReducers } from "redux";
import auth from "./auth";
import modal from ".//project-funder/modal";
import projects from "./projects";
import tasks from "./project-funder/tasks";
import home from "./homepage";
import organizations from "./organizations";
import admin from "./admin";
import transactions from "./project-funder/transactions";
import document from "./project-funder/document";
import app from "./app";
import notification_state from "./notifications";
import contractor from "./contractor/project";
import milestone from "./milestone";
import evidence from './evidence';
import wallet from "./wallet";

export default combineReducers({
  evidence,
  auth,
  admin,
  projects,
  modal,
  milestone,
  tasks,
  transactions,
  home,
  organizations,
  document,
  app,
  contractor,wallet,
  notification_state,
});
