module.exports = app => {
    const utilisateur = require("../controllers/utilisateur.controllers.js");
  
    var router = require("express").Router();
  

    router.post("/", utilisateur.login);
    router.get("/", utilisateur.get);
  
    app.use('/api/utilisateur', router);
  };
