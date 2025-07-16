import React from 'react';
import styles from './Testimonial.module.css'; // Assuming you'll create a CSS module for this component
import { Testimonial as TestimonialType } from '../api'; // Import the type from your api.ts

interface TestimonialProps {
  testimonial: TestimonialType;
}

const Testimonial: React.FC<TestimonialProps> = ({ testimonial }) => {
  return (
    <div className={styles.testimonialContainer}>
      <p className={styles.quote}>"{testimonial.quote}"</p>
      <p className={styles.author}>- {testimonial.author}</p>
    </div>
  );
};

export default Testimonial;