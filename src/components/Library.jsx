import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaBook, FaCompass, FaBookmark, FaSpinner, FaCheck } from 'react-icons/fa';

const books = [
  {
    id: 1,
    title: 'Think & Grow Rich',
    author: 'Napoleon Hill',
    duration: '5m',
    reads: '8m',
    image: '/thinkandgrowrich.jpg',
    progress: 'saved'
  },
  {
    id: 2,
    title: 'Rich Dad Poor Dad',
    author: 'Robert T. Kiyosaki',
    duration: '5m',
    reads: '8m',
    image: '/richdadpoordad.jpg',
    progress: 'saved'
  },
  {
    id: 3,
    title: 'The Kite Runner',
    author: 'Khaled Hosseini',
    duration: '5m',
    reads: '8m',
    image: '/the-kite-runner.jpg',
    progress: 'saved'
  },
  {
    id: 4,
    title: 'Harry Potter',
    author: 'J.K. Rowling',
    duration: '12m',
    reads: '9m',
    image: '/harry-potter.jpg',
    progress: 'in-progress'
  }
];

const Library = () => {
  const [activeTab, setActiveTab] = useState('saved');

  return (
    <div className="page-container">
      <div className="library-header">
        <h1>My Library</h1>
      </div>

      <div className="library-tabs">
        <button
          className={`tab-button ${activeTab === 'saved' ? 'active' : ''}`}
          onClick={() => setActiveTab('saved')}
        >
          <FaBookmark /> Saved Books
        </button>
        <button
          className={`tab-button ${activeTab === 'in-progress' ? 'active' : ''}`}
          onClick={() => setActiveTab('in-progress')}
        >
          <FaSpinner /> In Progress
        </button>
        <button
          className={`tab-button ${activeTab === 'completed' ? 'active' : ''}`}
          onClick={() => setActiveTab('completed')}
        >
          <FaCheck /> Completed
        </button>
      </div>

      <div className="books-grid library-grid">
        {books
          .filter(book => book.progress === activeTab)
          .map(book => (
            <Link to={`/book/${book.id}`} key={book.id} className="book-card">
              <img src={book.image} alt={book.title} className="book-cover" />
              <div className="book-info">
                <h3>{book.title}</h3>
                <p>{book.author}</p>
                <div className="book-stats">
                  <span><FaBook /> {book.duration}</span>
                  <span>{book.reads} reads</span>
                </div>
              </div>
            </Link>
          ))}
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
        <Link to="/library" className="nav-item active">
          <FaBook />
          <span>Library</span>
        </Link>
      </nav>
    </div>
  );
};

export default Library; 