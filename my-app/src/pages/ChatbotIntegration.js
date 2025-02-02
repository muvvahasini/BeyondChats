import React, { useState } from "react";
import "./ChatbotIntegration.css";
import Confetti from "react-confetti";
import { FaShareAlt, FaFacebook, FaTwitter, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function ChatbotIntegration() {
  const [isIntegrated, setIsIntegrated] = useState(false);
  const [isTesting, setIsTesting] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);
  const [testingMsg,settestingMsg] = useState(false)
  const [feedbackMessage, setFeedbackMessage] = useState("");
  const [selectedEmoji, setSelectedEmoji] = useState(null);
  const [scrapedData, setScrapedData] = useState([
    { url: "https://www.example1.com", status: "scraped", chunks: ["Data 1", "Data 2"] },
    { url: "https://www.example2.com", status: "pending", chunks: [] },
    { url: "https://www.example3.com", status: "error", chunks: [] },
  ]);
  const [showShareOptions, setShowShareOptions] = useState(false);
  const [testResult, setTestResult] = useState(false); 
  const [shareMessage] = useState("Check out this awesome chatbot!");
  const [startchat , setStartchat] = useState(false)
  const [isIntegrating, setIsIntegrating] = useState(false); // New state for integration process
  const [integrationMessage, setIntegrationMessage] = useState(""); // Integration message
  const [chatHistory, setChatHistory] = useState([]); // Chat history state
  const [userMessage, setUserMessage] = useState(""); // User input message

  const navigate = useNavigate();

  const handleTestChatbot = () => {
    if (!isIntegrated) {
      setIntegrationMessage("Please integrate the chatbot first.");
      return;
    }

    setIsTesting(true);
    setTestResult("Chatbot is Testing...");

    setTimeout(() => {
      const isTestSuccessful = Math.random() > 0.1; // Simulating a 10% chance of success or failure
      if (isTestSuccessful) {
        setTestResult("Chatbot Tested Successfully!");
      } else {
        setTestResult("Chatbot Test Failed.");
      }
      setIsTesting(false);
    }, 3000);  // Simulate testing duration
  };

  const handleChatwithbot = () =>{
    setStartchat(true)
  }

  const handleIntegrateChatbot = () => {
    setIsIntegrating(true);
    setIntegrationMessage("Chatbot Integrating...");

    // Simulate the integration process
    setTimeout(() => {
      setIsIntegrated(true);
      setIsIntegrating(false);
      setIntegrationMessage("");
    }, 5000); // Simulate a 5-second integration duration
  };

  const handleSendInstructionsToDeveloper = () => {
    alert("Sending instructions to your developer...");
  };

  const handleExploreAdminPanel = () => {
    navigate("/admin-panel"); // Navigate to the Admin Panel page
  };

  const handleGiveFeedback = () => {
    setShowFeedback(true);
  };

  const handleViewScrapedData = (url) => {
    const pageData = scrapedData.find((data) => data.url === url);
    alert(`Scraped Data for ${url}: \n${pageData.chunks.join("\n")}`);
  };

  const handleEmojiClick = (emoji) => {
    setSelectedEmoji(emoji);
  };

  const handleSubmitFeedback = () => {
    setShowFeedback(false);
    setFeedbackMessage("Thank you for your feedback!");
    setTimeout(() => setFeedbackMessage(""), 5000); // Hide the message after 5 seconds
  };

  const handleShareClick = () => {
    setShowShareOptions(!showShareOptions); // Toggle share options visibility
  };

  const shareOnSocialMedia = (platform) => {
    let shareUrl = "";

    // Share URL for Facebook
    if (platform === "facebook") {
      shareUrl = `https://www.facebook.com/sharer/sharer.php?u=https://yourwebsite.com&quote=${encodeURIComponent(shareMessage)}`;
    }
    // Share URL for Twitter
    else if (platform === "twitter") {
      shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareMessage)}&url=https://yourwebsite.com`;
    }
    // Share URL for LinkedIn
    else if (platform === "linkedin") {
      shareUrl = `https://www.linkedin.com/shareArticle?mini=true&url=https://yourwebsite.com&title=Chatbot&summary=${encodeURIComponent(shareMessage)}`;
    }
    // Share URL for WhatsApp
    else if (platform === "whatsapp") {
      shareUrl = `https://wa.me/?text=${encodeURIComponent(shareMessage)}%20https://yourwebsite.com`;
    }

    // Open the share URL in a new window
    window.open(shareUrl, "_blank");
  };

  const handleSendMessage = () => {
    if (userMessage.trim() !== "") {
      setChatHistory([...chatHistory, { sender: "User", message: userMessage }]);
      setChatHistory((prev) => [...prev, { sender: "Chatbot", message: "Hi! How can I assist you?" }]);
      setUserMessage("");
    }
  };

  return (
    <div className="chatbot-integration-container">
      <h1>Chatbot Integration</h1>

      {/* Scraped Data Display */}
      <h3>Scraped Pages Status</h3>
      <ul className="scraped-pages-list">
        {scrapedData.map((page) => (
          <li key={page.url} className={`scraped-page-item ${page.status}`}>
            <span className="url-integration">{page.url}</span>
            <span className={`status ${page.status}`}>{page.status}</span>
            <button onClick={() => handleViewScrapedData(page.url)}>View Data</button>
          </li>
        ))}
      </ul>

      {/* Integration message */}
      {integrationMessage && (
        <div className="integration-message">
          <p>{integrationMessage}</p>
          {isIntegrating && <div className="loading-spinner"></div>} {/* Spinner while integrating */}
        </div>
      )}

        {/* Test Chatbot Button - Only show after integration */}

      {/* Integration Success */}
      {isIntegrated && (
        <div className="integration-success">
          <h2>Chatbot Integrated Successfully!</h2>
          {isIntegrated && (
          <div className="test-chatbot-container chatbot-integration-container-main">
            <button
              className="test-chatbot-btn"
              onClick={handleTestChatbot}
          // Disable button while testing
          >
            Test Chatbot
          </button>
          {isTesting && <div className="loading-spinner"></div>} {/* Show spinner outside the button */}
          { testResult === 'Chatbot Tested Successfully!' ? 
              <Confetti width={window.innerWidth} height={window.innerHeight} />
          :null}
           <p>{testResult}</p>
        </div>
          )}
          <div className="success-actions">
            <button className="explore-admin-panel" onClick={handleExploreAdminPanel}>
              Explore Admin Panel
            </button>
            <button className="explore-admin-panel" onClick={handleChatwithbot}>start chat with chatbot</button>
            { startchat &&(
            <div className="chat-interface">
              <h3>Chat with Your Chatbot</h3>
              <div className="chat-box">
                <p>start your conversation here!!</p>
                {chatHistory.map((chat, index) => (
                  <div key={index} className={`chat-message ${chat.sender.toLowerCase()}`}>
                    <strong>{chat.sender}:</strong>   <p>{chat.message} </p>
                  </div>
                ))}
              </div>
              <div className="chat-input">
                <input
                  type="text"
                  className="input-to-chat"
                  value={userMessage}
                  onChange={(e) => setUserMessage(e.target.value)}
                  placeholder="Type your message here..."
                />
                <button className="send-button" onClick={handleSendMessage}>Send</button>
              </div>
            </div>
            )}
            <button className="social-media-share" onClick={handleShareClick}>
              <FaShareAlt /> Share on Social Media
            </button>
          </div>
        </div>
      )}

      
      {/* Social Media Share Options */}
      {showShareOptions && (
        <div className="share-options bg-white shadow-lg p-4 rounded-lg mt-4 flex gap-4 justify-center">
          <button onClick={() => shareOnSocialMedia("facebook")}>
            <FaFacebook size={30} color="#3b5998" />
          </button>
          <button onClick={() => shareOnSocialMedia("twitter")}>
            <FaTwitter size={30} color="#00acee" />
          </button>
          <button onClick={() => shareOnSocialMedia("linkedin")}>
            <FaLinkedin size={30} color="#0e76a8" />
          </button>
          <button onClick={() => shareOnSocialMedia("whatsapp")}>
            <FaWhatsapp size={30} color="#25D366" />
          </button>
        </div>
      )}

      {/* Instructions for Integration */}
      {!isIntegrated && !isTesting && (
        <div className="integration-options">
          <button onClick={handleIntegrateChatbot} className="integrate-btn">
            Integrate on Your Website
          </button>
          <button onClick={handleSendInstructionsToDeveloper} className="developer-btn">
            Mail Instructions to Developer
          </button>
        </div>
      )}

      {/* Feedback Option */}
      <div className="feedback-topbar">
        <span>Chatbot not working as intended? </span>
        <button onClick={handleGiveFeedback} className="feedback-btn-main">
          Share feedback
        </button>
      </div>

      {/* Feedback Modal */}
      {showFeedback && (
        <div className="feedback-modal">
          <h3>We value your feedback!</h3>

          {/* Emoji Rating */}
          <div className="emoji-rating">
            <button
              onClick={() => handleEmojiClick("😊")}
              className={selectedEmoji === "😊" ? "selected" : "notSelected"}
            >
              😊
            </button>
            <button
              onClick={() => handleEmojiClick("😐")}
              className={selectedEmoji === "😐" ? "selected" : "notSelected"}
            >
              😐
            </button>
            <button
              onClick={() => handleEmojiClick("😞")}
              className={selectedEmoji === "😞" ? "selected" : "notSelected"}
            >
              😞
            </button>
          </div>

          <textarea placeholder="Describe the issue..." rows={5}></textarea>
          <button className="submit-button-main" onClick={handleSubmitFeedback}>Submit Feedback</button>
          <button onClick={() => setShowFeedback(false)}>Close</button>
        </div>
      )}

      {/* Feedback Confirmation */}
      {feedbackMessage && (
        <div className="feedback-message">
          <p>{feedbackMessage}</p>
        </div>
      )}
    </div>
  );
}

export default ChatbotIntegration;