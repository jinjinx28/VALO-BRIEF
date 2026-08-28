import { Link, useLocation } from 'react-router-dom';
import Logo from './Logo';

const NAV_ITEMS = [
  { label: '개인 검색', to: '/players/example/0000' },
  { label: '상대팀 전적 검색', to: '/teams/example' },
  { label: '승부 예측', to: '/predict/example' },
  { label: '우리팀 분석', to: '/my-team' },
];

/** 로그인 이후 공통 유틸 헤더 (Frame 04,06,07,08,09~13) */
export default function UtilHeader() {
  const location = useLocation();
  return (
    <header className="util-header">
      <Link to="/"><Logo size="sm" /></Link>
      <div className="util-search">🔍 통합 검색 — 닉네임#태그 / 팀명#태그</div>
      <nav className="nav-menu">
        {NAV_ITEMS.map((item) => (
          <Link
            key={item.label}
            to={item.to}
            className={location.pathname.startsWith(item.to.split('/').slice(0, 2).join('/')) ? 'on' : ''}
          >
            {item.label}
          </Link>
        ))}
        <Link to="/login">MY</Link>
      </nav>
    </header>
  );
}
