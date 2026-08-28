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
    <div className="auth-card">
      <div className="auth-steps">
        <div className="step-chip active" />
        <div className="step-chip active" />
      </div>
      <div className="auth-title display">
        팀 정보 등록 <span style={{ color: 'var(--text-3)', fontSize: 14 }}>STEP 2 / 2</span>
      </div>
      <p className="auth-desc">팀 정보와 대표 RIOT ID 인증을 완료해주세요.</p>
      <div className="field">
        <label>Team Name</label>
        <input value={form.teamName} onChange={(e) => onChange('teamName', e.target.value)} placeholder="우리 팀 이름" />
      </div>
      <div className="field">
        <label>Team Tag</label>
        <input value={form.teamTag} onChange={(e) => onChange('teamTag', e.target.value)} placeholder="#TAG" />
      </div>
      <div className="riot-verify-box">
        <span>{verified ? '✅ RIOT ID 인증 완료' : 'RIOT ID 인증 · 최초 1회 필요'}</span>
        <button className="btn btn-ghost" type="button" onClick={handleVerify} disabled={verifying}>
          {verifying ? '확인 중...' : '인증하기'}
        </button>
      </div>
      <button className="btn btn-solid btn-full" type="button" onClick={onSubmit}>
        가입 완료
      </button>
    </div>
  );
}
