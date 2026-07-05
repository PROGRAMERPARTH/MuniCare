import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Filter, Grid, List } from 'lucide-react';
import { complaints, getStatusColor, getStatusLabel, getCategoryIcon, formatDate } from '../../services/mockData';
import type { ComplaintStatus } from '../../types/complaint';

export default function ComplaintTracker() {
  const navigate = useNavigate();
  const [statusFilter, setStatusFilter] = useState<ComplaintStatus | 'all'>('all');
  const [search, setSearch] = useState('');
  const [viewMode, setViewMode] = useState<'list' | 'grid'>('list');

  const filtered = complaints.filter((c) => {
    if (statusFilter !== 'all' && c.status !== statusFilter) return false;
    if (search && !c.title.toLowerCase().includes(search.toLowerCase()) && !c.ticketNumber.toLowerCase().includes(search.toLowerCase())) return false;
    return true;
  });

  const statuses: { value: ComplaintStatus | 'all'; label: string; count: number }[] = [
    { value: 'all', label: 'All', count: complaints.length },
    { value: 'submitted', label: 'Submitted', count: complaints.filter(c => c.status === 'submitted').length },
    { value: 'assigned', label: 'Assigned', count: complaints.filter(c => c.status === 'assigned').length },
    { value: 'in_progress', label: 'In Progress', count: complaints.filter(c => c.status === 'in_progress').length },
    { value: 'resolved', label: 'Resolved', count: complaints.filter(c => c.status === 'resolved').length },
  ];

  return (
    <div className="animate-fadeIn">
      <div className="page-header">
        <h1>My Complaints</h1>
        <p>Track the status of all your filed complaints</p>
      </div>

      {/* Search & Filters */}
      <div className="flex items-center gap-3 mb-4" style={{ flexWrap: 'wrap' }}>
        <div className="header-search" style={{ flex: 1, minWidth: 200 }}>
          <Search size={16} style={{ color: 'var(--text-tertiary)', flexShrink: 0 }} />
          <input
            type="text"
            placeholder="Search by title or ticket number..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{ background: 'transparent', color: 'var(--text-primary)', width: '100%', border: 'none', outline: 'none' }}
          />
        </div>
        <div className="flex gap-1">
          <button className={`btn btn-icon btn-sm ${viewMode === 'list' ? 'btn-primary' : 'btn-ghost'}`} onClick={() => setViewMode('list')}>
            <List size={16} />
          </button>
          <button className={`btn btn-icon btn-sm ${viewMode === 'grid' ? 'btn-primary' : 'btn-ghost'}`} onClick={() => setViewMode('grid')}>
            <Grid size={16} />
          </button>
        </div>
      </div>

      {/* Status Filters */}
      <div className="status-filters">
        {statuses.map((s) => (
          <button
            key={s.value}
            className={`status-filter ${statusFilter === s.value ? 'active' : ''}`}
            onClick={() => setStatusFilter(s.value)}
          >
            {s.label} ({s.count})
          </button>
        ))}
      </div>

      {/* Complaint List */}
      {viewMode === 'list' ? (
        <div className="complaint-list">
          {filtered.map((complaint, i) => (
            <div
              key={complaint.id}
              className="complaint-card animate-slideUp"
              style={{ animationDelay: `${i * 0.05}s` }}
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
      ) : (
        <div className="grid grid-3" style={{ gap: 'var(--space-4)' }}>
          {filtered.map((complaint, i) => (
            <div
              key={complaint.id}
              className="card card-interactive animate-slideUp"
              style={{ animationDelay: `${i * 0.05}s` }}
              onClick={() => navigate(`/citizen/complaints/${complaint.id}`)}
            >
              <div style={{ height: 140, borderRadius: 'var(--radius-lg)', overflow: 'hidden', marginBottom: 12, background: 'var(--bg-tertiary)' }}>
                {complaint.images[0] ? (
                  <img src={complaint.images[0]} alt={complaint.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                ) : (
                  <div className="flex items-center justify-center h-full" style={{ fontSize: 48 }}>
                    {getCategoryIcon(complaint.category)}
                  </div>
                )}
              </div>
              <div className="flex items-center gap-2 mb-2">
                <span className={`badge badge-${getStatusColor(complaint.status)} badge-dot`}>
                  {getStatusLabel(complaint.status)}
                </span>
                <span className={`badge badge-${complaint.priority === 'critical' ? 'danger' : complaint.priority === 'high' ? 'warning' : 'info'}`}>
                  {complaint.priority}
                </span>
              </div>
              <h4 style={{ fontSize: 'var(--text-sm)', fontWeight: 600, marginBottom: 4 }} className="truncate">
                {complaint.title}
              </h4>
              <p style={{ fontSize: 'var(--text-xs)', color: 'var(--text-tertiary)' }}>
                {complaint.ticketNumber} • {formatDate(complaint.createdAt)}
              </p>
            </div>
          ))}
        </div>
      )}

      {filtered.length === 0 && (
        <div className="empty-state">
          <div className="empty-state-icon"><Search size={32} /></div>
          <h3>No complaints found</h3>
          <p style={{ color: 'var(--text-tertiary)' }}>Try adjusting your filters or search query</p>
        </div>
      )}
    </div>
  );
}
