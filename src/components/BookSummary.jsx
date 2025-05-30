import React, { useState } from 'react';
import { FaPlay, FaHeadphones, FaEllipsisV } from 'react-icons/fa';

const BookSummary = () => {
  const [textSize, setTextSize] = useState(2);
  const sizes = [1, 2, 3, 4, 5, 6];

  return (
    <div className="book-summary">
      <div className="book-header">
        <h1 className="book-title">Book Summary: Think and Grow Rich</h1>
        <div className="book-controls">
          <FaPlay style={{ cursor: 'pointer', color: '#b388ff' }} />
          <FaHeadphones style={{ cursor: 'pointer' }} />
          <FaEllipsisV style={{ cursor: 'pointer' }} />
        </div>
      </div>

      <div className="book-content" style={{ fontSize: `${textSize * 0.2}rem` }}>
        <p>Think and Grow Rich by Napoleon Hill is a classic self-help book that teaches the mindset and habits needed to achieve success and wealth. Drawing from the lives of great achievers, Hill shares timeless principles like desire, faith, persistence, and the power of thought to help readers turn their dreams into reality.</p>
        <br />
        <p>The core message is that success starts with a strong desire and clear purpose, backed by belief, planning, and consistent action. It emphasizes the power of thought and how anyone can grow rich—financially or otherwise—by mastering their mind.</p>
      </div>

      <div className="text-resize">
        <h3>Scroll to Resize Text</h3>
        <input
          type="range"
          min="1"
          max="6"
          value={textSize}
          className="resize-slider"
          onChange={(e) => setTextSize(parseInt(e.target.value))}
        />
        <div className="size-options">
          {sizes.map(size => (
            <span key={size}>{size}X</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BookSummary; 