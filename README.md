# TATA CLiQ Fashion - Survey System

This is a web application that collects user survey data and stores it in a CSV file.

## Features

- Multi-step survey form with contact information, experience rating, and preferences
- Data storage in CSV format with timestamps
- Modern responsive UI using Bootstrap
- Floating survey button for easy access

## Setup Instructions

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start the Server**
   ```bash
   npm start
   ```

3. **Access the Application**
   - Open your browser and go to `http://localhost:3000`
   - Click the floating gift button to open the survey
   - Fill out the multi-step form
   - Submit to save data to CSV

## CSV Data Structure

The application creates a `user_data.csv` file with the following columns:
- Name
- Email
- Experience Rating
- Feedback
- How Did You Hear About Us
- Most Important Factor
- Timestamp

## File Structure

- `index.html` - Main web page with survey form
- `server.js` - Express server handling form submissions
- `user_data.csv` - Generated CSV file with user data
- `package.json` - Node.js dependencies and scripts

## API Endpoints

- `GET /` - Serves the main HTML page
- `POST /submit-form` - Handles survey form submissions

## Dependencies

- Express.js - Web server framework
- Body-parser - Request body parsing middleware
- Bootstrap - CSS framework for styling
- Bootstrap Icons - Icon library

## Usage

1. The server automatically creates a CSV file with headers when first started
2. Each form submission adds a new row to the CSV file
3. Data is validated on both client and server side
4. Successful submissions show a coupon code to the user 