import React, { useState } from 'react';
import PropTypes from 'prop-types';

// styles
import './index.css';

const SingInPage = ({ setUser, setPassword }) => {
  const [newUser, setNewUser] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const handleChange = (e, setter) => {
    e.preventDefault();
    setter(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser(newUser);
    setPassword(newPassword);
  };

  return (
    <div className="sing_in_container">
      <h1 className="text_lg">Sing in</h1>
      <form
        className="sing_in_form"
        onSubmit={handleSubmit}
      >
        <div className="sing_in_input_container">
          <label className="text_sm">
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
          <label className="text_sm">
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
  );
};

SingInPage.propTypes = {
  setUser: PropTypes.func.isRequired,
  setPassword: PropTypes.func.isRequired,
};

export default SingInPage;
