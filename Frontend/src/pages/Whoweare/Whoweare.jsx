import React, { useState } from "react";
import styles from "./Whoweare.module.css";

const WhoWeAre = () => {
  const content = {
    title: "Delivering Happiness, One Meal at a Time",
    subtitle: "Zomato connects you with the best food and grocery delivery services in your city.",
    mission: "Our mission is to empower communities through food delivery services, ensuring convenience, quality, and satisfaction in every order.",
    history: [
      {
        title: "Founded in 2008",
        description: "Zomato started as a small initiative to connect people with their favorite restaurants. It has grown exponentially to become a global brand recognized for its reliability and service.",
        year: "2008",
        placeholder: "This marks the year Zomato was founded."
      },
      {
        title: "Global Expansion",
        description: "By 2015, we reached over 20 countries with millions of satisfied customers. This milestone reflects our commitment to spreading joy across the globe.",
        year: "2015",
        placeholder: "This marks the year of our global expansion."
      },
    ],
    values: [
      { title: "Customer First", description: "We prioritize your needs above all else." },
      { title: "Innovation", description: "Continuously enhancing the food delivery experience." },
      { title: "Sustainability", description: "Building a greener, more sustainable future." },
    ],
    team: [
      { name: "John Doe", position: "CEO", bio: "John has led Zomato since its inception with a vision to revolutionize food delivery services.", placeholder: "Image of CEO John Doe." },
      { name: "Jane Smith", position: "CTO", bio: "Jane drives technological innovation, ensuring Zomato stays ahead in the tech space.", placeholder: "Image of CTO Jane Smith." },
      { name: "Emily Brown", position: "Head of Marketing", bio: "Emily oversees global marketing, crafting campaigns that resonate with millions.", placeholder: "Image of Head of Marketing Emily Brown." },
    ],
  };

  const [selectedHistory, setSelectedHistory] = useState("all");
  const [selectedTeamMember, setSelectedTeamMember] = useState(null);
  const [selectedValue, setSelectedValue] = useState(null);
  const [selectedHistoryItem, setSelectedHistoryItem] = useState(null);

  const filteredHistory =
    selectedHistory === "all"
      ? content.history
      : content.history.filter((item) => item.year === selectedHistory);

  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroText}>
          <h1>{content.title}</h1>
          <p>{content.subtitle}</p>
        </div>
      </section>

      {/* Mission Section */}
      <section className={styles.missionSection}>
        <h2>Our Mission</h2>
        <p>{content.mission}</p>
      </section>

      {/* History Section */}
      <section className={styles.historySection}>
        <h2>Our History</h2>
        <select
          className={styles.filterDropdown}
          value={selectedHistory}
          onChange={(e) => setSelectedHistory(e.target.value)}
        >
          <option value="all">All</option>
          <option value="2008">2008</option>
          <option value="2015">2015</option>
        </select>
        <div className={styles.historyGrid}>
          {filteredHistory.map((item, index) => (
            <div
              key={index}
              className={styles.historyItem}
              onClick={() => setSelectedHistoryItem(item)}
            >
              <div className={styles.placeholder}>{item.placeholder}</div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
        {selectedHistoryItem && (
          <div className={styles.modal}>
            <div className={styles.modalContent}>
              <h3>{selectedHistoryItem.title}</h3>
              <p>{selectedHistoryItem.description}</p>
              <button
                className={styles.closeModal}
                onClick={() => setSelectedHistoryItem(null)}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </section>

      {/* Values Section */}
      <section className={styles.valuesSection}>
        <h2>Our Values</h2>
        <div className={styles.valuesCarousel}>
          {content.values.map((value, index) => (
            <div
              key={index}
              className={`${styles.valueItem} ${
                selectedValue === value.title ? styles.activeValue : ""
              }`}
              onClick={() =>
                setSelectedValue(
                  selectedValue === value.title ? null : value.title
                )
              }
            >
              <h3>{value.title}</h3>
              <p>{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className={styles.teamSection}>
        <h2>Meet Our Team</h2>
        <div className={styles.teamGrid}>
          {content.team.map((member, index) => (
            <div
              key={index}
              className={styles.teamMember}
              onClick={() => setSelectedTeamMember(member)}
            >
              <div className={styles.placeholder}>{member.placeholder}</div>
              <h3>{member.name}</h3>
              <p>{member.position}</p>
            </div>
          ))}
        </div>
        {selectedTeamMember && (
          <div className={styles.modal}>
            <div className={styles.modalContent}>
              <h3>{selectedTeamMember.name}</h3>
              <p>{selectedTeamMember.position}</p>
              <p>{selectedTeamMember.bio}</p>
              <button
                className={styles.closeModal}
                onClick={() => setSelectedTeamMember(null)}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

export default WhoWeAre;
