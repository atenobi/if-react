import React, { useState } from 'react';

// screens
import MainSection from './screens/mainSection/MainSection';
import TopSection from './screens/topSection/TopSection';

// constants
import hotelArray from './constants/hotelArray';

// styles
import './index.css';

const App = () => {
  const dataArray = hotelArray.slice(0, 4);
  const [hotels, setHotels] = useState([]);

  return (
    <>
      <TopSection setHotels={setHotels} />
      <div className="block_body">
        {hotels?.length >= 1 && <MainSection title="Available hotels" array={hotels} />}
      </div>
      <div className="block_body">
        <MainSection title="Homes guests loves" array={dataArray} />
      </div>
    </>
  );
};

export default App;
