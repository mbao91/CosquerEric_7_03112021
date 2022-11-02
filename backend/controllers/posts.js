const Post = require('../models/post');
const fs = require('fs');

exports.createPost = (req, res, next) => { //Création de l'objet
    console.log('createPost', req.body); 
    console.log('test1');
    const post = new Post({
        userId: req.body.userId,
        content: req.body.post,
        dislikes: 0,
        likes: 0,
        usersLiked: [],
        usersDisliked: [],
    });
    console.log('tet2')
    post.save()
    .then(() => res.status(201).json({ message: "Post créé et enregistré" }))
    .catch(error => res.status(400).json({ error }));
};

exports.getAllPosts = (req, res, next) => { /*Renvoie un tableau de
    toutes les potst de la base de données.*/
    Post.find()
    .then((posts) => res.status(200).json( posts ))
    .catch(error => res.status(400).json({ error }));
};

exports.getOnePost = (req, res, next) => { //Renvoie le message avec l’_id fourni.
    Post.findOne({ _id: req.params.id })
    .then((post) => { res.status(200).json(post);})
    .catch(error => { res.status(404).json({ error });
    });
};

exports.likePosts = (req, res, next) => {

    const userId = req.body.userId;
    const like = req.body.like;

    Post.findOne({ _id: req.params.id })
        .then(post => {
            switch (like) {
                case 1:
                    Posts.updateOne({ _id: req.params.id }, { $inc: { likes: 1 }, $push: { usersLiked: userId } })
                        .then(() => {res.status(200).json({ message: "Like !" });})
                        .catch(error => res.status(400).json({ error }));
                    break;

                case 0:
                    if (post.usersLiked.includes(userId)) {
                        Post.updateOne({ _id: req.params.id }, { $inc: { likes: -1 }, $pull: { usersLiked: userId } })
                            .then(() => {res.status(200).json({ message: "Like retiré !" });})
                            .catch(error => res.status(400).json({ error }));
                    } else if (post.usersDisliked.includes(userId)) {
                        Post.updateOne({ _id: req.params.id }, { $inc: { dislikes: -1 }, $pull: { usersDisliked: userId } })
                            .then(() => {res.status(200).json({ message: "Dislike retiré !" });})
                            .catch(error => res.status(400).json({ error }));
                    }
                    break;

                case -1:
                    Post.updateOne({ _id: req.params.id }, { $inc: { dislikes: 1 }, $push: { usersDisliked: userId } })
                        .then(() => {res.status(200).json({ message: "Dislike !" });})
                        .catch(error => res.status(400).json({ error }));
                    break;
                default:
                    console.log("error");
            }
        })
        .catch(error => {
            res.status(404).json({ error });
        });
};

exports.modifyPost = (req, res, next) => { //Modification de l'objet
    const postObject = req.file ? {
        ...JSON.parse(req.body.post),
        //imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
    } : { ...req.body };
    Post.updateOne({ _id: req.params.id },
    { ...postObject, _id: req.params.id })
    .then(() => res.status(200).json({ message: 'Modified!' }))
    .catch(error => res.status(400).json({ error }));
};

exports.deletePost = (req, res, next) => { //Suppression d'un objet
    console.log(req.params);
    Post.findOne({ _id: req.params.id})
    .then(() => {
        /*const filename = post.imageUrl.split('/images/')[1];
        fs.unlink(`images/${filename}`, () => {*/
            Post.deleteOne({ _id: req.params.id })
            .then(() => res.status(200).json({ message: 'Deleted!'}))
            .catch(error => res.status(400).json({ error }));
        })
    .catch(error => res.status(500).json({ error }));
};