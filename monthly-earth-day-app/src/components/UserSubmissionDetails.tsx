import React from 'react';
import styles from './UserSubmissionDetails.module.css'; // Assuming you'll create a CSS module

interface UserSubmission {
  id: string;
  actionTitle: string; // Assuming action title is included or can be fetched
  description: string;
  simulatedMediaUrl?: string; // Placeholder for simulated media
  status: 'pending' | 'approved' | 'rejected';
  // Add other relevant fields
}

interface UserSubmissionDetailsProps {
  submission: UserSubmission;
  onApprove: (id: string) => void;
  onReject: (id: string) => void;
  onDelete: (id: string) => void;
  onClose: () => void; // Add onClose prop
}

const UserSubmissionDetails: React.FC<UserSubmissionDetailsProps> = ({ submission, onApprove, onReject, onDelete, onClose }) => {

  const handleAction = (action: 'approve' | 'reject' | 'delete') => {
    if (action === 'approve') {
      onApprove(submission.id);
    } else if (action === 'reject') {
      onReject(submission.id);
    } else if (action === 'delete') {
      onDelete(submission.id);
    }
    onClose(); // Close the details view after any action
  };
  return ( 
    <div className={styles.submissionDetailsContainer}>
      <h2>Submission Details</h2>
      <p><strong>ID:</strong> {submission.id}</p>
      <p><strong>Action:</strong> {submission.actionTitle}</p>
      <p><strong>Status:</strong> {submission.status}</p>
      <p><strong>Description:</strong> {submission.description}</p>

      {submission.simulatedMediaUrl && (
        <div>
          <strong>Media:</strong>
          {/* In a real app, you'd display image/video based on file type */}
          <p>Simulated Media URL: {submission.simulatedMediaUrl}</p>
          {/* Placeholder for actual media display */}
          {/* <img src={submission.simulatedMediaUrl} alt="Submitted media" /> */}
        </div>
      )}

      <div className={styles.actions}>
        {submission.status === 'pending' && (
          <>
            <button className={styles.approveButton} onClick={() => handleAction('approve')}>Approve</button>
            <button className={styles.rejectButton} onClick={() => handleAction('reject')}>Reject</button>
          </>
        )}
        <button className={styles.deleteButton} onClick={() => handleAction('delete')}>Delete</button>
      </div>

      {/* Add a close button */}
      <button className={styles.closeButton} onClick={onClose}>Close</button>
    </div>
  );
};

export default UserSubmissionDetails;