import React from "react";
import styles from "./Blog.module.css";

const Blog = () => {
  const blogs = [
    {
      id: 1,
      title: "Top 10 Restaurants in Your City",
      description:
        "Discover the best restaurants in your city with a curated list of top-rated places to eat.",
      image: "/images/blog1.jpg",
      date: "January 10, 2025",
    },
    {
      id: 2,
      title: "How to Save Money on Food Delivery",
      description:
        "Learn tips and tricks to get the most out of your food delivery apps while saving money.",
      image: "/images/blog2.jpg",
      date: "February 5, 2025",
    },
    {
      id: 3,
      title: "Exploring Global Cuisines",
      description:
        "Travel the world through food! A guide to ordering the best international dishes.",
      image: "/images/blog3.jpg",
      date: "March 15, 2025",
    },
  ];

  return (
    <div className={styles.blogContainer}>
      <h1 className={styles.heading}>Our Blog</h1>
      <div className={styles.blogGrid}>
        {blogs.map((blog) => (
          <div key={blog.id} className={styles.blogCard}>
            <img src={blog.image} alt={blog.title} className={styles.blogImage} />
            <div className={styles.blogContent}>
              <h2 className={styles.blogTitle}>{blog.title}</h2>
              <p className={styles.blogDescription}>{blog.description}</p>
              <span className={styles.blogDate}>{blog.date}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
