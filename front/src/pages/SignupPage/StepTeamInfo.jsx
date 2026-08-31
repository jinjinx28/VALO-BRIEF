import { useState } from 'react';
import { verifyRiotId } from '../../api/auth';
import riotLogo from '../../assets/images/logo/logo.png';

export default function StepTeamInfo({ form, onChange, onSubmit }) {
  const [verifying, setVerifying] = useState(false);
  const [verified, setVerified] = useState(false);
  const [errors, setErrors] = useState({});

  // 범용 라이엇 계정 로그인 URL (만료 파라미터 제거)
  const RIOT_AUTH_URL = 'https://auth.riotgames.com/authorize?client_id=play-valorant-web-prod&response_type=token&redirect_uri=https://playvalorant.com/opt_in&scope=openid+account';

  // Riot ID 검증 및 팝업 로그인
  async function handleVerify() {
    if (!form.teamName?.trim() || !form.teamTag?.trim()) {
      setErrors((prev) => ({ ...prev, riot: '팀 이름과 태그를 먼저 입력해 주세요.' }));
      return;
    }

    setVerifying(true);
    setErrors((prev) => ({ ...prev, riot: '' }));

    try {
      // 1. 기존 백엔드 API 검증
      const res = await verifyRiotId({ teamName: form.teamName, teamTag: form.teamTag });
      const isSuccess = !!res?.verified;

      if (isSuccess) {
        // 2. 화면 중앙 팝업창 연동
        const width = 480;
        const height = 640;
        const left = window.screenX + (window.innerWidth - width) / 2;
        const top = window.screenY + (window.innerHeight - height) / 2;

        const popup = window.open(
          RIOT_AUTH_URL,
          'RiotAuthPopup',
          `width=${width},height=${height},top=${top},left=${left},resizable=yes,scrollbars=yes`
        );

        // 3. 팝업 종료 감지 (창이 닫히면 인증 완료 상태 전환)
        const checkPopupClosed = setInterval(() => {
          if (!popup || popup.closed) {
            clearInterval(checkPopupClosed);
            setVerified(true);
            setVerifying(false);
          }
        }, 500);
      } else {
        setErrors((prev) => ({ ...prev, riot: 'Riot 계정을 찾을 수 없거나 인증에 실패했습니다.' }));
        setVerifying(false);
      }
    } catch (err) {
      setErrors((prev) => ({ ...prev, riot: '인증 중 오류가 발생했습니다.' }));
      setVerifying(false);
    }
  }

  // 최종 제출
  const handleFinalSubmit = () => {
    let newErrors = {};

    if (!form.teamName?.trim()) newErrors.teamName = '팀 이름을 입력해 주세요.';
    if (!form.teamTag?.trim()) newErrors.teamTag = '태그를 입력해 주세요.';
    if (!verified) newErrors.riot = 'Riot ID 인증을 완료해 주세요.';

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      onSubmit();
    }
  };

  return (
    <div className="auth-col">
      <div className="signup-progress-wrap">
        <div className="signup-progress">
          <div className="signup-progress-bar active" />
          <div className="signup-progress-bar active" />
        </div>
        <div className="signup-step-label right">STEP 2 / 2</div>
      </div>

      <div className="auth-title display">팀 정보 등록하기</div>

      {/* 팀 이름 */}
      <div className="field-block">
        <div className={`field ${errors.teamName ? 'is-invalid' : ''}`}>
          <input
            value={form.teamName || ''}
            onChange={(e) => {
              onChange('teamName', e.target.value);
              if (errors.teamName) setErrors((prev) => ({ ...prev, teamName: '' }));
            }}
            placeholder="team - name"
          />
        </div>
        {errors.teamName && <span className="field-error-msg">{errors.teamName}</span>}
      </div>

      {/* 태그 */}
      <div className="field-block">
        <div className={`field ${errors.teamTag ? 'is-invalid' : ''}`}>
          <input
            value={form.teamTag || ''}
            onChange={(e) => {
              onChange('teamTag', e.target.value);
              if (errors.teamTag) setErrors((prev) => ({ ...prev, teamTag: '' }));
            }}
            placeholder="# tag"
          />
        </div>
        {errors.teamTag && <span className="field-error-msg">{errors.teamTag}</span>}
      </div>

      {/* Riot ID 인증 영역 */}
      <div className="field-block">
        <div className="riot-verify-box">
          <span className={`riot-status-text ${verified ? 'is-verified' : ''}`}>
            {verified ? (
              <>
                RIOT ID 연동 완료
              </>
            ) : (
              'RIOT ID 인증 · 최초 1회 필요'
            )}
          </span>
          <button
            className={`btn-riot-red ${verified ? 'is-verified-btn' : ''}`}
            type="button"
            onClick={handleVerify}
            disabled={verifying || verified}
          >
            <img src={riotLogo} alt="Riot Logo" className="riot-logo-img" />
            <span>{verifying ? '인증 진행 중...' : verified ? '연동 완료' : 'Riot ID로 로그인'}</span>
          </button>
        </div>
        {errors.riot && <span className="field-error-msg">{errors.riot}</span>}
      </div>

      {/* 하단 안내 문구 */}
      <p className="auth-disclaimer">
        ※ 서비스 이용 및 전공·매치 데이터 분석을 위해 라이엇 계정 연동 정보가 수집될 수 있습니다.
      </p>

      {/* 제출 버튼 */}
      <button className="btn-auth-pill" type="button" onClick={handleFinalSubmit}>
        SIGNUP
      </button>
    </div>
  );
}