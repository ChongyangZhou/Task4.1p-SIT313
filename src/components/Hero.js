import React from 'react';

function Hero() {
  return (
    <div className="hero">
      <input type="text" placeholder="Search..." className="search-bar" />
      <button className="login-btn">Login</button>
      <button className="post-btn">Post</button>
      <div className="hero-image">
        <img src="https://picsum.photos/1000/300" alt="Hero" />
      </div>
    </div>
  );
}

export default Hero;
