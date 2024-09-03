const { Router } = require("express");
const uploadConfig = require("../configs/upload")
const multer = require("multer");

const UsersController = require("../controllers/UsersController")
const UserAvatarController = require("../controllers/UserAvatarController")
const ensureAuthenticated = require("../middlewares/ensureAuthenticated");

const usersRoutes = Router();
const upload = multer(uploadConfig.MULTER)

const usersController = new UsersController();
const userAvatarController = new UserAvatarController();

usersRoutes.post("/", usersController.create);
usersRoutes.put("/", ensureAuthenticated, usersController.update);
usersRoutes.patch("/avatar", ensureAuthenticated, upload.single("avatar"), userAvatarController.update)

// o server.js  nao consegue acessar as rotas por isso fazemos o module.exports = usersRoutes porque assim o express do server consegue acessar normalmente

module.exports = usersRoutes;
