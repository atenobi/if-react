import React from 'react';

// components
import TextLink from '../../components/links/TextLink';
import ImageLink from '../../components/links/ImageLink';

// styles
import './index.css';

const TopSectionHeader = () => {
  const cssClass = {
    logo: 'top_section--logo',
    stays: 'top_section__nav--link stays text_no_decor text_lg',
    attractions: 'top_section__nav--link attractions text_no_decor text_lg',
    nightButton: 'top_section__settings--night_button',
    accountCircle: 'top_section__settings--account_circle',
  };

  return (
    <div className="top_section__header row">
      <ImageLink id="logo_triphouse" link="#" cssClass={cssClass.logo} />
      <div className="top_section__nav row">
        <div className="top_section__nav--container row">
          <TextLink text="Stays" link="#" cssClass={cssClass.stays} />
          <TextLink text="Attractions" link="#" cssClass={cssClass.attractions} />
        </div>
        <div className="row">
          <ImageLink id="night_button" link="#" cssClass={cssClass.nightButton} />
          <ImageLink id="account_circle" link="#" cssClass={cssClass.accountCircle} />
        </div>
      </div>
    </div>
  );
};

export default TopSectionHeader;
