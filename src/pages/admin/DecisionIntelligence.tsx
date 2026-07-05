import { useState } from 'react';
import { Sparkles, Check, X, IndianRupee, Building2, TrendingUp } from 'lucide-react';
import { aiRecommendations } from '../../services/mockData';

export default function DecisionIntelligence() {
  const [recs, setRecs] = useState(aiRecommendations);

  const handleApprove = (id: string) => {
    setRecs(recs.map(r => r.id === id ? { ...r, status: 'approved' as const } : r));
  };

  const handleReject = (id: string) => {
    setRecs(recs.map(r => r.id === id ? { ...r, status: 'rejected' as const } : r));
  };

  return (
    <div className="animate-fadeIn">
      <div className="page-header">
        <div className="flex items-center gap-3">
          <div style={{ width: 48, height: 48, borderRadius: 'var(--radius-lg)', background: 'linear-gradient(135deg, var(--primary-500), var(--accent-500))', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>
            <Sparkles size={24} />
          </div>
          <div>
            <h1>AI Decision Intelligence</h1>
            <p>Review and approve AI-generated action recommendations</p>
          </div>
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
        {recs.map((rec, i) => (
          <div key={rec.id} className="card animate-slideUp" style={{ animationDelay: `${i * 0.1}s`, borderLeft: `4px solid ${rec.impactLevel === 'critical' ? 'var(--danger-500)' : rec.impactLevel === 'high' ? 'var(--warning-500)' : 'var(--primary-500)'}` }}>
            <div className="flex items-start justify-between mb-3">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h3 style={{ fontSize: 'var(--text-base)', fontWeight: 700 }}>{rec.title}</h3>
                  <span className="ai-badge"><Sparkles size={8} /> AI</span>
                  <span className={`badge badge-${rec.impactLevel === 'critical' ? 'danger' : rec.impactLevel === 'high' ? 'warning' : 'info'}`}>
                    {rec.impactLevel}
                  </span>
                  {rec.status !== 'pending' && (
                    <span className={`badge badge-${rec.status === 'approved' ? 'success' : 'danger'}`}>
                      {rec.status}
                    </span>
                  )}
                </div>
                <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', lineHeight: 1.6 }}>{rec.description}</p>
              </div>
              <div style={{ textAlign: 'right', flexShrink: 0, marginLeft: 16 }}>
                <div style={{ fontSize: 'var(--text-2xl)', fontWeight: 800, color: 'var(--primary-600)' }}>{rec.priorityScore}</div>
                <div style={{ fontSize: 'var(--text-xs)', color: 'var(--text-tertiary)' }}>Priority Score</div>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 'var(--space-3)', marginBottom: 'var(--space-3)' }}>
              <div style={{ padding: 'var(--space-2)', background: 'var(--bg-tertiary)', borderRadius: 'var(--radius-md)' }}>
                <div style={{ fontSize: 'var(--text-xs)', color: 'var(--text-tertiary)' }}><Building2 size={12} style={{ display: 'inline', marginRight: 4 }} />Department</div>
                <div style={{ fontSize: 'var(--text-sm)', fontWeight: 600 }}>{rec.department}</div>
              </div>
              <div style={{ padding: 'var(--space-2)', background: 'var(--bg-tertiary)', borderRadius: 'var(--radius-md)' }}>
                <div style={{ fontSize: 'var(--text-xs)', color: 'var(--text-tertiary)' }}><IndianRupee size={12} style={{ display: 'inline', marginRight: 4 }} />Est. Cost</div>
                <div style={{ fontSize: 'var(--text-sm)', fontWeight: 600 }}>₹{(rec.estimatedCost / 100000).toFixed(1)}L</div>
              </div>
              <div style={{ padding: 'var(--space-2)', background: 'var(--bg-tertiary)', borderRadius: 'var(--radius-md)' }}>
                <div style={{ fontSize: 'var(--text-xs)', color: 'var(--text-tertiary)' }}><TrendingUp size={12} style={{ display: 'inline', marginRight: 4 }} />Savings</div>
                <div style={{ fontSize: 'var(--text-sm)', fontWeight: 600, color: rec.estimatedSavings > 0 ? 'var(--success-600)' : 'var(--text-primary)' }}>
                  {rec.estimatedSavings > 0 ? `₹${(rec.estimatedSavings / 100000).toFixed(1)}L` : '—'}
                </div>
              </div>
              <div style={{ padding: 'var(--space-2)', background: 'var(--bg-tertiary)', borderRadius: 'var(--radius-md)' }}>
                <div style={{ fontSize: 'var(--text-xs)', color: 'var(--text-tertiary)' }}>Category</div>
                <div style={{ fontSize: 'var(--text-sm)', fontWeight: 600 }}>{rec.category}</div>
              </div>
            </div>

            {rec.status === 'pending' && (
              <div className="flex gap-2">
                <button className="btn btn-success btn-sm" onClick={() => handleApprove(rec.id)}>
                  <Check size={14} /> Approve
                </button>
                <button className="btn btn-danger btn-sm" onClick={() => handleReject(rec.id)}>
                  <X size={14} /> Reject
                </button>
                <button className="btn btn-outline btn-sm">Modify</button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
