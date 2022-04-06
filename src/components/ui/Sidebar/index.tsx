import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Sidebar.module.less';

export const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <button className={styles.btn}>
        <FontAwesomeIcon icon={faPlus} />
      </button>
      <div className={styles.sidebarEvent}></div>
    </div>
  );
};
