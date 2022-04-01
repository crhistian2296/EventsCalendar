import styles from './Sidebar.module.less';

export const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <button className={styles.btn}>+</button>
      <div className={styles.sidebarEvent}></div>
    </div>
  );
};
