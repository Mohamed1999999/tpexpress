const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 5000;

// Utiliser EJS comme moteur de modèle
app.set("view engine", "ejs");

// Middleware personnalisé pour vérifier l'heure
const checkWorkingHours = (req, res, next) => {
  // (code du middleware)

  // j'ai personnalisé le middleware personnalisé à toutes les routes
  app.use(checkWorkingHours);

  // Itinéraires de l'application avec rendu EJS
  app.get("/", (req, res) => {
    res.render("accueil");
  });

  app.get("/nos-services", (req, res) => {
    res.render("nos-services");
  });

  app.get("/contactez-nous", (req, res) => {
    res.render("contactez-nous");
  });

  // Démarrer le serveur
  app.listen(PORT, () => {
    console.log(`Serveur en cours d'exécution sur le port ${PORT}`);
  });
};
