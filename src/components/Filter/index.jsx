import React, { useState } from 'react';
// Elements
import CheckItem from '../../elements/CheckItem';
import Dropdown from '../../elements/Dropdown';
import Button from '../../elements/Button';
// Style
import styles from './style/filter.module.css';

function Filter({list,  filterMovie,  clearMovie}) {
  
  const [checkedList, setCheckedList] = useState([]);

  function setCheckedFilter(status, checked) {
    let newState = [...checked];
    if (checked.includes(status)) {
      newState = newState.filter(item => item !== status);
      return newState;
    }
    return [...newState, status];
  }

  function  clearMovieFilter() {
    setCheckedList([]);
    clearMovie();
  }
  
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Dropdown
          label="Select"
          // Placing this in one line due to time constraint however, It would be good idea to have a util function for geeting value here
          value={Array.prototype.map.call(checkedList, function(item) { return item.name; }).join(", ")}
          >
          {list.map(status => (
            <CheckItem
              borderInset={1}
              checked={checkedList.includes(status)}
              key={status.id}
              label={status.name}
              name={status.name}v 
              value={status.name}
              handler={() => setCheckedList(setCheckedFilter(status, checkedList))}
            />
          ))}
        </Dropdown>
      </div>
      <div className={styles.actions}>
        <Button
          btnSize="small"
          btnStyle="secondary"
          disabled={checkedList.length === 0}
          handler={() =>  clearMovieFilter()}
        >
          Clear Filter
        </Button>
        <Button
          btnSize="small"
          btnStyle="secondary"
          disabled={checkedList.length === 0}
          handler={() =>  filterMovie(checkedList)}
        >
          Apply Filter
        </Button>
      </div>
    </div>
  );
}

export default Filter;
