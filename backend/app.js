const express = require('express');
const { sequelize, User, Post } = require('./models');

const app = express()
app.use(express.json())

app.post('/users', async(req, res) => {
    const { firstName, lastName, email, role } = req.body

    try{
        const user = await User.create({ firstName, lastName, email, role })
        return res.json(user)
    } catch(err) {
        console.log(err)
        return res.status(400).json(err)
    }
})

app.get('/users', async (req, res) => {
    try {
        const users = await User.findAll()
        return res.json(users)
    } catch(err) {
        console.log(err)
        return res.status(400).json({ error: 'Something went wrong !'})
    }
})

app.get('/users/:uuid', async (req, res) => {
    const uuid = req.params.uuid
    try {
        const user = await User.findOne({
            where: { uuid },
            include: 'posts',
        })
        return res.json(user)
    } catch(err) {
        console.log(err)
        return res.status(400).json({ error: 'Something went wrong !'})
    }
})

app.post('/posts', async (req, res) => {
    const { userUuid, body } = req.body
    try {
        const user = await User.findOne({ where: { uuid: userUuid }})
        const post = await Post.create({ body, userId: user.id })
        return res.json(post)
    } catch(err) {
        console.log(err)
        return res.status(400).json({ error: 'Something went wrong !'})
    }
})

app.get('/posts', async (req, res) => {
    try {
        const posts = await Post.findAll({ include: [{ model: User, as: 'user' }]})
        return res.json(posts)
    } catch(err) {
        console.log(err)
        return res.status(400).json({ error: 'Something went wrong !'})
    }
})

app.put('/users/:uuid', async (req, res) => {
    const uuid = req.params.uuid
    const { firstName, lastName, email, role } = req.body
    try {
        const user = await User.findOne({ where: { uuid } })

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
})

app.delete('/users/:uuid', async (req, res) => {
    const uuid = req.params.uuid
    try {
        const user = await User.findOne({ where: { uuid } })
        await user.destroy()
        return res.json({ message: 'User deleted!' })
    } catch(err) {
        console.log(err)
        return res.status(400).json({ error: 'Something went wrong !'})
    }
})

app.listen({ port: 3306}, async () => {
    console.log('Server up on http://localhost:3306')
    await sequelize.authenticate()
    console.log('Database Connected !')
})
    
