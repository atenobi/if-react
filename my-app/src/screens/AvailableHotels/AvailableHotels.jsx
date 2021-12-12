import React from 'react';
import { useSelector } from 'react-redux';

// component
import MainSection from '../MainSection/MainSection';

const AvailableHotels = () => {
  const hotels = useSelector((state) => state.hotels.hotels);

  return (
    <div className="block_body">
      {hotels?.length >= 1 && <MainSection title="Available hotels" array={hotels.slice(0, 4)} />}
    </div>
  );
};

export default AvailableHotels;
