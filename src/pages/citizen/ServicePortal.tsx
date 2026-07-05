import { useNavigate } from 'react-router-dom';
import { Clock, IndianRupee, FileText, ExternalLink } from 'lucide-react';
import { municipalServices } from '../../services/mockData';

export default function ServicePortal() {
  const navigate = useNavigate();
  const categories = [...new Set(municipalServices.map(s => s.category))];

  return (
    <div className="animate-fadeIn">
      <div className="page-header">
        <h1>Municipal Services</h1>
        <p>Apply for certificates, licenses, connections, and more</p>
      </div>

      {categories.map((cat) => (
        <div key={cat} style={{ marginBottom: 'var(--space-8)' }}>
          <h3 style={{ fontSize: 'var(--text-lg)', fontWeight: 700, marginBottom: 'var(--space-4)' }}>{cat}</h3>
          <div className="service-grid">
            {municipalServices.filter(s => s.category === cat).map((service, i) => (
              <div key={service.id} className="service-card animate-slideUp" style={{ animationDelay: `${i * 0.08}s` }}>
                <div className="service-card-icon" style={{ background: 'var(--primary-50)', color: 'var(--primary-600)' }}>
                  {service.icon}
                </div>
                <div className="service-card-name">{service.name}</div>
                <div className="service-card-dept">{service.departmentName}</div>
                <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', marginBottom: 'var(--space-3)', lineHeight: 1.5 }}>
                  {service.description}
                </p>
                <div className="service-card-meta">
                  <span><Clock size={12} /> {service.avgProcessingDays} days</span>
                  <span><IndianRupee size={12} /> ₹{service.fee}</span>
                  <span><FileText size={12} /> {service.requiredDocuments.length} docs</span>
                </div>
                <button className="btn btn-outline btn-sm" style={{ width: '100%', marginTop: 'var(--space-3)' }}>
                  Apply Now <ExternalLink size={12} />
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
