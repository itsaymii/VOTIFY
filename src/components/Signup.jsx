import React from 'react';
import facebook from '../assets/facebook.png';
import google from '../assets/google.png';
import sign from '../assets/sign up.png'; 

const Signup = () => {
  return (
    <div className="signup-main" id='signup'>
      <div className="signup-left">
        <h2 className="signup-left-title">
          Sign up to make your <br /> voice heard
        </h2>
        <p className="signup-left-desc">
          New here? Create an account and join us!
        </p>
        <img src={sign} alt="Sign" className="signup-title-img" />
      </div>
      <div className="signup-container">
        <input
          type="email"
          placeholder="First Name"
          className="signup-input"
        />
        <input
          type="email"
          placeholder="Last Name"
          className="signup-input"
        />
        <input
          type="email"
          placeholder="Email"
          className="signup-input"
        />
        <input
          type="password"
          placeholder="Password"
          className="signup-input"
        />
        <input
          type="password"
          placeholder="Confirm Password"
          className="signup-input"
        />
        <div className="signup-account">
          <p>Already have an account? <a href="#forgot">Log In</a></p>
        </div>
        <button className="signup-btn">
          Sign In
        </button>
        <div className="divider">
          <span className="divider-text">or sign up with</span>
        </div>
        <div className="social-buttons">
          <button className="social-btn">
            <img src={facebook} alt="Facebook" className="social-icon" />
            Facebook
          </button>
          <button className="social-btn">
            <img src={google} alt="Google" className="social-icon" />
            Google
          </button>
        </div>
      </div>
      <style>{`
        .signup-container {
          max-width: 350px;
          margin: 80px auto;
          padding: 24px;
          margin-right: 400px; 
          margin-top: 150px;
        }
        .signup-main {
          display: flex;
          min-height: 100vh;
          align-items: center;
          justify-content: center;
        }
        .signup-left {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: flex-start;
          padding-left: 330px;
        }
        .signup-left-title {
          font-size: 2.5rem;
          font-weight: 800;
          margin-top: -150px;
          color: black;
          text-align: left;
          line-height: 1.2;
          max-width: 500px;
        }
        .signup-left-desc {
          position: absolute;
          font-size: 1.1rem;
          color: #444;
          margin-top: 24px;
          text-align: left;
          max-width: 250px;
        }
        .signup-title-row {
          display: flex;
          align-items: center;
          gap: 18px;
        }
        .signup-title-img {
          width: 300px;
          margin-top: 180px;
          margin-left: 20px;
          object-fit: contain;
        }
        .signup-left-desc a {
          color: #2563eb;
          text-decoration: none;
          font-weight: 600;
        }
        .signup-container input[type="email"],
        .signup-container input[type="password"] {
          width: 400px;
          height: 50px;
          padding: 10px 12px;
          margin-bottom: 16px;
          border-radius: 6px;
          font-size: 16px;
          background: rgba(137, 207, 240, 0.15);
          transition: border 0.2s;
        }
        .signup-container input[type="password1"] {
          margin-bottom: 8px;
        }
        .signup-container input:focus {
          border: 1.5px solid #2563eb;
          outline: none;
        }
        .signup-container a {
          color: #2563eb;
          font-size: 14px;
          text-decoration: none;
          transition: text-decoration 0.2s;
        }
        .signup-container a:hover {
          text-decoration: underline;
        }
        .signup-account {
          display: block;
          text-align: center;
          margin-right: -90px;
          color: black;
          font-size: 14px;
        }
        .signup-account a{
          font-weight: 600;
        }
        .signup-container button {
          width: 400px;
          background: #0080DA;
          color: #fff;
          padding: 10px 0;
          border: none;
          margin-top: 12px;
          height: 50px;
          border-radius: 6px;
          font-weight: 600;
          font-size: 16px;
          margin-bottom: 20px;
          cursor: pointer;
          transition: background 0.2s;
          box-shadow: 0 4px 16px rgba(0, 128, 218, 0.5); 
        }
        .signup-container button:hover {
          background: #006bb3;
        }
        .divider {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          margin: 24px 0 12px 0;
        }
        .divider-text {
          color: #888;
          font-size: 14px;
          margin-top: -15px;
          padding: 0 8px;
          margin-left: 80px;
          font-weight: 500;
        }
        .social-buttons {
          display: flex;
          gap: 16px;
          width: 400px;
          justify-content: center;
          margin-top: 12px;
        }
        .social-btn {
          display: flex;
          align-items: center;
          text-align: center;
          gap: 8px;
          padding: 8px 18px;
          border-radius: 10px;
          border: 1px solid #D9D9D9 !important;
          background: #fff !important;
          color: #222 !important;
          border: 1px solid #D9D9D9;
          box-shadow: none !important;
          font-size: 15px;
          font-weight: 500;
          cursor: pointer;
          transition: background 0.2s, border 0.2s;
        }
        .social-btn:hover {
          background: #fff;
          border: none !important;
          box-shadow: 0 2px 8px rgba(0,0,0,0.25) !important;
        }
        .social-icon {
          width: 22px;
          height: 22px;
          margin-left: 50px;
          object-fit: contain;
        }
      `}</style>
    </div>
  );
};

export default Signup;