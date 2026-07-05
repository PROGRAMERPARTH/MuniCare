import { CheckCircle2, Search } from 'lucide-react';
import { complaints, getCategoryIcon, formatDateTime } from '../../services/mockData';

export default function OfficerCompletedTasks() {
  const completedTasks = complaints.filter(c => c.status === 'resolved');

  return (
    <div className="animate-fadeIn">
      <div className="page-header flex items-center justify-between">
        <div>
          <h1>Completed Tasks</h1>
          <p>History of your resolved complaints</p>
        </div>
        <div className="header-search hide-mobile" style={{ width: 250 }}>
          <Search size={16} style={{ color: 'var(--text-tertiary)' }} />
          <input type="text" placeholder="Search history..." style={{ border: 'none', background: 'transparent', outline: 'none', width: '100%' }} />
        </div>
      </div>

      <div className="table-container card">
        <table>
          <thead>
            <tr>
              <th>Ticket</th>
              <th>Issue</th>
              <th>Category</th>
              <th>Location</th>
              <th>Completed Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {completedTasks.map((task, i) => (
              <tr key={task.id} className="animate-slideUp" style={{ animationDelay: `${i * 0.05}s` }}>
                <td><strong>{task.ticketNumber}</strong></td>
                <td><div className="truncate" style={{ maxWidth: 250 }}>{task.title}</div></td>
                <td>{getCategoryIcon(task.category)} <span style={{ textTransform: 'capitalize' }}>{task.category.replace('_', ' ')}</span></td>
                <td><div className="truncate" style={{ maxWidth: 200 }}>{task.location.address}</div></td>
                <td>{formatDateTime(task.createdAt)}</td>
                <td>
                  <span className="badge badge-success"><CheckCircle2 size={12} style={{ marginRight: 4 }} /> Resolved</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        
        {completedTasks.length === 0 && (
          <div className="empty-state">
            <CheckCircle2 size={32} style={{ color: 'var(--text-tertiary)', marginBottom: 8 }} />
            <h3>No completed tasks yet</h3>
          </div>
        )}
      </div>
    </div>
  );
}
