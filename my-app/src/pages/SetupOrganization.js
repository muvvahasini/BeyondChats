import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './SetupOrganization.css';

function SetupOrganization() {
  const [companyName, setCompanyName] = useState('');
  const [companyUrl, setCompanyUrl] = useState('');
  const [companyDescription, setCompanyDescription] = useState('');
  const [metaDescription, setMetaDescription] = useState('');
  const [setupCompleted, setSetupCompleted] = useState(false);
  const [showWarning, setShowWarning] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const savedData = localStorage.getItem('companyData');
    if (savedData) {
      setSetupCompleted(true);
    }
  }, []);

  const webpages = [
    { url: "http://example.com/about", status: "scraped", dataChunks: ["Header text", "About us section", "Team section"] },
    { url: "http://example.com/contact", status: "pending", dataChunks: [] },
    { url: "http://example.com/products", status: "scraped", dataChunks: ["Product details", "Pricing information"] },
    { url: "http://example.com/blog", status: "loading", dataChunks: [] },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    const companyData = {
      companyName,
      companyUrl,
      companyDescription,
      metaDescription,
    };
    localStorage.setItem('companyData', JSON.stringify(companyData));
    setSetupCompleted(true);
    navigate('/chatbot-integration');
  };

  const fetchMetaDescription = () => {
    setMetaDescription("This is a dummy meta-description fetched from the website. This description is long enough to test the text area overflow and wrapping behavior.");
  };

  const handleResetSetup = () => {
    localStorage.removeItem('companyData');
    setSetupCompleted(false);
  };

  const handleNextstep =()=>{
    navigate('/chatbot-integration');
  }

  const handleProceedToChatbot = () => {
    if (!setupCompleted) {
      setShowWarning(true);
    } else {
      navigate('/chatbot-integration');
    }
  };

  return (
    <div className="container">
      {showWarning && (
        <div className="warning-message">
          <p>You must complete the organization setup before proceeding to the chatbot integration.</p>
          <button onClick={() => setShowWarning(false)} className="close-warning-btn">Close</button>
        </div>
      )}
      
      {setupCompleted ? (
        <div className="completed-setup">
          <h2>Organization Setup Completed</h2>
          <p>Your organization is set up. You can now proceed with the next steps.</p>
          <button className="reset-btn" onClick={handleResetSetup}>Reset Setup</button>
          <button className="nxt-btn" onClick={handleNextstep}>Move to Next step</button>
        </div>
      ) : (
        <div className="container-secondary">
          <h2 className="page-title">Set Up Your Organization</h2>
          <form onSubmit={handleSubmit} className="form">
            <div className="form-group">
              <label htmlFor="companyName">Company Name:</label>
              <input
                type="text"
                id="companyName"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                required
                className="input-field"
              />
            </div>

            <div className="form-group">
              <label htmlFor="companyUrl">Company Website URL:</label>
              <input
                type="url"
                id="companyUrl"
                value={companyUrl}
                onChange={(e) => setCompanyUrl(e.target.value)}
                required
                className="input-field"
              />
              <button 
                type="button" 
                onClick={fetchMetaDescription} 
                className="fetch-btn">
                Fetch Meta Description
              </button>
            </div>

            

            <div className="form-group">
            <label htmlFor="companyDescription">Company Description:</label>
            <textarea
              id="companyDescription"
              value={companyDescription || metaDescription}  
              onChange={(e) => setCompanyDescription(e.target.value)}
              required
              className="textarea-field"
            />
          </div>
            <button 
              type="submit" 
              className="submit-btn">
              Submit Organization Info
            </button>
          </form>

          <div className="scraping-status">
            <h3>Scraping Status</h3>
            {webpages.map((page, index) => (
              <div key={index} className="webpage-status">
                <a href={page.url} target="_blank" rel="noopener noreferrer">{page.url}</a>
                <span className={`status ${page.status}`}>{page.status.charAt(0).toUpperCase() + page.status.slice(1)}</span>
                {page.status === 'scraped' && (
                  <div className="data-chunks">
                    <h4>Scraped Data:</h4>
                    <ul>
                      {page.dataChunks.map((chunk, i) => (
                        <li key={i}>{chunk}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="chatbot-training">
            <button className="chatbot-btn" onClick={handleProceedToChatbot}>Proceed to Chatbot Training</button>
            <button className="next-step-btn">Move to Next Setup Step</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default SetupOrganization;
