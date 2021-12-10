import React, { useState } from 'react';

import MainContext from './MainContext';

const MainProvider = (props) => {
  const [hotels, setHotels] = useState([]);
  const [user, setUser] = useState(null);
  const [password, setPassword] = useState(null);

  return (
    <MainContext.Provider value={{
      hotels,
      setHotels,
      user,
      setUser,
      password,
      setPassword,
    }}
    >
      { props.children }
    </MainContext.Provider>
  );
};

export default MainProvider;
