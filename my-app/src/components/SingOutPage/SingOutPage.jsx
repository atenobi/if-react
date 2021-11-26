import React from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

// styles
import './index.css';

const SingOutPage = ({ setUser, setPassword }) => {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser(null);
    setPassword(null);
  };

  return (
    <div className="sing_out_container">
      <h1 className="text_lg">Sing out</h1>

      <button
        className="text_lg sing_out_submit_button"
        type="submit"
        onClick={(e) => handleSubmit(e)}
      >
        Sign out
      </button>
      <button
        className="text_lg sing_out_submit_button"
        type="submit"
        onClick={goBack}
      >
        Cancel
      </button>
    </div>
  );
};

SingOutPage.propTypes = {
  setUser: PropTypes.func.isRequired,
  setPassword: PropTypes.func.isRequired,
};

export default SingOutPage;
