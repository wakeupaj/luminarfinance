import jwt from 'jsonwebtoken';
import { MongoClient } from 'mongodb';

const client = new MongoClient(process.env.MONGODB_URI);
let db;


const connectToDatabase = async () => {
  if (!db) {
    await client.connect();
    db = client.db("LuminarDB");
  }
  return db;
};

export default async function userinfo(req, res) {
    if (req.method !== 'GET') {
      res.status(405).end(); // Method Not Allowed
      return;
    }
    try {
        const token = req.cookies['token'];
        if (!token){
            console.log('No token found');
            return res.status(401).send({message: 'No token provided'})
        }
    
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const db = await connectToDatabase();
        const collection = db.collection("Accounts");
        const user = await collection.findOne({user_id: decoded.user_id});

        if (!user) {
            return res.status(404).send({message: 'User not found'});
        }

        res.json({ 
            username: user.username, 
            email: user.email, 
            avatar: user.avatar 
        });

    } catch (error) {
        console.error('Error in /userinfo:', error);
        if (error.name === 'JsonWebTokenError') {
          return res.status(403).send({ message: 'Invalid token' });
        } else {
          return res.status(500).send({ message: 'Internal Server Error' });
        }
    }
};