import React from 'react';
import styles from './style/button.module.css';

const Button = ({
  btnType,
  btnSize,
  btnStyle,
  children,
  disabled,
  handler,
  id,
  label,
}) => {
  if (handler) {
    return (
      <button
        aria-label={label}
        className={`
          ${styles.button} 
          ${btnStyle ? styles[btnStyle] : ''} 
          ${btnSize ? styles[btnSize] : ''} 
          ${btnType ? styles[btnType] : ''}
        `}
        id={id}
        onClick={() => handler()}
        type="button"
        disabled={disabled}
      >
        { children }
      </button>
    );
  }
  return (
    <div
      aria-label={label}
      className={`
        ${styles.button} 
        ${btnStyle ? styles[btnStyle] : ''} 
        ${btnSize ? styles[btnSize] : ''} 
        ${btnType ? styles[btnType] : ''}
      `}
      id={id}
    >
      { children }
    </div>
  );
};

export default Button;
