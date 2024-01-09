import axios from 'axios';
import url from 'url';
import { MongoClient } from 'mongodb';
import jwt from 'jsonwebtoken';

const client = new MongoClient(process.env.MONGODB_URI);

export default async (req, res) => {
    console.log('Discord redirect endpoint called');
    let userInfo;
    const { code } = req.query;

    if (!code) {
        console.log('No code provided in the request');
        return res.status(400).send('No code provided');
    }

    try {
        console.log('Preparing to fetch token from Discord with code:', code);
        const formData = new url.URLSearchParams({
            client_id: process.env.DISCORD_CLIENT_ID,
            client_secret: process.env.DISCORD_CLIENT_SECRET,
            grant_type: 'authorization_code',
            code: code.toString(),
            redirect_uri: "https://luminarfinance.net/api/auth/discord/redirect",
        });

        const output = await axios.post('https://discord.com/api/v10/oauth2/token', 
            formData.toString(), {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
        });

        if (output.data) {
            console.log('Received data from Discord:', output.data);
            const access = output.data.access_token;

            console.log('Fetching user data from Discord');
            const userResponse = await axios.get('https://discord.com/api/users/@me', {
                headers: {
                    'Authorization': `Bearer ${access}`,
                },
            });

            userInfo = userResponse.data;
            console.log('Received user data:', userInfo);

            console.log('Connecting to MongoDB');
            await client.connect();
        
            const db = client.db("LuminarDB");
            const collection = db.collection("Accounts");

            const discordUserData = {
                username: userInfo.username,
                email: userInfo.email,
                avatar: userInfo.avatar,
                user_id: userInfo.id,
            };

            console.log('Checking if user exists in the database');
            const existingUser = await collection.findOne({ user_id: userInfo.id });

            if (existingUser) {
                console.log('User already exists in the database');
                res.writeHead(302, { Location: 'https://luminarfinance.net/dashboard' });
                res.end();
                return;
            } else {
                console.log('Inserting new user into the database');
                await collection.insertOne(discordUserData);
            }

            console.log('Signing JWT token');
            const token = jwt.sign(
                { user_id: userInfo.id },
                process.env.JWT_SECRET,
                { expiresIn: '72h' }
            );
            res.setHeader('Set-Cookie', `token=${token}; HttpOnly; Path=/; Max-Age=259200; SameSite=Strict`);

            console.log('Redirecting to dashboard with token');
            res.writeHead(302, { Location: 'https://luminarfinance.net/dashboard' });
            res.end();
            
        } else {
            console.log('Failed to retrieve user data from Discord');
            return res.status(500).send("Failed to retrieve user data");
        }
            
    } catch (error) {
        console.error('An error occurred during the Discord OAuth process:', error);
        res.end();
        return res.writeHead(500, { Location: 'https://luminarfinance.net/login' })
    }

    finally {
        console.log('Closing MongoDB connection');
        await client.close();
    }
};
