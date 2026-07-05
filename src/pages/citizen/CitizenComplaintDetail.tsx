import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, MapPin, Clock, Tag, AlertTriangle, Building2 } from 'lucide-react';
import { complaints, getStatusColor, getStatusLabel, getCategoryIcon, formatDateTime } from '../../services/mockData';

export default function CitizenComplaintDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const complaint = complaints.find(c => c.id === id) || complaints[0]; // fallback

  return (
    <div className="animate-fadeIn">
      <div className="page-header flex items-center gap-4">
        <button className="btn btn-ghost btn-sm" onClick={() => navigate(-1)}>
          <ArrowLeft size={20} />
        </button>
        <div>
          <h1>Complaint Details</h1>
          <p>Ticket: {complaint.ticketNumber}</p>
        </div>
      </div>

      <div className="grid grid-2" style={{ gap: 'var(--space-6)' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
          <div className="card">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h2 style={{ fontSize: 'var(--text-xl)', fontWeight: 700, marginBottom: 8 }}>{complaint.title}</h2>
                <div className="flex items-center gap-2">
                  <span className={`badge badge-${getStatusColor(complaint.status)}`}>
                    {getStatusLabel(complaint.status)}
                  </span>
                  <span className={`badge badge-${complaint.priority === 'critical' ? 'danger' : complaint.priority === 'high' ? 'warning' : 'info'}`}>
                    {complaint.priority} Priority
                  </span>
                </div>
              </div>
              <div style={{ fontSize: 32 }}>{getCategoryIcon(complaint.category)}</div>
            </div>

            <p style={{ color: 'var(--text-secondary)', fontSize: 'var(--text-sm)', lineHeight: 1.6, marginBottom: 'var(--space-6)' }}>
              {complaint.description || 'No additional description provided.'}
            </p>

            <div className="grid grid-2" style={{ gap: 'var(--space-3)', marginBottom: 'var(--space-6)' }}>
              <div className="flex items-start gap-2" style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)' }}>
                <MapPin size={16} style={{ color: 'var(--primary-500)', marginTop: 2 }} />
                <div>
                  <div style={{ fontWeight: 600, color: 'var(--text-primary)' }}>Location</div>
                  <div>{complaint.location.address}</div>
                  <div style={{ fontSize: 'var(--text-xs)' }}>{complaint.location.ward}</div>
                </div>
              </div>
              <div className="flex items-start gap-2" style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)' }}>
                <Clock size={16} style={{ color: 'var(--primary-500)', marginTop: 2 }} />
                <div>
                  <div style={{ fontWeight: 600, color: 'var(--text-primary)' }}>Reported On</div>
                  <div>{formatDateTime(complaint.createdAt)}</div>
                </div>
              </div>
              <div className="flex items-start gap-2" style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)' }}>
                <Tag size={16} style={{ color: 'var(--primary-500)', marginTop: 2 }} />
                <div>
                  <div style={{ fontWeight: 600, color: 'var(--text-primary)' }}>Category</div>
                  <div style={{ textTransform: 'capitalize' }}>{complaint.category.replace('_', ' ')}</div>
                </div>
              </div>
              <div className="flex items-start gap-2" style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)' }}>
                <Building2 size={16} style={{ color: 'var(--primary-500)', marginTop: 2 }} />
                <div>
                  <div style={{ fontWeight: 600, color: 'var(--text-primary)' }}>Assigned Officer</div>
                  <div>{complaint.assignedOfficerName || 'Pending Assignment'}</div>
                </div>
              </div>
            </div>
          </div>

          <div className="card">
            <h3 style={{ marginBottom: 'var(--space-4)' }}>Status Timeline</h3>
            <div className="timeline">
              <div className="timeline-item completed">
                <div className="timeline-dot" />
                <div className="timeline-content">
                  <div className="timeline-title">Complaint Submitted</div>
                  <div className="timeline-time">{formatDateTime(complaint.createdAt)}</div>
                </div>
              </div>
              <div className={`timeline-item ${['assigned', 'in_progress', 'resolved'].includes(complaint.status) ? 'completed' : ''}`}>
                <div className="timeline-dot" />
                <div className="timeline-content">
                  <div className="timeline-title">Assigned to Department</div>
                  <div className="timeline-time">{['assigned', 'in_progress', 'resolved'].includes(complaint.status) ? 'Processed by AI' : 'Pending'}</div>
                </div>
              </div>
              <div className={`timeline-item ${['in_progress', 'resolved'].includes(complaint.status) ? 'completed' : ''}`}>
                <div className="timeline-dot" />
                <div className="timeline-content">
                  <div className="timeline-title">Work In Progress</div>
                  <div className="timeline-time">{['in_progress', 'resolved'].includes(complaint.status) ? 'Officer on site' : 'Pending'}</div>
                </div>
              </div>
              <div className={`timeline-item ${complaint.status === 'resolved' ? 'completed' : ''}`}>
                <div className="timeline-dot" />
                <div className="timeline-content">
                  <div className="timeline-title">Resolved</div>
                  <div className="timeline-time">{complaint.status === 'resolved' ? 'Completed' : 'Pending'}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="card">
            <h3 style={{ marginBottom: 'var(--space-4)' }}>Attached Evidence</h3>
            {complaint.images.length > 0 ? (
              <div className="photo-preview" style={{ flexDirection: 'column' }}>
                {complaint.images.map((img, i) => (
                  <div key={i} style={{ width: '100%', borderRadius: 'var(--radius-lg)', overflow: 'hidden' }}>
                    <img src={img} alt={`Evidence ${i}`} style={{ width: '100%', display: 'block' }} />
                  </div>
                ))}
              </div>
            ) : (
              <div className="empty-state" style={{ padding: 'var(--space-4)' }}>
                <p>No photos attached</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
