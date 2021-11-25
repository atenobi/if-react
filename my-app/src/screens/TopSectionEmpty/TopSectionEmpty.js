import React from 'react';
import PropTypes from 'prop-types';

// components
import TopSectionHeader from '../../containers/TopSectionHeader/TopSectionHeader';

// styles
import './index.css';

const TopSectionEmpty = ({ setUser, setPassword }) => (
  <div className="block_body top_section">
    <div className="container">
      <TopSectionHeader itsEmpty setUser={setUser} setPassword={setPassword} />
    </div>
  </div>
);

TopSectionEmpty.propTypes = {
  setUser: PropTypes.func.isRequired,
  setPassword: PropTypes.func.isRequired,
};

export default TopSectionEmpty;
