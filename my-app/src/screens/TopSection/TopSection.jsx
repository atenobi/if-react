import React, { useContext } from 'react';

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

const TopSection = () => {
  const { user } = useContext(MainContext);
  console.log(user);
  return (
    <div className="block_body top_section">
      <div className="container">
        <TopSectionHeader />
        {(user === null) ? (
          <>
            <MyRoutes
              path="/singIn"
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

export default TopSection;
