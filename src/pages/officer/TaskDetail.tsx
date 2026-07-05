import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { complaints, getStatusColor, getStatusLabel, getCategoryIcon } from '../../services/mockData';
import { MapPin, Clock, FileText, Camera, Upload, CheckSquare, ArrowLeft, Send } from 'lucide-react';

export default function TaskDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const task = complaints.find(c => c.id === id) || complaints[0]; // fallback for demo
  const [status, setStatus] = useState(task.status);
  const [note, setNote] = useState('');

  if (!task) return <div>Task not found</div>;

  return (
    <div className="animate-fadeIn">
      <div className="page-header flex items-center gap-4">
        <button className="btn btn-ghost btn-sm" onClick={() => navigate(-1)}><ArrowLeft size={20} /></button>
        <div>
          <h1>Task: {task.ticketNumber}</h1>
          <p>Manage resolution details for this complaint</p>
        </div>
      </div>

      <div className="grid grid-2" style={{ gap: 'var(--space-6)' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
          <div className="card">
            <div className="flex items-start justify-between mb-4">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className={`badge badge-${getStatusColor(status)}`}>{getStatusLabel(status)}</span>
                  <span className="badge badge-warning">{task.priority}</span>
                </div>
                <h2 style={{ fontSize: 'var(--text-lg)', fontWeight: 700 }}>{task.title}</h2>
              </div>
              <div style={{ fontSize: 32 }}>{getCategoryIcon(task.category)}</div>
            </div>
            <p style={{ color: 'var(--text-secondary)', fontSize: 'var(--text-sm)', marginBottom: 'var(--space-4)' }}>
              {task.description || 'No description provided by the citizen.'}
            </p>
            <div style={{ display: 'flex', gap: 12, fontSize: 'var(--text-sm)', color: 'var(--text-tertiary)', borderTop: '1px solid var(--border-primary)', paddingTop: 'var(--space-3)' }}>
              <div className="flex items-center gap-1"><MapPin size={14} /> {task.location.address}</div>
              <div className="flex items-center gap-1"><Clock size={14} /> {new Date(task.createdAt).toLocaleDateString()}</div>
            </div>
          </div>

          <div className="card">
            <h3 style={{ marginBottom: 'var(--space-4)' }}>Resolution Actions</h3>
            {status === 'assigned' && (
              <button className="btn btn-primary w-full" onClick={() => setStatus('in_progress')}>
                Mark as In Progress
              </button>
            )}
            
            {status === 'in_progress' && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
                <div className="photo-upload" style={{ minHeight: 120 }}>
                  <Camera size={24} style={{ color: 'var(--text-tertiary)', margin: '0 auto 8px' }} />
                  <p style={{ fontWeight: 600, fontSize: 'var(--text-sm)' }}>Upload Resolution Proof</p>
                  <p style={{ fontSize: 'var(--text-xs)', color: 'var(--text-tertiary)' }}>Required before closing task</p>
                  <button className="btn btn-outline btn-sm" style={{ marginTop: 8 }}><Upload size={14} /> Select Photo</button>
                </div>
                <textarea 
                  className="input textarea" 
                  placeholder="Add closing notes..." 
                  value={note}
                  onChange={e => setNote(e.target.value)}
                />
                <button className="btn btn-success w-full" onClick={() => setStatus('resolved')}>
                  <CheckSquare size={16} /> Complete Task
                </button>
              </div>
            )}

            {status === 'resolved' && (
              <div style={{ textAlign: 'center', padding: 'var(--space-4)', background: 'var(--success-50)', color: 'var(--success-600)', borderRadius: 'var(--radius-lg)' }}>
                <CheckSquare size={32} style={{ margin: '0 auto 8px' }} />
                <h4 style={{ fontWeight: 700 }}>Task Completed</h4>
                <p style={{ fontSize: 'var(--text-sm)' }}>Awaiting admin verification</p>
              </div>
            )}
          </div>
        </div>

        <div>
          <div className="card">
            <h3 style={{ marginBottom: 'var(--space-4)' }}>Citizen Uploaded Evidence</h3>
            {task.images.length > 0 ? (
              <div className="photo-preview">
                {task.images.map((img, i) => (
                  <div key={i} className="photo-preview-item" style={{ height: 200, width: '100%' }}>
                    <img src={img} alt={`Evidence ${i}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                ))}
              </div>
            ) : (
              <div className="empty-state" style={{ padding: 'var(--space-4)' }}>
                <FileText size={24} style={{ color: 'var(--text-tertiary)', marginBottom: 8 }} />
                <p>No photos attached</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
