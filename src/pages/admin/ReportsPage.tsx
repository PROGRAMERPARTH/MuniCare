import { FileText, Download, Filter, Calendar } from 'lucide-react';

export default function ReportsPage() {
  const reports = [
    { id: 'REP-2024-001', name: 'Monthly Resolution Summary', date: 'Oct 01, 2024', type: 'Performance', size: '2.4 MB' },
    { id: 'REP-2024-002', name: 'Q3 Department Budget Audit', date: 'Sep 30, 2024', type: 'Financial', size: '5.1 MB' },
    { id: 'REP-2024-003', name: 'AI Prediction Accuracy Analysis', date: 'Sep 15, 2024', type: 'Analytics', size: '1.8 MB' },
    { id: 'REP-2024-004', name: 'Citizen Satisfaction Survey', date: 'Sep 01, 2024', type: 'Public', size: '3.2 MB' },
  ];

  return (
    <div className="animate-fadeIn">
      <div className="page-header flex items-center justify-between">
        <div>
          <h1>Generated Reports</h1>
          <p>Download and manage automated system reports</p>
        </div>
        <button className="btn btn-primary"><FileText size={18} /> Generate New Report</button>
      </div>

      <div className="card">
        <div className="flex items-center justify-between mb-4">
          <div className="flex gap-2">
            <button className="btn btn-outline btn-sm"><Filter size={14} /> All Types</button>
            <button className="btn btn-outline btn-sm"><Calendar size={14} /> This Year</button>
          </div>
        </div>

        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Report ID</th>
                <th>Name</th>
                <th>Type</th>
                <th>Date Generated</th>
                <th>Size</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {reports.map((rep, i) => (
                <tr key={rep.id} className="animate-slideUp" style={{ animationDelay: `${i * 0.05}s` }}>
                  <td><span style={{ fontSize: 'var(--text-xs)', color: 'var(--text-tertiary)', fontFamily: 'monospace' }}>{rep.id}</span></td>
                  <td><strong>{rep.name}</strong></td>
                  <td><span className="badge badge-neutral">{rep.type}</span></td>
                  <td>{rep.date}</td>
                  <td>{rep.size}</td>
                  <td>
                    <button className="btn btn-ghost btn-sm" style={{ color: 'var(--primary-600)' }}>
                      <Download size={16} /> Download
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
