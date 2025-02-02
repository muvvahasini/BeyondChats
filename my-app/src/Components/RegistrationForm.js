import React, { useState } from "react";
import '../Components/UI/ChatbotWidget.css'

function RegistrationForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.password) {
      onSubmit(formData);
    } else {
      alert("Please fill all the fields.");
    }
  };

  return (
    <div className="form-container-1">
      <form onSubmit={handleSubmit}>
        <h2 className="h2-1">User Registration</h2>

        <div className="form-group-1">
          <label htmlFor="name" className="label-1">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            className="input-1"
            onChange={handleChange}
            placeholder="Enter your name"
          />
        </div>

        <div className="form-group-1">
          <label htmlFor="email" className="label-1">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="input-1"
            placeholder="Enter your email"
          />
        </div>

        <div className="form-group-1">
          <label className="label-1" htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="input-1"
            placeholder="Enter your password"
          />
        </div>

        <button className="button" type="submit">Register</button>
      </form>
    </div>
  );
}

export default RegistrationForm;
