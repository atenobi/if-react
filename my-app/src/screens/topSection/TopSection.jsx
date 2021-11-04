import React from 'react';
import PropTypes from 'prop-types';

// components
import TopSectionHeader from '../../containers/topSectionHeader/TopSectionHeader';
import TopSectionTitle from '../../components/topSectionTitle/TopSectionTitle';
import UserSearchForm from '../../containers/topSectionSearchForm/UserSearcForm';
import TopSectionShops from '../../components/topSectionShops/TopSectionShops';

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
