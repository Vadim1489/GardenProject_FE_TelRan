import React from 'react';
import styles from './index.module.css';
import logo_inst from './media/instagram.png';
import logo_whats from './media/watsapp.png';


const Footer = () => {
  return (
    <footer className={styles.footer}>
      <h2 className={styles.title}>Contact</h2>

      <div className={styles.infoContainer}>
        <div className={styles.leftBlock}>
          <div className={styles.phone}>
            <h3>Phone</h3>
            <a href="tel:+499999999999">+49 999 999 99 99</a> 
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
                <img src={logo_inst} alt="Instagram" />
              </a>
              <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer">
                <img src={logo_whats} alt="WhatsApp" />
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
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2428.4090427798205!2d13.372469776378468!3d52.50793613712307!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a8515353a68755%3A0xd0866511db4f838f!2sStarta%20Institute%20by%20Tel-Ran!5e0!3m2!1sde!2sde!4v1728673909754!5m2!1sde!2sde"
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