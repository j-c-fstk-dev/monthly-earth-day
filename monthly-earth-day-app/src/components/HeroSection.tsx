import React from 'react';
import styles from './HeroSection.module.css';

interface HeroSectionProps {
  title: string;
  subtitle: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ title, subtitle }) => {
  return (
    <section className={styles.heroSection}>
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </section>
  );
};

export default HeroSection;