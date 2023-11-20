// components/UploadForm.client.jsx

'use client'

import React, { useState } from 'react';

export default function UploadForm() {
  const [file, setFile] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!file) {
      alert('Please select a file first!');
      return;
    }
    
    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await fetch('http://localhost:5000/upload', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();
      console.log(data);  // Handle the response
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center">
      <input type="file" name="file" onChange={handleFileChange} className="mb-4" />
      <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">
        Upload PDF
      </button>
    </form>
  );
}
