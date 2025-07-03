import React from 'react';
import facebook from '../assets/facebook.png';
import instagram from '../assets/instagram.png';
import threads from '../assets/threads.png';

const footerStyle = `
.footer {
  width: 100%;
  background-color: #f8f9fa;  
  color: #fff;
  height: 300px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
  padding: 2rem 11vw;
  margin-top: auto;
  font-family: 'Segoe UI', sans-serif;
  box-sizing: border-box;
  margin-top: 100px;
  font-family: 'poppins', sans-serif;
}
.footer-section {
  flex: 1 1 180px;
  min-width: 180px;
  margin-top: 50px;
  margin-left: 100px;
}
.footer-logo {
  font-size: 2rem;
  font-weight: bold;
  color: #0047AB;
  margin-bottom: 0.5rem;
}
.tagline {
  font-size: 1rem;
  font-weight: 500;
  color: black;
  margin-bottom: 1rem;
}

.footer-section h3 {
  font-size: 1.2rem;
  color: black;
  font-weight: bold;
  margin-bottom: 0.7rem;
  position: relative;
}

.footer-section h3::after {
  content: "";
  display: block;
  width: 40px;
  height: 3px;
  background: #0047AB;
  border-radius: 2px;
}
  
.footer-section ul {
  list-style: none;
  padding: 0;s
  margin: 0;
}
.footer-section ul li {
  margin-bottom: 0.5rem;
}
.footer-section a {
  color: black;
  text-decoration: none;
  transition: color 0.2s;
}
.footer-section a:hover {
  color: #0047AB;
}
.social-icons {
  display: flex;
  gap: 1rem;
  margin-top: 0.5rem;
}
.social-icons img {
  width: 32px;
  height: 32px;
  transition: filter 0.2s;
}
.copyright{
    font-size: 0.8rem;
    margin-top: 1rem;
    color: #333;
    padding-top: 2rem;
}

}
@media (max-width: 900px) {
  .footer {
    flex-direction: column;
    align-items: flex-start;
    padding: 2rem 2vw;
  }
}
`;

const Footer = () => (
  <>
    <style>{footerStyle}</style>
    <footer className="footer">
      <div className="footer-section brand">
        <h2 className="footer-logo">Votify</h2>
        <p className="tagline">Instant polling made easy.</p>
        <p className="copyright">
          2025 © Votify | All rights reserved | Made by Aegis
        </p>
      </div>

      <div className="footer-section">
        <h3>Links</h3>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Discover</a></li>
          <li><a href="#">Online Voting</a></li>
        </ul>
      </div>

      <div className="footer-section">
        <h3>Company</h3>
        <ul>
          <li><a href="#">Customer Service</a></li>
          <li><a href="#">Terms and Conditions</a></li>
          <li><a href="#">Privacy Policy</a></li>
        </ul>
      </div>

      <div className="footer-section socials">
        <h3>Socials</h3>
        <div className="social-icons">
          <a href="#"><img src={facebook} alt="Facebook" /></a>
          <a href="#"><img src={instagram} alt="Instagram" /></a>
          <a href="#"><img src={threads} alt="Threads" /></a>
        </div>
      </div>
    </footer>
  </>
);

export default Footer;