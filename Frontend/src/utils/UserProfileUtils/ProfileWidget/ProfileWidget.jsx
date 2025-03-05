import css from './ProfileWidget.module.css';
import rightArrowImg from '/icons/right-arrow.png';

let ProfileWidget = ({ name, tag, data }) => {
  return (
    <div className={css.outerDiv}>
      <div className={css.innerDiv}>
        <div className={css.body}>
          {/* <div className={css.detBox2}></div> */}
        </div>
      </div>
    </div>
  );
};

export default ProfileWidget;
