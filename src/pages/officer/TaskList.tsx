import { useState } from 'react';
import { complaints, getStatusColor, getStatusLabel, getPriorityColor, formatDate, getCategoryIcon, getCategoryLabel } from '../../services/mockData';
import { ArrowUpDown, Filter } from 'lucide-react';
import type { ComplaintStatus } from '../../types/complaint';

export default function TaskList() {
  const [statusFilter, setStatusFilter] = useState<ComplaintStatus | 'all'>('all');
  const [sortBy, setSortBy] = useState<'priority' | 'date'>('priority');

  const tasks = complaints.filter(c => {
    if (statusFilter !== 'all' && c.status !== statusFilter) return false;
    return ['assigned', 'in_progress', 'submitted'].includes(c.status);
  }).sort((a, b) => {
    if (sortBy === 'priority') {
      const p = { critical: 0, high: 1, medium: 2, low: 3 };
      return (p[a.priority] || 3) - (p[b.priority] || 3);
    }
    return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
  });

  return (
    <div className="animate-fadeIn">
      <div className="page-header">
        <h1>My Tasks</h1>
        <p>Manage your assigned complaints and field tasks</p>
      </div>

      <div className="flex items-center gap-3 mb-4">
        <div className="status-filters" style={{ marginBottom: 0 }}>
          {(['all', 'assigned', 'in_progress'] as const).map((s) => (
            <button key={s} className={`status-filter ${statusFilter === s ? 'active' : ''}`} onClick={() => setStatusFilter(s)}>
              {s === 'all' ? 'All' : getStatusLabel(s)}
            </button>
          ))}
        </div>
        <button className="btn btn-ghost btn-sm" onClick={() => setSortBy(sortBy === 'priority' ? 'date' : 'priority')}>
          <ArrowUpDown size={14} /> Sort: {sortBy === 'priority' ? 'Priority' : 'Date'}
        </button>
      </div>

      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Ticket</th>
              <th>Issue</th>
              <th>Category</th>
              <th>Location</th>
              <th>Priority</th>
              <th>Status</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task, i) => (
              <tr key={task.id} className="animate-slideUp" style={{ animationDelay: `${i * 0.04}s` }}>
                <td><strong>{task.ticketNumber}</strong></td>
                <td>
                  <div style={{ maxWidth: 200 }} className="truncate">{task.title}</div>
                </td>
                <td>{getCategoryIcon(task.category)} {getCategoryLabel(task.category)}</td>
                <td style={{ maxWidth: 150 }} className="truncate">{task.location.address}</td>
                <td><span className={`badge badge-${getPriorityColor(task.priority)}`}>{task.priority}</span></td>
                <td><span className={`badge badge-${getStatusColor(task.status)} badge-dot`}>{getStatusLabel(task.status)}</span></td>
                <td>{formatDate(task.createdAt)}</td>
                <td>
                  <div className="flex gap-1">
                    {task.status === 'assigned' && <button className="btn btn-primary btn-sm">Start</button>}
                    {task.status === 'in_progress' && <button className="btn btn-success btn-sm">Complete</button>}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {tasks.length === 0 && (
        <div className="empty-state">
          <div className="empty-state-icon"><Filter size={32} /></div>
          <h3>No tasks match your filter</h3>
        </div>
      )}
    </div>
  );
}
