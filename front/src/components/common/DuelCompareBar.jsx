/**
 * 좌우 비교 바 (예: 타격대 vs 타격대, 우리팀 vs 상대팀 승률)
 */
export default function DuelCompareBar({ leftLabel, leftPct, rightLabel, rightPct }) {
  return (
    <div className="duel-compare">
      <div className="duel-side-label">
        {leftLabel}
        <b>{leftPct}%</b>
      </div>
      <div className="duel-bar">
        <div className="us" style={{ width: `${leftPct}%` }} />
        <div className="them" style={{ width: `${rightPct}%` }} />
      </div>
      <div className="duel-side-label" style={{ textAlign: 'right' }}>
        {rightLabel}
        <b>{rightPct}%</b>
      </div>
    </div>
  );
}
