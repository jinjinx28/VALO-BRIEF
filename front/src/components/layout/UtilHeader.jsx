import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Logo from './Logo';
import SearchBox from '../search/SearchBox';
import EmptyImageBox from '../common/EmptyImageBox';
import { useAuth } from '../../context/AuthContext';
import { ROUTES } from '../../constants/routes';

const DEMO_TEAM_NAME = 'team-ascend';
const DEMO_TEAM_TAG = 'ASC';

const NAV_ITEMS = [
  { label: '개인 검색', to: '/players/example/0000' },
  { label: '상대팀 전적 검색', to: ROUTES.team(DEMO_TEAM_NAME, DEMO_TEAM_TAG) },
  { label: '승부 예측', to: ROUTES.predict(DEMO_TEAM_NAME, DEMO_TEAM_TAG) },
  { label: '우리팀 분석', to: ROUTES.myTeam },
];

export default function MainHeader() {
  const location = useLocation();
  const navigate = useNavigate();
  const { isAuthenticated, logout } = useAuth();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const isHomePage = location.pathname === '/';

  return (
    <header className="site-header">
      <Link to="/"><Logo size="sm" /></Link>

      {/* 메인 페이지(/)가 아닐 때만 헤더 검색창 표시 */}
      {!isHomePage && <SearchBox variant="header" />}

      {/* 1. 로그인 후: 상단 메뉴 & 프로필 드롭다운 */}
      {isAuthenticated ? (
        <div className="header-right">
          <nav className="nav-menu">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                className={location.pathname.startsWith(item.to.split('/')[1]) ? 'on' : ''}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="profile-menu">
            <button
              type="button"
              className="profile-avatar-btn"
              onClick={() => setDropdownOpen((prev) => !prev)}
              aria-label="프로필 메뉴"
            >
              <EmptyImageBox className="profile-avatar-img" label="" />
            </button>
            {dropdownOpen && (
              <div className="profile-dropdown">
                <button
                  type="button"
                  onClick={() => {
                    logout();
                    setDropdownOpen(false);
                    navigate('/');
                  }}
                >
                  로그아웃
                </button>
              </div>
            )}
          </div>
        </div>
      ) : (
        /* 2. 로그인 전: login/signup 버튼 + 햄버거 메뉴 */
        <div className="header-right">
          <Link to="/login" className="btn-pill">login</Link>
          <Link to="/signup" className="btn-pill">signup</Link>
          <button
            type="button"
            className="hamburger"
            aria-label="메뉴 열기"
            aria-expanded={sidebarOpen}
            onClick={() => setSidebarOpen(true)}
          >
            <span /><span /><span />
          </button>
        </div>
      )}

      {/* 로그인 전 햄버거 사이드바 */}
      {!isAuthenticated && sidebarOpen && (
        <>
          <div className="sidebar-overlay" onClick={() => setSidebarOpen(false)} />
          <nav className="sidebar-panel">
            <button
              type="button"
              className="sidebar-close"
              aria-label="메뉴 닫기"
              onClick={() => setSidebarOpen(false)}
            >
              ✕
            </button>
            <div className="sidebar-links">
              {NAV_ITEMS.map((item) => (
                <Link key={item.label} to={item.to} onClick={() => setSidebarOpen(false)}>
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>
        </>
      )}
    </header>
  );
}