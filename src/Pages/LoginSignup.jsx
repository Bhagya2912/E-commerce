import React, { useEffect } from "react";
import "./CSS/LoginSignup.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { ToastContainer, toast } from 'react-toastify';


const LoginSignup = () => {
  const handleSignUp = (e) => {
    e.preventDefault();
    toast.success("Signed up successfully!");
  };

  const handleSignIn = (e) => {
    e.preventDefault();
    toast.success("Signed In successfully!");
  };
  
  useEffect(() => {
    const signUpButton = document.getElementById('signUp');
    const signInButton = document.getElementById('signIn');
    const container = document.getElementById('container');

    signUpButton.addEventListener('click', () => {
      container.classList.add("right-panel-active");
    });

    signInButton.addEventListener('click', () => {
      container.classList.remove("right-panel-active");
    });

    // Cleanup listeners on unmount
    return () => {
      signUpButton.removeEventListener('click', () => {});
      signInButton.removeEventListener('click', () => {});
    };
  }, []);

  return (
    <div className="container" id="container">
      {/* Sign Up Form */}
      <div className="form-container sign-up-container">
        <form onSubmit={handleSignUp}>
          <h1 id="title">Create Account</h1>
          <div className="social-container">
            <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="social"><i className="fab fa-twitter"></i></a>
            <a href="#" className="social"><i className="fab fa-google"></i></a>
          </div>
          <span>Or use your email for registration</span>
          <label htmlFor="signup-name">
            <input type="text" id="signup-name" placeholder="Name" name="name" required />
          </label>
          <label htmlFor="signup-email">
            <input type="email" id="signup-email" placeholder="Email" name="email" required />
          </label>
          <label htmlFor="signup-password">
            <input type="password" id="signup-password" placeholder="Password" name="password" required />
          </label>
          <button type="submit">Sign Up</button>
        </form>
      </div>

      
      {/* Sign In Form */}
      <div className="form-container sign-in-container">
      <form onSubmit={handleSignIn}>
          <h1 id="title">Sign in</h1>
         
          <div className="social-container">
            <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="social"><i className="fab fa-twitter"></i></a>
            <a href="#" className="social"><i className="fab fa-google"></i></a>
          </div>
          <span>Or use your account</span>
          <label htmlFor="signin-email">
            <input type="email" id="signin-email" placeholder="Email" name="email" required />
          </label>
          <label htmlFor="signin-password">
            <input type="password" id="signin-password" placeholder="Password" name="password" required />
          </label>
          <a href="#">Forgot your password?</a>
          <button type="submit">Sign In</button>
        </form>
      </div>

      <ToastContainer/>

      {/* Overlay */}
      <div className="overlay-container">
        <div className="overlay">
          <div className="overlay-panel overlay-left">
            <h1 id="title">Welcome!</h1>
            <p>Login with your personal info</p>
            <button className="ghost" id="signIn">Sign In</button>
          </div>
          <div className="overlay-panel overlay-right">
            <h1 id="title">Hello!</h1>
            <p>Enter your personal details and start</p>
            <button className="ghost" id="signUp">Sign Up</button>
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default LoginSignup
