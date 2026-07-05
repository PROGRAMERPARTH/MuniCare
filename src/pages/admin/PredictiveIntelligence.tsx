import { Brain, AlertTriangle, MapPin, Calendar, IndianRupee, TrendingUp } from 'lucide-react';
import { predictions } from '../../services/mockData';

export default function PredictiveIntelligence() {
  const icons: Record<string, string> = { garbage: '🗑️', pothole: '🕳️', water_pipeline: '💧', flood: '🌊', mosquito: '🦟' };

  return (
    <div className="animate-fadeIn">
      <div className="page-header">
        <div className="flex items-center gap-3">
          <div style={{ width: 48, height: 48, borderRadius: 'var(--radius-lg)', background: 'linear-gradient(135deg, var(--primary-500), var(--accent-500))', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>
            <Brain size={24} />
          </div>
          <div>
            <h1>Predictive Intelligence</h1>
            <p>AI-powered forecasting for proactive city management</p>
          </div>
        </div>
      </div>

      <div className="grid grid-2" style={{ gap: 'var(--space-4)' }}>
        {predictions.map((pred, i) => (
          <div key={pred.id} className="card card-gradient animate-slideUp" style={{ animationDelay: `${i * 0.1}s` }}>
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <span style={{ fontSize: 28 }}>{icons[pred.type]}</span>
                <span className={`badge badge-${pred.impactLevel === 'critical' ? 'danger' : pred.impactLevel === 'high' ? 'warning' : 'info'}`}>
                  <AlertTriangle size={10} /> {pred.impactLevel}
                </span>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontSize: 'var(--text-2xl)', fontWeight: 800, color: pred.confidence > 80 ? 'var(--success-600)' : 'var(--warning-600)' }}>
                  {pred.confidence}%
                </div>
                <div style={{ fontSize: 'var(--text-xs)', color: 'var(--text-tertiary)' }}>Confidence</div>
              </div>
            </div>

            <h3 style={{ fontSize: 'var(--text-base)', fontWeight: 700, marginBottom: 'var(--space-2)' }}>{pred.title}</h3>
            <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: 'var(--space-3)' }}>
              {pred.description}
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 'var(--space-2)', marginBottom: 'var(--space-3)' }}>
              <div className="flex items-center gap-1" style={{ fontSize: 'var(--text-xs)', color: 'var(--text-tertiary)' }}>
                <MapPin size={12} /> {pred.location.area}
              </div>
              <div className="flex items-center gap-1" style={{ fontSize: 'var(--text-xs)', color: 'var(--text-tertiary)' }}>
                <Calendar size={12} /> {pred.predictedDate}
              </div>
              <div className="flex items-center gap-1" style={{ fontSize: 'var(--text-xs)', color: 'var(--text-tertiary)' }}>
                <IndianRupee size={12} /> ₹{(pred.estimatedCost / 100000).toFixed(1)}L est. cost
              </div>
              <div className="flex items-center gap-1" style={{ fontSize: 'var(--text-xs)', color: 'var(--text-tertiary)' }}>
                <TrendingUp size={12} /> {pred.department}
              </div>
            </div>

            <div style={{ padding: 'var(--space-3)', background: 'var(--bg-tertiary)', borderRadius: 'var(--radius-lg)', fontSize: 'var(--text-sm)', color: 'var(--text-secondary)' }}>
              <strong style={{ color: 'var(--text-primary)' }}>Recommended Action:</strong><br />
              {pred.recommendedAction}
            </div>

            <div className="flex gap-2" style={{ marginTop: 'var(--space-3)' }}>
              <button className="btn btn-primary btn-sm" style={{ flex: 1 }}>Take Action</button>
              <button className="btn btn-outline btn-sm" style={{ flex: 1 }}>Schedule Later</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
