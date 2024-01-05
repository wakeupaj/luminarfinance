import React, { useState, createContext, useContext  } from 'react';
import styles from './style';
import { Home, Join, Contact, FAQ, Login,  } from './pages';
import { Navbar } from './components/index.js';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import { ThemeProvider, useTheme } from './context/ThemeContext';


export const App = () => {
  return (
    <>
    <ThemeProvider>
        <Router>
          <Navbar />
          <Routes>  
            <Route path="/home" element={<Home />} />
            <Route path="/join" element={<Join />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Router>
    </ThemeProvider>
    </>
  );
};

export default App
