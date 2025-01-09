import { useState } from "react";
import { User, Mail, Lock } from "lucide-react";
import AmazonLogo from "../../assets/logo.png";
import "./Login.scss";
import { Link } from "react-router-dom/cjs/react-router-dom";

export default function LoginPage() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    name: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignUp && formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    // Here you would handle the form submission, e.g., send data to a backend
    console.log("Form submitted:", formData);
    alert(isSignUp ? "Sign Up Successful!" : "Login Successful!");
  };

  const toggleForm = () => {
    setIsSignUp(!isSignUp);
    setFormData({
      email: "",
      password: "",
      confirmPassword: "",
      name: "",
    });
  };

  return (
    <div className="auth-container">
      <div className="auth-form">
        <Link to="/">
          <img src={AmazonLogo} alt="Amazon Logo" className="auth-logo" />
        </Link>
        <h2 className="auth-title">{isSignUp ? "Sign Up" : "Login"}</h2>
        <form onSubmit={handleSubmit}>
          {isSignUp && (
            <div className="auth-input-group">
              <label htmlFor="name" className="auth-label">
                Name
              </label>
              <div className="auth-input-container">
                <User className="auth-icon" aria-hidden="true" />
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="auth-input"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
          )}
          <div className="auth-input-group">
            <label htmlFor="email" className="auth-label">
              Email address
            </label>
            <div className="auth-input-container">
              <Mail className="auth-icon" aria-hidden="true" />
              <input
                type="email"
                name="email"
                id="email"
                className="auth-input"
                placeholder="you@example.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="auth-input-group">
            <label htmlFor="password" className="auth-label">
              Password
            </label>
            <div className="auth-input-container">
              <Lock className="auth-icon" aria-hidden="true" />
              <input
                type="password"
                name="password"
                id="password"
                className="auth-input"
                placeholder="Your Password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          {isSignUp && (
            <div className="auth-input-group">
              <label htmlFor="confirmPassword" className="auth-label">
                Confirm Password
              </label>
              <div className="auth-input-container">
                <Lock className="auth-icon" aria-hidden="true" />
                <input
                  type="password"
                  name="confirmPassword"
                  id="confirmPassword"
                  className="auth-input"
                  placeholder="Confirm Your Password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
          )}
          <div className="auth-button-group">
            <button type="submit" className="auth-button">
              {isSignUp ? "Sign Up" : "Login"}
            </button>
          </div>
        </form>
        <div className="auth-toggle">
          <button
            type="button"
            className="auth-toggle-button"
            onClick={toggleForm}
          >
            {isSignUp
              ? "Already have an account? Login"
              : "Don't have an account? Sign Up"}
          </button>
        </div>
      </div>
    </div>
  );
}
