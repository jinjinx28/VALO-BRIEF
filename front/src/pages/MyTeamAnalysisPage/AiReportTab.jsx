import AiReportCard from '../../components/aiReport/AiReportCard';
import PlayerFeedbackCard from '../../components/aiReport/PlayerFeedbackCard';

/** Frame 13 — 팀 전술 리포트 + 선수 개인별 피드백 */
export default function AiReportTab({ report, teamName }) {
  return (
    <>
      <div className="section-title" style={{ marginBottom: 14 }}>팀 전술 리포트</div>
      <AiReportCard
        report={report}
        heading={`AI 전술 리포트 — ${teamName}`}
        strengthTitle="팀 강점 3"
        weaknessTitle="팀 약점 3"
      />

      <div className="section-title" style={{ margin: '34px 0 14px' }}>선수 개인별 피드백</div>
      {report.playerFeedback.map((f) => (
        <PlayerFeedbackCard feedback={f} key={f.name} />
      ))}
    </>
  );
}
