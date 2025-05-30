import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaSearch, FaHome, FaBook, FaCompass, FaSignOutAlt } from 'react-icons/fa';

const topics = [
  { id: 1, name: 'Personal growth' },
  { id: 2, name: 'Culture & Society' },
  { id: 3, name: 'Fiction' },
  { id: 4, name: 'Mind & Philosophy' },
  { id: 5, name: 'Health & Fitness' },
  { id: 6, name: 'Biographies' },
  { id: 7, name: 'Education' },
  { id: 8, name: 'History' },
  { id: 9, name: 'Future' },
  { id: 10, name: 'Technology' },
  { id: 11, name: 'Life style' }
];

const fictionBooks = [
  {
    id: 1,
    title: 'The Kite Runner',
    author: 'Khaleed Hosseini',
    duration: '5m',
    reads: '8m',
    image: '/the-kite-runner.jpg'
  },
  {
    id: 2,
    title: 'Harry Potter',
    author: 'JK Rowling',
    duration: '12m',
    reads: '9m',
    image: '/harry-potter.jpg'
  },
  {
    id: 3,
    title: 'Explore your creativity',
    author: 'Royryan Mercado',
    duration: '15m',
    reads: '15m',
    image: '/creative.jpg'
  }
];

const Explore = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Add any logout logic here (e.g., clearing tokens, state, etc.)
    navigate('/signin');
  };

  return (
    <div className="page-container">
      <div className="explore-header">
        <h1>Explore</h1>
        <div className="profile-section">
          <div className="profile-avatar">
            <img src="/profilr.jpg" alt="Profile" />
          </div>
          <button className="logout-button" onClick={handleLogout}>
            <FaSignOutAlt />
          </button>
        </div>
      </div>

      <div className="search-container">
        <FaSearch className="search-icon" />
        <input
          type="text"
          placeholder="Title, author or keyword"
          className="search-input"
        />
      </div>

      <section className="topics-section">
        <h2>Topics</h2>
        <div className="topics-grid">
          {topics.map(topic => (
            <button key={topic.id} className="topic-button">
              {topic.name}
            </button>
          ))}
        </div>
      </section>

      <section className="fiction-section">
        <div className="section-header">
          <h2>Fiction</h2>
          <button className="show-all">Show all</button>
        </div>
        <div className="books-grid">
          {fictionBooks.map(book => (
            <Link to={`/book/${book.id}`} key={book.id} className="book-card">
              <img src={book.image} alt={book.title} className="book-cover" />
              <h3>{book.title}</h3>
              <p>{book.author}</p>
              <div className="book-stats">
                <span><FaBook /> {book.duration}</span>
                <span>{book.reads} reads</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <nav className="bottom-nav">
        <Link to="/" className="nav-item">
          <FaHome />
          <span>Home</span>
        </Link>
        <Link to="/explore" className="nav-item active">
          <FaCompass />
          <span>Explore</span>
        </Link>
        <Link to="/library" className="nav-item">
          <FaBook />
          <span>Library</span>
        </Link>
      </nav>
    </div>
  );
};

export default Explore; 