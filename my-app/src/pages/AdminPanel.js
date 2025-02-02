import React, { useState } from "react";
import { FaUserCog, FaChartLine, FaCommentDots } from "react-icons/fa";
import { Bar } from "react-chartjs-2";
import './ChatbotIntegration.css'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function AdminPanel() {
  const [userStats] = useState({
    totalUsers: 150,
    activeUsers: 120,
  });

  const [chatbotStats] = useState({
    totalMessages: 2034,
    activeChats: 45,
  });

  const [userList, setUserList] = useState([
    { id: 1, name: "Alice", email: "alice@example.com" },
    { id: 2, name: "Bob", email: "bob@example.com" },
    { id: 3, name: "Charlie", email: "charlie@example.com" },
  ]);

  const [feedbackData] = useState([
    { id: 1, name: "John Doe", message: "Great chatbot, really helpful!" },
    { id: 2, name: "Jane Smith", message: "Needs improvement in responses." },
  ]);

  const [activeTab, setActiveTab] = useState("overview");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const deleteUser = (email) => {
    setUserList(userList.filter((user) => user.email !== email));
  };

  const handleManageChatbotSettings = () => {
    alert("Redirecting to chatbot settings...");
  };

  const handleManageUsers = () => {
    alert("Redirecting to user management...");
  };

  return (
    <div className="admin-panel">
      <h1 className="admin-title">Admin Panel</h1>
      <p className="admin-welcome text-center">Welcome to your Admin Panel</p>

      {/* Navigation Tabs */}
      <div className="tab-buttons">
        {["overview", "analytics", "users"].map((tab) => (
          <button
            key={tab}
            className={`tab-button ${activeTab === tab ? "active-tab" : ""}`}
            onClick={() => handleTabChange(tab)}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      {/* Content Container */}
      <div className="content-container">
        {activeTab === "overview" && (
          <>
            <div className="card">
              <h2>User Stats</h2>
              <p>Total Users: {userStats.totalUsers}</p>
              <p>Active Users: {userStats.activeUsers}</p>
            </div>

            <div className="card">
              <h2>Chatbot Stats</h2>
              <p>Total Messages Sent: {chatbotStats.totalMessages}</p>
              <p>Active Chats: {chatbotStats.activeChats}</p>
            </div>

            <div className="card feedback-card">
              <h2>Recent Feedback</h2>
              <ul>
                {feedbackData.map((feedback) => (
                  <li key={feedback.id} className="feedback-item">
                    <p className="feedback-name">{feedback.name}</p>
                    <p>{feedback.message}</p>
                  </li>
                ))}
              </ul>
            </div>
          </>
        )}

        {activeTab === "analytics" && (
          <div className="card analytics-card">
            <h2>Analytics</h2>
            <Bar data={{
              labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
              datasets: [{
                label: "Messages Sent",
                data: [120, 200, 150, 80, 250, 300, 400],
                backgroundColor: "rgba(54, 162, 235, 0.2)",
                borderColor: "rgba(54, 162, 235, 1)",
                borderWidth: 1
              }]
            }} />
          </div>
        )}

        {activeTab === "users" && (
          <div className="card user-management-card">
            <h2>Manage Users</h2>
            <ul>
              {userList.map((user) => (
                <li key={user.email} className="user-item">
                  <div>
                    <p className="user-name">{user.name}</p>
                    <p className="user-email">{user.email}</p>
                  </div>
                  <button
                    className="delete-user-button"
                    onClick={() => deleteUser(user.email)}
                  >
                    Delete
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Action Buttons */}
      <div className="action-buttons">
        <button
          className="chatbot-settings-button"
          onClick={handleManageChatbotSettings}
        >
          <FaUserCog className="fafafafa"/>
          Manage Chatbot Settings
        </button>
        <button
          className="analytics-button chat-sett-but"
          onClick={() => handleTabChange("analytics")}
        >
          <FaChartLine className="fafafafa"/>
          View Analytics
        </button>
        <button
          className="manage-users-button chat-sett-but"
          onClick={handleManageUsers}
        >
          <FaCommentDots className="fafafafa"/>
          Manage Users
        </button>
      </div>
    </div>
  );
}

export default AdminPanel;
