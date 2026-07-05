import { useNavigate } from 'react-router-dom';
import {
  TrendingUp, TrendingDown, FileText, CheckCircle2,
  Clock, Users, AlertTriangle, ArrowRight, Sparkles,
  Activity, Building2,
} from 'lucide-react';
import { AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell, ResponsiveContainer, XAxis, YAxis, Tooltip, CartesianGrid, Legend } from 'recharts';
import { complaints, departments, monthlyTrends, categoryBreakdown, aiRecommendations } from '../../services/mockData';

export default function AdminDashboard() {
  const navigate = useNavigate();

  const totalComplaints = complaints.length;
  const resolved = complaints.filter(c => c.status === 'resolved').length;
  const active = complaints.filter(c => ['submitted', 'assigned', 'in_progress'].includes(c.status)).length;
  const critical = complaints.filter(c => c.priority === 'critical').length;

  const stats = [
    { label: 'Total Complaints', value: '8,535', icon: FileText, trend: '+12.3%', up: true, color: '--primary-500' },
    { label: 'Resolved', value: '7,251', icon: CheckCircle2, trend: '+8.7%', up: true, color: '--success-500' },
    { label: 'Active Cases', value: active.toString(), icon: Clock, trend: '-5.2%', up: true, color: '--warning-500' },
    { label: 'Critical Alerts', value: critical.toString(), icon: AlertTriangle, trend: '+2', up: false, color: '--danger-500' },
    { label: 'Avg. Resolution', value: '3.4d', icon: TrendingUp, trend: '-0.5 days', up: true, color: '--accent-500' },
    { label: 'Citizen Satisfaction', value: '4.1/5', icon: Users, trend: '+0.3', up: true, color: '--info-500' },
  ];

  const deptPerformance = departments.slice(0, 6).map(d => ({
    name: d.shortName,
    resolved: d.resolutionRate,
    satisfaction: d.satisfactionScore * 20,
    pending: d.pendingComplaints,
  }));

  const COLORS = categoryBreakdown.map(c => c.color);

  return (
    <div className="animate-fadeIn">
      <div className="page-header">
        <div className="flex items-center justify-between">
          <div>
            <h1>Commissioner Dashboard</h1>
            <p>City-wide performance overview & AI insights</p>
          </div>
          <div className="flex gap-2 hide-mobile">
            <button className="btn btn-outline btn-sm" onClick={() => navigate('/admin/reports')}>
              <FileText size={14} /> Generate Report
            </button>
            <button className="btn btn-primary btn-sm" onClick={() => navigate('/admin/live')}>
              <Activity size={14} /> Live City View
            </button>
          </div>
        </div>
      </div>

      {/* KPI Stats */}
      <div className="dashboard-grid-stats mb-6">
        {stats.map((stat, i) => (
          <div key={i} className="stat-card animate-slideUp" style={{ '--stat-color': `var(${stat.color})`, animationDelay: `${i * 0.08}s` } as React.CSSProperties}>
            <div className="stat-card-header">
              <span className="stat-card-label">{stat.label}</span>
              <div className="stat-card-icon" style={{ color: `var(${stat.color})`, background: `color-mix(in srgb, var(${stat.color}) 10%, transparent)` }}>
                <stat.icon size={20} />
              </div>
            </div>
            <div className="stat-card-value">{stat.value}</div>
            <div className={`stat-card-trend ${stat.up ? 'up' : 'down'}`}>
              {stat.up ? <TrendingUp size={14} /> : <TrendingDown size={14} />} {stat.trend}
            </div>
          </div>
        ))}
      </div>

      <div className="dashboard-grid-main mb-6">
        {/* Monthly Trend Chart */}
        <div className="chart-card animate-slideUp" style={{ animationDelay: '0.3s' }}>
          <div className="chart-card-header">
            <div>
              <div className="chart-card-title">Complaint Trends</div>
              <div className="chart-card-subtitle">Monthly complaints vs resolutions</div>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={280}>
            <AreaChart data={monthlyTrends}>
              <defs>
                <linearGradient id="colorComplaints" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3b5eff" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#3b5eff" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="colorResolved" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#22c55e" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#22c55e" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border-primary)" />
              <XAxis dataKey="month" tick={{ fontSize: 11, fill: 'var(--text-tertiary)' }} />
              <YAxis tick={{ fontSize: 11, fill: 'var(--text-tertiary)' }} />
              <Tooltip contentStyle={{ background: 'var(--bg-card)', border: '1px solid var(--border-primary)', borderRadius: 8, fontSize: 12 }} />
              <Area type="monotone" dataKey="complaints" stroke="#3b5eff" fill="url(#colorComplaints)" strokeWidth={2} name="Complaints" />
              <Area type="monotone" dataKey="resolved" stroke="#22c55e" fill="url(#colorResolved)" strokeWidth={2} name="Resolved" />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Category Breakdown */}
        <div className="chart-card animate-slideUp" style={{ animationDelay: '0.4s' }}>
          <div className="chart-card-header">
            <div>
              <div className="chart-card-title">By Category</div>
              <div className="chart-card-subtitle">Complaint distribution</div>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie data={categoryBreakdown} dataKey="count" nameKey="category" cx="50%" cy="50%" innerRadius={50} outerRadius={80} paddingAngle={3}>
                {categoryBreakdown.map((entry, i) => (
                  <Cell key={i} fill={COLORS[i]} />
                ))}
              </Pie>
              <Tooltip contentStyle={{ background: 'var(--bg-card)', border: '1px solid var(--border-primary)', borderRadius: 8, fontSize: 12 }} />
            </PieChart>
          </ResponsiveContainer>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, justifyContent: 'center' }}>
            {categoryBreakdown.slice(0, 5).map((item) => (
              <span key={item.category} style={{ fontSize: 11, display: 'flex', alignItems: 'center', gap: 4 }}>
                <span style={{ width: 8, height: 8, borderRadius: '50%', background: item.color, display: 'inline-block' }} />
                {item.category} ({item.percentage}%)
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Department Performance */}
      <div className="chart-card mb-6 animate-slideUp" style={{ animationDelay: '0.5s' }}>
        <div className="chart-card-header">
          <div>
            <div className="chart-card-title">Department Performance</div>
            <div className="chart-card-subtitle">Resolution rate and satisfaction by department</div>
          </div>
          <button className="btn btn-ghost btn-sm" onClick={() => navigate('/admin/departments')}>
            <Building2 size={14} /> View All
          </button>
        </div>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={deptPerformance}>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--border-primary)" />
            <XAxis dataKey="name" tick={{ fontSize: 11, fill: 'var(--text-tertiary)' }} />
            <YAxis tick={{ fontSize: 11, fill: 'var(--text-tertiary)' }} />
            <Tooltip contentStyle={{ background: 'var(--bg-card)', border: '1px solid var(--border-primary)', borderRadius: 8, fontSize: 12 }} />
            <Legend wrapperStyle={{ fontSize: 12 }} />
            <Bar dataKey="resolved" fill="#3b5eff" name="Resolution %" radius={[4, 4, 0, 0]} />
            <Bar dataKey="satisfaction" fill="#09c2af" name="Satisfaction %" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* AI Insights */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Sparkles size={20} style={{ color: 'var(--primary-500)' }} />
          <h3 style={{ fontSize: 'var(--text-lg)', fontWeight: 700 }}>AI Recommendations</h3>
          <span className="ai-badge"><Sparkles size={8} /> AI</span>
        </div>
        <button className="btn btn-ghost btn-sm" onClick={() => navigate('/admin/decisions')}>
          View All <ArrowRight size={14} />
        </button>
      </div>
      <div className="grid grid-2" style={{ gap: 'var(--space-4)' }}>
        {aiRecommendations.slice(0, 4).map((rec, i) => (
          <div key={rec.id} className="card card-gradient animate-slideUp" style={{ animationDelay: `${(i + 6) * 0.08}s` }}>
            <div className="flex items-center justify-between mb-2">
              <span className={`badge badge-${rec.impactLevel === 'critical' ? 'danger' : rec.impactLevel === 'high' ? 'warning' : 'info'}`}>
                {rec.impactLevel} impact
              </span>
              <span style={{ fontSize: 'var(--text-xs)', color: 'var(--text-tertiary)' }}>Score: {rec.priorityScore}</span>
            </div>
            <h4 style={{ fontSize: 'var(--text-sm)', fontWeight: 700, marginBottom: 4 }}>{rec.title}</h4>
            <p style={{ fontSize: 'var(--text-xs)', color: 'var(--text-secondary)', lineHeight: 1.5, marginBottom: 8 }} className="truncate">
              {rec.description}
            </p>
            <div className="flex items-center justify-between" style={{ fontSize: 'var(--text-xs)' }}>
              <span style={{ color: 'var(--text-tertiary)' }}>{rec.department}</span>
              {rec.estimatedSavings > 0 && (
                <span style={{ color: 'var(--success-600)', fontWeight: 600 }}>
                  Save ₹{(rec.estimatedSavings / 100000).toFixed(1)}L
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
