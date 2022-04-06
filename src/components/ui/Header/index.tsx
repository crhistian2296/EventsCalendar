import {
  faAngleLeft,
  faAngleRight,
  faBars
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Header.module.less';

export const Header = () => {
  return (
    <div className={styles.header}>
      <div>
        <FontAwesomeIcon icon={faBars} className={styles.menuButton} />
      </div>
      <h1>
        <span className={styles.headerText}>Events</span>Calendar
      </h1>
      <div className={styles.menuOptions}>
        <button className={styles.btn}>today</button>
        <div className={styles.swipeContainer}>
          <button className={(styles.swipeButton, styles.btn)}>
            <FontAwesomeIcon icon={faAngleLeft} />
          </button>
          <button className={(styles.swipeButton, styles.btn)}>
            <FontAwesomeIcon icon={faAngleRight} />
          </button>
        </div>
      </div>
    </div>
  );
};
