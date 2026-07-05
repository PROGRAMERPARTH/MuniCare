import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, Mail, Lock, Phone, MapPin, ArrowRight, ArrowLeft, Zap } from 'lucide-react';
import { useAuthStore, demoUsers } from '../../stores/authStore';
import { wards } from '../../services/mockData';

export default function RegisterPage() {
  const navigate = useNavigate();
  const { login } = useAuthStore();
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    name: '', email: '', phone: '', password: '', confirmPassword: '',
    ward: '', address: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await new Promise((r) => setTimeout(r, 1000));
    login(demoUsers.citizen);
    navigate('/citizen');
  };

  return (
    <div className="auth-page">
      <div className="auth-hero">
        <div className="auth-particles">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="auth-particle" />
          ))}
        </div>
        <div className="auth-hero-content">
          <div className="auth-hero-logo"><Zap size={32} /></div>
          <h1>Join <span>Smart City</span></h1>
          <p>Register as a citizen to report issues, track complaints, and access municipal services.</p>
        </div>
      </div>

      <div className="auth-form-section">
        <div className="auth-form-container">
          <div className="auth-form-header">
            <h2>Create Account</h2>
            <p>Step {step} of 2 — {step === 1 ? 'Personal Information' : 'Location & Password'}</p>
          </div>

          {/* Stepper */}
          <div style={{ display: 'flex', gap: 8, marginBottom: 32 }}>
            {[1, 2].map((s) => (
              <div
                key={s}
                style={{
                  flex: 1, height: 4, borderRadius: 2,
                  background: s <= step ? 'var(--primary-500)' : 'var(--border-primary)',
                  transition: 'background 0.3s',
                }}
              />
            ))}
          </div>

          <form className="auth-form" onSubmit={handleSubmit}>
            {step === 1 ? (
              <>
                <div className="input-group">
                  <label>Full Name</label>
                  <div className="auth-input-wrapper">
                    <User size={16} className="auth-input-icon" />
                    <input className="input" placeholder="Your full name" value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })} style={{ paddingLeft: 40 }} />
                  </div>
                </div>
                <div className="input-group">
                  <label>Email Address</label>
                  <div className="auth-input-wrapper">
                    <Mail size={16} className="auth-input-icon" />
                    <input type="email" className="input" placeholder="you@example.com" value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })} style={{ paddingLeft: 40 }} />
                  </div>
                </div>
                <div className="input-group">
                  <label>Phone Number</label>
                  <div className="auth-input-wrapper">
                    <Phone size={16} className="auth-input-icon" />
                    <input className="input" placeholder="+91 XXXXX XXXXX" value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })} style={{ paddingLeft: 40 }} />
                  </div>
                </div>
                <button type="button" className="btn btn-primary auth-submit" onClick={() => setStep(2)}>
                  Continue <ArrowRight size={18} />
                </button>
              </>
            ) : (
              <>
                <div className="input-group">
                  <label>Select Ward</label>
                  <select className="input select" value={form.ward} onChange={(e) => setForm({ ...form, ward: e.target.value })}>
                    <option value="">Choose your ward</option>
                    {wards.map((w) => (
                      <option key={w.id} value={w.name}>{w.name} ({w.zone})</option>
                    ))}
                  </select>
                </div>
                <div className="input-group">
                  <label>Address</label>
                  <div className="auth-input-wrapper">
                    <MapPin size={16} className="auth-input-icon" />
                    <input className="input" placeholder="Your residential address" value={form.address}
                      onChange={(e) => setForm({ ...form, address: e.target.value })} style={{ paddingLeft: 40 }} />
                  </div>
                </div>
                <div className="input-group">
                  <label>Password</label>
                  <div className="auth-input-wrapper">
                    <Lock size={16} className="auth-input-icon" />
                    <input type="password" className="input" placeholder="Create password" value={form.password}
                      onChange={(e) => setForm({ ...form, password: e.target.value })} style={{ paddingLeft: 40 }} />
                  </div>
                </div>
                <div style={{ display: 'flex', gap: 12 }}>
                  <button type="button" className="btn btn-outline" onClick={() => setStep(1)} style={{ flex: 1 }}>
                    <ArrowLeft size={16} /> Back
                  </button>
                  <button type="submit" className="btn btn-primary" style={{ flex: 2 }}>
                    Create Account <ArrowRight size={18} />
                  </button>
                </div>
              </>
            )}
          </form>

          <div className="auth-footer">
            Already have an account?{' '}
            <a href="#" onClick={(e) => { e.preventDefault(); navigate('/login'); }}>Sign in</a>
          </div>
        </div>
      </div>
    </div>
  );
}
