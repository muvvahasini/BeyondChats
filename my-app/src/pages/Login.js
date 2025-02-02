import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("users")) || [];

    const user = users.find(
      (u) => u.email === email && u.password === password
    );

    if (user) {
      alert(`Welcome back, ${user.name}!`);
      navigate("/setup-organization");
    } else {
      setErrorMessage("Invalid credentials. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center">
      <form onSubmit={handleLogin} className="w-80 p-4 border">
        <h2 className="text-xl mb-4">Login</h2>
        <label>Email:</label>
        <input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full p-2 mb-2 border"
        />
        <label>Password:</label>
        <input
          type="password"
          placeholder="Your Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="w-full p-2 mb-4 border"
        />
        {errorMessage && <p className="text-red-500">{errorMessage}</p>}
        <button type="submit" className="p-2 bg-blue-500 text-white w-full">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
