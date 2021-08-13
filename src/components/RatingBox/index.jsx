import React from 'react';
import Icon from '../../assets/Icon';
import Button from '../../elements/Button';
import styles from './style/ratingBox.module.css';

const RatingBox = ({
  decrement,
  increment,
  value
}) => (
  <div className={styles.counterField}>
    <div className={styles.counterField__actions}>
      <Button
        btnSize="small"
        handler={increment}
        disabled={Number(value) >= 10}
      >
        <Icon
          icon="ThumpsUp"
          fill={Number(value) >= 10 ? 'grey' : 'black'}
        />
      </Button>
      <p>{value}/10</p>
      <Button
        btnSize="small"
        handler={decrement}
        disabled={Number(value) <= 3}
      >
        <Icon
          icon="ThumpsDown"
          fill={Number(value) <= 3 ? 'grey' : 'black'}
        />
      </Button>
    </div>
  </div>
);

export default RatingBox;
