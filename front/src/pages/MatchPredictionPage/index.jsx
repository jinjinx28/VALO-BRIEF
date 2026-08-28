import { useEffect, useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { fetchPrediction } from '../../api/prediction';
import PredictBox from '../../components/predict/PredictBox';
import FilterTabs from '../../components/common/FilterTabs';
import { TeamProfileBody } from '../TeamProfilePage';
import { fetchTeamProfile } from '../../api/teams';
import AnalysisTab from './AnalysisTab';
import AiReportTab from './AiReportTab';

const TABS = ['통계', '분석', 'AI 리포트'];

export default function MatchPredictionPage() {
  const { teamTag } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const activeTab = TABS.includes(searchParams.get('tab')) ? searchParams.get('tab') : '분석';

  const [prediction, setPrediction] = useState(null);
  const [opponentTeam, setOpponentTeam] = useState(null);

  useEffect(() => {
    let active = true;
    fetchPrediction(teamTag).then((data) => { if (active) setPrediction(data); });
    fetchTeamProfile(teamTag).then((data) => { if (active) setOpponentTeam(data); });
    return () => { active = false; };
  }, [teamTag]);

  if (!prediction) return <p style={{ color: 'var(--text-2)' }}>불러오는 중...</p>;

  return (
    <>
      <PredictBox ourTeam={prediction.ourTeam} opponentTeam={prediction.opponentTeam} ourWinChance={prediction.ourWinChance} />

      <FilterTabs tabs={TABS} activeTab={activeTab} onChange={(tab) => setSearchParams({ tab })} />

      {activeTab === '통계' && opponentTeam ? <TeamProfileBody team={opponentTeam} /> : null}
      {activeTab === '분석' ? <AnalysisTab analysis={prediction.analysis} /> : null}
      {activeTab === 'AI 리포트' ? (
        <AiReportTab report={prediction.aiReport} opponentName={prediction.opponentTeam.name} />
      ) : null}
    </>
  );
}
