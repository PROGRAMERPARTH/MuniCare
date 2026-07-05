import { MapPin, Navigation, Filter } from 'lucide-react';
import { complaints, getStatusColor, getPriorityColor } from '../../services/mockData';

export default function OfficerMap() {
  const activeTasks = complaints.filter(c => ['assigned', 'in_progress'].includes(c.status));

  return (
    <div className="animate-fadeIn" style={{ height: 'calc(100vh - 120px)', display: 'flex', flexDirection: 'column' }}>
      <div className="page-header flex items-center justify-between" style={{ marginBottom: 'var(--space-4)' }}>
        <div>
          <h1 style={{ fontSize: 'var(--text-xl)' }}>Task Map</h1>
          <p style={{ fontSize: 'var(--text-sm)' }}>Live locations of your pending field tasks</p>
        </div>
        <div className="flex gap-2">
          <button className="btn btn-outline btn-sm"><Filter size={14} /> Filter</button>
          <button className="btn btn-primary btn-sm"><Navigation size={14} /> Optimize Route</button>
        </div>
      </div>

      <div className="card" style={{ flex: 1, position: 'relative', padding: 0, overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'var(--bg-tertiary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          {/* Simulated Map Background */}
          <div style={{ opacity: 0.1, position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(var(--text-primary) 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
          
          <div style={{ zIndex: 1, textAlign: 'center', color: 'var(--text-tertiary)' }}>
            <MapPin size={48} style={{ margin: '0 auto 12px', color: 'var(--primary-500)' }} />
            <h3 style={{ color: 'var(--text-primary)' }}>Google Maps Integration Required</h3>
            <p style={{ maxWidth: 300, margin: '0 auto' }}>Connect Google Maps API in Phase 2 to view interactive live routing for field tasks.</p>
          </div>

          {/* Simulated Map Markers */}
          {activeTasks.map((task, i) => (
            <div 
              key={task.id} 
              style={{ 
                position: 'absolute', 
                left: `${20 + (i * 25) % 60}%`, 
                top: `${20 + (i * 35) % 60}%`,
                zIndex: 2,
                cursor: 'pointer'
              }}
              title={task.title}
            >
              <div style={{ 
                width: 16, height: 16, borderRadius: '50%', 
                background: `var(--${getPriorityColor(task.priority)}-500)`,
                border: '2px solid #fff',
                boxShadow: '0 2px 4px rgba(0,0,0,0.2)'
              }} />
              <div style={{ position: 'absolute', top: 20, left: '50%', transform: 'translateX(-50%)', background: 'var(--bg-card)', padding: '2px 6px', borderRadius: 4, fontSize: 10, whiteSpace: 'nowrap', fontWeight: 600, border: '1px solid var(--border-primary)' }}>
                {task.ticketNumber}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
