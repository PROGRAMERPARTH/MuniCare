import { useNavigate } from 'react-router-dom';
import {
  PlusCircle, FileText, AlertTriangle, Briefcase,
  TrendingUp, TrendingDown, Clock, CheckCircle2,
  ArrowRight, Zap, MessageSquare, Star,
} from 'lucide-react';
import { useAuthStore } from '../../stores/authStore';
import { complaints, getStatusColor, getStatusLabel, formatDate, getCategoryIcon } from '../../services/mockData';

export default function CitizenDashboard() {
  const navigate = useNavigate();
  const { user } = useAuthStore();

  const userComplaints = complaints.filter((c) => c.citizenId === user?.id);
  const activeCount = userComplaints.filter((c) => ['submitted', 'assigned', 'in_progress'].includes(c.status)).length;
  const resolvedCount = userComplaints.filter((c) => c.status === 'resolved').length;
  const totalCount = userComplaints.length;

  const quickActions = [
    { icon: PlusCircle, label: 'New Complaint', path: '/citizen/register-complaint', color: 'var(--primary-500)', bg: 'var(--primary-50)' },
    { icon: FileText, label: 'Track Complaints', path: '/citizen/complaints', color: 'var(--accent-600)', bg: 'var(--accent-50)' },
    { icon: AlertTriangle, label: 'Emergency', path: '/citizen/emergency', color: 'var(--danger-600)', bg: 'var(--danger-50)' },
    { icon: Briefcase, label: 'Services', path: '/citizen/services', color: 'var(--warning-600)', bg: 'var(--warning-50)' },
  ];

  return (
    <div className="animate-fadeIn">
      {/* Welcome Card */}
      <div className="citizen-welcome mb-6">
        <h2>Good {new Date().getHours() < 12 ? 'Morning' : new Date().getHours() < 17 ? 'Afternoon' : 'Evening'}, {user?.name?.split(' ')[0]}! 👋</h2>
        <p>{user?.ward} • {user?.zone}</p>
        <div className="citizen-welcome-actions">
          <button className="btn btn-accent" onClick={() => navigate('/citizen/register-complaint')}>
            <PlusCircle size={18} /> File New Complaint
          </button>
          <button className="btn" style={{ background: 'rgba(255,255,255,0.15)', color: '#fff' }}
            onClick={() => navigate('/citizen/complaints')}>
            <FileText size={18} /> My Complaints
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="dashboard-grid-stats mb-6">
        {[
          { label: 'Total Complaints', value: totalCount, icon: FileText, trend: '+2 this month', up: true, color: '--primary-500' },
          { label: 'Active', value: activeCount, icon: Clock, trend: 'Being resolved', up: true, color: '--warning-500' },
          { label: 'Resolved', value: resolvedCount, icon: CheckCircle2, trend: '85% rate', up: true, color: '--success-500' },
          { label: 'Satisfaction', value: '4.2', icon: Star, trend: 'Above average', up: true, color: '--accent-500' },
        ].map((stat, i) => (
          <div
            key={i}
            className="stat-card animate-slideUp"
            style={{ '--stat-color': `var(${stat.color})`, animationDelay: `${i * 0.1}s` } as React.CSSProperties}
          >
            <div className="stat-card-header">
              <span className="stat-card-label">{stat.label}</span>
              <div className="stat-card-icon" style={{ color: `var(${stat.color})`, background: `color-mix(in srgb, var(${stat.color}) 10%, transparent)` }}>
                <stat.icon size={20} />
              </div>
            </div>
            <div className="stat-card-value">{stat.value}</div>
            <div className={`stat-card-trend ${stat.up ? 'up' : 'down'}`}>
              {stat.up ? <TrendingUp size={14} /> : <TrendingDown size={14} />}
              {stat.trend}
            </div>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <h3 style={{ fontSize: 'var(--text-lg)', fontWeight: 700, marginBottom: 'var(--space-4)' }}>Quick Actions</h3>
      <div className="quick-actions mb-6">
        {quickActions.map((action, i) => (
          <div
            key={i}
            className="quick-action animate-slideUp"
            onClick={() => navigate(action.path)}
            style={{ animationDelay: `${(i + 4) * 0.1}s` }}
          >
            <div className="quick-action-icon" style={{ background: action.bg, color: action.color }}>
              <action.icon size={24} />
            </div>
            <span className="quick-action-label">{action.label}</span>
          </div>
        ))}
      </div>

      {/* Recent Complaints */}
      <div className="flex items-center justify-between mb-4">
        <h3 style={{ fontSize: 'var(--text-lg)', fontWeight: 700 }}>Recent Complaints</h3>
        <button className="btn btn-ghost btn-sm" onClick={() => navigate('/citizen/complaints')}>
          View All <ArrowRight size={14} />
        </button>
      </div>
      <div className="complaint-list">
        {userComplaints.slice(0, 5).map((complaint, i) => (
          <div
            key={complaint.id}
            className="complaint-card animate-slideUp"
            style={{ animationDelay: `${i * 0.08}s` }}
            onClick={() => navigate(`/citizen/complaints/${complaint.id}`)}
          >
            <div className="complaint-card-image">
              {complaint.images[0] ? (
                <img src={complaint.images[0]} alt={complaint.title} />
              ) : (
                <div className="flex items-center justify-center h-full" style={{ fontSize: 32 }}>
                  {getCategoryIcon(complaint.category)}
                </div>
              )}
            </div>
            <div className="complaint-card-body">
              <div className="complaint-card-title truncate">{complaint.title}</div>
              <div className="complaint-card-meta">
                <span>{getCategoryIcon(complaint.category)} {complaint.category.replace(/_/g, ' ')}</span>
                <span>📍 {complaint.location.ward}</span>
              </div>
              <div className="complaint-card-meta" style={{ marginTop: 4 }}>
                <span className={`badge badge-${getStatusColor(complaint.status)} badge-dot`}>
                  {getStatusLabel(complaint.status)}
                </span>
                <span className={`badge badge-${complaint.priority === 'critical' ? 'danger' : complaint.priority === 'high' ? 'warning' : 'info'}`}>
                  {complaint.priority}
                </span>
              </div>
            </div>
            <div className="complaint-card-right">
              <div className="complaint-card-date">{formatDate(complaint.createdAt)}</div>
              <div style={{ fontSize: 'var(--text-xs)', color: 'var(--text-tertiary)', marginTop: 4 }}>
                {complaint.ticketNumber}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* AI Chat FAB */}
      <div className="ai-chat-fab" onClick={() => navigate('/citizen/chat')}>
        <MessageSquare size={24} />
      </div>
    </div>
  );
}
