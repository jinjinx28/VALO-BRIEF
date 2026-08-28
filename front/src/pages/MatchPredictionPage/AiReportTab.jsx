import PhaseRow from '../../components/aiReport/PhaseRow';
import PickPriorityList from '../../components/aiReport/PickPriorityList';

export default function AiReportTab({ report, opponentName }) {
  return (
    <div className="ai-report-card">
      <div className="popup-head" style={{ marginBottom: 20 }}>
        <div className="bolt" />
        <div className="popup-title display" style={{ fontSize: 18 }}>AI 전술 리포트 — {opponentName} 분석</div>
      </div>
      <div className="ai-intro">{report.intro}</div>
      <div className="ai-cols">
        <div>
          <div className="ai-strength-title" style={{ color: 'var(--win)' }}>상대 팀 강점 3</div>
          {report.strengths.map((s, i) => (
            <div className="ai-list-item" key={i}><span className="num">{String(i + 1).padStart(2, '0')}</span>{s}</div>
          ))}
        </div>
        <div>
          <div className="ai-strength-title" style={{ color: 'var(--lose)' }}>상대 팀 약점 3</div>
          {report.weaknesses.map((w, i) => (
            <div className="ai-list-item" key={i}><span className="num">{String(i + 1).padStart(2, '0')}</span>{w}</div>
          ))}
        </div>
      </div>
      <div className="ai-tactic-box"><b>전술 제안 —</b> {report.tactic}</div>
      <div style={{ marginTop: 24 }}>
        <PhaseRow phases={report.phases} />
      </div>
      <div style={{ marginTop: 24 }}>
        <PickPriorityList picks={report.pickPriority} />
      </div>
    </div>
  );
}
