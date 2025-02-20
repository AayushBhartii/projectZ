import React, { useState } from "react";
import css from "./ReviewsComponent.module.css";
import RateYourExperienceCard from "../../../../../utils/Cards/RestaurantBodyCards/RateYourExperienceCard/RateYourExperienceCard";
import RestUserReviewedCard from "../../../../../utils/RestaurantUtils/RestUserReviewedCard/RestUserReviewedCard";
import DropdownUtil from "../../../../../utils/RestaurantUtils/DropdownUtil/DropdownUtil";

import profilepic from "/images/profilepic.jpg";
import dropdownIcon from "/icons/down-arrow1.png";
import menu from "/icons/menu.png";

const ReviewsComponent = () => {
  const [data, setData] = useState([
    {
      imgSrc: profilepic,
      title: "Paradise Biryani",
      address: "Kukatpally, Pune",
      reviews: 0,
      followers: 0,
      stars: 3,
      days: 10,
      votes: 10,
      comments: [],
      id: 123,
      userImg: profilepic,
      userId: 11,
    },
    {
      imgSrc: profilepic,
      title: "Paradise Biryani",
      address: "Kharadi, Pune",
      reviews: 0,
      followers: 0,
      stars: 3,
      days: 10,
      votes: 10,
      comments: [],
      id: 124,
      userImg: profilepic,
      userId: 12,
    },
  ]);

  const [selectedFilter, setSelectedFilter] = useState("All Reviews");
  const [sortOrder, setSortOrder] = useState("Newest First");

  const filterReviews = (filter) => {
    setSelectedFilter(filter);
  };

  const sortReviews = (order) => {
    setSortOrder(order);
    const sortedData = [...data].sort((a, b) => {
      if (order === "Newest First") return b.id - a.id;
      if (order === "Oldest First") return a.id - b.id;
      if (order === "Highest Rated") return b.stars - a.stars;
      return a.stars - b.stars;
    });
    setData(sortedData);
  };

  const handleReviewSubmit = (newReview) => {
    setData([
      {
        imgSrc: profilepic,
        title: "New Review",
        address: "User's Location",
        reviews: 0,
        followers: 0,
        stars: newReview.stars,
        days: 0,
        votes: 0,
        comments: [],
        id: Date.now(),
        userImg: profilepic,
        userId: Math.random(),
        reviewText: newReview.review,
        date: newReview.date,
      },
      ...data,
    ]);
  };

  const handleAddComment = (reviewId, commentText) => {
    if (commentText.trim() === "") return;
    setData((prevData) =>
      prevData.map((review) =>
        review.id === reviewId
          ? {
              ...review,
              comments: [
                ...review.comments,
                { text: commentText, timestamp: new Date().toLocaleString() },
              ],
            }
          : review
      )
    );
  };

  return (
    <div className={css.outerDiv}>
      <div className={css.innerDiv}>
        <div className={css.left}>
          <div className={css.dropDowns}>
            <DropdownUtil
              options={[
                "All Reviews",
                "Following",
                "Popular",
                "Bloggers",
                "My Reviews",
                "Order Reviews",
              ]}
              icon2={dropdownIcon}
              filFunc={filterReviews}
            />
            <DropdownUtil
              options={[
                "Newest First",
                "Oldest First",
                "Highest Rated",
                "Lowest Rated",
              ]}
              icon1={menu}
              icon2={dropdownIcon}
              filFunc={sortReviews}
            />
          </div>
          <div className={css.re}>
            {data
              .filter(
                (item) =>
                  selectedFilter === "All Reviews" ||
                  item.title.includes(selectedFilter)
              )
              .map((item) => (
                <RestUserReviewedCard
                  key={item.id}
                  data={item}
                  onAddComment={handleAddComment}
                />
              ))}
          </div>
        </div>
        <div className={css.right}>
          <RateYourExperienceCard onReviewSubmit={handleReviewSubmit} />
        </div>
      </div>
    </div>
  );
};

export default ReviewsComponent;
