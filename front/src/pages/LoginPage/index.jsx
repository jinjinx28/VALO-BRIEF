import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { login } from '../../api/auth';

export default function LoginPage() {
  const navigate = useNavigate();
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    setError('');
    try {
      await login({ id, password });
      navigate('/my-team');
    } catch (err) {
      setError('로그인에 실패했습니다. 아이디/비밀번호를 확인해주세요.');
    }
  }

  return (
    <div className="auth-card">
      <div className="v-mark" style={{ width: 26, height: 22, marginBottom: 22 }}>
        <svg viewBox="0 0 26 22">
          <polygon points="0,0 8,0 13,12 18,0 26,0 15,22 11,22" fill="#FF4655" />
        </svg>
      </div>
      <div className="auth-title display">로그인</div>
      <p className="auth-desc">가입 시 등록한 ID와 비밀번호로 로그인하세요.</p>
      <form onSubmit={handleSubmit}>
        <div className="field">
          <label>ID</label>
          <input value={id} onChange={(e) => setId(e.target.value)} placeholder="아이디" />
        </div>
        <div className="field">
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="비밀번호"
          />
        </div>
        {error ? <p style={{ color: 'var(--lose)', fontSize: 12, marginBottom: 12 }}>{error}</p> : null}
        <button className="btn btn-solid btn-full" type="submit" style={{ marginTop: 6 }}>
          LOGIN
        </button>
      </form>
      <div className="auth-foot-link">
        팀 계정이 없으신가요? <Link to="/signup"><span>회원가입</span></Link>
      </div>
    </div>
  );
}
