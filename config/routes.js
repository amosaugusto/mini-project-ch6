const express = require("express");
const router = express.Router();
const controllers = require("../app/controllers");

router.post("/superadmin/login", controllers.api.v1.superAdminController.login);
router.post("/superadmin/admin/add", controllers.api.v1.authController.superAdminAuthorize, controllers.api.v1.adminController.createAdmin);
router.post("/admin/login", controllers.api.v1.adminController.login);
router.post("/member/add", controllers.api.v1.memberController.createMember);
router.post("/member/login", controllers.api.v1.memberController.login);
router.get("/produks", controllers.api.v1.produkController.listProduk);
router.post("/produks", controllers.api.v1.authController.adminsAuthorize, controllers.api.v1.produkController.createProduk);
router.put("/produks/:id", controllers.api.v1.authController.adminsAuthorize, controllers.api.v1.produkController.updateProduk);
router.delete("/produks/:id", controllers.api.v1.authController.adminsAuthorize, controllers.api.v1.produkController.deleteProduk);
router.get("/user", controllers.api.v1.authController.authorize, controllers.api.v1.authController.whoAmI);

router.use(controllers.api.main.onError);
router.use(controllers.api.main.onLost);
module.exports = router;