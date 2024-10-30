// server.js
import express from "express";
import path from "path";
import fs from "fs/promises";
import { fileURLToPath } from "url";
import cluster from "cluster";
import os from "os";

// Get the number of CPU cores available
const numCPUs = os.cpus().length;

// Resolve __filename and __dirname for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Create an Express application
const app = express();
const port = process.env.PORT || 5173; // Use environment variable for port or default to 5173

// Serve static files from the 'dist' directory
app.use(express.static(path.join(__dirname, "dist")));

// Handle all other routes and serve index.html
app.get("*", async (req, res) => {
  try {
    const data = await fs.readFile(
      path.join(__dirname, "dist", "index.html"),
      "utf8"
    );
    res.send(data); // Send the contents of index.html
  } catch (err) {
    console.error("Error reading index.html:", err); // Log any errors
    res.status(500).send("Internal Server Error"); // Respond with a 500 status
  }
});

// Function to start the server
const startServer = () => {
  app.listen(port, () => {
    console.log(`Worker ${process.pid} started on port ${port}`); // Log the worker process ID and port
  });
};

// Start server in cluster mode
if (cluster.isPrimary) {
  console.log(`Master ${process.pid} is running`); // Log the master process ID

  // Fork workers for each CPU core
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork(); // Create a new worker process
  }

  cluster.on("exit", (worker) => {
    console.log(`Worker ${worker.process.pid} died`); // Log when a worker dies
  });
} else {
  startServer(); // Start the server for worker processes
}
