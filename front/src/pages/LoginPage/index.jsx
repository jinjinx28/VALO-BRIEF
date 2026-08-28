import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { login } from '../../api/auth';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import '@/styles/pages/login.css';

export default function LoginPage() {
  const navigate = useNavigate();
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
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
    <div className="auth-col">
      <div className="auth-title-lg display">LOG IN</div>
      <form onSubmit={handleSubmit}>
        <div className="field">
          <input value={id} onChange={(e) => setId(e.target.value)} placeholder="id" />
        </div>
        <div className="field field-icon-wrap">
          <input
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="password"
          />
          <button
            type="button"
            className="field-icon-btn"
            onClick={() => setShowPassword((v) => !v)}
            aria-label="비밀번호 표시 전환"
          >
            {showPassword ? <FaEyeSlash className="eye-icon" /> : <FaEye className="eye-icon" />}
          </button>
        </div>
        <div className="checkbox-row">
          <input type="checkbox" />
          아이디 저장하기
        </div>
        {error ? <p className="form-error">{error}</p> : null}
        <button className="btn-auth-pill" type="submit">login</button>
      </form>
      <div className="auth-foot-link">
        계정이 없으신가요? · <Link to="/signup"><span>SIGNUP</span></Link>
      </div>
    </div>
  );
}
