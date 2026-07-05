import { MapPin, Wifi, Filter } from 'lucide-react';
import { complaints, getStatusColor, getStatusLabel, getPriorityColor, getCategoryIcon, formatDateTime } from '../../services/mockData';

export default function LiveCityDashboard() {
  const activeComplaints = complaints.filter(c => ['submitted', 'assigned', 'in_progress'].includes(c.status));
  const critical = activeComplaints.filter(c => c.priority === 'critical');

  return (
    <div className="animate-fadeIn">
      <div className="page-header">
        <div className="flex items-center gap-3">
          <div style={{ width: 12, height: 12, borderRadius: '50%', background: 'var(--success-500)', animation: 'pulse 2s infinite' }} />
          <div>
            <h1>Live City Dashboard</h1>
            <p>Real-time complaint monitoring & city intelligence</p>
          </div>
        </div>
      </div>

      {/* KPI Bar */}
      <div className="kpi-row mb-6">
        {[
          { value: activeComplaints.length, label: 'Active Complaints' },
          { value: critical.length, label: 'Critical Alerts' },
          { value: '3.2 hrs', label: 'Avg Response Time' },
          { value: '87%', label: 'Resolution Rate' },
          { value: '42', label: 'Officers Active' },
        ].map((kpi, i) => (
          <div key={i} className="kpi-item animate-slideUp" style={{ animationDelay: `${i * 0.1}s` }}>
            <div className="kpi-value">{kpi.value}</div>
            <div className="kpi-label">{kpi.label}</div>
          </div>
        ))}
      </div>

      <div className="dashboard-grid-sidebar">
        {/* Map */}
        <div className="card animate-slideUp" style={{ animationDelay: '0.3s' }}>
          <div className="flex items-center justify-between mb-4">
            <h3 style={{ fontSize: 'var(--text-base)', fontWeight: 700 }}>
              <Wifi size={16} style={{ display: 'inline', marginRight: 8, color: 'var(--success-500)' }} />
              Live Complaint Map
            </h3>
            <button className="btn btn-ghost btn-sm"><Filter size={14} /> Filters</button>
          </div>
          <div style={{ background: 'var(--bg-tertiary)', borderRadius: 'var(--radius-xl)', height: 450, display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid var(--border-primary)', position: 'relative', overflow: 'hidden' }}>
            {/* Simulated map dots */}
            {activeComplaints.map((c, i) => (
              <div
                key={c.id}
                style={{
                  position: 'absolute',
                  left: `${15 + (i * 11) % 70}%`,
                  top: `${10 + (i * 17) % 70}%`,
                  width: c.priority === 'critical' ? 16 : 10,
                  height: c.priority === 'critical' ? 16 : 10,
                  borderRadius: '50%',
                  background: c.priority === 'critical' ? 'var(--danger-500)' : c.priority === 'high' ? 'var(--warning-500)' : 'var(--primary-500)',
                  animation: c.priority === 'critical' ? 'emergencyPulse 2s infinite' : 'pulse 3s infinite',
                  cursor: 'pointer',
                  zIndex: c.priority === 'critical' ? 2 : 1,
                }}
                title={c.title}
              />
            ))}
            <div style={{ textAlign: 'center', color: 'var(--text-tertiary)', zIndex: 0, opacity: 0.5 }}>
              <MapPin size={48} style={{ margin: '0 auto 12px' }} />
              <p style={{ fontWeight: 600 }}>Interactive City Map</p>
              <p style={{ fontSize: 'var(--text-xs)' }}>Connect Google Maps API for live view</p>
            </div>
          </div>
        </div>

        {/* Live Feed */}
        <div className="card animate-slideUp" style={{ animationDelay: '0.4s', maxHeight: 550, overflow: 'auto' }}>
          <h3 style={{ fontSize: 'var(--text-base)', fontWeight: 700, marginBottom: 'var(--space-4)' }}>
            📢 Live Feed
          </h3>
          <div className="activity-feed">
            {complaints.slice(0, 10).map((c, i) => (
              <div key={c.id} className="activity-item" style={{ animation: 'slideUp 0.3s ease-out both', animationDelay: `${i * 0.05}s` }}>
                <div
                  className="activity-icon"
                  style={{
                    background: `color-mix(in srgb, var(--${getStatusColor(c.status) === 'danger' ? 'danger' : getStatusColor(c.status)}-500) 10%, transparent)`,
                    color: `var(--${getStatusColor(c.status) === 'danger' ? 'danger' : getStatusColor(c.status)}-500)`,
                  }}
                >
                  {getCategoryIcon(c.category)}
                </div>
                <div className="activity-content">
                  <div className="activity-text">
                    <strong>{c.ticketNumber}</strong> — {c.title}
                  </div>
                  <div className="flex items-center gap-2" style={{ marginTop: 4 }}>
                    <span className={`badge badge-${getStatusColor(c.status)} badge-dot`} style={{ fontSize: 10 }}>
                      {getStatusLabel(c.status)}
                    </span>
                    <span className={`badge badge-${getPriorityColor(c.priority)}`} style={{ fontSize: 10 }}>
                      {c.priority}
                    </span>
                  </div>
                  <div className="activity-time">{formatDateTime(c.createdAt)}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
