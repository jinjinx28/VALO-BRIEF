import AnalysisSection from '../../components/analysis/AnalysisSection';

/** Frame 12 — 승부예측의 AnalysisTab과 완전히 동일한 컴포넌트를 재사용합니다. */
export default function TeamAnalysisTab({ analysis }) {
  return <AnalysisSection analysis={analysis} onMapChange={() => {}} ourLabel="우리팀" theirLabel="상대팀" />;
}
