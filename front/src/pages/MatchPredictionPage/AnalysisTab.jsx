import AnalysisSection from '../../components/analysis/AnalysisSection';

export default function AnalysisTab({ analysis }) {
  // 실제로는 맵 선택 시 fetchPrediction(teamTag, { map }) 등으로 재조회해서
  // analysis를 갱신하면 됩니다. 지금은 mock 데이터를 그대로 넘깁니다.
  return <AnalysisSection analysis={analysis} onMapChange={() => {}} ourLabel="우리팀" theirLabel="상대팀" />;
}
