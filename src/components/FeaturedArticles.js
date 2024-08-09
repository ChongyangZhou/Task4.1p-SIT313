import React from 'react';

const articles = [
  { title: 'React OR Vue', description: 'React OR Vue', image: 'https://picsum.photos/200/150', rating: 5, author: 'Author 1' },
  { title: 'NodeJS', description: 'NodeJS', image: 'https://picsum.photos/200/150', rating: 5, author: 'Author 2' },
  { title: 'React Hooks', description: 'React Hooks', image: 'https://picsum.photos/200/150', rating: 5, author: 'Author 3' },
];

function FeaturedArticles() {
  return (
    <div className="featured-section">
      <h3>Featured Articles</h3>
      <div className="cards-container">
        {articles.map((article, index) => (
          <div key={index} className="article-card">
            <img src={article.image} alt={article.title} />
            <h4>{article.title}</h4>
            <p>{article.description}</p>
            <p>⭐ {article.rating} {article.author}</p>
          </div>
        ))}
      </div>
      <button className="see-all-btn">See all articles</button>
    </div>
  );
}

export default FeaturedArticles;
