import React from 'react';
import { Home, Join, Contact, FAQ, Login, Dashboard,  } from './pages';
import { Navbar } from './components/index.js';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';

export const App = () => {
  return (
    <>
    <ThemeProvider>
        <Router>
          <Navbar />
          <Routes>  
            <Route path="/" element={<Home />} />
            <Route path="*" element={<Home />} />
            <Route path="/home" element={<Navigate replace to="/" />} />
            <Route path="/join" element={<Join />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </Router>
    </ThemeProvider>
    </>
  );
};

export default App
