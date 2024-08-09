import React from 'react';

const tutorials = [
  { title: 'JS6', description: 'JS6', image: 'https://picsum.photos/200/150', rating: 5, author: 'User 1' },
  { title: 'React Router', description: 'React Router', image: 'https://picsum.photos/200/150', rating: 5, author: 'User 2' },
  { title: 'Express', description: 'Express', image: 'https://picsum.photos/200/150', rating: 4.9, author: 'User 3' },
];

function FeaturedTutorials() {
  return (
    <div className="featured-section">
      <h3>Featured Tutorials</h3>
      <div className="cards-container">
        {tutorials.map((tutorial, index) => (
          <div key={index} className="article-card">
            <img src={tutorial.image} alt={tutorial.title} />
            <h4>{tutorial.title}</h4>
            <p>{tutorial.description}</p>
            <p>⭐ {tutorial.rating} {tutorial.author}</p>
          </div>
        ))}
      </div>
      <button className="see-all-btn">See all tutorials</button>
    </div>
  );
}

export default FeaturedTutorials;
