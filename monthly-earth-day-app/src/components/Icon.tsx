import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

interface IconProps {
  icon: IconDefinition; // Font Awesome icon object
  className?: string; // Optional additional class names
}

const Icon: React.FC<IconProps> = ({ icon, className }) => {
  return (
    <FontAwesomeIcon icon={icon} className={className} />
  );
};

export default Icon;