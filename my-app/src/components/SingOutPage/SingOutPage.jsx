import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

// context
import UserContext from '../../Contexts/UserContext';
import PasswordContext from '../../Contexts/PasswordContext';

// styles
import './index.css';

const SingOutPage = () => {
  const [, setUserContext] = useContext(UserContext);
  const [, setPasswordContext] = useContext(PasswordContext);
  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserContext(null);
    setPasswordContext(null);
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
