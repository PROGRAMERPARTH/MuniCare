import { departments } from '../../services/mockData';
import { Users, Clock, TrendingUp, IndianRupee } from 'lucide-react';

export default function DepartmentManagement() {
  return (
    <div className="animate-fadeIn">
      <div className="page-header">
        <h1>Department Management</h1>
        <p>Performance metrics and resource allocation by department</p>
      </div>

      <div className="grid grid-2" style={{ gap: 'var(--space-4)' }}>
        {departments.map((dept, i) => (
          <div key={dept.id} className="card card-interactive animate-slideUp" style={{ animationDelay: `${i * 0.08}s` }}>
            <div className="flex items-center gap-3 mb-4">
              <div style={{ width: 48, height: 48, borderRadius: 'var(--radius-lg)', background: `${dept.color}15`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 24 }}>
                {dept.icon}
              </div>
              <div>
                <h3 style={{ fontSize: 'var(--text-base)', fontWeight: 700 }}>{dept.name}</h3>
                <p style={{ fontSize: 'var(--text-xs)', color: 'var(--text-tertiary)' }}>Head: {dept.headName}</p>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 'var(--space-3)', marginBottom: 'var(--space-4)' }}>
              <div style={{ padding: 'var(--space-2)', background: 'var(--bg-tertiary)', borderRadius: 'var(--radius-md)' }}>
                <div style={{ fontSize: 'var(--text-xs)', color: 'var(--text-tertiary)' }}><Users size={12} style={{ display: 'inline', marginRight: 4 }} />Staff</div>
                <div style={{ fontSize: 'var(--text-lg)', fontWeight: 700 }}>{dept.activeOfficers}/{dept.totalStaff}</div>
              </div>
              <div style={{ padding: 'var(--space-2)', background: 'var(--bg-tertiary)', borderRadius: 'var(--radius-md)' }}>
                <div style={{ fontSize: 'var(--text-xs)', color: 'var(--text-tertiary)' }}><Clock size={12} style={{ display: 'inline', marginRight: 4 }} />Avg Time</div>
                <div style={{ fontSize: 'var(--text-lg)', fontWeight: 700 }}>{dept.avgResolutionTime}d</div>
              </div>
              <div style={{ padding: 'var(--space-2)', background: 'var(--bg-tertiary)', borderRadius: 'var(--radius-md)' }}>
                <div style={{ fontSize: 'var(--text-xs)', color: 'var(--text-tertiary)' }}><TrendingUp size={12} style={{ display: 'inline', marginRight: 4 }} />Resolution</div>
                <div style={{ fontSize: 'var(--text-lg)', fontWeight: 700, color: dept.resolutionRate > 85 ? 'var(--success-600)' : 'var(--warning-600)' }}>{dept.resolutionRate}%</div>
              </div>
              <div style={{ padding: 'var(--space-2)', background: 'var(--bg-tertiary)', borderRadius: 'var(--radius-md)' }}>
                <div style={{ fontSize: 'var(--text-xs)', color: 'var(--text-tertiary)' }}><IndianRupee size={12} style={{ display: 'inline', marginRight: 4 }} />Budget Used</div>
                <div style={{ fontSize: 'var(--text-lg)', fontWeight: 700 }}>{Math.round(dept.budgetUtilized / dept.budget * 100)}%</div>
              </div>
            </div>

            {/* Progress bars */}
            <div style={{ marginBottom: 'var(--space-2)' }}>
              <div className="flex items-center justify-between" style={{ fontSize: 'var(--text-xs)', marginBottom: 4 }}>
                <span>Complaints: {dept.resolvedComplaints}/{dept.totalComplaints}</span>
                <span>{dept.resolutionRate}%</span>
              </div>
              <div className="progress-bar">
                <div className="progress-bar-fill" style={{ width: `${dept.resolutionRate}%`, background: dept.color }} />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between" style={{ fontSize: 'var(--text-xs)', marginBottom: 4 }}>
                <span>Budget Utilization</span>
                <span>₹{(dept.budgetUtilized / 100000).toFixed(0)}L / ₹{(dept.budget / 100000).toFixed(0)}L</span>
              </div>
              <div className="progress-bar">
                <div className={`progress-bar-fill ${dept.budgetUtilized / dept.budget > 0.9 ? 'danger' : dept.budgetUtilized / dept.budget > 0.7 ? 'warning' : 'success'}`}
                  style={{ width: `${(dept.budgetUtilized / dept.budget) * 100}%` }} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
