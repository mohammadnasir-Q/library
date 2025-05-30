import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaEnvelope, FaLock, FaEye, FaEyeSlash, FaFacebook, FaGoogle } from 'react-icons/fa';

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your authentication logic here
    console.log('Form submitted:', formData);
    navigate('/explore');
  };

  return (
    <div className="auth-container">
      <div className="auth-background">
        <img src="1.jpg" alt="Background" className="auth-bg-image" />
      </div>
      <form className="auth-form" onSubmit={handleSubmit}>
        <h1 className="auth-title">Sign in</h1>
        
        <p style={{ marginBottom: '1rem', color: 'rgba(255,255,255,0.7)', fontSize: '14px' }}>
          Welcome back!<br />
          Please sign in to your account.
        </p>

        <div className="form-group">
          <FaEnvelope className="form-icon" />
          <input
            type="email"
            className="form-control"
            placeholder="Enter Your Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <FaLock className="form-icon" />
          <input
            type={showPassword ? "text" : "password"}
            className="form-control"
            placeholder="Enter Your Password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <div 
            className="form-icon password-toggle"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </div>
        </div>

        <button type="submit" className="btn-primary">
          Sign In
        </button>

        <div className="auth-footer">
          <Link to="/forgot-password">Forgot password?</Link>
        </div>

        <div className="divider">
          <span>Or</span>
        </div>

        <div className="social-login">
          <button type="button" className="btn-social">
            <FaFacebook />
            Login with Facebook
          </button>
          <button type="button" className="btn-social">
            <FaGoogle />
            Login with Google
          </button>
        </div>

        <div className="auth-footer">
          Don't have an account? <Link to="/signup">Sign up</Link>
        </div>
      </form>
    </div>
  );
};

export default SignIn; 