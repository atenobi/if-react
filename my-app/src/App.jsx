import React, { useState } from 'react';

// screens
import MainSection from './screens/MainSection/MainSection';
import TopSection from './screens/TopSection/TopSection';
import HomesQuestLoves from './screens/HomesQuestsLowes/HomesQuestLoves';

// styles
import './index.css';

const App = () => {
  const [hotels, setHotels] = useState([]);

  return (
    <>
      <TopSection setHotels={setHotels} />
      <div className="block_body">
        {hotels?.length >= 1 && <MainSection title="Available hotels" array={hotels.slice(0, 4)} />}
      </div>
      <div className="block_body">
        <HomesQuestLoves />
      </div>
    </>
  );
};

export default App;
