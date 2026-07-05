import { useNavigate } from 'react-router-dom';
import {
  TrendingUp, TrendingDown, Clock, CheckCircle2,
  ClipboardList, MapPin, AlertTriangle, Star,
  ArrowRight, Play, Upload, CheckSquare,
} from 'lucide-react';
import { complaints, getStatusColor, getStatusLabel, getPriorityColor, formatDate, getCategoryIcon } from '../../services/mockData';

export default function OfficerDashboard() {
  const navigate = useNavigate();

  const assignedTasks = complaints.filter(c => c.assignedOfficerName === 'Priya Patel' || c.assignedOfficerName === 'Sunil Yadav');
  const pendingTasks = assignedTasks.filter(c => ['assigned', 'in_progress'].includes(c.status));
  const completedToday = assignedTasks.filter(c => c.status === 'resolved').length;

  return (
    <div className="animate-fadeIn">
      <div className="page-header">
        <h1>Officer Dashboard</h1>
        <p>Today's tasks and performance overview</p>
      </div>

      {/* Stats */}
      <div className="dashboard-grid-stats mb-6">
        {[
          { label: 'Pending Tasks', value: pendingTasks.length, icon: ClipboardList, trend: '3 urgent', up: false, color: '--warning-500' },
          { label: 'Completed Today', value: completedToday, icon: CheckCircle2, trend: '+2 vs yesterday', up: true, color: '--success-500' },
          { label: 'Avg. Resolution', value: '3.2d', icon: Clock, trend: 'Below target', up: true, color: '--primary-500' },
          { label: 'Performance', value: '92%', icon: Star, trend: 'Top 10%', up: true, color: '--accent-500' },
        ].map((stat, i) => (
          <div key={i} className="stat-card animate-slideUp" style={{ '--stat-color': `var(${stat.color})`, animationDelay: `${i * 0.1}s` } as React.CSSProperties}>
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

      {/* Today's Tasks */}
      <div className="flex items-center justify-between mb-4">
        <h3 style={{ fontSize: 'var(--text-lg)', fontWeight: 700 }}>Today's Tasks</h3>
        <button className="btn btn-ghost btn-sm" onClick={() => navigate('/officer/tasks')}>
          View All <ArrowRight size={14} />
        </button>
      </div>

      <div className="complaint-list mb-6">
        {pendingTasks.slice(0, 5).map((task, i) => (
          <div key={task.id} className="complaint-card animate-slideUp" style={{ animationDelay: `${i * 0.08}s` }}>
            <div className="complaint-card-image">
              {task.images[0] ? (
                <img src={task.images[0]} alt={task.title} />
              ) : (
                <div className="flex items-center justify-center h-full" style={{ fontSize: 32 }}>{getCategoryIcon(task.category)}</div>
              )}
            </div>
            <div className="complaint-card-body">
              <div className="complaint-card-title truncate">{task.title}</div>
              <div className="complaint-card-meta">
                <span>{getCategoryIcon(task.category)} {task.category.replace(/_/g, ' ')}</span>
                <span>📍 {task.location.address}</span>
              </div>
              <div className="complaint-card-meta" style={{ marginTop: 4 }}>
                <span className={`badge badge-${getStatusColor(task.status)} badge-dot`}>{getStatusLabel(task.status)}</span>
                <span className={`badge badge-${getPriorityColor(task.priority)}`}>{task.priority}</span>
                {task.isEmergency && <span className="badge badge-danger">🚨 Emergency</span>}
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 4, flexShrink: 0 }}>
              {task.status === 'assigned' && (
                <button className="btn btn-primary btn-sm"><Play size={12} /> Start</button>
              )}
              {task.status === 'in_progress' && (
                <>
                  <button className="btn btn-accent btn-sm"><Upload size={12} /> Upload</button>
                  <button className="btn btn-success btn-sm"><CheckSquare size={12} /> Complete</button>
                </>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Task Map Placeholder */}
      <div className="card" style={{ marginBottom: 'var(--space-6)' }}>
        <h3 style={{ marginBottom: 'var(--space-4)' }}>📍 Task Locations</h3>
        <div style={{ background: 'var(--bg-tertiary)', borderRadius: 'var(--radius-xl)', height: 300, display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid var(--border-primary)' }}>
          <div style={{ textAlign: 'center', color: 'var(--text-tertiary)' }}>
            <MapPin size={48} style={{ margin: '0 auto 12px', color: 'var(--primary-500)' }} />
            <p style={{ fontWeight: 600, color: 'var(--text-primary)' }}>Task Map View</p>
            <p style={{ fontSize: 'var(--text-sm)' }}>Shows all assigned task locations on the map</p>
            <p style={{ fontSize: 'var(--text-xs)', marginTop: 4 }}>Connect Google Maps API for live map</p>
          </div>
        </div>
      </div>
    </div>
  );
}
