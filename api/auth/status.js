import jwt from 'jsonwebtoken';
import cookie from 'cookie';

export default async function status(req, res) {
  try {
    const cookies = cookie.parse(req.headers.cookie || '');
    const token = cookies.token;

    if (!token || token == null) {
      console.log('No token found', error);
      return res.status(200).json({ isAuthenticated: false });
    }

    try {
      jwt.verify(token, process.env.JWT_SECRET);
      return res.status(200).json({ isAuthenticated: true });
    } catch (err) {
      console.log('Invalid token');
      return res.status(200).json({ isAuthenticated: false });
    }
  } catch (error) {
    console.error('Error in auth status check:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}
