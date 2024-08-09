import React from 'react';

function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="explore">
          <h4>Explore</h4>
          <ul>
            <li>Home</li>
            <li>Questions</li>
            <li>Articles</li>
            <li>Tutorials</li>
          </ul>
        </div>
        <div className="support">
          <h4>Support</h4>
          <ul>
            <li>FAQs</li>
            <li>Help</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className="stay-connected">
          <h4>Stay connected</h4>
          <div className="social-icons">
            <span>Facebook</span>
            <span>Twitter</span>
            <span>Instagram</span>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>DEV@Deakin 2022</p>
        <ul>
          <li>Privacy Policy</li>
          <li>Terms</li>
          <li>Code of Conduct</li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
