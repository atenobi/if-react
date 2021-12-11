import React, { useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

// // contexts
// import MainContext from './Contexts/MainContext';

// screens
import HomePage from './screens/HomePage/HomePage';

// components
import SingInPage from './components/SingInPage/SingInPage';
import SingOutPage from './components/SingOutPage/SingOutPage';

// styles
import './index.css';

const App = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.user);

  useEffect(() => {
    user ? navigate('/') : navigate('/singIn');
  }, [user]);

  return (
    <>
      <Routes>
        <Route path="*" element={<HomePage />} />
        <Route path="/singIn/*" element={<SingInPage />} />
        <Route path="/singOut" element={<SingOutPage />} />
      </Routes>
    </>
  );
};

export default App;
