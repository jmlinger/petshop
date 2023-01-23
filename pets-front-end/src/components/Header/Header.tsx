import * as React from 'react';
import styles from './Header.module.css';
import {FaCat, FaDog} from 'react-icons/fa';

export default function Header () {
  return (
    <header className={styles.header}>
      <h1><FaDog size='28px'/>Pet Shop<FaCat size='28px'/></h1>
    </header>
  );
}
