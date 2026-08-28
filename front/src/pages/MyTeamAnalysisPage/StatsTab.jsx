import DonutChart from '../../components/common/DonutChart';
import MiniRankTable from '../../components/common/MiniRankTable';
import MapWinrateList from '../TeamProfilePage/MapWinrateList';
import TeamMatchHistoryList from '../../components/match/TeamMatchHistoryList';

/** Frame 09 — 상대팀 전적 검색 바디를 재사용한 우리팀 버전 */
export default function StatsTab({ stats }) {
  const { recentSummary } = stats;
  return (
    <>
    <div className="summary-strip">
      <DonutChart winPct={recentSummary.winRate} size={90} />
      <div>
        <div className="summary-title">최근 20게임 전적</div>
        <div className="summary-wl">
          <span><span className="dot win" />{recentSummary.wins}승</span>
          <span><span className="dot lose" />{recentSummary.losses}패</span>
        </div>
      </div>
      <div className="summary-stats">
        <div className="summary-stat"><div className="lbl">평균 라운드 승</div><div className="val">{recentSummary.avgRoundWin}</div></div>
        <div className="summary-stat"><div className="lbl">평균 라운드 패</div><div className="val">{recentSummary.avgRoundLose}</div></div>
      </div>
    </div>
    <div className="mh-grid">
      <div>
        <div className="mh-box">
          <h5>팀 개인 순위 <span className="tag">최근 5게임</span></h5>
          <MiniRankTable players={stats.playerRanking} />
        </div>
        <MapWinrateList maps={stats.mapWinrates} />
      </div>
      <TeamMatchHistoryList matches={stats.matchHistory} total={10} title="팀 매치 히스토리" />
    </div>
    </>
  );
}
