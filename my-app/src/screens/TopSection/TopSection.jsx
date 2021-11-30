import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// context
import MainContext from '../../Contexts/MainContext';

// components
import TopSectionHeader from '../../containers/TopSectionHeader/TopSectionHeader';
import SingInPage from '../../components/SingInPage/SingInPage';
import TopSectionTitle from '../../components/TopSectionTitle/TopSectionTitle';
import UserSearchForm from '../../containers/UserSearchForm/UserSearcForm';
import TopSectionShops from '../../components/TopSectionShops/TopSectionShops';

// HOC
import MyRoutes from '../../MyRoutes/MyRoutes';

// styles
import './index.css';

const TopSection = ({ path }) => {
  const { user } = useContext(MainContext);
  return (
    <div className="block_body top_section">
      <div className="container">
        <TopSectionHeader user={user} />
        {!user ? (
          <>
            <div className="sing_in_container">
              <Link
                to={path}
                className="text_lg text_no_decor sing_in_text"
              >
                <h1>Sing in</h1>
              </Link>
            </div>
            <MyRoutes
              path={path}
              element={<SingInPage />}
            />
          </>
        ) : (
          <>
            <TopSectionTitle />
            <UserSearchForm />
            <TopSectionShops />
          </>
        )}
      </div>
    </div>
  );
};

TopSection.propTypes = {
  path: PropTypes.string.isRequired,
};

export default TopSection;
