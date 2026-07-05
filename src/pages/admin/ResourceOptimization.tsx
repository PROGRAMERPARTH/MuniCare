import { Users, Truck, Zap, Battery, MapPin } from 'lucide-react';

export default function ResourceOptimization() {
  const resources = [
    { id: 1, type: 'Field Officer', status: 'active', count: 310, total: 350, utilization: 88, icon: Users },
    { id: 2, type: 'Waste Trucks', status: 'active', count: 42, total: 50, utilization: 84, icon: Truck },
    { id: 3, type: 'Maintenance Vans', status: 'active', count: 18, total: 25, utilization: 72, icon: Zap },
    { id: 4, type: 'Equipment', status: 'standby', count: 145, total: 200, utilization: 72.5, icon: Battery },
  ];

  return (
    <div className="animate-fadeIn">
      <div className="page-header">
        <h1>Resource Optimization</h1>
        <p>AI-driven allocation of municipal assets and workforce</p>
      </div>

      <div className="dashboard-grid-4 mb-6">
        {resources.map((res, i) => (
          <div key={res.id} className="card animate-slideUp" style={{ animationDelay: `${i * 0.1}s` }}>
            <div className="flex items-center gap-3 mb-4">
              <div style={{ width: 40, height: 40, borderRadius: 'var(--radius-lg)', background: 'var(--primary-100)', color: 'var(--primary-600)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <res.icon size={20} />
              </div>
              <div>
                <h3 style={{ fontSize: 'var(--text-sm)', fontWeight: 700 }}>{res.type}</h3>
                <span className={`badge badge-${res.utilization > 85 ? 'warning' : 'success'} badge-dot`} style={{ fontSize: 10 }}>
                  {res.utilization > 85 ? 'High Usage' : 'Optimal'}
                </span>
              </div>
            </div>
            
            <div className="flex items-end justify-between mb-2">
              <div>
                <div style={{ fontSize: 'var(--text-2xl)', fontWeight: 800 }}>{res.count}</div>
                <div style={{ fontSize: 'var(--text-xs)', color: 'var(--text-tertiary)' }}>of {res.total} active</div>
              </div>
              <div style={{ fontSize: 'var(--text-lg)', fontWeight: 700, color: res.utilization > 85 ? 'var(--warning-600)' : 'var(--success-600)' }}>
                {res.utilization}%
              </div>
            </div>
            
            <div className="progress-bar">
              <div className={`progress-bar-fill ${res.utilization > 85 ? 'warning' : 'success'}`} style={{ width: `${res.utilization}%` }} />
            </div>
          </div>
        ))}
      </div>

      <div className="card">
        <h3 style={{ marginBottom: 'var(--space-4)' }}>AI Routing Suggestions</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
          <div style={{ padding: 'var(--space-4)', background: 'var(--bg-tertiary)', borderRadius: 'var(--radius-lg)', borderLeft: '4px solid var(--accent-500)' }}>
            <div className="flex items-start justify-between">
              <div>
                <h4 style={{ fontWeight: 700, marginBottom: 4 }}>Re-route Waste Trucks to Zone B</h4>
                <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)' }}>AI detected 30% higher volume of waste reports in Zone B over the last 48 hours.</p>
                <div className="flex gap-2 mt-2" style={{ fontSize: 'var(--text-xs)', color: 'var(--text-tertiary)' }}>
                  <span className="flex items-center gap-1"><MapPin size={12} /> Zone B</span>
                  <span className="flex items-center gap-1"><Zap size={12} /> +15% Efficiency</span>
                </div>
              </div>
              <button className="btn btn-accent btn-sm">Apply Route</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
