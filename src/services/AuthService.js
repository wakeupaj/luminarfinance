const AuthService = {
    login: async (code) => {
      try {

        const response = await fetch('https://luminarfinance.net/api/auth/discord/redirect', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ code }),
        });
  
        if (!response.ok) {
          throw new Error('Login failed');
        }
  
        const data = await response.json();
  

        localStorage.setItem('authToken', data.token);
        return data.token;
      } catch (error) {
        console.error('AuthService login error:', error);
        throw error;
      }
    },
    logout: () => {
      localStorage.removeItem('authToken');
    },
    getToken: () => {
      return localStorage.getItem('authToken');
    },
    isAuthenticated: () => {
      const token = localStorage.getItem('authToken');
      return !!token;
    },
  };
  
  export default AuthService;
  