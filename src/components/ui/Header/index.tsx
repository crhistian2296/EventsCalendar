import styles from './Header.module.less';

export const Header = () => {
  return (
    <div className={styles.header}>
      <h1>
        <span className={styles.headerText}>Events</span>Calendar
      </h1>
    </div>
  );
};
