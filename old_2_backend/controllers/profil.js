const Profil = require('../models/profil');
const fs = require('file-system');

exports.createProfil = (req, res, next) => {
    profilObject = (req.body.profil);
    delete profilObject._id;
    const profilObject = new Profil({
        ...profilObject
    });
    profil.save()
    .then(() => res.status(201).json({ message: "Profil created !" }))
    .catch(error => res.status(400).json({ error }));
};

// exports.getAllProfil = (req, res, next) => { /*Renvoie un tableau de
//     toutes les sauces de la base de données.*/
//     Profil.find()
//     .then((profils) => res.status(200).json( profils ))
//     .catch(error => res.status(400).json({ error }));
// };

exports.getOneProfil = (req, res, next) => { //Renvoie la sauce avec l’_id fourni.
    Profil.findOne({ _id: req.params.id })
    .then((profil) => { res.status(200).json(profil);})
    .catch(error => { res.status(404).json({ error });
    });
};

exports.modifyProfil = (req, res, next) => { //Modification de l'objet
    const profilObject = req.file ? {
        ...JSON.parse(req.body.profil),
        imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
    } : { ...req.body };
    Profil.updateOne({ _id: req.params.id },
    { ...profilObject, _id: req.params.id })
    .then(() => res.status(200).json({ message: 'Modified!' }))
    .catch(error => res.status(400).json({ error }));
};

exports.deleteProfil = (req, res, next) => { //Suppression d'un objet
    Profil.findOne({ _id: req.params.id})
    .then(profil => {
        const filename = profil.imageUrl.split('/images/')[1];
        fs.unlink(`images/${filename}`, () => {
            Profil.deleteOne({ _id: req.params.id })
            .then(() => res.status(200).json({ message: 'Deleted!'}))
            .catch(error => res.status(400).json({ error }));
        });
    })
    .catch(error => res.status(500).json({ error }));
};