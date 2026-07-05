import { BarChart, Bar, ResponsiveContainer, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { Calendar, Download, CheckCircle2, Clock } from 'lucide-react';

export default function WorkReport() {
  const weeklyData = [
    { day: 'Mon', completed: 4, assigned: 5 },
    { day: 'Tue', completed: 6, assigned: 6 },
    { day: 'Wed', completed: 3, assigned: 4 },
    { day: 'Thu', completed: 5, assigned: 5 },
    { day: 'Fri', completed: 7, assigned: 8 },
  ];

  return (
    <div className="animate-fadeIn">
      <div className="page-header flex items-center justify-between">
        <div>
          <h1>My Work Report</h1>
          <p>Performance analytics and task history</p>
        </div>
        <button className="btn btn-outline btn-sm"><Download size={16} /> Export PDF</button>
      </div>

      <div className="dashboard-grid-stats mb-6">
        <div className="stat-card" style={{ '--stat-color': 'var(--success-500)' } as React.CSSProperties}>
          <div className="stat-card-header">
            <span className="stat-card-label">Tasks Completed (This Week)</span>
            <div className="stat-card-icon" style={{ background: 'var(--success-100)', color: 'var(--success-600)' }}><CheckCircle2 size={20} /></div>
          </div>
          <div className="stat-card-value">25</div>
          <div className="stat-card-trend up">92% completion rate</div>
        </div>
        <div className="stat-card" style={{ '--stat-color': 'var(--primary-500)' } as React.CSSProperties}>
          <div className="stat-card-header">
            <span className="stat-card-label">Avg Resolution Time</span>
            <div className="stat-card-icon" style={{ background: 'var(--primary-100)', color: 'var(--primary-600)' }}><Clock size={20} /></div>
          </div>
          <div className="stat-card-value">1.4 days</div>
          <div className="stat-card-trend up">-0.2 days vs last week</div>
        </div>
      </div>

      <div className="chart-card">
        <div className="chart-card-header">
          <div>
            <div className="chart-card-title">Weekly Performance</div>
            <div className="chart-card-subtitle">Tasks assigned vs completed</div>
          </div>
        </div>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={weeklyData}>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--border-primary)" />
            <XAxis dataKey="day" tick={{ fontSize: 12, fill: 'var(--text-tertiary)' }} />
            <YAxis tick={{ fontSize: 12, fill: 'var(--text-tertiary)' }} />
            <Tooltip contentStyle={{ background: 'var(--bg-card)', border: '1px solid var(--border-primary)', borderRadius: 8 }} />
            <Legend wrapperStyle={{ fontSize: 12 }} />
            <Bar dataKey="assigned" fill="var(--primary-200)" name="Assigned" radius={[4, 4, 0, 0]} />
            <Bar dataKey="completed" fill="var(--success-500)" name="Completed" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
