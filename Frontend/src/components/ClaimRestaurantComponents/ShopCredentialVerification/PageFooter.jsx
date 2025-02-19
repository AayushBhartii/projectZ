import React from "react";
import BlueBtn from "../../../utils/Buttons/BlueBtn/BlueBtn";
import css from "./PageFooter.module.css";

const PageFooter = ({ handleSubmit, notifyBox }) => {
  return (
    <div className={css.footer}>
      {notifyBox}
      <BlueBtn text="Submit" handleClick={handleSubmit} />
    </div>
  );
};

export default PageFooter;
