import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// screens
import MainSection from '../MainSection/MainSection';

// async fetcher hotels
import { fetchFavoriteHotels } from '../../store/asyncActions/fetchFavoriteHotels';

const HomesQuestLoves = () => {
  const favoriteHotels = useSelector((state) => state.favoriteHotels.favoriteHotels);
  const dispatch = useDispatch();
  const [load, setLoad] = useState(false);

  useEffect(() => {
    dispatch(fetchFavoriteHotels());
    setLoad(true);
  }, [load]);

  return (
    <div className="block_body">
      <MainSection title="Homes guests loves" array={favoriteHotels.slice(0, 4)} />
    </div>
  );
};

export default HomesQuestLoves;
