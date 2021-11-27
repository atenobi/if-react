import { Route, Routes } from 'react-router-dom';
import React from 'react';
import PropTypes from 'prop-types';

const MyRoutes = ({ path, element }) => (
  <Routes>
    <Route path={path} element={element} />
  </Routes>
);

MyRoutes.propTypes = {
  path: PropTypes.string.isRequired,
  element: PropTypes.node.isRequired,
};

export default MyRoutes;
