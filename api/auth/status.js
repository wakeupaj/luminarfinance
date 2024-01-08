import jwt from 'jsonwebtoken';
import cookie from 'cookie';
import { useAuth } from '../context/AuthContext';

export default async function(req, res) {

    const { isAuthenticated } = useAuth();
    
  try {
    const cookies = cookie.parse(req.headers.cookie || '');
    const token = cookies.token;

    if (!token) {
      return res.status(200).json({ isAuthenticated: false });
    }

    try {
      return res.status(200).json({ isAuthenticated: true });
    } catch (err) {

      return res.status(200).json({ isAuthenticated: false });
    }
  } catch (error) {
    console.error('Error in /auth/status:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}
