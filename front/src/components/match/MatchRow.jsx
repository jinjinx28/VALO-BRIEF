import EmptyImageBox from '../common/EmptyImageBox';

/** 개인 매치 히스토리 한 줄 (Frame 04) */
export default function MatchRow({ match }) {
  const isWin = match.result === 'win';
  return (
    <div className={`match-row ${isWin ? '' : 'lose'}`}>
      <div className="match-meta">
        <b>{match.mode}</b>{match.map}<br />{match.date} · {match.time}
      </div>
      <div className="match-mid">
        <EmptyImageBox className="match-agent" label="" />
        <div className="kda-block">
          {match.kills} / {match.deaths} / {match.assists}
          <div className="ratio">KDA {match.kda}</div>
        </div>
        <div className="round-score" style={{ color: isWin ? 'var(--win)' : 'var(--lose)' }}>
          {match.roundScore}
        </div>
      </div>
      <div className="match-right">
        <div>헤드샷<b>{match.hs}%</b></div>
        <div>ADR<b>{match.adr}</b></div>
        <div>ACS<b>{match.acs}</b></div>
      </div>
      <div className="expand-btn">▾</div>
    </div>
  );
}
