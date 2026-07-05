import { useState } from 'react';
import { AlertTriangle, MapPin, Send, Phone, Shield } from 'lucide-react';

const emergencyTypes = [
  { id: 'flood', icon: '🌊', label: 'Flood', color: '#3b82f6' },
  { id: 'fire', icon: '🔥', label: 'Fire', color: '#ef4444' },
  { id: 'collapse', icon: '🏚️', label: 'Building Collapse', color: '#f59e0b' },
  { id: 'pipeline', icon: '💧', label: 'Pipeline Burst', color: '#06b6d4' },
  { id: 'electric', icon: '⚡', label: 'Electric Hazard', color: '#8b5cf6' },
  { id: 'tree', icon: '🌳', label: 'Fallen Tree', color: '#22c55e' },
  { id: 'sewage', icon: '🚰', label: 'Sewage Overflow', color: '#0ea5e9' },
  { id: 'accident', icon: '🚗', label: 'Road Accident', color: '#dc2626' },
];

export default function EmergencyReport() {
  const [selected, setSelected] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async () => {
    await new Promise(r => setTimeout(r, 1500));
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="animate-fadeIn" style={{ textAlign: 'center', padding: 'var(--space-16) var(--space-8)' }}>
        <div style={{ width: 80, height: 80, borderRadius: '50%', background: 'var(--success-100)', color: 'var(--success-600)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto var(--space-4)', fontSize: 36 }}>✓</div>
        <h2 style={{ marginBottom: 'var(--space-2)' }}>Emergency Reported!</h2>
        <p style={{ color: 'var(--text-secondary)', maxWidth: 400, margin: '0 auto var(--space-4)' }}>
          Your emergency report has been submitted. Our team has been alerted and will respond immediately.
        </p>
        <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-tertiary)' }}>
          Ticket: <strong>EMR-2024-0892</strong> • Response time: ~15 minutes
        </p>
        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', marginTop: 'var(--space-6)' }}>
          <button className="btn btn-primary" onClick={() => { setSubmitted(false); setSelected(null); }}>
            Report Another
          </button>
          <a href="tel:112" className="btn btn-danger"><Phone size={16} /> Call 112</a>
        </div>
      </div>
    );
  }

  return (
    <div className="animate-fadeIn">
      <div className="page-header">
        <div className="flex items-center gap-3">
          <div style={{ width: 48, height: 48, borderRadius: '50%', background: 'var(--danger-100)', color: 'var(--danger-600)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <AlertTriangle size={24} />
          </div>
          <div>
            <h1 style={{ color: 'var(--danger-600)' }}>Emergency Report</h1>
            <p>For immediate threats to life or property. Response time: ~15 min</p>
          </div>
        </div>
      </div>

      <div className="card" style={{ borderColor: 'var(--danger-200)', marginBottom: 'var(--space-6)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: 'var(--space-2)', background: 'var(--danger-50)', borderRadius: 'var(--radius-lg)', marginBottom: 'var(--space-4)' }}>
          <Shield size={20} style={{ color: 'var(--danger-600)' }} />
          <span style={{ fontSize: 'var(--text-sm)', fontWeight: 600, color: 'var(--danger-700)' }}>
            For life-threatening emergencies, call 112 immediately
          </span>
        </div>

        <h3 style={{ marginBottom: 'var(--space-4)' }}>Select Emergency Type</h3>
        <div className="emergency-grid">
          {emergencyTypes.map((type) => (
            <div
              key={type.id}
              className={`emergency-card ${selected === type.id ? 'selected' : ''}`}
              onClick={() => setSelected(type.id)}
            >
              <div className="emergency-card-icon">{type.icon}</div>
              <span className="emergency-card-label">{type.label}</span>
            </div>
          ))}
        </div>
      </div>

      {selected && (
        <div className="card animate-slideUp" style={{ marginBottom: 'var(--space-4)' }}>
          <h3 style={{ marginBottom: 'var(--space-4)' }}>Location</h3>
          <div style={{ background: 'var(--bg-tertiary)', borderRadius: 'var(--radius-xl)', height: 180, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 'var(--space-4)', border: '1px solid var(--border-primary)' }}>
            <div style={{ textAlign: 'center', color: 'var(--text-tertiary)' }}>
              <MapPin size={32} style={{ margin: '0 auto 8px', color: 'var(--danger-500)' }} />
              <p style={{ fontWeight: 600, color: 'var(--text-primary)', fontSize: 'var(--text-sm)' }}>GPS Location Auto-Captured</p>
              <p style={{ fontSize: 'var(--text-xs)' }}>12.9352°N, 77.6245°E</p>
            </div>
          </div>
          <div className="input-group" style={{ marginBottom: 'var(--space-4)' }}>
            <label>Additional Details (Optional)</label>
            <textarea className="input textarea" placeholder="Describe the situation briefly..." rows={3} />
          </div>
          <button className="btn btn-danger btn-lg w-full animate-emergencyPulse" onClick={handleSubmit}>
            <Send size={18} /> Report Emergency Now
          </button>
        </div>
      )}
    </div>
  );
}
