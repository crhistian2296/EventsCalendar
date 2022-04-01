import styles from './MonthSchedule.module.less';

const MonthSchedule = () => {
  return (
    <div className={styles.monthView}>
      MonthSchedule
      <table className={styles.tableDays}>
        <tr>
          <th className={styles.day}>New Day</th>
          <th className={styles.day}>New Day</th>
          <th className={styles.day}>New Day</th>
          <th className={styles.day}>New Day</th>
          <th className={styles.day}>New Day</th>
        </tr>
        <tr>
          <th className={styles.day}>New Day</th>
          <th className={styles.day}>New Day</th>
          <th className={styles.day}>New Day</th>
          <th className={styles.day}>New Day</th>
          <th className={styles.day}>New Day</th>
        </tr>
        <tr>
          <th className={styles.day}>New Day</th>
          <th className={styles.day}>New Day</th>
          <th className={styles.day}>New Day</th>
          <th className={styles.day}>New Day</th>
          <th className={styles.day}>New Day</th>
        </tr>
        <tr>
          <th className={styles.day}>New Day</th>
          <th className={styles.day}>New Day</th>
          <th className={styles.day}>New Day</th>
          <th className={styles.day}>New Day</th>
          <th className={styles.day}>New Day</th>
        </tr>
        <tr>
          <th className={styles.day}>New Day</th>
          <th className={styles.day}>New Day</th>
          <th className={styles.day}>New Day</th>
          <th className={styles.day}>New Day</th>
          <th className={styles.day}>New Day</th>
        </tr>
      </table>
    </div>
  );
};

export default MonthSchedule;
