import jwt from 'jsonwebtoken';
import express from 'express';

const router = express.Router();

router.get('/auth/status', (req, res) => {
  try {
    const token = req.cookies.token;
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
    return res.status(500).json({ error: 'Internal Server Error' });
  }
});

export default router;
