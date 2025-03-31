import React, { useState } from 'react';
import apiHelper from '../api/apiHelper'; // Adjust the import path as needed
import './CsvUploader.css';

const CsvUploader = () => {
  const [file, setFile] = useState(null);
  const [responseMessage, setResponseMessage] = useState('');

  const handleFileChange = (event) => {
    setFile(event.target.files?.[0] || null);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!file) {
      alert('Please select a CSV file.');
      return;
    }
    const formData = new FormData();
    formData.append('file', file);

    try {
      const result = await apiHelper.post('/todos/import', formData);
      setResponseMessage(JSON.stringify(result, null, 2));
    } catch (error) {
      console.error('Error uploading file:', error);
      setResponseMessage('Error uploading file.');
    }
  };

  return (
    <div className="csv-uploader">
      <h1>Upload CSV File</h1>
      <form onSubmit={handleSubmit} className="csv-uploader__form">
        <input type="file" accept=".csv" onChange={handleFileChange} className="csv-uploader__input" />
        <button type="submit" className="csv-uploader__button">
          Upload CSV
        </button>
      </form>
      {responseMessage && (
        <pre className="csv-uploader__response">
          {responseMessage}
        </pre>
      )}
    </div>
  );
};

export default CsvUploader;
