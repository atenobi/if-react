import React from 'react';
import { useSelector } from 'react-redux';

// components
import TopSectionHeader from '../../containers/TopSectionHeader/TopSectionHeader';
import TopSectionTitle from '../../components/TopSectionTitle/TopSectionTitle';
import UserSearchForm from '../../containers/UserSearchForm/UserSearcForm';
import TopSectionShops from '../../components/TopSectionShops/TopSectionShops';

// styles
import './index.css';

const TopSection = () => {
  const user = useSelector((state) => state.user.user);
  return (
    <div className="block_body top_section">
      <div className="container">
        <TopSectionHeader />
        {user ? (
          <>
            <TopSectionTitle />
            <UserSearchForm />
            <TopSectionShops />
          </>
        ) : (
          <>
          </>
        )}
      </div>
    </div>
  );
};

export default TopSection;
