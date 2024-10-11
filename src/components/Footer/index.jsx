import React from 'react';
import styles from './index.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <h2 className={styles.title}>Contact</h2>

      <div className={styles.infoContainer}>
        <div className={styles.leftBlock}>
          <div className={styles.phone}>
            <h3>Phone</h3>
            <p>+49 999 999 99 99</p>
          </div>
          <div className={styles.address}>
            <h3>Address</h3>
            <p>Linkstraße 2, 8 OG, 10785, Berlin, Deutschland</p>
          </div>
        </div>

        <div className={styles.rightBlock}>
          <div className={styles.socials}>
            <h3>Socials</h3>
            <div className={styles.icons}>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <img src="/path/to/instagram-icon.png" alt="Instagram" />
              </a>
              <a href="https://viber.com" target="_blank" rel="noopener noreferrer">
                <img src="/path/to/viber-icon.png" alt="Viber" />
              </a>
            </div>
          </div>
          <div className={styles.workingHours}>
            <h3>Working Hours</h3>
            <p>24 hours a day</p>
          </div>
        </div>
      </div>

      <div className={styles.mapContainer}>
        <iframe
          title="Google Map"
          src="https://www.google.de/maps/search/Linkstra%C3%9Fe+2%2FOG,+10+Telran.de/@52.5079268,13.3725205,17z/data=!3m1!4b1?entry=ttu&g_ep=EgoyMDI0MTAwOS4wIKXMDSoASAFQAw%3D%3D"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        />
      </div>
    </footer>
  );
};

export default Footer;