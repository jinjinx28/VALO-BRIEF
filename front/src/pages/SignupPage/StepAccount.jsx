export default function StepAccount({ form, onChange, onNext }) {
  return (
    <div className="auth-card">
      <div className="auth-steps">
        <div className="step-chip active" />
        <div className="step-chip" />
      </div>
      <div className="auth-title display">
        계정 만들기 <span style={{ color: 'var(--text-3)', fontSize: 14 }}>STEP 1 / 2</span>
      </div>
      <p className="auth-desc">이메일과 비밀번호로 VALO-BRIEF 계정을 생성합니다.</p>
      <div className="field">
        <label>Email</label>
        <input value={form.email} onChange={(e) => onChange('email', e.target.value)} placeholder="team@example.com" />
      </div>
      <div className="field">
        <label>ID</label>
        <input value={form.id} onChange={(e) => onChange('id', e.target.value)} placeholder="사용하실 아이디" />
      </div>
      <div className="field">
        <label>Password</label>
        <input type="password" value={form.password} onChange={(e) => onChange('password', e.target.value)} placeholder="8자 이상 입력" />
      </div>
      <div className="field">
        <label>Confirm Password</label>
        <input type="password" value={form.confirmPassword} onChange={(e) => onChange('confirmPassword', e.target.value)} placeholder="비밀번호 확인" />
      </div>
      <div className="checkbox-row">
        <input
          type="checkbox"
          checked={form.agree}
          onChange={(e) => onChange('agree', e.target.checked)}
          style={{ width: 16, height: 16 }}
        />
        개인정보 수집 및 이용에 동의합니다. (필수)
      </div>
      <button className="btn btn-solid btn-full" onClick={onNext} type="button">SIGN UP</button>
    </div>
  );
}
