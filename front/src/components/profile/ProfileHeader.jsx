import EmptyImageBox from '../common/EmptyImageBox';
import SelectBox from '../common/SelectBox';
import { ratingKey } from '@/utils/ratingKey';

/**
 * type: 'player' | 'team'
 * player 모드: nickname, tag, level, title, onRefresh(전적 갱신 버튼)
 * team 모드: name, tag, division, avatarKey(팀 로고 asset key, 기본값 = tag)
 * showSeasonSelect: 시즌/Act 선택박스 표시 여부
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
  avatarKey,
}) {
  return (
    <div className="profile-card">
      <EmptyImageBox
        folder={type === 'team' ? 'teams' : undefined}
        assetKey={type === 'team' ? (avatarKey ?? tag) : undefined}
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
              <EmptyImageBox
                folder="rating"
                assetKey={ratingKey(division)}
                label={`RATING\nICON`}
                className="rank-icon-img"
              />
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
