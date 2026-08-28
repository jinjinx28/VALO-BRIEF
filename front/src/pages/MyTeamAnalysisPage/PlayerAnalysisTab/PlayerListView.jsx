import EmptyImageBox from '../../../components/common/EmptyImageBox';

/** Frame 10 — ACS 오름차순 정렬된 선수 리스트 */
export default function PlayerListView({ players, onSelect }) {
  const sorted = [...players].sort((a, b) => a.acs - b.acs);
  return (
    <>
      <div className="user-select">👤 유저 선택 — 목록에서 선수를 눌러 상세 분석 보기 ▾</div>
      <div className="player-list-head">
        <span>선수</span><span>역할군</span><span>MOST AGENT</span><span>K/D</span><span>헤드샷</span><span>ADR</span><span>ACS ▲</span><span />
      </div>
      {sorted.map((p, i) => {
        const isTop = i === sorted.length - 1;
        return (
          <div
            className="player-row"
            key={p.id}
            style={isTop ? { borderColor: 'var(--accent)', cursor: 'pointer' } : { cursor: 'pointer' }}
            onClick={() => onSelect(p.id)}
          >
            <div className="player-id-cell">
              <EmptyImageBox className="player-avatar" label="" />
              <div>
                <div className="pid">{p.name}</div>
                <div className="ptag">#{p.tag}</div>
              </div>
            </div>
            <div className="player-role-badge">{p.role}</div>
            <div className="player-agent-cell">
              <EmptyImageBox className="player-agent-thumb" label="" />
              {p.mostAgent}
            </div>
            <div className="player-stat-val">{p.kd}</div>
            <div className="player-stat-val">{p.hs}%</div>
            <div className="player-stat-val">{p.adr}</div>
            <div className="player-stat-val" style={isTop ? { color: 'var(--accent)' } : undefined}>{p.acs}</div>
            <div className="player-row-arrow">→</div>
          </div>
        );
      })}
    </>
  );
}
