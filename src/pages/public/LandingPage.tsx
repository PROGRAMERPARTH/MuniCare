import { useNavigate } from 'react-router-dom';
import { Zap, Shield, Brain, Users, ArrowRight, CheckCircle2, Star, Clock, FileText, BarChart3, Globe } from 'lucide-react';
import { departments } from '../../services/mockData';

export default function LandingPage() {
  const navigate = useNavigate();

  const features = [
    { icon: Brain, title: 'AI-Powered Analysis', desc: 'Gemini Vision AI automatically classifies complaints, detects severity, and routes to the right department.' },
    { icon: Shield, title: 'Predictive Intelligence', desc: 'Machine learning models forecast infrastructure failures, enabling proactive maintenance.' },
    { icon: Users, title: 'Citizen-First Design', desc: 'File complaints with a photo, track in real-time, and get AI-powered status updates.' },
    { icon: BarChart3, title: 'Live Analytics', desc: 'Real-time dashboards for commissioners with city-wide complaint heatmaps and department KPIs.' },
    { icon: Globe, title: 'Transparency Portal', desc: 'Public accountability dashboard showing resolution rates, department performance, and ward rankings.' },
    { icon: Zap, title: 'Smart Routing', desc: 'AI determines the optimal department, officer, and priority level for every complaint automatically.' },
  ];

  const stats = [
    { value: '8,535', label: 'Complaints Filed' },
    { value: '85%', label: 'Resolution Rate' },
    { value: '3.4', label: 'Avg Days to Resolve' },
    { value: '4.1/5', label: 'Citizen Satisfaction' },
  ];

  return (
    <div className="animate-fadeIn" style={{ background: 'var(--bg-primary)' }}>
      {/* Hero */}
      <div style={{
        background: 'var(--gradient-hero)',
        padding: 'var(--space-20) var(--space-8)',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
        minHeight: '90vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <div style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
          {[...Array(20)].map((_, i) => (
            <div key={i} style={{
              position: 'absolute',
              width: 3 + (i % 3) * 2,
              height: 3 + (i % 3) * 2,
              background: 'rgba(255,255,255,0.1)',
              borderRadius: '50%',
              left: `${(i * 5) % 100}%`,
              top: `${(i * 7) % 100}%`,
              animation: `float ${4 + (i % 4)}s ease-in-out infinite`,
              animationDelay: `${i * 0.3}s`,
            }} />
          ))}
        </div>

        <div style={{ position: 'relative', zIndex: 1, maxWidth: 800, margin: '0 auto' }}>
          <div style={{
            width: 80, height: 80, borderRadius: 'var(--radius-2xl)',
            background: 'var(--gradient-accent)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            margin: '0 auto var(--space-6)',
            boxShadow: '0 8px 32px rgba(9, 194, 175, 0.3)',
            animation: 'float 3s ease-in-out infinite',
          }}>
            <Zap size={40} color="#fff" />
          </div>

          <h1 style={{
            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
            fontWeight: 900,
            color: '#fff',
            lineHeight: 1.1,
            marginBottom: 'var(--space-4)',
          }}>
            Smart Municipal<br />
            <span style={{
              background: 'linear-gradient(135deg, var(--accent-300), var(--accent-500))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>AI Platform</span>
          </h1>

          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 'var(--text-xl)', maxWidth: 600, margin: '0 auto var(--space-8)', lineHeight: 1.6 }}>
            Transforming city governance with artificial intelligence. File complaints instantly, track resolutions in real-time, and make your city smarter.
          </p>

          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <button className="btn btn-accent btn-xl" onClick={() => navigate('/login')}>
              Get Started <ArrowRight size={20} />
            </button>
            <button className="btn btn-xl" style={{ background: 'rgba(255,255,255,0.1)', color: '#fff', border: '1px solid rgba(255,255,255,0.2)' }}
              onClick={() => navigate('/transparency')}>
              <Globe size={18} /> Transparency Portal
            </button>
          </div>

          {/* Stats */}
          <div style={{ display: 'flex', gap: 'var(--space-8)', justifyContent: 'center', marginTop: 'var(--space-12)', flexWrap: 'wrap' }}>
            {stats.map((stat, i) => (
              <div key={i} className="animate-slideUp" style={{ animationDelay: `${i * 0.15}s`, textAlign: 'center' }}>
                <div style={{ fontSize: 'var(--text-3xl)', fontWeight: 800, color: 'var(--accent-400)' }}>{stat.value}</div>
                <div style={{ fontSize: 'var(--text-xs)', color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features */}
      <div style={{ padding: 'var(--space-20) var(--space-8)', maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 'var(--space-12)' }}>
          <h2 style={{ fontSize: 'var(--text-3xl)', fontWeight: 800, marginBottom: 'var(--space-2)' }}>Powered by Intelligence</h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: 'var(--text-lg)' }}>How our AI platform transforms city governance</p>
        </div>
        <div className="grid grid-3" style={{ gap: 'var(--space-6)' }}>
          {features.map((feature, i) => (
            <div key={i} className="card card-interactive animate-slideUp" style={{ animationDelay: `${i * 0.1}s`, textAlign: 'center', padding: 'var(--space-8) var(--space-6)' }}>
              <div style={{ width: 64, height: 64, borderRadius: 'var(--radius-xl)', background: 'var(--gradient-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto var(--space-4)', color: '#fff' }}>
                <feature.icon size={28} />
              </div>
              <h3 style={{ fontSize: 'var(--text-lg)', fontWeight: 700, marginBottom: 'var(--space-2)' }}>{feature.title}</h3>
              <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', lineHeight: 1.6 }}>{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* How It Works */}
      <div style={{ padding: 'var(--space-20) var(--space-8)', background: 'var(--bg-secondary)' }}>
        <div style={{ maxWidth: 800, margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: 'var(--text-3xl)', fontWeight: 800, marginBottom: 'var(--space-2)' }}>How It Works</h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: 'var(--text-lg)', marginBottom: 'var(--space-12)' }}>Three simple steps to a smarter city</p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-8)', textAlign: 'left' }}>
            {[
              { step: '01', title: 'Snap & Report', desc: 'Take a photo of the issue — pothole, garbage, broken light. Our AI instantly classifies it.', icon: '📸' },
              { step: '02', title: 'AI Routes & Prioritizes', desc: 'Gemini AI determines department, severity, and urgency. The complaint reaches the right team in seconds.', icon: '🤖' },
              { step: '03', title: 'Track & Rate', desc: 'Get real-time updates as your complaint moves through resolution. Rate the service when done.', icon: '✅' },
            ].map((item, i) => (
              <div key={i} className="card animate-slideUp flex items-center gap-6" style={{ animationDelay: `${i * 0.15}s`, padding: 'var(--space-6)' }}>
                <div style={{ width: 72, height: 72, borderRadius: 'var(--radius-xl)', background: 'var(--gradient-card)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 36, flexShrink: 0 }}>
                  {item.icon}
                </div>
                <div>
                  <div style={{ fontSize: 'var(--text-xs)', color: 'var(--primary-500)', fontWeight: 700, marginBottom: 4 }}>STEP {item.step}</div>
                  <h3 style={{ fontSize: 'var(--text-xl)', fontWeight: 700, marginBottom: 4 }}>{item.title}</h3>
                  <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', lineHeight: 1.6 }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Departments */}
      <div style={{ padding: 'var(--space-16) var(--space-8)', maxWidth: 1200, margin: '0 auto' }}>
        <h2 style={{ fontSize: 'var(--text-2xl)', fontWeight: 800, textAlign: 'center', marginBottom: 'var(--space-8)' }}>Municipal Departments</h2>
        <div className="grid grid-4" style={{ gap: 'var(--space-4)' }}>
          {departments.map((dept, i) => (
            <div key={dept.id} className="card animate-slideUp" style={{ textAlign: 'center', padding: 'var(--space-4)', animationDelay: `${i * 0.06}s` }}>
              <div style={{ fontSize: 32, marginBottom: 8 }}>{dept.icon}</div>
              <div style={{ fontSize: 'var(--text-sm)', fontWeight: 700 }}>{dept.shortName}</div>
              <div style={{ fontSize: 'var(--text-xs)', color: 'var(--text-tertiary)', marginTop: 4 }}>
                {dept.resolutionRate}% resolution
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div style={{ padding: 'var(--space-20) var(--space-8)', background: 'var(--gradient-hero)', textAlign: 'center' }}>
        <h2 style={{ fontSize: 'var(--text-3xl)', fontWeight: 800, color: '#fff', marginBottom: 'var(--space-4)' }}>
          Ready to Make Your City Smarter?
        </h2>
        <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: 'var(--space-8)', fontSize: 'var(--text-lg)' }}>
          Join thousands of citizens using AI to improve their neighborhood
        </p>
        <button className="btn btn-accent btn-xl" onClick={() => navigate('/register')}>
          Create Free Account <ArrowRight size={20} />
        </button>
      </div>

      {/* Footer */}
      <footer style={{ padding: 'var(--space-8)', background: 'var(--neutral-950)', color: 'rgba(255,255,255,0.5)', textAlign: 'center', fontSize: 'var(--text-sm)' }}>
        <div style={{ marginBottom: 16 }}>
          <span style={{ fontWeight: 700, color: '#fff' }}>MuniCare AI</span> — Smart Municipal Decision Intelligence Platform
        </div>
        <p>© 2024 Municipal Corporation. All rights reserved. Powered by Google Cloud AI</p>
      </footer>
    </div>
  );
}
