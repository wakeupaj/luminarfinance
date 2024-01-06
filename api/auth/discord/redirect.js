import axios from 'axios';
import url from 'url';
import { MongoClient } from 'mongodb';

const client = new MongoClient(process.env.MONGODB_URI);

export default async (req, res) => {
    let userInfo;
    const { code } = req.query;

    if (!code) {
        return res.status(400).send('No code provided');
    }
    try {
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
            const access = output.data.access_token;

            const userResponse = await axios.get('https://discord.com/api/users/@me', {
                headers: {
                    'Authorization': `Bearer ${access}`,
                },
            });

            userInfo = userResponse.data;
            console.log(userInfo);

            await client.connect();
        
            const db = client.db("LuminarDB");
            const collection = db.collection("Accounts");

            const discordUserData = {
                username: userInfo.username,
                email: userInfo.email,
                avatar: userInfo.avatar,
                user_id: userInfo.id,
            };

            await collection.insertOne(discordUserData);

            res.writeHead(302, { Location: 'https://luminarfinance.net/dashboard' });
            res.end();
            
        } else {
            return res.status(500).send("Failed to retrieve user data");
        }
        
    } catch (error) {
        console.error('An error occurred:', error);
        return res.status(500).send('Internal Server Error');
    }

    finally {
        await client.close();
    }
};
