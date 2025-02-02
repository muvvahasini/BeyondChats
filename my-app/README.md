# User Registration and Chatbot Integration

This project implements a user registration flow, company setup, and chatbot integration for websites. The system allows users to register using an email or Google authentication, verify their email, and configure their organization’s details, including company information. It also allows users to train a chatbot with scraped data from their website, test the chatbot, and integrate it into their website seamlessly.

## Features

### 1. User Registration
- **Name, Email & Password Input:** User can enter their name, email, and password to register.
- **Google Authentication:** Users can choose to "Continue with Google" for easy registration.
- **Email Verification:** An email verification code is sent to ensure genuine registrations.

### 2. Setup Organization
- **Company Details:**
  - Company Name
  - Website URL
  - Company Description
- **Meta Description Fetching (Bonus):** The system automatically fetches the meta-description from the company's website URL.
- **Website Scraping & Chatbot Training:**
  - The system scrapes the company’s website to auto-train the chatbot in the background.
  - Displays all detected webpages with their scraping status: scraped, pending, or failed.
  - Users can click on any webpage to view the scraped data chunks.
- Users can choose to wait for chatbot training completion or move to the next setup step.

### 3. Chatbot Integration & Testing
- **Test Chatbot Button:**
  - Opens the client's website with a dummy chatbot integration on the bottom right corner.
  - A topbar displays: “Chatbot not working as intended? Share feedback.”
- **Integration Instructions:**
  - Easy-to-follow instructions are provided for copying a dummy code snippet into the `<head>` of the client’s website to integrate the chatbot.
  - Alternatively, users can choose to mail the integration instructions to the client’s developer.
- **Test Integration Button:**
  - Opens a screen with a success UI (e.g., confetti or other success animations) to confirm the integration.
  - After successful integration, users see options to:
    - **Explore Admin Panel**
    - **Start talking to your chatbot**
    - **Social media sharing buttons**
    - **You can share the link to whats app , facebook, twitter, linkedin.**
- If the integration cannot be detected, an alternate UI is displayed.

the details stored in local host

1. Clone the repository:
   
   ## git clone <repository-url>
   ## cd <project-directory>

2. Install dependencies:
   ### npm install
3. Start the development server:

   ## npm start

4.Open your browser and go to:

    ### http://localhost:3000

This `README.md` includes:
- A clear breakdown of the user registration flow and setup process.
- Details on the chatbot integration features, including testing and success feedback.
- Setup instructions for the development environment.
- A suggested folder structure for your components.
