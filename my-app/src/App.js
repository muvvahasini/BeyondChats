import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UserRegistration from "./pages/UserRegistration";
import SetupOrganization from "./pages/SetupOrganization";
import ChatbotIntegration from "./pages/ChatbotIntegration";
import IntegrationSuccess from "./pages/IntegrationSuccess";
import AdminPanel from "./pages/AdminPanel";  // Import AdminPanel

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UserRegistration />} />
        <Route path="/setup-organization" element={<SetupOrganization />} />
        <Route path="/chatbot-integration" element={<ChatbotIntegration />} />
        <Route path="/integration-success" element={<IntegrationSuccess />} />
        <Route path="/admin-panel" element={<AdminPanel />} /> {/* Add AdminPanel route */}
      </Routes>
    </Router>
  );
}

export default App;
