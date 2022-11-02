const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        console.log('auth', jwt.verify(token, 'RANDOM_TOKEN_SECRET'));        
        const decodedToken = jwt.verify(token, 'RANDOM_TOKEN_SECRET');
        console.log('auth1,5', decodedToken);
        const userId = decodedToken.userId;
        console.log('auth2', userId)
        if (req.body.userId && req.body.userId !== userId) {
            throw 'User ID non valable'
        } else {
            next();
        };
    } catch (error) {
        res.status(403).json({ error: error | 'unauthorized request !'});
    }
}; 