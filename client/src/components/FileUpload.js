// client/src/components/FileUpload.js
import React, { useState } from 'react';
import axios from 'axios';

const FileUpload = () => {
  const [file, setFile] = useState(null);
  const [progress, setProgress] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const formData = new FormData();
    formData.append('file', file);

    try {
      await axios.post('/api/transfer/upload', formData, {
        onUploadProgress: (progressEvent) => {
          setProgress(Math.round(
            (progressEvent.loaded / progressEvent.total) * 100
          ));
        }
      });
      alert('File uploaded successfully!');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      <button type="submit">Upload</button>
      {progress > 0 && <progress value={progress} max="100" />}
    </form>
  );
};

export default FileUpload;
