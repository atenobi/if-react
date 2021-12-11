import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// component
import MainSection from '../MainSection/MainSection';

import { fetchHotels } from '../../store/asyncActions/fetchHotels';

const AvailableHotels = () => {
  const dispatch = useDispatch();
  const hotels = useSelector((state) => state.hotels.hotels);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    dispatch(fetchHotels());
    setLoad(true);
  }, [load]);

  return (
    <div className="block_body">
      {hotels?.length >= 1 && <MainSection title="Available hotels" array={hotels.slice(0, 4)} />}
    </div>
  );
};

export default AvailableHotels;
