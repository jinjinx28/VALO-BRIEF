import { Link } from 'react-router-dom';
import Logo from './Logo';
import Button from '../common/Button';

/** 비로그인 메인페이지 전용 헤더 (Frame 01) */
export default function MainHeader() {
  return (
    <header className="site-header">
      <Link to="/"><Logo /></Link>
      <div className="header-right">
        <Link to="/login"><Button variant="ghost">LOGIN</Button></Link>
        <Link to="/signup"><Button variant="solid">SIGNUP</Button></Link>
        <div className="hamburger"><span /><span /><span /></div>
      </div>
    </header>
  );
}
