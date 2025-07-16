import React from 'react';
import styles from './ContactUsSection.module.css';

const ContactUsSection: React.FC = () => {
  return (
    <section id="contact-us" className={styles.contactUsSection}>
      <h2>Contact Us</h2>
      <p>Email: MonthlyEarthDay@gmail.com</p>
      <p>Twitter: x.com/highlyartistic</p>
    </section>
  );
};

export default ContactUsSection;