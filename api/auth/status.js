import jwt from 'jsonwebtoken';
import cookie from 'cookie';

/**
 * Extract the token from cookies.
 * @param {string} cookieHeader - The cookie header from the request.
 * @returns {string | null} - The token or null if not found.
 */
const extractTokenFromCookie = (cookieHeader) => {
  const cookies = cookie.parse(cookieHeader || '');
  return cookies.token || null;
};

/**
 * Verify the JWT token.
 * @param {string} token - The JWT token to verify.
 * @returns {boolean} - True if the token is valid; otherwise, false.
 */
const verifyJwtToken = (token) => {
  try {
    jwt.verify(token, process.env.JWT_SECRET);
    return true;
  } catch (err) {
    console.log('Error verifying token:', err.message);
    return false;
  }
};

/**
 * Handle the authentication status request.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 */

export default async function status(req, res) {
  try {
    const token = extractTokenFromCookie(req.headers.cookie);

    if (!token) {
      console.log('No token found');
      return res.status(200).json({ isAuthenticated: false });
    }

    const isAuthenticated = verifyJwtToken(token);

    return res.status(200).json({ isAuthenticated });
  } catch (error) {
    console.error('Error in auth status check:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}
