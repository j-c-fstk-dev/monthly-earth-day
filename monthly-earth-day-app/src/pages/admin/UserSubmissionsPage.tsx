import React, { useState } from 'react';
import UserSubmissionList from '../../components/UserSubmissionList';
import UserSubmissionDetails from '../../components/UserSubmissionDetails';
import { UserSubmission } from '../../api'; // Assuming you have UserSubmission interface in api.ts
 
const UserSubmissionsPage: React.FC = () => {
  // Mock user submission data (replace with fetched data later)
  const [submissions, setSubmissions] = useState<UserSubmission[]>([
    {
      id: 'sub1',
      actionId: 'action1', // Link to an action
      userId: 'user1', // Simulated user ID
      description: 'Cleaned up the local park.',
 simulatedMediaUrl: 'https://via.placeholder.com/150', // Placeholder image
      approvalStatus: 'pending',
    },
    // Add more mock submissions as needed
 ]);
 
  const [selectedSubmission, setSelectedSubmission] = useState(null);
 
  const handleViewDetails = (submission: any) => {
    setSelectedSubmission(submission);
  };

  const handleApprove = (id: string) => {
    setSubmissions(submissions.map(sub => 
      sub.id === id ? { ...sub, approvalStatus: 'approved' } : sub
    ));
    setSelectedSubmission(null); // Close details after action
  };

  const handleReject = (id: string) => {
    setSubmissions(submissions.map(sub =>
      sub.id === id ? { ...sub, approvalStatus: 'rejected' } : sub
    ));
    setSelectedSubmission(null); // Close details after action
  };

  const handleDelete = (id: string) => {
    setSubmissions(submissions.filter(sub => sub.id !== id));
    setSelectedSubmission(null); // Close details after action
  };

  return (
    <div>
      <h1>User Submissions</h1>
      {/* Pass the mock submissions to the UserSubmissionList component */}
 {selectedSubmission ? (
 <UserSubmissionDetails
 submission={selectedSubmission}
 onClose={() => setSelectedSubmission(null)}
 onApprove={handleApprove}
 onReject={handleReject}
 onDelete={handleDelete}
 />
 ) : (
 <UserSubmissionList submissions={submissions} onViewDetails={handleViewDetails} onApprove={handleApprove} onReject={handleReject} onDelete={handleDelete} />
 )}
    </div>
  );
};

export default UserSubmissionsPage;