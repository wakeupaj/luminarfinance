import express from 'express';
import jwt from 'jsonwebtoken';
import { MongoClient } from 'mongodb';

const client = new MongoClient(process.env.MONGODB_URI);
const router = express.Router();

let db, collection;
client.connect().then(() => {
  db = client.db("LuminarDB");
  collection = db.collection("Accounts");
}).catch(err => console.error('Failed to connect to MongoDB', err));

router.get('/userinfo', async (req, res) => {
    try {
        const token = req.cookies['token'];
        if (!token){
            console.log('No token found');
            return res.status(401).send({message: 'No token provided'})
        }
    
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        userID = decoded.user_id;

        const user = await collection.findOne({user_id: userID});
        if (!user) {
            return res.status(404).send({message: 'User not found'});
        }

        res.json({ 
            username: user.username, 
            email: user.email, 
            avatar: user.avatar 
        });

    } catch (error) {
        if (error instanceof jwt.JsonWebTokenError) {
            console.error('Token verification error:', error);
            return res.status(403).send({ message: 'Invalid token' });
          } else {
            console.error('Error in /userinfo:', error);
            res.status(500).send({ message: 'Internal Server Error' });
          }
    }
    
});

export default router;