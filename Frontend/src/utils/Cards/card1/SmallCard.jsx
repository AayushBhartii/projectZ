import { Link } from "react-router-dom";
import css from "./SmallCard.module.css";

let SmallCard = ({ imgSrc, text, link }) => {
  const isExternalLink = link.startsWith("http");

  return isExternalLink ? (
    <a href={link} className={css.card} target="_blank" rel="noopener noreferrer">
      <div className={css.imgBox}>
        <img src={imgSrc} alt="card image" className={css.img} />
      </div>
      <div className={css.txtBx}>
        <div className={css.txt}>{text}</div>
      </div>
    </a>
  ) : (
    <Link to={link} className={css.card}>
      <div className={css.imgBox}>
        <img src={imgSrc} alt="card image" className={css.img} />
      </div>
      <div className={css.txtBx}>
        <div className={css.txt}>{text}</div>
      </div>
    </Link>
  );
};

export default SmallCard;
