import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

// helpers
import searchHotelFunc from '../../utils/searchHotelsFunc';

// component
import MainSection from '../MainSection/MainSection';

const AvailableHotels = () => {
  const hotels = useSelector((state) => state.hotels.hotels);
  const userSearchHotelString = useSelector((state) => state.userSearch.userSearchHotel);
  const [searchedHotels, setSearchedHotels] = useState([]);

  useEffect(() => {
    setSearchedHotels([]);
    setSearchedHotels(searchHotelFunc(userSearchHotelString, hotels));
  }, [userSearchHotelString]);

  return (
    <div className="block_body">
      {(searchedHotels?.length > 0
          || userSearchHotelString !== 'empty')
        && <MainSection title="Available hotels" array={searchedHotels.slice(0, 4)} />}
    </div>
  );
};

export default AvailableHotels;
