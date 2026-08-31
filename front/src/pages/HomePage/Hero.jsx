import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAsset } from '@/assets';

// 닉네임#태그 유효성 검사 
const isValidRiotId = (input) => /^.+#.+$/.test(input.trim());

export default function Hero() {
  const heroImage = getAsset('hero', 'home');
  const navigate = useNavigate();

  const [searchTerm, setSearchTerm] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [showErrorToast, setShowErrorToast] = useState(false);

  // 팝업(토스트) 노출 및 자동 닫힘 처리
  const triggerErrorToast = (msg) => {
    setErrorMessage(msg);
    setShowErrorToast(true);
    setTimeout(() => {
      setShowErrorToast(false);
    }, 3000);
  };

  const handleSearch = () => {
    const trimmed = searchTerm.trim();

    if (!trimmed) {
      triggerErrorToast('검색어를 입력해 주세요.');
      return;
    }

    if (!isValidRiotId(trimmed)) {
      triggerErrorToast('올바른 형식으로 입력해 주세요. ( ex. 뇽따까리#0208 )');
      return;
    }

    setShowErrorToast(false);

    // 선수 개인 전적 페이지로 이동
    navigate('/players/example/0000');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <>
      <section className="hero" style={heroImage ? { backgroundImage: `url(${heroImage})` } : undefined}>
        <div className="hero-overlay" />

        <div className="hero-content">
          <h1 className="hero-headline display">
            데이터로<br /><span className="hi-accent">승리를 설계</span>하다
          </h1>
          <p className="hero-sub">
            상대 팀의 공개 데이터를 자동 분석하고,<br />우리 팀에 최적화된 전략을 제안합니다.
          </p>

          <div className="hero-center-group">
            {showErrorToast && (
              <div className="search-error-toast">
                {errorMessage}
              </div>
            )}

            {/* 검색 영역 */}
            <div className="hero-search-row">
              <input
                className="hero-search-input"
                placeholder="상대 팀명 또는 팀원 라이엇 ID (예: 닉네임#태그)"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyDown={handleKeyDown}
              />
              <button type="button" className="btn-search" onClick={handleSearch}>
                SEARCH
              </button>
            </div>

            <div className="feature-pills">
              <span className="feature-pill">
                정확한 승률 예측
              </span>
              <span className="feature-pill">
                AI 전술 분석
              </span>
              <span className="feature-pill">
                맞춤 전략 제안
              </span>
            </div>
          </div>
        </div>
      </section>

      <div className="stats-bar">
        <div className="stats-bar-content">
          <div className="stat-item">
            <span className="stat-value">124,800+</span>
            <span className="stat-label">분석된 매치 데이터</span>
          </div>
          <div className="stat-divider" />
          <div className="stat-item">
            <span className="stat-value">98.2%</span>
            <span className="stat-label">전술 분석 만족도</span>
          </div>
          <div className="stat-divider" />
          <div className="stat-item">
            <span className="stat-value">3 초</span>
            <span className="stat-label">평균 리포트 생성 시간</span>
          </div>
        </div>
      </div>
    </>
  );
}