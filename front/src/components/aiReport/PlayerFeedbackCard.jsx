import EmptyImageBox from '../common/EmptyImageBox';

/** feedback: { name, role, acs, strength, weakness } - 우리팀 분석 AI리포트 탭 전용 */
export default function PlayerFeedbackCard({ feedback }) {
  return (
    <div className="ai-feedback-card">
      <EmptyImageBox className="ai-feedback-avatar" label="" />
      <div style={{ flex: 1 }}>
        <div className="ai-feedback-name">
          {feedback.name} <span className="tag">{feedback.role} · ACS {feedback.acs}</span>
        </div>
        <div className="ai-feedback-cols">
          <div>
            <div className="lbl" style={{ color: 'var(--win)' }}>강점</div>
            <p>{feedback.strength}</p>
          </div>
          <div>
            <div className="lbl" style={{ color: 'var(--lose)' }}>보완점</div>
            <p>{feedback.weakness}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
