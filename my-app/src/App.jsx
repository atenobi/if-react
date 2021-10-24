import React from 'react';

// components
import MainSection from './modules/hotel_info_section/MainSection';
import hotelArray from './modules/constants/hotelArray';

const App = () => {
  const dataArray = hotelArray.slice(0, 4);

  return (<MainSection title="Homes guests loves" array={dataArray} />);
};

export default App;
