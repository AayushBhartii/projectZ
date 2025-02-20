import React, { useState } from "react";
import styles from "./WorkWithUs.module.css";

const WorkWithUs = () => {
  const jobCategories = [
    {
      id: 1,
      title: "Engineering",
      description: "Building innovative solutions to enhance user experiences.",
    },
    {
      id: 2,
      title: "Marketing",
      description: "Crafting campaigns to drive customer engagement.",
    },
    {
      id: 3,
      title: "Operations",
      description: "Ensuring seamless execution of services globally.",
    },
    {
      id: 4,
      title: "Customer Support",
      description: "Delivering exceptional service to customers worldwide.",
    },
  ];

  const teamSpotlight = [
    {
      id: 1,
      name: "Sophia Taylor",
      position: "Software Engineer",
      bio: "Sophia specializes in building scalable systems for real-time delivery.",
      placeholder: "Image of Software Engineer Sophia Taylor.",
    },
    {
      id: 2,
      name: "Liam Johnson",
      position: "Marketing Lead",
      bio: "Liam designs global campaigns that resonate with millions.",
      placeholder: "Image of Marketing Lead Liam Johnson.",
    },
    {
      id: 3,
      name: "Olivia Brown",
      position: "Operations Manager",
      bio: "Olivia oversees day-to-day operations ensuring flawless service delivery.",
      placeholder: "Image of Operations Manager Olivia Brown.",
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedTeamMember, setSelectedTeamMember] = useState(null);

  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <h1>Join Our Team</h1>
        <p>
          At Zomato, we're passionate about making a difference. Explore exciting
          career opportunities and be part of our journey.
        </p>
      </section>

      {/* Job Categories Section */}
      <section className={styles.categoriesSection}>
        <h2>Explore Job Categories</h2>
        <div className={styles.categoriesGrid}>
          {jobCategories.map((category) => (
            <div
              key={category.id}
              className={styles.categoryCard}
              onClick={() => setSelectedCategory(category)}
            >
              <h3>{category.title}</h3>
              <p>{category.description}</p>
            </div>
          ))}
        </div>
        {selectedCategory && (
          <div className={styles.categoryDetails}>
            <h3>Opportunities in {selectedCategory.title}</h3>
            <p>{selectedCategory.description}</p>
            <button onClick={() => setSelectedCategory(null)}>Close</button>
          </div>
        )}
      </section>

      {/* Team Spotlight Section */}
      <section className={styles.teamSection}>
        <h2>Team Spotlight</h2>
        <div className={styles.teamGrid}>
          {teamSpotlight.map((member) => (
            <div
              key={member.id}
              className={styles.teamCard}
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
              <div className={styles.placeholder}>
                {selectedTeamMember.placeholder}
              </div>
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

export default WorkWithUs;
