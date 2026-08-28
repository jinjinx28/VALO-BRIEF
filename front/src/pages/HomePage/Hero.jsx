import { getAsset } from '@/assets';

export default function Hero() {
  const heroImage = getAsset('hero', 'home');

  return (
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
          {/* 검색 영역: 인풋 박스와 버튼을 독립 요소로 배치 */}
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
  );
}