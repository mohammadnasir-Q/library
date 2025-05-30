import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import BookSummary from './components/BookSummary';
import Explore from './components/Explore';
import Library from './components/Library';
import BookDetail from './components/BookDetail';
import { FaWifi, FaSignal } from 'react-icons/fa';

const StatusBar = () => {
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: '2-digit',
        hour12: true
      }));
    };
    
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="status-bar">
      <div className="status-bar-left">
        <span className="status-bar-time">{time}</span>
      </div>
      <div className="status-bar-right">
        <FaSignal />
        <FaWifi />
        <div className="status-bar-battery">
          <div className="status-bar-battery-level"></div>
        </div>
      </div>
    </div>
  );
};

function App() {
  return (
    <Router>
      <div className="app-container">
        <StatusBar />
        <Routes>
          <Route path="/" element={<Navigate to="/explore" />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/library" element={<Library />} />
          <Route path="/book/:id" element={<BookDetail />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/book-summary" element={<BookSummary />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;