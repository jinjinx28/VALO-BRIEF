/**
 * report: { intro, strengths:[], weaknesses:[], tactic }
 * heading: 카드 제목 (팀명 등 포함해서 커스터마이즈)
 * strengthTitle/weaknessTitle: "상대 팀 강점 3" 또는 "팀 강점 3" 등 문맥에 맞게
 */
export default function AiReportCard({ report, heading, strengthTitle = '강점 3', weaknessTitle = '약점 3' }) {
  return (
    <div className="ai-report-card">
      <div className="popup-head" style={{ marginBottom: 20 }}>
        <div className="bolt" />
        <div className="popup-title display" style={{ fontSize: 18 }}>{heading}</div>
      </div>
      <div className="ai-intro">{report.intro}</div>
      <div className="ai-cols">
        <div>
          <div className="ai-strength-title" style={{ color: 'var(--win)' }}>{strengthTitle}</div>
          {report.strengths.map((s, i) => (
            <div className="ai-list-item" key={i}>
              <span className="num">{String(i + 1).padStart(2, '0')}</span>{s}
            </div>
          ))}
        </div>
        <div>
          <div className="ai-strength-title" style={{ color: 'var(--lose)' }}>{weaknessTitle}</div>
          {report.weaknesses.map((w, i) => (
            <div className="ai-list-item" key={i}>
              <span className="num">{String(i + 1).padStart(2, '0')}</span>{w}
            </div>
          ))}
        </div>
      </div>
      <div className="ai-tactic-box">
        <b>전술 제안 —</b> {report.tactic}
      </div>
    </div>
  );
}
