// Use localStorage to simulate the backend data handling

// Simulate registering an organization and storing it in localStorage
export async function registerOrganization(details) {
    try {
      // Save organization details in localStorage
      localStorage.setItem("organizationDetails", JSON.stringify(details));
      return { message: "Organization registered successfully!" };
    } catch (error) {
      console.error("Error registering organization:", error);
      throw error;
    }
  }
  
  // Simulate fetching scraping status from localStorage
  export async function fetchScrapingStatus() {
    const dummyScrapingStatus = [
      {
        url: "https://example.com/about",
        status: "Scraped",
        dataChunks: ["Company Overview", "Vision Statement"],
      },
      {
        url: "https://example.com/contact",
        status: "Pending",
        dataChunks: [],
      },
    ];
    try {
      // Check if scraping data is already in localStorage
      let scrapingStatus = JSON.parse(localStorage.getItem("scrapingStatus"));
      if (!scrapingStatus) {
        // If not, save the dummy data in localStorage
        localStorage.setItem("scrapingStatus", JSON.stringify(dummyScrapingStatus));
        scrapingStatus = dummyScrapingStatus;
      }
      return scrapingStatus;
    } catch (error) {
      console.error("Error fetching scraping status:", error);
      return [];
    }
  }
  
  // Simulate fetching meta-description for a website (using dummy data)
  export async function getMetaDescription(websiteUrl) {
    const description = `Dummy meta description for ${websiteUrl}`;
    return description;
  }
  