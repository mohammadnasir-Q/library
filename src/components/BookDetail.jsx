import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { FaArrowLeft, FaBook, FaHeadphones, FaClock, FaLightbulb, FaHome, FaCompass } from 'react-icons/fa';

const BookDetail = () => {
  const navigate = useNavigate();

  return (
    <div className="book-detail">
      <div className="book-detail-header">
        <button className="back-button" onClick={() => navigate(-1)}>
          <FaArrowLeft />
        </button>
        <h2>Home</h2>
      </div>

      <div className="book-hero">
        <img
          src="/thinkandgrowrich.jpg"
          alt="Think and Grow Rich"
          className="book-cover-large"
        />
      </div>

      <div className="book-actions">
        <button className="action-button read">
          <FaBook /> Read
        </button>
        <button className="action-button">
          <FaHeadphones /> Play
        </button>
      </div>

      <div className="book-info-section">
        <h1>Think and Grow Rich</h1>
        <h2>Unlock the Secrets to Success and Wealth</h2>
        <p className="author">Napoleon Hill</p>

        <div className="book-stats">
          <div className="stat">
            <FaClock />
            <span>18 min</span>
          </div>
          <div className="stat">
            <FaLightbulb />
            <span>6 key ideas</span>
          </div>
        </div>

        <div className="book-tags">
          <span className="tag">Personal growth</span>
          <span className="tag">Culture & Society</span>
        </div>

        <div className="book-description">
          <p>Think and Grow Rich is a powerful self-help book by Napoleon Hill, first published in 1937. It teaches readers how to achieve success.</p>
        </div>
      </div>

      <nav className="bottom-nav">
        <Link to="/" className="nav-item">
          <FaHome />
          <span>Home</span>
        </Link>
        <Link to="/explore" className="nav-item">
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

export default BookDetail; 