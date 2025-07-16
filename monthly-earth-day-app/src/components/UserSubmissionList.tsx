import React from 'react';
import styles from './UserSubmissionList.module.css'; // Assuming you'll create a CSS module

interface Submission {
  id: string;
  actionId: string; // Assuming each submission is linked to an action
  userId: string; // Placeholder for user identification
  description: string;
  mediaUrl?: string; // Optional media URL
  status: 'pending' | 'approved' | 'rejected';
 approvalStatus: 'pending' | 'approved' | 'rejected'; // Use approvalStatus to match backend plan
}

interface UserSubmissionListProps {
  submissions: Submission[];
  onViewDetails: (submission: Submission) => void;
  onApprove: (id: string) => void;
  onReject: (id: string) => void;
  onDelete: (id: string) => void;
}
const UserSubmissionList: React.FC<UserSubmissionListProps> = ({ submissions, onViewDetails }) => {
  return (
    <div className={styles.submissionListContainer}>
      <h2>User Submissions</h2>
      {submissions && submissions.length === 0 ? (
        <p>No submissions to display.</p>
      ) : (
        <ul className={styles.submissionList}>
          {submissions.map((submission) => (
            <li key={submission.id} className={styles.submissionItem}>
              <div className={styles.submissionInfo}>
                <p><strong>ID:</strong> {submission.id}</p>
                <p><strong>Status:</strong> {submission.approvalStatus}</p>
                {/* Display other key info like action ID, user ID, or a snippet of description */}
                <p><strong>Description Snippet:</strong> {submission.description.substring(0, 50)}...</p>
              </div>
              <div className={styles.submissionActions}>
                <button className={styles.actionButton} onClick={() => onViewDetails(submission)}>View</button>
                {submission.approvalStatus === 'pending' && (
                  <>
                    <button className={styles.actionButton} onClick={() => onApprove(submission.id)}>Approve</button>
                    <button className={styles.actionButton} onClick={() => onReject(submission.id)}>Reject</button>
                  </>
                )}
                <button className={`${styles.actionButton} ${styles.deleteButton}`} onClick={() => onDelete(submission.id)}>Delete</button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default UserSubmissionList;