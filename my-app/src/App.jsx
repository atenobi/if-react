import React, { useEffect, useState } from 'react';

// contexts
import HotelsContext from './Contexts/HotelsContext';
import UserContext from './Contexts/UserContext';
import PasswordContext from './Contexts/PasswordContext';

// screens
import MainSection from './screens/MainSection/MainSection';
import TopSection from './screens/TopSection/TopSection';
import HomesQuestLoves from './screens/HomesQuestsLowes/HomesQuestLoves';

// styles
import './index.css';

const App = () => {
  const [hotels, setHotels] = useState([]);
  const [user, setUser] = useState(null);
  const [password, setPassword] = useState(null);
  const [path, setPath] = useState('/');

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
      <HotelsContext.Provider value={[hotels, setHotels]}>
        <UserContext.Provider value={[user, setUser]}>
          <PasswordContext.Provider value={[password, setPassword]}>

            <TopSection path={path} user={user} />
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

          </PasswordContext.Provider>
        </UserContext.Provider>
      </HotelsContext.Provider>
    </>
  );
};

export default App;
