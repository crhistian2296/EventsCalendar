import styles from './Header.module.less';

export const Header = () => {
  return (
    <div className={styles.header}>
      <span className={styles.headerText}>Events</span>Calendar
    </div>
  );
};
