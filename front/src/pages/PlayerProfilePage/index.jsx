import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchPlayerProfile } from '../../api/players';
import ProfileHeader from '../../components/profile/ProfileHeader';
import ModeStatCards from './ModeStatCards';
import RoleDistribution from './RoleDistribution';
import TopAgentsList from './TopAgentsList';
import MatchHistoryList from '../../components/match/MatchHistoryList';
import DonutChart from '../../components/common/DonutChart';
import LoadingText from '../../components/common/LoadingText';

export default function PlayerProfilePage() {
  const { riotId, tag } = useParams();
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    let active = true;
    fetchPlayerProfile(riotId, tag).then((data) => {
      if (active) setProfile(data);
    });
    return () => { active = false; };
  }, [riotId, tag]);

  if (!profile) return <LoadingText />;

  return (
    <>
      <ProfileHeader
        type="player"
        name={profile.nickname}
        tag={profile.tag}
        level={profile.level}
        title={profile.title}
        lastUpdated={profile.lastUpdated}
        onRefresh={() => fetchPlayerProfile(riotId, tag).then(setProfile)}
      />

      <div className="mode-tabs">
        <div className="mode-tab on">전체</div>
        <div className="mode-tab">경쟁전</div>
        <div className="mode-tab">일반</div>
        <div className="mode-tab">신속 플레이</div>
        <div className="mode-tab">데스매치</div>
      </div>

      <ModeStatCards modeStats={profile.modeStats} />

      <div className="mh-grid">
        <div>
          <div className="mh-box">
            <h5>최근 20게임 요약</h5>
            <DonutChart winPct={profile.recentSummary.winRate} />
            <div className="wl-legend">
              <span><span className="dot win" />{profile.recentSummary.wins}승</span>
              <span><span className="dot lose" />{profile.recentSummary.losses}패</span>
            </div>
            <div className="metric-row"><span>평균 K/D</span><b>{profile.recentSummary.avgKd}</b></div>
            <div className="metric-row"><span>평균 ADR</span><b>{profile.recentSummary.avgAdr}</b></div>
          </div>
          <RoleDistribution roles={profile.roleDistribution} />
          <TopAgentsList agents={profile.topAgents} />
        </div>

        <MatchHistoryList matches={profile.matchHistory} total={20} />
      </div>
    </>
  );
}
