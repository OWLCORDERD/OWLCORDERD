import Main from 'pages/Main';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from 'CustomHook/ScrollToTop';
import CurrentProject from 'pages/CurrentProject';

function PageRoute() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/CurrentProject" element={<CurrentProject />} />
      </Routes>
    </BrowserRouter>
  );
}

export default PageRoute;
