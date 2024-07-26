import React from 'react';
import './App.css';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from 'pages/Main';
import CurrentProject from 'pages/CurrentProject';
import ScrollYProvider from 'context/ScrollYContext';

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollYProvider>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/Project/:id" element={<CurrentProject />} />
          </Routes>
        </ScrollYProvider>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
