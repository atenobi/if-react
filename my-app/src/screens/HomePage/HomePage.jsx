import React, { useContext, useEffect } from 'react';

import MainContext from '../../Contexts/MainContext';
// screens
import TopSection from '../TopSection/TopSection';
import HomesQuestLoves from '../HomesQuestsLowes/HomesQuestLoves';
import AvailableHotels from '../AvailableHotels/AvailableHotels';

const HomePage = () => {
  const { user, setHotels } = useContext(MainContext);

  useEffect(() => function cleanUp() {
    setHotels([]);
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

export default HomePage;
