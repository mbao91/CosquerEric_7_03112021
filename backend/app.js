const first = require('ee-first');
const express = require('express');
const { sequelize } = require('./models');
const helmet = require('helmet');
const fs = require('fs');
const filesDir = 'images';
const path = require('path');
const cors = require('cors')

const userRoute = require('./route/user');
const postRoute = require('./route/posts');

const app = express();
app.use(express.json());

app.use(helmet());

app.use(cors());

app.use((req, res, next) => {// Cross Origin
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    res.setHeader('Set-Cookie', 'foo=bar; HttpOnly');
    next();
});

app.use('/users', userRoute );

app.use('/posts', postRoute );

app.use('/images', express.static(path.join(__dirname, 'images')));
//Permet de créer le dossier images si il n'existe pas
if (!fs.existsSync(filesDir)) {
    fs.mkdirSync(filesDir);
};

app.listen({ port: 3306}, async () => {
    console.log('Server up on http://localhost:3306')
    await sequelize.authenticate()
    console.log('Database Connected !')
})

module.exports = app;

// app.post('/users', async(req, res) => {// Créer un user
//     const { userName, password, firstName, lastName, email, role } = req.body
//     console.log('resultat', userName, password, firstName, lastName, email, role)
//     try{
//         const user = await User.create({ 
//             userName,
//             password, 
//             firstName, 
//             lastName, 
//             email, 
//             role })
//         return res.status(201).json('user created')
//     } catch(err) {
//         console.log(err)
//         return res.status(400).json(err)
//     }
// })

// app.get('/login', async(req, res) => {//Login
//     const { userName, password } = req.body
//     console.log('resultat', userName, password )
//     try{
//         const login = await Login.create({ 
//             userName, 
//             password 
//         })
//         return res.status(200).json(login)
//     } catch(err) {
//         console.log(err)
//         return res.status(400).json(err)
//     }
// })