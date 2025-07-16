import React, { useState } from 'react';
import Card from './Card';
import styles from './ActionsListSection.module.css'; // Assuming you'll create this CSS module
import Icon from './Icon'; // Import the Icon component
import { faTrashCan, faSeedling, faCar, faShoppingBag, faBottleWater, faLightbulb, faFaucet, faRecycle, faLeaf, faShoppingCart, faWalking, faBus, faBan, faHandsHelping, faBookOpen, IconDefinition } from '@fortawesome/free-solid-svg-icons';

interface Action {
  id: number;
  title: string;
  description: string;
  icon: IconDefinition; // Use IconDefinition type for Font Awesome icons
}

const actions: Action[] = [
  { id: 1, title: 'Pick Up Litter', description: 'Clean up trash where you see it or lead/join a clean up event.', icon: faTrashCan },
  { id: 2, title: 'Plant Trees', description: 'Plant trees where possible or lead/join a tree planting event.', icon: faSeedling },
  { id: 3, title: 'Carpool', description: 'Share a ride and carpool when possible to cut down on emissions and save gas.', icon: faCar },
  { id: 4, title: 'Use Reusable Bags', description: 'Bring reusable bags to the grocery store to reduce plastic waste.', icon: faShoppingBag },
  { id: 5, title: 'Switch to a Reusable Water Bottle', description: 'Ditch single-use plastic bottles for a durable, reusable one.', icon: faBottleWater },
  { id: 6, title: 'Turn Off Lights', description: 'Switch off lights and unplug electronics when not in use to save energy.', icon: faLightbulb },
  { id: 7, title: 'Reduce Water Waste', description: 'Take shorter showers and fix leaky faucets to conserve water.', icon: faFaucet },
  { id: 8, title: 'Recycle Properly', description: 'Learn your local recycling rules and sort waste correctly.', icon: faRecycle },
  { id: 9, title: 'Compost Food Scraps', description: 'Start a small compost bin for food scraps to reduce landfill waste.', icon: faLeaf },
  { id: 10, title: 'Choose Eco-Friendly Products', description: 'Opt for biodegradable or sustainable household items, like bamboo toothbrushes.', icon: faShoppingCart }, // Using shopping-cart as a placeholder
  { id: 11, title: 'Walk or Bike Short Distances', description: 'Skip the car for short trips to reduce emissions.', icon: faWalking },
  { id: 12, title: 'Plant Native Species', description: 'Add native plants to your garden to support local wildlife and ecosystems.', icon: faLeaf }, // Reusing leaf icon
  { id: 13, title: 'Reduce Meat Consumption', description: 'Try one meat-free day a week to lower your environmental footprint.', icon: faLeaf }, // Reusing leaf icon
  { id: 14, title: 'Shop Secondhand', description: 'Buy clothes or goods from thrift stores to reduce demand for new production.', icon: faShoppingBag }, // Reusing shopping-bag
  { id: 15, title: 'Use Public Transit', description: 'Take buses or trains when possible to cut down on fuel use.', icon: faBus },
  { id: 16, title: 'Avoid Single-Use Plastics', description: 'Say no to plastic straws, cutlery, and takeout containers.', icon: faBan }, // Using ban as a placeholder
  { id: 17, title: 'Support Local Farmers', description: 'Buy produce and meat from local markets to reduce transport emissions.', icon: faHandsHelping }, // Using hands-helping
  { id: 18, title: 'Educate Yourself', description: 'Follow #MonthlyEarthDay on social media for tips and join local cleanups to stay engaged.', icon: faBookOpen }, // Using book-open
];

const ActionsListSection: React.FC = () => {
  const [expandedAction, setExpandedAction] = useState<number | null>(null);

  const handleCardClick = (actionId: number) => {
    setExpandedAction(expandedAction === actionId ? null : actionId);
  };

  return (
    <section id="list-actions" className={styles.actionsSection}>
      <h2>List Of Actions</h2>
      <div className={styles.actionsGrid}>
        {actions.map(action => (
          <Card key={action.id} className={styles.actionCard}>
            <div 
              className={`${styles.actionCardInner} ${expandedAction === action.id ? styles.isFlipped : ''}`} 
              onClick={() => handleCardClick(action.id)}
            >
              <div className={styles.actionCardFront}>
              <div className={styles.actionIcon}>
                <Icon icon={action.icon} /> {/* Use the updated Icon component */}
              </div>
              <h3>{action.title}</h3>
              </div>
              <div className={styles.actionCardBack}>
                <p>{action.description}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default ActionsListSection;