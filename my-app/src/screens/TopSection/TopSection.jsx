import React from 'react';
import PropTypes from 'prop-types';

// components
import TopSectionHeader from '../../containers/TopSectionHeader/TopSectionHeader';
import TopSectionTitle from '../../components/TopSectionTitle/TopSectionTitle';
import UserSearchForm from '../../containers/UserSearchForm/UserSearcForm';
import TopSectionShops from '../../components/TopSectionShops/TopSectionShops';

// styles
import './index.css';

const TopSection = ({ setUser, setPassword }) => (
  <div className="block_body top_section">
    <div className="container">
      <TopSectionHeader itsEmpty={false} setUser={setUser} setPassword={setPassword} />
      <TopSectionTitle />
      <UserSearchForm />
      <TopSectionShops />
    </div>
  </div>
);

TopSection.propTypes = {
  setUser: PropTypes.func.isRequired,
  setPassword: PropTypes.func.isRequired,
};

export default TopSection;
