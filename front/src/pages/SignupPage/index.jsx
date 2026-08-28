import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import StepAccount from './StepAccount';
import StepTeamInfo from './StepTeamInfo';
import { signup } from '../../api/auth';

const INITIAL_FORM = {
  email: '', id: '', password: '', confirmPassword: '', agree: false,
  teamName: '', teamTag: '',
};

export default function SignupPage() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [form, setForm] = useState(INITIAL_FORM);

  const handleChange = (key, value) => setForm((prev) => ({ ...prev, [key]: value }));

  async function handleSubmit() {
    await signup(form);
    navigate('/login');
  }

  return step === 1 ? (
    <StepAccount form={form} onChange={handleChange} onNext={() => setStep(2)} />
  ) : (
    <StepTeamInfo form={form} onChange={handleChange} onSubmit={handleSubmit} />
  );
}
