import { useState } from "react";
import { Formik, Form } from "formik";

import css from "./RateYourExperienceCard.module.css";
import RadioBtn from "../../../FormUtils/RadioUtil/RadioUtil";
import RatingNumberBox from "../../../RestaurantUtils/RatingNumberBox/RatingNumberBox";

const RateYourExperienceCard = ({ onReviewSubmit }) => {
  const [stars, setStars] = useState(0);
  const [quots] = useState(["", "", "Average", "Good", "Excellent"]);
  const [showReviewInput, setShowReviewInput] = useState(false);
  const [review, setReview] = useState("");

  const handleReviewSubmit = () => {
    if (review.trim() === "") {
      alert("Please write a review before submitting.");
      return;
    }

    const newReview = {
      stars,
      review,
      date: new Date().toLocaleString(),
    };

    onReviewSubmit(newReview); // Pass data to parent component
    setReview("");
    setShowReviewInput(false);
    setStars(0); // Reset stars after submission
  };

  return (
    <div className={css.outerDiv}>
      <div className={css.innerDiv}>
        <div className={css.ttl}>Rate your experience for</div>

        <Formik initialValues={{ type: "dining" }}>
          <Form className={css.radioGroup}>
            <RadioBtn label="Dining" name="type" value="dining" />
            <RadioBtn label="Takeaway" name="type" value="Takeaway" />
          </Form>
        </Formik>

        <div className={css.ratingFlex}>
          {[1, 2, 3, 4, 5].map((num) => (
            <RatingNumberBox
              key={num}
              stars={stars}
              txt={`${num}`}
              iconR={stars > num}
              isActive={stars >= num}
              onClick={() => setStars(num)}
            />
          ))}
          <div className={css.ratingTxt}>{quots[stars]}</div>
        </div>

        <div
          className={css.modalTxt}
          onClick={() => setShowReviewInput(true)}
        >
          Write a Review
        </div>

        {showReviewInput && (
          <div className={css.reviewSection}>
            <textarea
              className={css.textarea}
              placeholder="Share your thoughts..."
              value={review}
              onChange={(e) => setReview(e.target.value)}
            />
            <div className={css.reviewActions}>
              <button
                type="button"
                className={css.cancelBtn}
                onClick={() => setShowReviewInput(false)}
              >
                Cancel
              </button>
              <button
                type="button"
                className={css.submitBtn}
                onClick={handleReviewSubmit}
              >
                Submit
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default RateYourExperienceCard;
