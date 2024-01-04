import axios from 'axios';
import url from 'url';

export default async (req, res) => {
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

            const userInfo = await axios.get('https://discord.com/api/users/@me', {
                headers: {
                    'Authorization': `Bearer ${access}`,
                },
            });

            console.log(userInfo.data);
            res.send("Login successful!");
            
        } else {
            res.status(500).send("Failed to retrieve user data");
        }
    } catch (error) {
        console.error('An error occurred:', error);
        res.status(500).send('Internal Server Error');
    }
};
