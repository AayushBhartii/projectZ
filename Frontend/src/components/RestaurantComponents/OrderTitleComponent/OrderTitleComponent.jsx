import React from 'react';
import css from './OrderTitleComponent.module.css';
import RatingUtil from '../../../utils/RestaurantUtils/RatingUtil/RatingUtil';
import infoIcon from '/icons/info.png';
import { FaDirections, FaShareAlt, FaCommentDots } from "react-icons/fa";

const OrderTitleComponent = () => {
  return (
    <div className={css.outerDiv}>
      <h1 className={css.title}>Krupa Mess & Tiffins</h1>
      <div className={css.innerDiv}>
        <div className={css.left}>
          <div className={css.specials}>
            South Indian, Chinese, North Indian, Sichuan, Pizza
          </div>
          <div className={css.address}>Abids, Pune</div>
          <div className={css.timings}>
            <span className={css.opORclo}>Open now -</span>
            <span className={css.time}>10am - 11pm (Today)</span>
            <span className={css.infoIconBox}>
              <img className={css.infoIcon} src={infoIcon} alt="Info" />
              <div className={css.infoTooltip}>
                <div className={css.ttil}>Opening Hours</div>
                <div className={css.ttim}>
                  Mon-Sun: <span className={css.ctim}>11:30am-10:30pm</span>
                </div>
              </div>
            </span>
          </div>

          {/* Button Group */}
          <div className={css.buttonGroup}>
            <button className={css.actionButton}>
              <FaDirections className={css.icon} />
              Book a Table
            </button>
            <button className={css.actionButton}>
              <FaShareAlt className={css.icon} />
              Share
            </button>
            <button className={css.actionButton}>
              <FaCommentDots className={css.icon} />
              Reviews
            </button>
          </div>
        </div>
        <div className={css.right}>
          <RatingUtil rating="4.1" count="601" txt="Dining Reviews" />
          <RatingUtil rating="3.6" count="37.3k" txt="Delivery Reviews" />
        </div>
      </div>
    </div>
  );
};

export default OrderTitleComponent;
