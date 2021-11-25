import { Route, Routes } from 'react-router-dom';
import React from 'react';

const MyRoutes = (path, element) => (
  <Routes>
    <Route exact path="/" />
    <Route exact path={path} element={element} />
  </Routes>
);
export default MyRoutes;
