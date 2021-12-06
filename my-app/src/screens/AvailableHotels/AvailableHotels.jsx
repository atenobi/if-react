import React, { useContext } from 'react';

// context
import MainContext from '../../Contexts/MainContext';

// component
import MainSection from '../MainSection/MainSection';

const AvailableHotels = () => {
  const { hotels } = useContext(MainContext);

  return (
    <div className="block_body">
      {hotels?.length >= 1 && <MainSection title="Available hotels" array={hotels.slice(0, 4)} />}
    </div>
  );
};

export default AvailableHotels;
