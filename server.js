const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('.')); // Serve static files from current directory

// CSV file path
const CSV_FILE = 'user_data.csv';

// Initialize CSV file with headers if it doesn't exist
function initializeCSV() {
  if (!fs.existsSync(CSV_FILE)) {
    const headers = 'Name,Email,Experience Rating,Feedback,How Did You Hear About Us,Most Important Factor,Timestamp\n';
    fs.writeFileSync(CSV_FILE, headers);
    console.log('CSV file created with headers');
  }
}

// Handle form submission
app.post('/submit-form', (req, res) => {
  try {
    const { name, email, experienceRating, feedback, hearAboutUs, importantFactor } = req.body;
    
    // Validate required fields
    if (!name || !email) {
      return res.status(400).json({ error: 'Name and email are required' });
    }

    // Create CSV row with all form data
    const timestamp = new Date().toISOString();
    const csvRow = `"${name}","${email}","${experienceRating || ''}","${feedback || ''}","${hearAboutUs || ''}","${importantFactor || ''}","${timestamp}"\n`;

    // Append to CSV file
    fs.appendFileSync(CSV_FILE, csvRow);
    
    console.log(`New entry added: ${name} (${email})`);
    
    res.json({ success: true, message: 'Data saved successfully' });
  } catch (error) {
    console.error('Error saving data:', error);
    res.status(500).json({ error: 'Failed to save data' });
  }
});

// Route to serve the main page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Start server
app.listen(PORT, () => {
  initializeCSV();
  console.log(`Server running at http://localhost:${PORT}`);
  console.log(`CSV file: ${CSV_FILE}`);
});
