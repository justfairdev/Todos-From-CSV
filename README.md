# CSV Todos Importer

A full-stack application for importing CSV data into a PostgreSQL database. The backend is built using Node.js, Express, and Sequelize ORM, and the frontend is built with React. The application allows you to upload CSV files containing todo items, validates the data, and then stores valid records in the database.

## Table of Contents

- [Features](#features)
- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
  - [Backend Setup](#backend-setup)
  - [Frontend Setup](#frontend-setup)
- [Running the Application](#running-the-application)

## Features

- **CSV File Upload:** Easily upload CSV files containing todo items.
- **Data Validation:** Validates CSV rows to ensure correct data format.
- **ORM Integration:** Uses Sequelize for managing PostgreSQL database interactions.
- **RESTful API:** Provides endpoints for importing and managing todos.
- **React Frontend:** Clean and responsive interface for uploading files and displaying responses.
- **Environment Configurable:** Uses environment variables for API URLs and database connections.

## Project Structure

```plaintext
my-app/
├── backend/
│   ├── config/
│   │   └── database.js         # Sequelize database configuration
│   ├── controllers/
│   │   └── todoController.js   # Business logic for todos
│   ├── models/
│   │   └── Todo.js             # Sequelize model for Todo items
│   ├── routes/
│   │   └── todoRoutes.js       # Express routes for todo endpoints
│   ├── utils/
│   │   └── csvParser.js        # Utility for parsing CSV files
│   ├── uploads/                # Directory for temporary file uploads
│   ├── .env                    # Environment variables (DATABASE_URL, PORT)
│   └── server.js               # Application entry point for the backend
└── frontend/
    ├── src/
    │   ├── api/
    │   │   └── apiHelper.js    # Centralized API helper for HTTP requests
    │   ├── components/
    │   │   └── CsvUploader/
    │   │       ├── CsvUploader.jsx  # CSV uploader component
    │   │       └── CsvUploader.css  # Component-specific styles
    │   ├── App.js              # Main React application file
    │   └── index.js            # React entry point
    ├── .env                    # Environment variables (REACT_APP_API_URL)
    └── package.json            # Frontend dependencies and scripts
```
## Prerequisites

Node.js (v12 or later recommended)

npm or yarn

PostgreSQL database

## Installation

### Backend Setup

1. **Navigate to the backend directory:**

   ```bash
   cd backend
   ```
2. **Install dependencies:**

   ```bash
   npm install
   ```
3. **Configure Environment Variables:**

   ```bash
   DATABASE_URL=postgres://username:password@localhost:5432/database_name
   PORT=8000
   ```

### Frontend Setup

1. **Navigate to the frontend directory:**

   ```bash
   cd frontend
   ```
2. **Install dependencies:**

   ```bash
   npm install
   ```
3. **Configure Environment Variables:**

   ```bash
   REACT_APP_API_URL=http://localhost:8000
   ```
## Running the Application

### **Start the Backend Server**

In the backend directory, run:
   ```bash
   npm start
   ```
### **Start the Frontend  Server**

In the frontend directory, run:
   ```bash
   npm start
   ```