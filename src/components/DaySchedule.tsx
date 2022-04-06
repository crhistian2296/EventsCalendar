import styles from './DaySchedule.module.less';

interface DayProps {
  date: number;
}

export const DaySchedule = ({ date }: DayProps) => {
  return (
    <th className={styles.day}>
      {`Day of the week: ${date}`}
      <div className={styles.eventsSet}>Array de eventos</div>
    </th>
  );
};
