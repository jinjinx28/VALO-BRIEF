import { Outlet } from 'react-router-dom';
import MainHeader from '../components/layout/MainHeader';
import Footer from '../components/layout/Footer';

/** 메인페이지 레이아웃 */
export default function MainLayout() {
  return (
    <div className="app-frame">
      <MainHeader />
      <Outlet />
      <Footer />
    </div>
  );
}