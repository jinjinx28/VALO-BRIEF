export default function StepAccount({ form, onChange, onNext }) {
  return (
    <div className="auth-col">
      <div className="auth-steps">
        <div className="step-chip active" />
        <div className="step-chip" />
      </div>
      <div className="auth-title display">
        SIGN UP <span className="step-label">STEP 1 / 2</span>
      </div>
      <div className="field">
        <input value={form.email} onChange={(e) => onChange('email', e.target.value)} placeholder="e - mail" />
      </div>
      <div className="field">
        <input value={form.id} onChange={(e) => onChange('id', e.target.value)} placeholder="id" />
      </div>
      <div className="field">
        <input type="password" value={form.password} onChange={(e) => onChange('password', e.target.value)} placeholder="password" />
      </div>
      <div className="field">
        <input
          type="password"
          value={form.confirmPassword}
          onChange={(e) => onChange('confirmPassword', e.target.value)}
          placeholder="confirm password"
        />
      </div>
      <div className="checkbox-row">
        <input
          type="checkbox"
          checked={form.agree}
          onChange={(e) => onChange('agree', e.target.checked)}
        />
        [필수] 이용약관 및 개인정보 수집·이용에 동의합니다.
      </div>
      <button className="btn-auth-pill" onClick={onNext} type="button">next &gt;</button>
    </div>
  );
}
