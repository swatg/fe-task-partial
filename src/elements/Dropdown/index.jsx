import React, { useEffect, useRef, useState } from 'react';
// Assets
import Icon from '../../assets/Icon';
// Style
import styles from './style/dropdown.module.css';


function Dropdown({ children, label, value }) {
  const [open, setOpen] = useState(false);
  const filter = useRef(null);

  const handleClickOutside = (e) => {
    if (e.target) {
      if (filter && filter.current && filter.current.contains(e.target)) {
        return;
      }
    }
    setOpen(false);
  };

  useEffect(() => {
    if (open) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [open]);

  return (
    <div className={styles.container} ref={filter}>
      <div
        className={styles.toggle}
        onClick={() => setOpen(!open)}
        onKeyDown={() => setOpen(!open)}
        role="button"
        tabIndex={0}
      >
        <h6 className="subtitle2">{ label }</h6>
        <p>{ value }</p>
        <div className={`${styles.toggleIcon} ${open ? styles.toggleIcon_open : '' }`}>
          <Icon icon="ExpandMore" />
        </div>
      </div>
      <div className={`${styles.content} ${open ? styles.content_open : ''}`}>
        { children }
      </div>
    </div>
  );
}

export default Dropdown;
