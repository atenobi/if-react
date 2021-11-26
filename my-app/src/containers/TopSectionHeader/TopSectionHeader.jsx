import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

// components
import TextLink from '../../components/links/TextLink';
import ImageLink from '../../components/links/ImageLink';
import SingInPage from '../../components/SingInPage/SingInPage';
import SingOutPage from '../../components/SingOutPage/SingOutPage';

// Hoc
import MyRoutes from '../../MyRoutes/MyRoutes';

// styles
import './index.css';

const TopSectionHeader = ({ itsEmpty, setUser, setPassword }) => {
  const cssClass = {
    logo: 'top_section--logo',
    stays: 'top_section__nav--link stays text_no_decor text_lg',
    attractions: 'top_section__nav--link attractions text_no_decor text_lg',
    nightButton: 'top_section__settings--night_button',
    accountCircle: 'top_section__settings--account_circle',
    imagePushed: 'top_section__settings--image-pushed',
  };

  return (
    <div className="top_section__header row">
      <ImageLink id="logo_triphouse" cssClass={cssClass.logo} />
      <div className="top_section__nav row">
        <div className="top_section__nav--container row">
          <TextLink text="Stays" cssClass={cssClass.stays} />
          <TextLink text="Attractions" cssClass={cssClass.attractions} />
        </div>
        <div className="row">
          <ImageLink id="night_button" cssClass={cssClass.nightButton} />

          <Link to={itsEmpty ? '/singIn' : '/singOut'}>
            <ImageLink
              id="account_circle"
              cssClass={cssClass.accountCircle}
            />
          </Link>
          {itsEmpty ? (MyRoutes('/singIn', <SingInPage setUser={setUser} setPassword={setPassword} />))
            : (MyRoutes('/singOut', <SingOutPage setUser={setUser} setPassword={setPassword} />))}
        </div>
      </div>
    </div>
  );
};

TopSectionHeader.propTypes = {
  itsEmpty: PropTypes.bool.isRequired,
  setUser: PropTypes.func.isRequired,
  setPassword: PropTypes.func.isRequired,
};

export default TopSectionHeader;
