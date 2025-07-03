import React from 'react';
import facebook from '../assets/facebook.png';
import google from '../assets/google.png';
import sign from '../assets/sign.png';

const Login = () => {
  return (
    <div className="signin-main" id='login'>
      <div className="signin-left">
        <h2 className="signin-left-title">
          Sign in to make your <br /> voice heard
        </h2>
        <p className="signin-left-desc">
          If you don’t have an account you can <a href="#sign-up"><span>Register here!</span></a>
        </p>
        <img src={sign} alt="Sign" className="signin-title-img" />
      </div>
      <div className="signin-container">
        <input
          type="email"
          placeholder="Enter Email"
          className="signin-input"
        />
        <input
          type="password"
          placeholder="Password"
          className="signin-input"
        />
        <div className="signin-forgot">
          <a href="#forgot">Forgot your password?</a>
        </div>
        <button className="signin-btn">
          Sign In
        </button>
        <div className="divider">
          <div className="divider-line"></div>
          <span className="divider-text">or sign in with</span>
          <div className="divider-line"></div>
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
        .signin-container {
          max-width: 350px;
          margin: 80px auto;
          padding: 24px;
          margin-right: 400px; 
          margin-top: 150px;
        }
        .signin-main {
          display: flex;
          min-height: 100vh;
          align-items: center;
          justify-content: center;
        }
        .signin-left {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: flex-start;
          padding-left: 330px;
        }
        .signin-left-title {
          font-size: 2.5rem;
          font-weight: 800;
          margin-top: -150px;
          color: black;
          text-align: left;
          line-height: 1.2;
          max-width: 500px;
        }
        .signin-left-desc {
          position: absolute;
          font-size: 1.1rem;
          color: #444;
          margin-top: 24px;
          text-align: left;
          max-width: 250px;
        }
        .signin-title-row {
          display: flex;
          align-items: center;
          gap: 18px;
        }
        .signin-title-img {
          width: 300px;
          margin-top: 180px;
          margin-left: 20px;
          object-fit: contain;
        }
        .signin-left-desc a {
          color: #2563eb;
          text-decoration: none;
          font-weight: 600;
        }
        .signin-container input[type="email"],
        .signin-container input[type="password"] {
          width: 400px;
          height: 50px;
          padding: 10px 12px;
          margin-bottom: 16px;
          border-radius: 6px;
          font-size: 16px;
          background: rgba(137, 207, 240, 0.15);
          transition: border 0.2s;
        }
        .signin-container input[type="password"] {
          margin-bottom: 8px;
        }
        .signin-container input:focus {
          border: 1.5px solid #2563eb;
          outline: none;
        }
        .signin-container a {
          color: #2563eb;
          font-size: 14px;
          text-decoration: none;
          transition: text-decoration 0.2s;
        }
        .signin-container a:hover {
          text-decoration: underline;
        }
        .signin-forgot {
          display: block;
          text-align: right;
          margin-right: -90px;
          color: #2563eb;
          font-size: 14px;
        }
        .signin-container button {
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
        .signin-container button:hover {
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

export default Login;