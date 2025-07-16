import React, { useEffect, useState } from 'react';
import HeroSection from '../components/HeroSection';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { fetchEvents } from '../api';
import styles from './CalendarPage.module.css';

interface Event {
  id: string;
  title: string;
  date: Date;
}
const CalendarPage: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [allEvents, setAllEvents] = useState<Event[]>([]);

  useEffect(() => {
    const getEvents = async () => {
      const events = await fetchEvents();
      setAllEvents(events);
    };

    getEvents();
  }, []);

  return (
    <div className={styles.calendarPageContainer}>
      <Helmet>
        <title>Event Calendar - Monthly Earth Day</title>
        <meta name="description" content="Find and join upcoming #MonthlyEarthDay actions and initiatives." />
        {/* Add other relevant meta tags for SEO */}
      </Helmet>
      <HeroSection title="Event Calendar" subtitle="Find and join upcoming #MonthlyEarthDay actions and initiatives." />

      <section className={styles.calendarSection}>
        <h2>Upcoming Events</h2>
        <Calendar onChange={setSelectedDate} value={selectedDate} />
      </section>
      <section className={styles.eventDetailsSection}>
        <h3>Events on {selectedDate.toDateString()}</h3>
        {allEvents
          .filter(event => event.date.toDateString() === selectedDate.toDateString())
          .map(event => (
            <div key={event.id} className={styles.eventItem}>
              <h4>{event.title}</h4>
              <p>{event.date.toLocaleTimeString()}</p>
              {/* Add more event details here if available */}
            </div>
          ))
        }
        {allEvents.filter(event => event.date.toDateString() === selectedDate.toDateString()).length === 0 && (
          <p>No events scheduled for this date.</p>
        )}
      </section>
    </div>
  );
};

export default CalendarPage;