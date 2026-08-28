import EmptyImageBox from '../common/EmptyImageBox';
import DropdownSelect from '../common/DropdownSelect';
import ComboBlock from './ComboBlock';

/**
 * data: mapInfo mock shape (selectedMap, mapWinRate, atkWinRate, defWinRate,
 *   preferredSites:{A,B,center}, avgSpikePlantTime, matchSample, combos, comboAce, comboWeakness)
 */
export default function MapInfoBlock({ data, onMapChange }) {
  const items = [
    { label: '맵 승률', value: `${data.mapWinRate}%` },
    { label: '공격 승률', value: `${data.atkWinRate}%` },
    { label: '수비 승률', value: `${data.defWinRate}%` },
    {
      label: '선호 사이트',
      value: `A ${data.preferredSites.A}% · B ${data.preferredSites.B}%`,
      sub: `센터 ${data.preferredSites.center}%`,
    },
    { label: '평균 스파이크 설치 시간', value: `${data.avgSpikePlantTime}초` },
    { label: '경기 표본', value: `${data.matchSample}경기` },
  ];

  return (
    <div className="analysis-row">
      <div className="analysis-row-head">
        <h5>② 맵 정보</h5>
        <DropdownSelect icon="🗺" label={data.selectedMap} onClick={onMapChange} />
      </div>
      <div className="map-analysis-body">
        <EmptyImageBox label={`선택한 맵 이미지\n영역 (220×220)`} className="map-image-box" />
        <div className="stat-inline-grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
          {items.map((item) => (
            <div className="stat-inline" key={item.label}>
              <div className="lbl">{item.label}</div>
              <div className="val" style={item.label === '선호 사이트' ? { fontSize: 14 } : undefined}>
                {item.value}
              </div>
              {item.sub ? <div className="sub">{item.sub}</div> : null}
            </div>
          ))}
        </div>
      </div>
      <ComboBlock combos={data.combos} ace={data.comboAce} weakness={data.comboWeakness} />
    </div>
  );
}
