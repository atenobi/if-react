import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { removeUserAction } from '../../store/userReducer';
import { removePasswordAction } from '../../store/passwordReducer';

// styles
import './index.css';

const SingOutPage = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(removeUserAction(null));
    dispatch(removePasswordAction(null));

    navigate('/singIn');
  };

  return (
    <div className="block_body top_section">
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
    </div>
  );
};

export default SingOutPage;
