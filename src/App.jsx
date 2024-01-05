import React, { useState, createContext, useContext  } from 'react';
import styles from './style';
import { Home, Join, Contact, Login, FAQ } from './pages';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

export const App = () => {
  return (
      <Home />
  );
};

export default App
