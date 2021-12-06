import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// contexts
import MainContext from './Contexts/MainContext';

// screens
import TopSection from './screens/TopSection/TopSection';
import HomesQuestLoves from './screens/HomesQuestsLowes/HomesQuestLoves';
import AvailableHotels from './screens/AvailableHotels/AvailableHotels';

// styles
import './index.css';

const App = () => {
  const navigate = useNavigate();
  const { user, setHotels } = useContext(MainContext);

  useEffect(() => {
    !(user === null) ? navigate('/') : navigate('/singIn');

    return function cleanUp() {
      setHotels([]);
    };
  }, [user]);

  return (
    <>
      <TopSection />
      {user && (
      <>
        <AvailableHotels />
        <HomesQuestLoves />
      </>
      )}
    </>
  );
};

export default App;
