const bcrypt = require('bcrypt');
const User = require('../models/user');
const jwt = require('jsonwebtoken');

exports.signup = (req, res, next) => {//Signin up
    bcrypt.hash(req.body.password, 10)
        .then(hash => {
            const user = new User({
                userName: req.body.userName,
                password: hash,
                email: req.body.email,
                firstName: req.body.firstName,
                lastName: req.body.lastName
            });
        user.save()
        .then(() => res.status(201).json({ message: 'Utilisateur créé !' }))
        .catch(error => res.status(400).json({ error }));
        })
    .catch(error => res.status(500).json({ error }));
};

exports.login = (req, res, next) => {//Login
    User.findOne({ userName: req.body.userName })
    .then(user => {
    if (!user) {
     return res.status(401).json({ error: 'Utilisateur non trouvé !' });
    }
    bcrypt.compare(req.body.password, user.password)
    .then(valid => {
      if (!valid) {
        return res.status(401).json({ error: 'Mot de passe incorrect !' });
      }
      res.status(200).json({
        userId: user._id,
        token: jwt.sign(
          {userId: user._id},
          'RANDOM_TOKEN_SECRET',
          {expiresIn: '24h'}
        )
      });
     })
     .catch(error => res.status(500).json({ error }));
    })
    .catch(error => res.status(500).json({ error }));
};

exports.findOneUser = async (req, res) => {// Trouver un user
    const uuid = req.params.uuid
    try {
        const user = await User.findOne({
            where: { uuid },
            include: 'posts',
        })
        return res.status(200).json(user)
    } catch(err) {
        console.log(err)
        return res.status(400).json({ error: 'Something went wrong !'})
    }
}

exports.findAllUser = async (req, res) => {// Trouver tous les users
    try {
        const users = await User.findAll()
        return res.status(200).json(users)
    } catch(err) {
        console.log(err)
        return res.status(400).json({ error: 'Something went wrong !'})
    }
}

exports.modifyUser = async (req, res) => {// Modifier un user
    const uuid = req.params.uuid
    const { userName, password, firstName, lastName, email, role } = req.body
    try {
        const user = await User.findOne({ where: { uuid } })

        user.userName = userName
        user.password = password
        user.firstName = firstName
        user.lastName = lastName
        user.email = email
        user.role= role

        await user.save()
        return res.json(user)
    } catch(err) {
        console.log(err)
        return res.status(400).json({ error: 'Something went wrong !'})
    }
}

exports.deleteUser = async (req, res) => {// Supprimer un user
    const uuid = req.params.uuid
    try {
        const user = await User.findOne({ where: { uuid } })
        await user.destroy()
        return res.json({ message: 'User deleted!' })
    } catch(err) {
        console.log(err)
        return res.status(400).json({ error: 'Something went wrong !'})
    }
}