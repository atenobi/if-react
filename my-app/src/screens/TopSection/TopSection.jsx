import React from 'react';
import PropTypes from 'prop-types';

// components
import TopSectionHeader from '../../containers/TopSectionHeader/TopSectionHeader';
import TopSectionTitle from '../../components/TopSectionTitle/TopSectionTitle';
import UserSearchForm from '../../containers/UserSearchForm/UserSearcForm';
import TopSectionShops from '../../components/TopSectionShops/TopSectionShops';

// styles
import './index.css';
import BackgroundImage from '../../assets/background_image.jpg';

const TopSection = ({ setHotels }) => (
  <div
    className="block_body top_section"
    style={{
      backgroundImage: `url(${BackgroundImage})`,
    }}
  >
    <div className="container">
      <TopSectionHeader />
      <TopSectionTitle />
      <UserSearchForm setHotels={setHotels} />
      <TopSectionShops />
    </div>
  </div>
);

TopSection.propTypes = {
  setHotels: PropTypes.func.isRequired,
};

export default TopSection;
