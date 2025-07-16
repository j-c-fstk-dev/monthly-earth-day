import React, { useState, useEffect } from 'react';
import styles from '/home/user/monthly-earth-day/monthly-earth-day-app/src/MainApp.module.css';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const MainApp: React.FC = () => {
  const [value, onChange] = useState(new Date());
  const [selectedDateEvents, setSelectedDateEvents] = useState<any[]>([]); // Use 'any' for now, refine later
  const [allEvents, setAllEvents] = useState<any[]>([]); // State to hold all fetched events

  useEffect(() => {
    const fetchEventsData = async () => {
      const fetchedEvents = await fetchEvents();
      setAllEvents(fetchedEvents);
    };
    fetchEventsData();
  }, []); // Empty dependency array means this effect runs only once after initial render

  const handleDateChange = (date: Date) => {
    onChange(date);
    const eventsForSelectedDate = allEvents.filter(event =>
      event.date.getDate() === date.getDate() &&
      event.date.getMonth() === date.getMonth() &&
      event.date.getFullYear() === date.getFullYear());
    setSelectedDateEvents(eventsForSelectedDate);
  };

  return (
    <div className={styles.App}>
      <header>
        <h1 className={styles.h1}>Celebrate Earth Day Every Month</h1>
        <p className={styles.p}>A global movement for monthly action creating positive impact</p>
      </header>

      <section id="about-us" className={styles.section}>
        <h2 className={styles.h2}>About Us - #MonthlyEarthDay</h2>
        <p className={styles.p}>At #MonthlyEarthDay, we believe every day is an opportunity to protect and celebrate our planet. Founded by Nick, who works hard to make this world a better place. Increased participation by group of environmentalists, community organizers, and everyday change-makers, our movement transforms the spirit of Earth Day into a monthly call to action. Our mission is to inspire, educate, and empower individuals and communities to take meaningful steps toward sustainability and environmental stewardship, on the 22nd of every month.</p>
        <p className={styles.p}>Through local cleanups, tree-planting initiatives, educational workshops, and digital campaigns, #MonthlyEarthDay fosters a global community united by a shared commitment to a healthier, greener future. We partner with organizations, schools, and volunteers to create impactful, hands-on opportunities that make a difference in our neighborhoods and beyond.</p>
        <p className={styles.p}>Join us in redefining environmental activism—because caring for the Earth isn’t just an annual event, it’s a way of life. Together, let’s celebrate Earth Day every month.</p>
      </section>

      <section id="meet-founder" className={styles.section}>
        <h2 className={styles.h2}>Meet Our Founder - Nick</h2>
        <p className={styles.p}>Born on Earth Day, our founder Nick has always felt a deep connection to the planet. A lifelong environmentalist, Nick’s love for nature was sparked by childhood adventures in the wilderness, where he marveled at the beauty of wildlife and untouched landscapes. His passion drives #MonthlyEarthDay’s vision to make environmental care a year-round commitment. Whether hiking through forests, fishing, observing local wildlife, or leading community cleanups, Nick inspires others to protect our planet with the same enthusiasm he’s carried since his first Earth Day. His belief is simple: every step toward sustainability counts, and together, we can create a thriving future for all living things.</p>
      </section>

      <section id="contact-us" className={styles.section}>
        <h2 className={styles.h2}>Contact Us</h2>
        <p className={styles.p}>Email: MonthlyEarthDay@gmail.com</p>
        <p className={styles.p}>Twitter: x.com/highlyartistic</p>
      </section>

      <section id="list-actions" className={styles.section}>
        <h2 className={styles.h2}>List Of Actions</h2>
        <ul className={styles.ul}>
          <li className={styles.li}><strong>Pick Up Litter:</strong> Clean up trash where you see it or lead/join a clean up event.</li>
          <li className={styles.li}><strong>Plant Trees:</strong> Plant trees where possible or lead/join a tree planting event.</li>
          <li className={styles.li}><strong>Carpool:</strong> Share a ride and carpool when possible to cut down on emissions and save gas.</li>
          <li className={styles.li}><strong>Use Reusable Bags:</strong> Bring reusable bags to the grocery store to reduce plastic waste.</li>
          <li className={styles.li}><strong>Switch to a Reusable Water Bottle:</strong> Ditch single-use plastic bottles for a durable, reusable one.</li>
          <li className={styles.li}><strong>Turn Off Lights:</strong> Switch off lights and unplug electronics when not in use to save energy.</li>
          <li className={styles.li}><strong>Reduce Water Waste:</strong> Take shorter showers and fix leaky faucets to conserve water.</li>
          <li className={styles.li}><strong>Recycle Properly:</strong> Learn your local recycling rules and sort waste correctly.</li>
          <li className={styles.li}><strong>Compost Food Scraps:</strong> Start a small compost bin for food scraps to reduce landfill waste.</li>
          <li className={styles.li}><strong>Choose Eco-Friendly Products:</strong> Opt for biodegradable or sustainable household items, like bamboo toothbrushes.</li>
          <li className={styles.li}><strong>Walk or Bike Short Distances:</strong> Skip the car for short trips to reduce emissions.</li>
          <li className={styles.li}><strong>Plant Native Species:</strong> Add native plants to your garden to support local wildlife and ecosystems.</li>
          <li className={styles.li}><strong>Reduce Meat Consumption:</strong> Try one meat-free day a week to lower your environmental footprint.</li>
          <li className={styles.li}><strong>Shop Secondhand:</strong> Buy clothes or goods from thrift stores to reduce demand for new production.</li>
          <li className={styles.li}><strong>Use Public Transit:</strong> Take buses or trains when possible to cut down on fuel use.</li>
          <li className={styles.li}><strong>Avoid Single-Use Plastics:</strong> Say no to plastic straws, cutlery, and takeout containers.</li>
          <li className={styles.li}><strong>Support Local Farmers:</strong> Buy produce and meat from local markets to reduce transport emissions.</li>
          <li className={styles.li}><strong>Educate Yourself:</strong> Follow #MonthlyEarthDay on social media for tips and join local cleanups to stay engaged.</li>
        </ul>
      </section>

      <section id="calendar" className={styles.section}>
        <h2 className={styles.h2}>Scheduled Actions Calendar</h2>
        <Calendar
          className={styles.calendar}
          value={value}
          onChange={handleDateChange as any}
          tileContent={({ date, view }) => {
            if (view === 'month') {
              const hasEvent = allEvents.some(event => event.date.getDate() === date.getDate() && event.date.getMonth() === date.getMonth() && event.date.getFullYear() === date.getFullYear());
              return hasEvent ? <div className={styles.eventDot}></div> : null;
            }
            return null;
          }}
        />
        <p className={styles.selectedDate}>Selected date: {value.toDateString()}</p>

        {selectedDateEvents.length > 0 && (
          <div className={styles.eventDetails}>
            <h3 className={styles.h3}>Events on {value.toLocaleDateString()}</h3>
            {selectedDateEvents.map((event, index) => (
              <div key={index} className={styles.eventItem}>
                <h4>{event.title}</h4>
                <p>{event.description}</p>
              </div>
            ))}
          </div>
        )}
      </section>

    </div>
  );
};

export default MainApp;