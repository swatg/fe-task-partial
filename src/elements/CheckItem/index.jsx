import React from 'react';
import Icon from '../../assets/Icon';
import styles from './style/checkItem.module.css';

const CheckItem = ({
  borderInset,
  checked,
  disabled,
  handler,
  label,
  name,
  value,
}) => (
  <button
    className={styles.listItem}
    data-border-inset={borderInset}
    disabled={disabled}
    name={name}
    onClick={handler ? (e) => handler(e) : () => null}
    type="button"
    value={value}
  >
    { checked ? (
      <Icon icon="CheckboxActive" fill="blue" />
    ) : (
      <Icon icon="Checkbox" fill="grey" />
    )}
    { label }
  </button>
);

export default CheckItem;
