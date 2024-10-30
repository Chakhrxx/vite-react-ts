// eslint-disable-next-line @typescript-eslint/no-var-requires
const { config } = require("dotenv");

// Load environment variables from .env file
config({ path: ".env" });

// Set application configuration values from environment variables
const PORT = process.env.PORT || 5173; // Application port
const INSTANCES = process.env.INSTANCES || "max"; // Number of instances to run
const VITE_API_URL = process.env.VITE_API_URL || "http://localhost:3000/api"; // API base URL
const VITE_API_KEY = process.env.VITE_API_KEY || "x-api-key"; // API key for authentication

module.exports = {
  apps: [
    {
      name: "vite-nginx", // Application name
      script: "./server.js", // Entry point of the application
      exec_mode: "cluster", // Enable clustering for better performance
      instances: INSTANCES, // Use specified number of instances or maximum available
      watch: false, // Disable watching for changes in production
      // Pass configuration values to the production environment
      env_production: {
        PORT, // Application port
        VITE_API_URL, // API base URL
        VITE_API_KEY, // API key for accessing the service
      },
    },
  ],
};
