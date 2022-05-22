const path = require('path');
const express = require("express");

const PORT = process.env.PORT || 3000;

const app = express();

// Have Node serve the files for the React client app
app.use(express.static(path.resolve(__dirname, '../client/build')));

// Handle GET requests to /api route
app.get("/api", (req, res) => {
  res.json({ message: `Server running on port ${PORT}` });
});

// Redirect unhandled GET requests to the React client app
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
