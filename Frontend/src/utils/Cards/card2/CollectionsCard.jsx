import css from "./CollectionsCard.module.css";
import rightArrow from "/icons/right-arrow.png";

const CollectionsCard = ({ imgSrc, title, places }) => {
  const handleClick = () => {
    console.log("I am clicked");
  };

  return (
    <div className={css.card} onClick={handleClick}>
      <img className={css.cardImg} src={imgSrc} alt="collection card" />
      <div className={css.details}>
        <div className={css.title}>{title}</div>
        <div className={css.placesTxt}>
          <span className={css.count}>{places}</span>
          <span className={css.places}>Places</span>
          <span className={css.rightArrowBox}>
            <img
              className={css.rightArrow}
              src={rightArrow}
              alt="right arrow"
            />
          </span>
        </div>
      </div>
    </div>
  );
};

export default CollectionsCard;