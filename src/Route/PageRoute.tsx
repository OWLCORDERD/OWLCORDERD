import Main from 'pages/Main';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CurrentProject from 'pages/CurrentProject';

function PageRoute() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/CurrentProject" element={<CurrentProject />} />
      </Routes>
    </BrowserRouter>
  );
}

export default PageRoute;
