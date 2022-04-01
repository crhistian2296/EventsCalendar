import { useState } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import MonthSchedule from '../components/pages/MonthSchedule';
import { Header } from '../components/ui/Header';
import { Sidebar } from '../components/ui/Sidebar';
import styles from './AppRouter.module.less';
/**
 *
 * @returns JSX Element
 */
export const AppRouter = () => {
  const [active, setActive] = useState(true);

  return (
    <div className={styles.appContainer}>
      <BrowserRouter>
        <Header />
        <div className={styles.appLayout}>
          {active && <Sidebar />}
          <Routes>
            <Route path='/' element={<MonthSchedule />} />
            <Route path='*' element={<Navigate to='/' />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
};
