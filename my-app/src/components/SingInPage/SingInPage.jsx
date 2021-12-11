import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { addUserAction } from '../../store/userReducer';
import { addPasswordAction } from '../../store/passwordReducer';

// functions
import mailVerification from '../../constants/mailVerification';

// styles
import './index.css';

// menu component
import TopSectionHeader from '../../containers/TopSectionHeader/TopSectionHeader';

const SingInPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const goBack = (step) => navigate(step);
  const [newUser, setNewUser] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const handleChange = (e, setter) => {
    e.preventDefault();
    setter(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (mailVerification(newUser) && newPassword) {
      dispatch(addUserAction(newUser));
      dispatch(addPasswordAction(newPassword));
    } else if (!mailVerification(newUser)) {
      e.target.firstChild.className = 'error_message text_sm';
      e.target.firstChild.textContent = 'Please check the correctness of your mail.';
      e.target.firstChild.onclick = () => goBack(0);
    } else if (!newPassword) {
      e.target.firstChild.className = 'error_message text_sm';
      e.target.firstChild.textContent = 'Please provide a password.';
      e.target.firstChild.onclick = () => goBack(0);
    }
  };

  return (
    <div className="block_body top_section">
      <div className="container">
        <TopSectionHeader />
        <div className="sing_in_container">
          <h1 className="text_lg">Sing in</h1>
          <form
            className="sing_in_form"
            onSubmit={handleSubmit}
          >
            <div className="sing_in_input_container">
              <label className="text_sm" htmlFor="name">
                Email address
                <input
                  className="sing_in_input"
                  type="text"
                  name="mail"
                  onChange={(e) => handleChange(e, setNewUser)}
                />
              </label>
            </div>
            <div className="sing_in_input_container">
              <label className="text_sm" htmlFor="password">
                Password
                <input
                  className="sing_in_input"
                  type="text"
                  name="password"
                  onChange={(e) => handleChange(e, setNewPassword)}
                />
              </label>
            </div>
            <input
              className="text_lg sing_in_submit_button"
              type="submit"
              value="Sign in"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default SingInPage;
