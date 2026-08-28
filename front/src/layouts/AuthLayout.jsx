import { Link, Outlet } from 'react-router-dom';
import Logo from '../components/layout/Logo';

/** 로그인/회원가입 전용 레이아웃 (배경 일러스트 자리) */
export default function AuthLayout() {
  return (
    <div className="auth-wrap">
      <Link to="/" style={{ position: 'absolute', top: 24, left: 48 }}>
        <Logo />
      </Link>
      <Outlet />
    </div>
  );
}
