import React from 'react';
import css from './WhiteButton.module.css';

const WhiteButton = (props) => {
  const { txt, count, isActive, ...restProps } = props;

  return (
    <div className={`${css.btn} ${css.whiteButton} ${isActive ? css.activeButton : ''}`} {...restProps}>
      {txt} <span className={css.count}>({count})</span>
    </div>
  );
};

export default WhiteButton;