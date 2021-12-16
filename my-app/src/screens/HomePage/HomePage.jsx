import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// screens
import TopSection from '../TopSection/TopSection';
import HomesQuestLoves from '../HomesQuestsLowes/HomesQuestLoves';
import AvailableHotels from '../AvailableHotels/AvailableHotels';

// functions
import { fetchHotels } from '../../store/asyncActions/fetchHotels';

// constants
import baseURL from '../../constants/baseURL';

const HomePage = () => {
  const user = useSelector((state) => state.user.userMail);
  const hotels = useSelector((state) => state.hotels.hotels);
  const dispatch = useDispatch();
  const [load, setLoad] = useState(false);

  useEffect(() => {
    if (hotels.length === 0) {
      dispatch(fetchHotels(`${baseURL}hotels?`));
    }
    setLoad(true);
  }, [load]);

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
