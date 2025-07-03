import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/Logo.png'; 

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const timeoutRef = useRef();

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setDropdownOpen(false), 200);
  };

  const handleMouseEnter = () => {
    clearTimeout(timeoutRef.current);
    setDropdownOpen(true);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-flex">
          <Link className="navbar-logo" to="/">
            <img src={Logo} alt="Votify Logo" style={{ height: '60px' }} />
          </Link>

          <div className="navbar-links">
            <Link to="/" className="navbar-home">Home</Link>
            <Link to="/discover" className="navbar-link">Discover</Link>
            <div
              className="navbar-dropdown"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button className="navbar-link navbar-dropdown-btn">
                Online Voting 
              </button>
              {dropdownOpen && (
                <div
                  className="navbar-dropdown-menu"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
              <Link to="/create-poll" className="navbar-dropdown-item">Create Poll</Link>                  
              <Link to="/vote" className="navbar-dropdown-item">Vote</Link>
                </div>
              )}
            </div>
          </div>

          <div className="navbar-auth">
            <Link to="/login" className="navbar-btn login-btn">Login</Link>
            <Link to="/signup" className="navbar-btn signup-btn">Sign up</Link>
          </div>
        </div>
      </div>
      <style>{`
        .navbar {
          position: fixed;
          font-weight: 500;
          top: 0;
          width: 100%;
          background: #fff;
          z-index: 50;
        }
        .navbar-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1.5rem;
          height: 80px;
        }
        .navbar-flex {
          display: flex;
          justify-content: space-between;
          align-items: center;
          height: 64px;
          margin-top: 20px;
        }
        .navbar-logo {
          font-family: 'Poppins', sans-serif;
          font-size: 1.5rem;
          margin-left: 20px;
          font-weight: bold;
          color: #2563eb;
          text-decoration: none;
        }
        .navbar-links {
          display: flex;
          align-items: center;
          gap: 2rem;
        }
        .navbar-link,
        .navbar-home {
          position: relative;
          font-size: 1rem;
          color: #222;
          text-decoration: none;
          padding: 0.5rem 0.75rem;
          border-radius: 4px;
          transition: background 0.2s;
          overflow: hidden;
        }
        .navbar-link::after,
        .navbar-home::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: 0.2rem;
          width: 0;
          height: 3px;
          background: #0080DA;
          transition: width 0.3s cubic-bezier(.4,0,.2,1);
          border-radius: 2px;
        }
        .navbar-link:hover::after,
        .navbar-home:hover::after {
          width: 100%;
        }
        .navbar-dropdown {
          position: relative;
        }
        .navbar-dropdown-btn {
          background: none;
          border: none;
          font-size: 1rem;
          color: #222;
          cursor: pointer;
          padding: 0.5rem 0.75rem;
          border-radius: 4px;
          transition: background 0.2s;
        }
        .navbar-dropdown-menu {
          position: absolute;
          top: 110%;
          left: 0;
          background: #fff;
          box-shadow: 0 4px 16px rgba(0,0,0,0.08);
          border-radius: 6px;
          min-width: 150px;
          display: flex;
          flex-direction: column;
          z-index: 100;
        }
        .navbar-dropdown-item {
          padding: 0.75rem 1rem;
          color: #222;
          text-decoration: none;
          border-radius: 4px;
          transition: background 0.2s;
        }
        .navbar-dropdown-item:hover {
          background: #f1f5f9;
        }
        .navbar-auth {
          display: flex;
          gap: 1rem;
        }
        .navbar-btn {
          padding: 0.5rem 1.2rem;
          border: none;
          border-radius: 4px;
          font-size: 1rem;
          font-weight: 400;
          cursor: pointer;
          transition: background 0.2s, color 0.2s;
        }
        .login-btn {
          background: rgba(0, 150, 255, 0.12);
          color: #0080DA; 
          border: none;
          border-radius: 10px;
          font-weight: 500;
        }
        .login-btn:hover {
          background: rgba(0, 150, 255, 0.2); 
        }
        .signup-btn {
          background: #2563eb;
          color: #fff;
          border-radius: 10px;
        }
        .signup-btn:hover {
          background: #1d4ed8;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;