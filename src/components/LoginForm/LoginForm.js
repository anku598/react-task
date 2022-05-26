import React from 'react'
import './LoginForm.scss'
function LoginForm() {
  return (
    <div className='login-container'>
      <div className="form-wrapper">
        <div className="login-title">Let’s set up your account</div>
        <div className="subtxt">Already Have Account? <a href="#"> Sign In</a> </div>

        <form action="#" className="form">
          <div class="form-row">
            <input type="text" name="name" id="name" placeholder="Your Name" />
          </div>
          <div class="form-row">
            <input type="email" name="email" id="email" placeholder="Email Address" />
          </div>
          <div className="form-row">
            <input type="password" placeholder="password" />
            <div className="alert-info">Minimum 8 characters</div>
          </div>
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