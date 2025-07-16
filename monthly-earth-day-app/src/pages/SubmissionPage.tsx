import React, { useState } from 'react';
// import { useParams } from 'react-router-dom'; // In a real app with react-router-dom
import styles from './SubmissionPage.module.css'; // Assuming you'll create this CSS module

const SubmissionPage: React.FC = () => {
  // In a real app, you would read the token from the URL like this:
  // const { token } = useParams<{ token: string }>();
  const [description, setDescription] = useState('');
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setSelectedFile(event.target.files[0]);
    } else {
      setSelectedFile(null);
    }
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (!description && !selectedFile) {
      alert('Please provide a description or upload a photo/video.');
      return;
    }

    // Simulate structuring data for backend
    const submissionData = {
      // In a real app, the token would come from useParams
      token: 'mock-submission-token-12345', 
      description: description,
      fileInfo: selectedFile ? { name: selectedFile.name, type: selectedFile.type, size: selectedFile.size } : null,
    };

    console.log('Simulating submission data:', submissionData);
    // In a real app, you would send this data to your backend/Firebase
  };

  return (
    <div className={styles.submissionPageContainer}>
      <h2>Submit Your Action Impact</h2>
      <form onSubmit={handleSubmit} className={styles.submissionForm}>
        <div className={styles.formGroup}>
          <label htmlFor="media">Upload Photo or Video:</label>
          <input
            type="file"
            id="media"
            accept="image/*,video/*"
            onChange={handleFileChange}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="description">Tell us about your impact:</label>
          <textarea
            id="description"
            rows={6}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Share your experience and the impact you made..."
          />
        </div>
        <button type="submit" className={styles.submitButton}>Submit</button>
      </form>
    </div>
  );
};

export default SubmissionPage;
