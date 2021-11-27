import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

// context
import MainContext from '../../Contexts/MainContext';

// components
import TextLink from '../../components/links/TextLink';
import ImageLink from '../../components/links/ImageLink';
import SingOutPage from '../../components/SingOutPage/SingOutPage';

// Hoc
import MyRoutes from '../../MyRoutes/MyRoutes';

// styles
import './index.css';

const TopSectionHeader = () => {
  const { user } = useContext(MainContext);
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

          <Link to="/singOut">
            <ImageLink
              id="account_circle"
              cssClass={!user ? cssClass.imagePushed : cssClass.accountCircle}
            />
          </Link>
          <MyRoutes
            path="/singOut"
            element={<SingOutPage />}
          />

        </div>
      </div>
    </div>
  );
};

export default TopSectionHeader;
