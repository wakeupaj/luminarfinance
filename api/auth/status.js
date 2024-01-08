import jwt from 'jsonwebtoken';
import cookie from 'cookie';

export default async function status(req, res) {
  try {

    const cookies = cookie.parse(req.headers.cookie || '');
    const token = cookies.token;

    if (!token) {
      return res.status(200).json({ isAuthenticated: false });
    }

    jwt.verify(token, process.env.JWT_SECRET, (err) => {
      if (err) {
        return res.status(200).json({ isAuthenticated: false });
      }
      return res.status(200).json({ isAuthenticated: true });
    });
  } catch (error) {
    console.error('Error in auth status check:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}
