import React, { useState, useEffect } from 'react';
import styles from './Privacy.module.css';

const Privacy = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [expandedSection, setExpandedSection] = useState(null);
  const [showBackToTop, setShowBackToTop] = useState(false);

  const privacyData = {
    title: "Privacy Policy",
    lastUpdated: "Last Updated: October 10, 2023",
    sections: [
      {
        title: "Introduction",
        content:
          "We are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you use our services.",
      },
      {
        title: "Information We Collect",
        content:
          "We collect personal information such as your name, email address, phone number, and location data. We also collect non-personal information like device information and usage data.",
      },
      {
        title: "How We Use Your Information",
        content:
          "We use your information to provide and improve our services, personalize your experience, and communicate with you about updates and offers.",
      },
      {
        title: "Sharing Your Information",
        content:
          "We do not sell your personal information. We may share your information with third-party service providers who assist us in delivering our services.",
      },
      {
        title: "Security",
        content:
          "We implement security measures to protect your information. However, no method of transmission over the internet is 100% secure.",
      },
      {
        title: "Your Rights",
        content:
          "You have the right to access, update, or delete your personal information. You can also opt-out of receiving promotional communications.",
      },
      {
        title: "Contact Us",
        content:
          "If you have any questions about this Privacy Policy, please contact us at privacy@zomato.com.",
      },
    ],
  };

  const guidelinesData = {
    title: "Guidelines and Policies",
    sections: [
      {
        title: "License, Registration & Certificate",
        content: "Information about licensing, registration, and certification requirements.",
      },
      {
        title: "Security",
        content: "Details on our security practices and measures.",
      },
      {
        title: "Products",
        content: "Overview of our product offerings.",
      },
      {
        title: "Gift Card",
        content: "Information on purchasing and using gift cards.",
      },
      {
        title: "Vibe",
        content: "Details about our Vibe program.",
      },
      {
        title: "Zomaland",
        content: "Information about the Zomaland event.",
      },
      {
        title: "Zomato UPI",
        content: "Guidelines for using Zomato UPI.",
      },
      {
        title: "Train Ordering",
        content: "How to order food on trains using our service.",
      },
      {
        title: "Events",
        content: "Details on organizing and participating in events.",
      },
      {
        title: "Ads",
        content: "Information on advertising with us.",
      },
      {
        title: "Deals",
        content: "Current deals and promotions.",
      },
      {
        title: "Celebration Services",
        content: "Services for special celebrations.",
      },
      {
        title: "Games",
        content: "Information on games and related services.",
      },
    ],
  };

  const toggleSection = (index) => {
    setExpandedSection(expandedSection === index ? null : index);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`${styles.privacyContainer} ${darkMode ? styles.darkMode : ''}`}>
      <div className={styles.modeToggle}>
        {/* <button onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button> */}
      </div>

      <h1 className={styles.title}>{privacyData.title}</h1>
      <p className={styles.lastUpdated}>{privacyData.lastUpdated}</p>

      {privacyData.sections.map((section, index) => (
        <div key={index} className={styles.section}>
          <h2 className={styles.sectionTitle} onClick={() => toggleSection(index)}>
            {section.title}
            <span className={styles.arrow}>
              {expandedSection === index ? '▼' : '▶'}
            </span>
          </h2>
          {expandedSection === index && (
            <p className={styles.sectionContent}>{section.content}</p>
          )}
        </div>
      ))}

      <h1 className={styles.title}>{guidelinesData.title}</h1>

      {guidelinesData.sections.map((section, index) => (
        <div key={index} className={styles.section}>
          <h2 className={styles.sectionTitle} onClick={() => toggleSection(index + privacyData.sections.length)}>
            {section.title}
            <span className={styles.arrow}>
              {expandedSection === index + privacyData.sections.length ? '▼' : '▶'}
            </span>
          </h2>
          {expandedSection === index + privacyData.sections.length && (
            <p className={styles.sectionContent}>{section.content}</p>
          )}
        </div>
      ))}

      {showBackToTop && (
        <button className={styles.backToTop} onClick={scrollToTop}>
          ↑
        </button>
      )}
    </div>
  );
};

export default Privacy;
