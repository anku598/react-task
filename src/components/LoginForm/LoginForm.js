import React, { useRef, useState } from 'react'
import './LoginForm.scss'
function LoginForm() {

  const [inputValue, setInputValue] = React.useState('');
  const [errors, setErrors] = React.useState({});

  function validateEmail(value) {
    let errors = {};
    if (value === '') {
      errors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(value)) {
      errors.email = 'Email address is invalid';
    }
    return errors;
  };


  function onChange(e) {
    setInputValue(e.target.value);
  }

  function onBlur(e) {
    setErrors(validateEmail(e.target.value));
  }

  return (
    <div className='login-container'>
      <div className="form-wrapper">
        <div className="login-title">Let’s set up your account</div>
        <div className="subtxt">Already Have Account? <a href="#"> Sign In</a> </div>

        <form action="#" className="form">
          <div class="form-row">
            <input type="text" name="name" id="name" autocomplete="off" required />

            <label for="name">Name</label>
          </div>
          <div class="form-row">
            <input type="email" name="email" id="email" autocomplete="off" required onChange={onChange} onBlur={onBlur} value={inputValue} />
            {errors.email && <div>{errors.email}</div>}
            <label for="email">Email</label>
          </div>
          <div className="form-row">
            <input type="password" id='password' autocomplete="off" required />
            <label for="password">Password</label>
          </div>
          <div className="alert-info">Minimum 8 characters</div>
          <button className='submit-btn' disabled> Next</button>
        </form>
        <p className="submit-info">
          By clicking the “Next” button, you agree to creating a free account, and to <a href="">Terms of Service</a> and <a href="">Privacy Policy</a>.
        </p>
      </div>
    </div>
  )
}

export default LoginForm