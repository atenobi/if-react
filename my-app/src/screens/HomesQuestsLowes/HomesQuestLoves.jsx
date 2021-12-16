import React from 'react';
import { useSelector } from 'react-redux';

// screens
import MainSection from '../MainSection/MainSection';

const HomesQuestLoves = () => {
  const hotels = useSelector((state) => state.hotels.hotels);

  return (
    <div className="block_body">
      <MainSection title="Homes guests loves" array={hotels.slice(0, 4)} />
    </div>
  );
};

export default HomesQuestLoves;
