import EmptyImageBox from '../common/EmptyImageBox';
import SelectBox from '../common/SelectBox';

/**
 * type: 'player' | 'team'
 * player 모드: nickname, tag, level, title, onRefresh(전적 갱신 버튼)
 * team 모드: name, tag, division, ratingIconUrl
 * showSeasonSelect: 시즌/Act 선택박스 표시 여부 (개인검색/팀검색/우리팀분석에서 사용)
 */
export default function ProfileHeader({
  type = 'team',
  name,
  tag,
  level,
  title,
  division,
  lastUpdated,
  onRefresh,
  showSeasonSelect = true,
}) {
  return (
    <div className="profile-card">
      <EmptyImageBox
        label={type === 'player' ? 'AGENT' : `TEAM\nIMAGE`}
        className="avatar-frame"
      />
      <div>
        <div className="profile-name display">
          {name} <span className="tagline">#{tag}</span>
        </div>
        {type === 'player' ? (
          <div className="profile-meta">
            <span>LV. <b>{level}</b></span>
            <span>칭호 <b>{title}</b></span>
          </div>
        ) : (
          <div className="profile-meta">
            <span className="rank-chip">
              <EmptyImageBox label={`RATING\nICON`} className="rank-icon-img" />
              {division}
            </span>
          </div>
        )}
      </div>
      <div className="profile-side">
        {type === 'player' && onRefresh ? (
          <button className="refresh-btn" onClick={onRefresh} type="button">
            ⟳ 전적 갱신 <span className="time">{lastUpdated}</span>
          </button>
        ) : null}
        {showSeasonSelect ? (
          <>
            <SelectBox label="S2026" />
            <SelectBox label="Act 2" />
          </>
        ) : null}
      </div>
    </div>
  );
}
