import "./Styles.css";

export const HomePage = () => {
  return (
    <div>
      {/* Parallax Section */}
      <div className="parallax-container">
        <div className="parallax-content">
          Neeharika & Dileep
          <br />
          <span className="wedding-subtitle">
            are getting married on May 22, 2025
          </span>
        </div>
      </div>

      {/* Event Details Section */}
      <div className="event-details-section">
        <h2 className="event-heading">Wedding Celebrations</h2>

        <div className="event-details">
          <div className="event-item">
            <h3>Haldi Ceremony</h3>
            <p>📅 Date: 21st May 2025</p>
            <p>⏰ Time: 10:00 AM onwards</p>
            <p>🏡 Venue: Family Residence</p>
          </div>

          <div className="event-item">
            <h3>Wedding Ceremony</h3>
            <p>📅 Date: 22nd May 2025</p>
            <p>⏰ Time: 7:30 PM onwards</p>
            <p>🏛️ Venue: Sri Venkateswara Ganta Ganiraju Kalyanamandapam,</p>
            <p>Stadium Road (Back Side), Raithu Nagar, Kothapeta,</p>
            <p>Rajamahendravaram, Andhra Pradesh 533101</p>
            <p>
              <a
                href="https://maps.app.goo.gl/iQddkMFrCR5QENQ1A"
                target="_blank"
                rel="noopener noreferrer"
              >
                📍 View Location
              </a>
            </p>
          </div>

          <div className="event-item">
            <h3>Reception</h3>
            <p>📅 Date: 24th May 2025</p>
            <p>⏰ Time: 7:00 PM onwards</p>
            <p>🏛️ Venue: Gupta Center, 1-3/18-40, Kummaripalem, V D Puram,</p>
            <p>Vijayawada, Andhra Pradesh 520012</p>
            <p>
              <a
                href="https://maps.app.goo.gl/ACXyK43YQWPbJJ7y6"
                target="_blank"
                rel="noopener noreferrer"
              >
                📍 View Location
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
