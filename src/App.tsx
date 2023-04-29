import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Main from './Components/Route/Main';
import Project from './Components/Route/Project';
import { store } from './Components/Store/index';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/Project" element={<Project />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
