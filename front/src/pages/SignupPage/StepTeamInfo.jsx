import { useState } from 'react';
import { verifyRiotId } from '../../api/auth';

export default function StepTeamInfo({ form, onChange, onSubmit }) {
  const [verifying, setVerifying] = useState(false);
  const [verified, setVerified] = useState(false);

  async function handleVerify() {
    setVerifying(true);
    try {
      const res = await verifyRiotId({ teamName: form.teamName, teamTag: form.teamTag });
      setVerified(!!res.verified);
    } finally {
      setVerifying(false);
    }
  }

  return (
    <div className="auth-col">
      <div className="signup-progress-wrap">
        <div className="signup-progress">
          <div className="signup-progress-bar" /> 
    <div className="signup-progress-bar active" /> 
        </div>
        <div className="signup-step-label right">STEP 2 / 2</div>
      </div>

      <div className="auth-title display">팀 정보 등록하기</div>

      <div className="field">
        <input
          value={form.teamName}
          onChange={(e) => onChange('teamName', e.target.value)}
          placeholder="team - name"
        />
      </div>
      <div className="field">
        <input
          value={form.teamTag}
          onChange={(e) => onChange('teamTag', e.target.value)}
          placeholder="# tag"
        />
      </div>
      
      <div className="riot-verify-box">
        <span className="riot-status-text">
          {verified ? '✅ RIOT ID 인증 완료' : 'RIOT ID 인증 · 최초 1회 필요'}
        </span>
        <button className="btn-riot" type="button" onClick={handleVerify} disabled={verifying}>
          <span>🎮</span> {verifying ? '확인 중...' : 'Riot ID로 로그인'}
        </button>
      </div>

      <p className="auth-disclaimer">
        ※ 서비스 이용 및 전공·매치 데이터 분석을 위해 라이엇 계정 연동 정보가 수집될 수 있습니다.
      </p>

      <button className="btn-auth-pill" type="button" onClick={onSubmit}>signup</button>
    </div>
  );
}