import { Globe, Search, BarChart3, Clock, Star, Users, TrendingUp } from 'lucide-react';
import { BarChart, Bar, PieChart, Pie, Cell, ResponsiveContainer, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { departments, wards, categoryBreakdown, monthlyTrends } from '../../services/mockData';

export default function TransparencyPortal() {
  const COLORS = categoryBreakdown.map(c => c.color);

  const deptRanking = [...departments].sort((a, b) => b.resolutionRate - a.resolutionRate);
  const wardRanking = [...wards].sort((a, b) => b.satisfactionScore - a.satisfactionScore);

  return (
    <div className="animate-fadeIn" style={{ maxWidth: 1200, margin: '0 auto', padding: 'var(--space-8)' }}>
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: 'var(--space-8)' }}>
        <div className="flex items-center justify-center gap-2 mb-2">
          <Globe size={28} style={{ color: 'var(--primary-500)' }} />
          <h1 style={{ fontSize: 'var(--text-3xl)', fontWeight: 900 }}>Transparency Portal</h1>
        </div>
        <p style={{ color: 'var(--text-secondary)', fontSize: 'var(--text-lg)' }}>
          Public accountability dashboard — Real-time municipal performance data
        </p>
      </div>

      {/* KPI Stats */}
      <div className="dashboard-grid-stats mb-8">
        {[
          { label: 'Total Complaints', value: '8,535', icon: BarChart3, color: '--primary-500' },
          { label: 'Resolution Rate', value: '85.2%', icon: TrendingUp, color: '--success-500' },
          { label: 'Avg. Response', value: '3.4 days', icon: Clock, color: '--warning-500' },
          { label: 'Citizen Satisfaction', value: '4.1/5', icon: Star, color: '--accent-500' },
          { label: 'Active Officers', value: '310', icon: Users, color: '--info-500' },
        ].map((stat, i) => (
          <div key={i} className="stat-card animate-slideUp" style={{ '--stat-color': `var(${stat.color})`, animationDelay: `${i * 0.08}s` } as React.CSSProperties}>
            <div className="stat-card-header">
              <span className="stat-card-label">{stat.label}</span>
              <div className="stat-card-icon" style={{ color: `var(${stat.color})`, background: `color-mix(in srgb, var(${stat.color}) 10%, transparent)` }}>
                <stat.icon size={20} />
              </div>
            </div>
            <div className="stat-card-value">{stat.value}</div>
          </div>
        ))}
      </div>

      <div className="dashboard-grid-2 mb-6">
        {/* Department Rankings */}
        <div className="card animate-slideUp" style={{ animationDelay: '0.3s' }}>
          <h3 style={{ fontSize: 'var(--text-base)', fontWeight: 700, marginBottom: 'var(--space-4)' }}>🏆 Department Performance</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
            {deptRanking.map((dept, i) => (
              <div key={dept.id} className="flex items-center gap-3">
                <span style={{ width: 24, height: 24, borderRadius: 'var(--radius-full)', background: i < 3 ? 'var(--gradient-accent)' : 'var(--bg-tertiary)', color: i < 3 ? '#fff' : 'var(--text-tertiary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, fontWeight: 700, flexShrink: 0 }}>
                  {i + 1}
                </span>
                <span style={{ fontSize: 18, flexShrink: 0 }}>{dept.icon}</span>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 'var(--text-sm)', fontWeight: 600 }}>{dept.shortName}</div>
                  <div className="progress-bar" style={{ height: 6, marginTop: 4 }}>
                    <div className="progress-bar-fill" style={{ width: `${dept.resolutionRate}%`, background: dept.color }} />
                  </div>
                </div>
                <span style={{ fontSize: 'var(--text-sm)', fontWeight: 700, color: dept.resolutionRate > 85 ? 'var(--success-600)' : 'var(--warning-600)' }}>
                  {dept.resolutionRate}%
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Ward Rankings */}
        <div className="card animate-slideUp" style={{ animationDelay: '0.4s' }}>
          <h3 style={{ fontSize: 'var(--text-base)', fontWeight: 700, marginBottom: 'var(--space-4)' }}>📊 Ward Rankings</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
            {wardRanking.slice(0, 8).map((ward, i) => (
              <div key={ward.id} className="flex items-center gap-3">
                <span style={{ width: 24, height: 24, borderRadius: 'var(--radius-full)', background: i < 3 ? 'var(--gradient-primary)' : 'var(--bg-tertiary)', color: i < 3 ? '#fff' : 'var(--text-tertiary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, fontWeight: 700, flexShrink: 0 }}>
                  {i + 1}
                </span>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 'var(--text-sm)', fontWeight: 600 }}>{ward.name}</div>
                  <div style={{ fontSize: 'var(--text-xs)', color: 'var(--text-tertiary)' }}>{ward.zone} Zone • {ward.resolvedComplaints}/{ward.totalComplaints} resolved</div>
                </div>
                <div className="flex items-center gap-1">
                  <Star size={14} style={{ color: 'var(--warning-400)' }} />
                  <span style={{ fontSize: 'var(--text-sm)', fontWeight: 700 }}>{ward.satisfactionScore}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Category Chart */}
      <div className="chart-card animate-slideUp" style={{ animationDelay: '0.5s' }}>
        <div className="chart-card-header">
          <div>
            <div className="chart-card-title">Complaint Categories</div>
            <div className="chart-card-subtitle">Distribution of complaints by type</div>
          </div>
        </div>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={categoryBreakdown} layout="vertical">
            <CartesianGrid strokeDasharray="3 3" stroke="var(--border-primary)" />
            <XAxis type="number" tick={{ fontSize: 11, fill: 'var(--text-tertiary)' }} />
            <YAxis type="category" dataKey="category" tick={{ fontSize: 11, fill: 'var(--text-tertiary)' }} width={100} />
            <Tooltip contentStyle={{ background: 'var(--bg-card)', border: '1px solid var(--border-primary)', borderRadius: 8, fontSize: 12 }} />
            <Bar dataKey="count" radius={[0, 4, 4, 0]}>
              {categoryBreakdown.map((entry, i) => (
                <Cell key={i} fill={COLORS[i]} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
