import React, { useEffect, useState } from 'react';
import HeroSection from '../components/HeroSection';
import Testimonial from '../components/Testimonial';
import { fetchTestimonials } from '../api';

const TestimonialsPage: React.FC = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    const getTestimonials = async () => {
      const fetchedTestimonials = await fetchTestimonials();
      setTestimonials(fetchedTestimonials);
    };
    getTestimonials();
  }, []);

  return (
    <div>
      <HeroSection title="Voices of Impact" subtitle="Read inspiring stories from our community." />
      <section>
        <h2>Testimonials</h2>
        {testimonials.map(testimonial => (
          <Testimonial key={testimonial.id} testimonial={testimonial} />
        ))}
      </section>
    </div>
  );
};

export default TestimonialsPage;