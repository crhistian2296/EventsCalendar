import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';
import BlanckPage from './components/pages/BlanckPage';
import DaySchedule from './components/pages/DaySchedule';
import MonthSchedule from './components/pages/MonthSchedule';
import { Header } from './components/ui/Header/Header';
import { Sidebar } from './components/ui/Sidebar';

const App = () => {
  return (
    <div className='appContainer'>
      <HashRouter>
        <Header />
        <Sidebar />
        <div className='appContent'>
          <Routes>
            <Route path='day' element={<DaySchedule />} />
            <Route path='month' element={<MonthSchedule />} />
            <Route path='/' element={<BlanckPage />} />
            <Route path='*' element={<Navigate to='/' />} />
          </Routes>
        </div>
      </HashRouter>
    </div>
  );
};

export default App;
