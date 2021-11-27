import React, { useContext, useEffect, useState } from 'react';

// contexts
import MainContext from './Contexts/MainContext';

// screens
import MainSection from './screens/MainSection/MainSection';
import TopSection from './screens/TopSection/TopSection';
import HomesQuestLoves from './screens/HomesQuestsLowes/HomesQuestLoves';

// styles
import './index.css';

const App = () => {
  const { user, hotels, setHotels } = useContext(MainContext);
  const [path, setPath] = useState('/singIn');

  useEffect(() => {
    if (!user) {
      setPath('/singIn');
    } else {
      setPath('/');
    }
    return function cleanUp() {
      setHotels([]);
    };
  }, [user]);

  return (
    <>
      <TopSection path={path} />
      {user && (
      <>
        <div className="block_body">
          {hotels?.length >= 1 && <MainSection title="Available hotels" array={hotels.slice(0, 4)} />}
        </div>
        <div className="block_body">
          <HomesQuestLoves />
        </div>
      </>
      )}
    </>
  );
};

export default App;
