const Post = require('../models/post');
const fs = require('fs');

exports.createPost = async (req, res) => {// Créer un message
    const { userUuid, body } = req.body
    try {
        const user = await User.findOne({ 
            where: { uuid: userUuid }})
        const post = await Post.create({ 
            body, 
            userId: user.id })
        return res.status(201).json(post)
    } catch(err) {
        console.log(err)
        return res.status(400).json({ error: 'Something went wrong !'})
    }
}

exports.findOnePost = async (req, res) => {// Trouver un message
    const uuid = req.params.uuid
    try {
        const post = await Post.findOne({ 
            where: { uuid }, 
            include: 'user',
        })
        return res.status(200).json(post)
    } catch(err) {
        console.log(err)
        return res.status(400).json('Something went wrong')
    }
}

exports.findAllPost = async (req, res) => {// Trouver tous les messages
    try {
        const posts = await Post.findAll({ 
            include: [{ 
                model: User, 
                as: 'user' 
            }]})
        return res.status(200).json(posts)
    } catch(err) {
        console.log(err)
        return res.status(400).json({ error: 'Something went wrong !'})
    }
}

exports.modifyPost = async (req, res) => {// Modifier un message
    const { userUuid, body } = req.body
    try {
        const user = await User.findOne({ where: { userUuid }})
        const post = await Post.update({ 
            body, 
            userId: user.id })
        return res.status(200).json(post)
    } catch(err) {
        console.log(err)
        return res.status(400).json({ error: 'Something went wrong !'})
    }
}

exports.deletePost = async (req, res) => {// Supprimer un message
    const uuid = req.params.uuid
    try {
        const post = await Post.findOne({ 
        where: { uuid },
        include: 'user'
    })
        await post.destroy()
        return res.status(200).json({ message: 'Message deleted !'})
    } catch(err) {
        return res.status(400).json('Something went wrong !')
    }
}