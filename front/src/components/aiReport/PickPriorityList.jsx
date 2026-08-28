import EmptyImageBox from '../common/EmptyImageBox';

export default function PickPriorityList({ picks }) {
  return (
    <>
      <div className="ai-strength-title">추천 밴/픽 우선순위</div>
      <div className="ai-pick-list">
        {picks.map((p, i) => (
          <div className="ai-pick-row" key={p.agent}>
            <div className="ai-pick-rank">{String(i + 1).padStart(2, '0')}</div>
            <EmptyImageBox className="ai-pick-thumb" folder="agents" assetKey={p.agent} label="" />
            <div className="ai-pick-name">{p.agent}</div>
            <div className="ai-pick-reason">{p.reason}</div>
          </div>
        ))}
      </div>
    </>
  );
}