import React, { useState } from "react";
import RegistrationForm from "../Components/RegistrationForm";
import { useNavigate } from "react-router-dom";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";

function UserRegistration() {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");

  const handleFormSubmit = (data) => {
    const users = JSON.parse(localStorage.getItem("users")) || [];

    if (users.some((user) => user.email === data.email)) {
      setErrorMessage("User already registered. Please login.");
      return;
    }

    users.push(data);
    localStorage.setItem("users", JSON.stringify(users));
    alert(`Welcome, ${data.name}! Registration successful.`);
    navigate("/setup-organization");
  };

  const decodeJWT = (token) => {
    try {
      const base64Url = token.split(".")[1];
      const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
      return JSON.parse(window.atob(base64));
    } catch (error) {
      console.error("Error decoding JWT", error);
      return null;
    }
  };

  const handleGoogleLoginSuccess = (credentialResponse) => {
    const jwtToken = credentialResponse.credential;
    const googleUser = decodeJWT(jwtToken);

    if (!googleUser) {
      alert("Google authentication failed.");
      return;
    }

    const googleEmail = googleUser.email;
    const users = JSON.parse(localStorage.getItem("users")) || [];

    if (users.some((user) => user.email === googleEmail)) {
      alert("Welcome back! Redirecting...");
      navigate("/setup-organization");
    } else {
      users.push({ name: googleUser.name, email: googleEmail, password: "" });
      localStorage.setItem("users", JSON.stringify(users));
      alert("Registration successful via Google.");
      navigate("/setup-organization");
    }
  };

  return (
    <GoogleOAuthProvider clientId="299861031998-7qb74s0egrt85r8c56v7i796ievoie1b.apps.googleusercontent.com">
      <div className="user-registration-container">
        <RegistrationForm onSubmit={handleFormSubmit} />
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <div className="google-container">
          <div className="google-box">
            <GoogleLogin
              onSuccess={handleGoogleLoginSuccess}
              onError={() => alert("Google Login Failed")}
            />
          </div>
        </div>
      </div>
    </GoogleOAuthProvider>
  );
}

export default UserRegistration;
