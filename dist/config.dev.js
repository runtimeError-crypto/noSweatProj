"use strict";

module.exports = {
  development: {
    port: process.env.PORT || 3000
  },
  dbURL: "mogodb://MONGO DATABASE HERE!!!B  :   DATABASEPORT  /  PROJECTNAME",
  production: {},
  jwtSecret: "password"
};