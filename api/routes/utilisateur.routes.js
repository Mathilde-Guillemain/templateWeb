module.exports = app => {
  const utilisateur = require("../controllers/utilisateur.controllers.js");
  const authMiddleware = require("../middleware/auth.middleware.js");
  var router = require("express").Router();

  router.post("/register", utilisateur.register);           // enregistrement
  router.post("/login", utilisateur.login);                  // connexion
  router.post("/logout", authMiddleware, utilisateur.logout); // déconnexion
  router.get("/me", authMiddleware, utilisateur.getCurrentUser); // utilisateur actuel
  router.get("/", utilisateur.get);                           // liste tous
  router.post("/", utilisateur.create);                       // création

  app.use('/api/utilisateur', router);
};
