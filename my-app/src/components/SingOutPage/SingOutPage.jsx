import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

// context
import MainContext from '../../Contexts/MainContext';

// styles
import './index.css';

const SingOutPage = () => {
  const { setUser, setPassword } = useContext(MainContext);
  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser(null);
    setPassword(null);
    goBack();
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

export default SingOutPage;
