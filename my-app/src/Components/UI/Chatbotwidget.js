// src/components/UI/ChatbotWidget.jsx
import React, { useState } from "react";
import "./ChatbotWidget.css";

function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);

  const handleToggleChatbot = () => setIsOpen(!isOpen);

  const handleSendMessage = (event) => {
    event.preventDefault();
    const userMessage = event.target.message.value;
    if (!userMessage) return;

    setMessages((prevMessages) => [
      ...prevMessages,
      { sender: "user", text: userMessage },
      { sender: "bot", text: `You said: "${userMessage}"` },
    ]);
    event.target.reset();
  };

  return (
    <div className="chatbot-widget">
      <button className="chatbot-toggle-btn" onClick={handleToggleChatbot}>
        {isOpen ? "Close Chatbot" : "Open Chatbot"}
      </button>

      {isOpen && (
        <div className="chatbot-window">
          <div className="chatbot-messages">
            {messages.map((msg, index) => (
              <div key={index} className={`message ${msg.sender}`}>
                {msg.text}
              </div>
            ))}
          </div>
          <form onSubmit={handleSendMessage} className="chatbot-input-form">
            <input type="text" name="message" placeholder="Type a message..." />
            <button type="submit">Send</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default ChatbotWidget;
