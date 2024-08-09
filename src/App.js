import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedArticles from './components/FeaturedArticles';
import FeaturedTutorials from './components/FeaturedTutorials';
import Footer from './components/Footer';
import './App.css';  // Ensure this is imported correctly

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <div className="content">
        <FeaturedArticles />
        <FeaturedTutorials />
      </div>
      <Footer />
    </div>
  );
}

export default App;
