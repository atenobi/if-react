import React, { useEffect, useState } from 'react';
import MainSection from '../MainSection/MainSection';

// constants
import baseURL from '../../constants/baseURL';

const HomesQuestLoves = () => {
  const [loadStatus, setLoadStatus] = useState(false);
  let error = null;
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    fetch(`${baseURL}hotels/popular`)
      .then((res) => res.json())
      .then(
        (result) => {
          setHotels(result);
          setLoadStatus(true);
        },
        (err) => {
          error += err;
          setLoadStatus(true);
        },
      );
    return function cleanup() {
      setHotels([]);
    };
  }, [loadStatus]);

  if (error) {
    return <div>{error.message}</div>;
  } if (!loadStatus) {
    return <div>Загрузка...</div>;
  }
  return (
    <MainSection title="Homes guests loves" array={hotels.slice(0, 4)} />
  );
};

export default HomesQuestLoves;
