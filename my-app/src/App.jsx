import React, { useState } from 'react';
import { Context } from './utils/Context';

// screens
import MainSection from './screens/MainSection/MainSection';
import TopSection from './screens/TopSection/TopSection';
import TopSectionEmpty from './screens/TopSectionEmpty/TopSectionEmpty';
import HomesQuestLoves from './screens/HomesQuestsLowes/HomesQuestLoves';

// styles
import './index.css';

const App = () => {
  const [hotels, setHotels] = useState([]);
  const [user, setUser] = useState(null);
  const [password, setPassword] = useState(null);

  return (
    <>
      {(!user && !password)
        ? (
          <TopSectionEmpty setUser={setUser} setPassword={setPassword} />
        )
        : (
          <Context.Provider value={[hotels, setHotels]}>
            <TopSection setUser={setUser} setPassword={setPassword} />
            <div className="block_body">
              {hotels?.length >= 1 && <MainSection title="Available hotels" array={hotels.slice(0, 4)} />}
            </div>
            <div className="block_body">
              <HomesQuestLoves />
            </div>
          </Context.Provider>
        )}
    </>
  );
};

export default App;
