import Main from 'pages/Main';
import Project from 'pages/Project';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from 'CustomHook/ScrollToTop';
import CurrentProject from 'Components/Project/CurrentProject/CurrentProject';
import WorkSpace from 'pages/WorkSpace';

function PageRoute() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/Project" element={<Project />} />
        <Route path="/CurrentProject" element={<CurrentProject />} />
        <Route path="/WorkSpace" element={<WorkSpace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default PageRoute;
