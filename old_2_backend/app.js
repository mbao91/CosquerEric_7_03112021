const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const helmet = require('helmet');
const fs = require('file-system');
//const filesDir = require('filesDir');
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize("rsg", "ericcosquer$", "Determination2021.", {
    dialect: "mysql",
    host: "localhost"
});

try {
    sequelize.authenticate();
    console.log('Connecté à la base de données MySQL !');
}   catch (error) {
    console.log('Impossible de se connecter, erreur suivante :', error);
};

// const sequelize = new Sequelize("", "ericcosquer$", "Determination2021.", {
//     dialect: "mysql",
//     host: "localhost"
// });

// try {
//     sequelize.authenticate();
//     console.log('Connecté à la base de données MySQL !');
//     sequelize.query("CREATE DATABASE `rsg2`;").then(([results, metadata]) => {
//         console.log('Base de données créée !');
//     })
//     catch (error) {
//         console.log('Impossible de se connecter, erreur suivante :', error);
//     }
// }

// const messageRoutes = require('./routes/message');
const userRoutes = require('./routes/user');
const profilRoute = require('./routes/profil');

const app = express();

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    res.setHeader('Set-Cookie', 'foo=bar; HttpOnly');
    next();
});

app.use(bodyParser.json());

app.use(helmet());
app.use('/api/auth', userRoutes);
app.use('/api/message', messageRoutes);
app.use('/api/profil', profilRoute);

app.use('/images', express.static(path.join(__dirname, 'images')));
//Permet de créer le dossier images si il n'existe pas
// if (!fs.existsSync(filesDir)) {
//     fs.mkdirSync(filesDir);
// };

module.exports = app;
