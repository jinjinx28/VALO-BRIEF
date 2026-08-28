
export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="eyebrow"><span className="chev-divider" />AI MATCH INTELLIGENCE</div>
        <h1 className="hero-headline display">
          데이터로<br /><span className="hi-accent">승리를 설계</span>하다
        </h1>
        <p className="hero-sub">
          상대 팀의 공개 데이터를 자동 분석하고,<br />우리 팀에 최적화된 전략을 제안합니다.
        </p>
        <div className="hero-search-row">
          <input className="hero-search-input" placeholder="상대 팀명 또는 팀원 라이엇 ID 검색" />
          <button className="btn-search">SEARCH</button>
        </div>
        <div className="feature-pills">
          <div className="feature-pill">승률 예측</div>
          <div className="feature-pill">AI 전술 분석</div>
          <div className="feature-pill">맞춤 전략 제안</div>
        </div>
      </div>
    </section>
  );
}
