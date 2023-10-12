// const express = require('express');
// const app = express();
// const port = 3000; // Port sur lequel l'API écoutera

// // Middleware pour gérer les requêtes JSON
// app.use(express.json());

// // Endpoint pour gérer la requête de l'interface utilisateur
// app.post('/api/generate-ui', (req, res) => {
//   const { month, year } = req.body;

//   // À ce stade, vous pouvez générer l'interface utilisateur en fonction du mois et de l'année
//   // Ici, vous pouvez renvoyer un exemple de réponse pour le tester
//   const uiData = {
//     month,
//     year,
//     // Autres données pour l'interface utilisateur
//   };

//   res.json(uiData);
// });

// // Démarrer le serveur
// app.listen(port, () => {
//   console.log(`API listening at http://localhost:${port}`);
// });

const express = require('express');
const cors = require('cors'); // Importez le module cors

const app = express();
const port = 3000;

// Middleware pour gérer les requêtes JSON
app.use(express.json());

// Utilisez cors middleware pour permettre les requêtes CORS
app.use(cors());

// Endpoint pour gérer la requête de l'interface utilisateur
app.post('/api/generate-ui', (req, res) => {
  const { day, month, year } = req.body;

  // À ce stade, vous pouvez générer l'interface utilisateur en fonction du mois et de l'année
  // Ici, vous pouvez renvoyer un exemple de réponse pour le tester
  const uiData = {
    day, 
    month,
    year,
    
    // Autres données pour l'interface utilisateur
  };

  res.json(uiData);
});

// Démarrer le serveur
app.listen(port, () => {
  console.log(`API listening at http://localhost:${port}`);
});
