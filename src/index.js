import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import axios from 'axios';
import url from 'url';

if (!process.env.DISCORD_CLIENT_ID || !process.env.DISCORD_CLIENT_SECRET) {
    console.error("Missing required environment variables.");
    process.exit(1);
}

const port = process.env.PORT || 3000;

const app = express();

app.get('/api/auth/discord/redirect', async (req, res) => {
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
            formData, {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
            
        });

        if (output.data) {
            const access = output.data.access_token;

            const userInfo = await axios.get('https://discord.com/api/users/@me', {
                headers: {
                    'Authorization': `Bearer ${access}`,
                },
            });

            console.log(output.data, userInfo.data);
            res.send("Login successful!");
            
        } else {
            res.status(500).send("Failed to retrieve user data");
        }
    } catch (error) {
        console.error('An error occurred:', error);
        res.status(500).send('Internal Server Error');
    }

});

app.listen(port, () => {console.log(`Running on ${port}`)})