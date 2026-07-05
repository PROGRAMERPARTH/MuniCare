import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Mail, Lock, Eye, EyeOff, Zap, ArrowRight } from 'lucide-react';
import { useAuthStore, demoUsers } from '../../stores/authStore';
import type { UserRole } from '../../types/user';

export default function LoginPage() {
  const navigate = useNavigate();
  const { login, setLoading } = useAuthStore();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [selectedRole, setSelectedRole] = useState<UserRole>('citizen');
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoggingIn(true);
    setLoading(true);

    // Simulate API call
    await new Promise((r) => setTimeout(r, 1200));

    login(demoUsers[selectedRole]);
    setIsLoggingIn(false);
    navigate(`/${selectedRole}`);
  };

  const handleDemoLogin = async (role: UserRole) => {
    setSelectedRole(role);
    setIsLoggingIn(true);
    setLoading(true);

    await new Promise((r) => setTimeout(r, 800));

    login(demoUsers[role]);
    setIsLoggingIn(false);
    navigate(`/${role}`);
  };

  return (
    <div className="auth-page">
      {/* Hero Section */}
      <div className="auth-hero">
        <div className="auth-particles">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="auth-particle" />
          ))}
        </div>

        <div className="auth-hero-content">
          <div className="auth-hero-logo">
            <Zap size={32} />
          </div>
          <h1>
            Smart <span>Municipal</span><br />AI Platform
          </h1>
          <p>
            Transforming city governance with AI-powered intelligence.
            Register complaints, track resolutions, and make your city smarter.
          </p>

          <div className="auth-hero-stats">
            <div className="auth-hero-stat">
              <div className="auth-hero-stat-value">8,435</div>
              <div className="auth-hero-stat-label">Complaints Resolved</div>
            </div>
            <div className="auth-hero-stat">
              <div className="auth-hero-stat-value">92%</div>
              <div className="auth-hero-stat-label">Resolution Rate</div>
            </div>
            <div className="auth-hero-stat">
              <div className="auth-hero-stat-value">4.2</div>
              <div className="auth-hero-stat-label">Satisfaction</div>
            </div>
          </div>
        </div>
      </div>

      {/* Form Section */}
      <div className="auth-form-section">
        <div className="auth-form-container">
          <div className="auth-form-header">
            <h2>Welcome back 👋</h2>
            <p>Sign in to your municipal account</p>
          </div>

          {/* Role Selector */}
          <div style={{ marginBottom: 'var(--space-6)' }}>
            <label style={{ fontSize: 'var(--text-sm)', fontWeight: 600, color: 'var(--text-secondary)', display: 'block', marginBottom: 'var(--space-2)' }}>
              Select your role
            </label>
            <div className="role-selector">
              {[
                { role: 'citizen' as UserRole, icon: '👤', name: 'Citizen', desc: 'File & track complaints' },
                { role: 'officer' as UserRole, icon: '👮', name: 'Officer', desc: 'Manage field tasks' },
                { role: 'admin' as UserRole, icon: '🏛️', name: 'Admin', desc: 'City-wide oversight' },
              ].map(({ role, icon, name, desc }) => (
                <div
                  key={role}
                  className={`role-card ${selectedRole === role ? 'selected' : ''}`}
                  onClick={() => setSelectedRole(role)}
                >
                  <div className="role-card-icon">
                    <span style={{ fontSize: 24 }}>{icon}</span>
                  </div>
                  <div className="role-card-name">{name}</div>
                  <div className="role-card-desc">{desc}</div>
                </div>
              ))}
            </div>
          </div>

          <form className="auth-form" onSubmit={handleLogin}>
            <div className="input-group">
              <label>Email Address</label>
              <div className="auth-input-wrapper">
                <Mail size={16} className="auth-input-icon" />
                <input
                  type="email"
                  className="input"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={{ paddingLeft: 40 }}
                />
              </div>
            </div>

            <div className="input-group">
              <label>Password</label>
              <div className="auth-input-wrapper">
                <Lock size={16} className="auth-input-icon" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  className="input"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  style={{ paddingLeft: 40 }}
                />
                <button
                  type="button"
                  className="auth-input-toggle"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            <div className="auth-form-row">
              <label className="auth-checkbox">
                <input type="checkbox" defaultChecked />
                Remember me
              </label>
              <a href="#" className="auth-forgot">Forgot password?</a>
            </div>

            <button
              type="submit"
              className="btn btn-primary auth-submit"
              disabled={isLoggingIn}
            >
              {isLoggingIn ? (
                <span className="spinner spinner-sm" style={{ borderTopColor: '#fff' }} />
              ) : (
                <>
                  Sign In
                  <ArrowRight size={18} />
                </>
              )}
            </button>
          </form>

          <div className="auth-divider" style={{ margin: 'var(--space-4) 0' }}>
            <span>Quick Demo Access</span>
          </div>

          <div className="auth-social">
            {[
              { role: 'citizen' as UserRole, label: '👤 Citizen Demo', color: '#3b5eff' },
              { role: 'officer' as UserRole, label: '👮 Officer Demo', color: '#09c2af' },
              { role: 'admin' as UserRole, label: '🏛️ Admin Demo', color: '#8b5cf6' },
            ].map(({ role, label }) => (
              <button
                key={role}
                className="auth-social-btn"
                onClick={() => handleDemoLogin(role)}
                disabled={isLoggingIn}
              >
                {label}
              </button>
            ))}
          </div>

          <div className="auth-footer">
            Don't have an account?{' '}
            <a href="#" onClick={(e) => { e.preventDefault(); navigate('/register'); }}>
              Sign up
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
