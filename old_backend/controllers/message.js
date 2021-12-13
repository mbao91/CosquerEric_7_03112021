const Message = require('../models/message');

exports.createMessage = (req, res, next) => {
    const messageObject = JSON.parse(req.body.message);
    delete messageObject._id;
    const message = new Message({
        ...messageObject
    });
    message.save()
    .then(() => res.status(201).json({ message: " Message created !" }))
    .catch(error => res.status(400).json({ error }));
};

// exports.getAllProfil = (req, res, next) => { /*Renvoie un tableau de
//     toutes les sauces de la base de données.*/
//     Profil.find()
//     .then((profils) => res.status(200).json( profils ))
//     .catch(error => res.status(400).json({ error }));
// };

exports.getOneMessage = (req, res, next) => { //Renvoie la sauce avec l’_id fourni.
    Message.findOne({ _id: req.params.id })
    .then((message) => { res.status(200).json(message);})
    .catch(error => { res.status(404).json({ error });
    });
};

exports.modifyMessage = (req, res, next) => { //Modification de l'objet
    const messageObject = req.file ? {
        ...JSON.parse(req.body.profil),
        imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
    } : { ...req.body };
    Message.updateOne({ _id: req.params.id },
    { ...messageObject, _id: req.params.id })
    .then(() => res.status(200).json({ message: 'Modified!' }))
    .catch(error => res.status(400).json({ error }));
};

exports.deleteMessage = (req, res, next) => { //Suppression d'un objet
    Message.findOne({ _id: req.params.id})
    .then(message => {
        const filename = message.imageUrl.split('/images/')[1];
        fs.unlink(`images/${filename}`, () => {
            Message.deleteOne({ _id: req.params.id })
            .then(() => res.status(200).json({ message: 'Deleted!'}))
            .catch(error => res.status(400).json({ error }));
        });
    })
    .catch(error => res.status(500).json({ error }));
};