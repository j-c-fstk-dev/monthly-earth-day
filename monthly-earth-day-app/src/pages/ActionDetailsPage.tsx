import React, { useEffect, useState, ChangeEvent, FormEvent } from 'react';
import { useParams } from 'react-router-dom'; // Assuming react-router-dom for route params
import { fetchActions } from '../api'; // Assuming fetchActions can also fetch a single action or we filter
import Button from '../components/Button';
import styles from './ActionDetailsPage.module.css'; // Assuming you'll create a CSS module

// Define the interface for an Action (should match the one in api.ts)
interface Action {
  id: string;
  title: string;
  description: string;
  icon: any; // Use appropriate type for Font Awesome icon
  suggestedMaterials?: string;
  steps?: string;
}

const ActionDetailsPage: React.FC = () => {
  // In a real app, you would get the action ID from route params
  // const { actionId } = useParams<{ actionId: string }>();
  const [action, setAction] = useState<Action | null>(null);
  const [showScheduling, setShowScheduling] = useState(false);
  const [scheduledDate, setScheduledDate] = useState('');
  const [scheduledTime, setScheduledTime] = useState('');
  const mockActionId = '1'; // Using a mock ID for now

  useEffect(() => {
    const getActionDetails = async () => {
      // In a real app, fetch single action by ID
      const actions = await fetchActions();
      const foundAction = actions.find(a => a.id === mockActionId);
      setAction(foundAction || null);
    };

    getActionDetails();
  }, [mockActionId]); // Depend on mockActionId for now

  if (!action) {
    return <div>Loading action details...</div>; // Or a loading spinner
  }

  const handleTakeActionClick = () => {
    setShowScheduling(true);
  };

  const handleScheduleAction = (e: FormEvent) => {
    e.preventDefault();
    // Simulate sending email and generating submission link
    console.log(`Action "${action.title}" scheduled for ${scheduledDate} at ${scheduledTime}`);
    console.log('Simulating email sent with submission link:');
    const mockToken = 'mock-submission-token-123'; // Replace with actual token generation logic
    const mockSubmissionLink = `${window.location.origin}/submit-action?token=${mockToken}&actionId=${action.id}`;
    console.log(`Submission Link: ${mockSubmissionLink}`);
    alert(`Action scheduled! Check your console for the simulated submission link for ${action.title}.`);
    setShowScheduling(false); // Hide scheduling interface after scheduling
  }

  return (
    <div className={styles.container}>
      <h2>{action.title}</h2>
      {/* Render the icon here if needed */}
      <p className={styles.description}>{action.description}</p>
      {action.suggestedMaterials && <p className={styles.materials}>Suggested Materials: {action.suggestedMaterials}</p>}
      {action.steps && <p className={styles.steps}>Steps: {action.steps}</p>}

      {/* Add more details as needed */}

      {!showScheduling && (
        <Button variant="primary" onClick={handleTakeActionClick}>
          Take Action
        </Button>
      )}

      {showScheduling && (
        <div className={styles.schedulingInterface}>
          <h3>Schedule Your Action</h3>
          <form onSubmit={handleScheduleAction}>
            <label htmlFor="scheduledDate">Date:</label>
            <input type="date" id="scheduledDate" value={scheduledDate} onChange={(e) => setScheduledDate(e.target.value)} required />
            <label htmlFor="scheduledTime">Time:</label>
            <input type="time" id="scheduledTime" value={scheduledTime} onChange={(e) => setScheduledTime(e.target.value)} required />
            <Button type="submit" variant="secondary">Schedule Action</Button>
            {/* Placeholder for Add to Calendar functionality */}
            <p>Integrate with device calendar coming soon!</p>
          </form>
        </div>
      )}
    </div>
  );
};

export default ActionDetailsPage;
