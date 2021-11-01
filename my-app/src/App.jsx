import React, { useState } from 'react';

// components
import MainSection from './components/hotel_info_section/MainSection';
import UserSearchForm from './components/user_search/UserSearcForm';

// constants
import hotelArray from './constants/hotelArray';

// styles
import './index.css';

const App = () => {
  const dataArray = hotelArray.slice(0, 4);
  const [hotels, setHotels] = useState([]);

  return (
    <>
      <div className="block_body">
        <UserSearchForm setHotels={setHotels} />
      </div>
      <div className="block_body">
        {hotels?.length >= 1 ?? <MainSection title="Available hotels" array={hotels} />}
      </div>
      <div className="block_body">
        <MainSection title="Homes guests loves" array={dataArray} />
      </div>
    </>
  );
};

export default App;
