"use strict";

var { verifyToken } = require("../in-use/utils");
let project = require("../app/controllers/project");

module.exports = function(app) {
  //real routes
  app.route("/project").post(verifyToken, project.new);
  app.route("/projects?").get(verifyToken, project.find);

  // test routes
  app.route("/test/projects?").get(project.find);
  app.route("/test/project").post(project.new);
};