import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaUser, FaEnvelope, FaLock, FaEye, FaEyeSlash, FaFacebook, FaGoogle } from 'react-icons/fa';

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: ''
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
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords don't match!");
      return;
    }
    // Add your registration logic here
    console.log('Form submitted:', formData);
    navigate('/explore');
  };

  return (
    <div className="auth-container">
      <div className="auth-background">
        <img src="1.jpg" alt="Background" className="auth-bg-image" />
      </div>
      <form className="auth-form" onSubmit={handleSubmit}>
        <h1 className="auth-title">Sign up</h1>
        
        <p style={{ marginBottom: '1rem', color: 'rgba(255,255,255,0.7)', fontSize: '14px' }}>
          Looks like you don't have an account.<br />
          Let's create a new account for you.
        </p>

        <div className="form-group">
          <FaUser className="form-icon" />
          <input
            type="text"
            className="form-control"
            placeholder="Full Name"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <FaEnvelope className="form-icon" />
          <input
            type="email"
            className="form-control"
            placeholder="Email"
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
            placeholder="Password"
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

        <div className="form-group">
          <FaLock className="form-icon" />
          <input
            type={showConfirmPassword ? "text" : "password"}
            className="form-control"
            placeholder="Confirm Password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
          <div 
            className="form-icon password-toggle"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
          >
            {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
          </div>
        </div>

        <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.7)', marginBottom: '0.75rem' }}>
          By selecting Create Account below, I agree to Terms of Service & Privacy Policy
        </p>

        <button type="submit" className="btn-primary">
          Create Account
        </button>

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
          Already have an account? <Link to="/signin">Log In</Link>
        </div>
      </form>
    </div>
  );
};

export default SignUp; 