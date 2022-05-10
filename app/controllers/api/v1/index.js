const authController = require("./authController");
const superAdminController = require("./superAdminController");
const adminController = require("./adminController");
const memberController = require("./memberController");
const produkController = require("./produkController");

module.exports = {
  adminController,
  authController,
  superAdminController,
  memberController,
  produkController
};