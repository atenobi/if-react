import React from 'react';
import { useSelector } from 'react-redux';

// screens
import TopSection from '../TopSection/TopSection';
import HomesQuestLoves from '../HomesQuestsLowes/HomesQuestLoves';
import AvailableHotels from '../AvailableHotels/AvailableHotels';

const HomePage = () => {
  const user = useSelector((state) => state.user.userMail);

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
