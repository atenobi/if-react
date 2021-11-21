import React from 'react';

// components
import ImageLink from '../links/ImageLink';

// styles
import './index.css';

const TopSectionHeader = () => {
  const cssClass = {
    googleMarket: 'shop top_section__shops--google',
    appStore: 'shop top_section__shops--apple',
  };

  return (
    <div className="top_section__shops">
      <ImageLink id="google_market" link="#" cssClass={cssClass.googleMarket} />
      <ImageLink id="app_store" link="#" cssClass={cssClass.appStore} />
    </div>
  );
};

export default TopSectionHeader;
