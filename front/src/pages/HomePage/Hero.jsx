import { getAsset } from '@/assets';

export default function Hero() {
  const heroImage = getAsset('hero', 'home');

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
            {/* 검색 영역 */}
            <div className="hero-search-row">
              <input className="hero-search-input" placeholder="상대 팀명 또는 팀원 라이엇 ID" />
              <button type="button" className="btn-search">SEARCH</button>
            </div>

            {/* 하단 알약 버튼 3개 */}
            <div className="feature-pills">
              <div className="feature-pill">정확한 승률 예측</div>
              <div className="feature-pill">AI 전술 분석</div>
              <div className="feature-pill">맞춤 전략 제안</div>
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