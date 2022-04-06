import { JsonCalendar } from 'json-calendar';
import { DaySchedule } from '../../DaySchedule';
import styles from './MonthSchedule.module.less';

const MonthSchedule = () => {
  const calendar = new JsonCalendar({ today: new Date(2022, 0, 23) });
  // console.log(calendar);

  return (
    <div className={styles.monthView}>
      MonthSchedule
      <table className={styles.tableDays}>
        <thead>
          <tr>
            <th className={styles.calendarHeader}>Sun</th>
            <th className={styles.calendarHeader}>Mon</th>
            <th className={styles.calendarHeader}>Tues</th>
            <th className={styles.calendarHeader}>Wed</th>
            <th className={styles.calendarHeader}>Thurs</th>
            <th className={styles.calendarHeader}>Fri</th>
            <th className={styles.calendarHeader}>Sat</th>
          </tr>
        </thead>
        <tbody>
          {calendar.weeks.map(week => (
            <tr key={window.crypto.randomUUID()}>
              {week.map(day => (
                // <th key={day.id} className={styles.day}>
                //   {`Day of the week: ${day.day}`}
                // </th>
                <DaySchedule key={day.id} date={day.day} />
              ))}
            </tr>
          ))}
          {/* <tr>
            <th className={styles.day}>New Day</th>
            <th className={styles.day}>New Day</th>
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
            <th className={styles.day}>New Day</th>
            <th className={styles.day}>New Day</th>
          </tr>
          <tr>
            <th className={styles.day}>New Day</th>
            <th className={styles.day}>New Day</th>
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
            <th className={styles.day}>New Day</th>
            <th className={styles.day}>New Day</th>
          </tr>
          <tr>
            <th className={styles.day}>New Day</th>
            <th className={styles.day}>New Day</th>
            <th className={styles.day}>New Day</th>
            <th className={styles.day}>New Day</th>
            <th className={styles.day}>New Day</th>
            <th className={styles.day}>New Day</th>
            <th className={styles.day}>New Day</th>
          </tr> */}
        </tbody>
      </table>
    </div>
  );
};

export default MonthSchedule;
