import React from 'react';
import AboutUsSection from '../components/AboutUsSection';
import MeetFounderSection from '../components/MeetFounderSection';
import ActionsListSection from '../components/ActionsListSection';
import HeroSection from '../components/HeroSection';
import ContactUsSection from '../components/ContactUsSection';

const HomePage: React.FC = () => {
  return (
    <div>
      <HeroSection
        title="#MonthlyEarthDay"
        subtitle="Transformando o cuidado com o planeta em um hábito mensal."
      />
      <AboutUsSection />
      <MeetFounderSection />
      <ActionsListSection />
      <ContactUsSection />
    </div>
  );
};

export default HomePage;