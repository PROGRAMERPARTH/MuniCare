import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, AreaChart, Area, ResponsiveContainer, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { monthlyTrends, categoryBreakdown, departments } from '../../services/mockData';
import { Download, Calendar } from 'lucide-react';

export default function AnalyticsPage() {
  const wardData = [
    { ward: 'W1', complaints: 234, resolved: 198 },
    { ward: 'W2', complaints: 312, resolved: 267 },
    { ward: 'W5', complaints: 287, resolved: 251 },
    { ward: 'W8', complaints: 198, resolved: 172 },
    { ward: 'W12', complaints: 456, resolved: 378 },
    { ward: 'W15', complaints: 345, resolved: 289 },
    { ward: 'W18', complaints: 389, resolved: 320 },
    { ward: 'W22', complaints: 267, resolved: 223 },
  ];

  const COLORS = categoryBreakdown.map(c => c.color);

  return (
    <div className="animate-fadeIn">
      <div className="page-header">
        <div className="flex items-center justify-between">
          <div>
            <h1>Analytics & Insights</h1>
            <p>Historical data analysis and trend identification</p>
          </div>
          <div className="flex gap-2">
            <button className="btn btn-outline btn-sm"><Calendar size={14} /> Last 12 Months</button>
            <button className="btn btn-primary btn-sm"><Download size={14} /> Export PDF</button>
          </div>
        </div>
      </div>

      <div className="dashboard-grid-2 mb-6">
        {/* Monthly Trend */}
        <div className="chart-card animate-slideUp" style={{ animationDelay: '0.1s' }}>
          <div className="chart-card-header">
            <div>
              <div className="chart-card-title">Monthly Trends</div>
              <div className="chart-card-subtitle">Complaints received vs resolved</div>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={280}>
            <AreaChart data={monthlyTrends}>
              <defs>
                <linearGradient id="gc" x1="0" y1="0" x2="0" y2="1"><stop offset="5%" stopColor="#3b5eff" stopOpacity={0.3}/><stop offset="95%" stopColor="#3b5eff" stopOpacity={0}/></linearGradient>
                <linearGradient id="gr" x1="0" y1="0" x2="0" y2="1"><stop offset="5%" stopColor="#22c55e" stopOpacity={0.3}/><stop offset="95%" stopColor="#22c55e" stopOpacity={0}/></linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border-primary)" />
              <XAxis dataKey="month" tick={{ fontSize: 10, fill: 'var(--text-tertiary)' }} />
              <YAxis tick={{ fontSize: 10, fill: 'var(--text-tertiary)' }} />
              <Tooltip contentStyle={{ background: 'var(--bg-card)', border: '1px solid var(--border-primary)', borderRadius: 8, fontSize: 12 }} />
              <Legend wrapperStyle={{ fontSize: 11 }} />
              <Area type="monotone" dataKey="complaints" stroke="#3b5eff" fill="url(#gc)" strokeWidth={2} name="Received" />
              <Area type="monotone" dataKey="resolved" stroke="#22c55e" fill="url(#gr)" strokeWidth={2} name="Resolved" />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Category Pie */}
        <div className="chart-card animate-slideUp" style={{ animationDelay: '0.2s' }}>
          <div className="chart-card-header">
            <div>
              <div className="chart-card-title">Category Breakdown</div>
              <div className="chart-card-subtitle">Distribution by complaint type</div>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={220}>
            <PieChart>
              <Pie data={categoryBreakdown} dataKey="count" nameKey="category" cx="50%" cy="50%" innerRadius={55} outerRadius={85} paddingAngle={3}>
                {categoryBreakdown.map((_, i) => <Cell key={i} fill={COLORS[i]} />)}
              </Pie>
              <Tooltip contentStyle={{ background: 'var(--bg-card)', border: '1px solid var(--border-primary)', borderRadius: 8, fontSize: 12 }} />
            </PieChart>
          </ResponsiveContainer>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, justifyContent: 'center', marginTop: 8 }}>
            {categoryBreakdown.map(item => (
              <span key={item.category} style={{ fontSize: 10, display: 'flex', alignItems: 'center', gap: 4 }}>
                <span style={{ width: 8, height: 8, borderRadius: '50%', background: item.color }} /> {item.category} ({item.percentage}%)
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="dashboard-grid-2 mb-6">
        {/* Ward Comparison */}
        <div className="chart-card animate-slideUp" style={{ animationDelay: '0.3s' }}>
          <div className="chart-card-header">
            <div>
              <div className="chart-card-title">Ward Comparison</div>
              <div className="chart-card-subtitle">Complaints by ward</div>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={wardData}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border-primary)" />
              <XAxis dataKey="ward" tick={{ fontSize: 11, fill: 'var(--text-tertiary)' }} />
              <YAxis tick={{ fontSize: 11, fill: 'var(--text-tertiary)' }} />
              <Tooltip contentStyle={{ background: 'var(--bg-card)', border: '1px solid var(--border-primary)', borderRadius: 8, fontSize: 12 }} />
              <Legend wrapperStyle={{ fontSize: 11 }} />
              <Bar dataKey="complaints" fill="#3b5eff" name="Total" radius={[4, 4, 0, 0]} />
              <Bar dataKey="resolved" fill="#22c55e" name="Resolved" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Satisfaction & Resolution Time */}
        <div className="chart-card animate-slideUp" style={{ animationDelay: '0.4s' }}>
          <div className="chart-card-header">
            <div>
              <div className="chart-card-title">Satisfaction & Resolution Time</div>
              <div className="chart-card-subtitle">Monthly quality metrics</div>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={monthlyTrends}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border-primary)" />
              <XAxis dataKey="month" tick={{ fontSize: 10, fill: 'var(--text-tertiary)' }} />
              <YAxis yAxisId="left" tick={{ fontSize: 10, fill: 'var(--text-tertiary)' }} />
              <YAxis yAxisId="right" orientation="right" tick={{ fontSize: 10, fill: 'var(--text-tertiary)' }} />
              <Tooltip contentStyle={{ background: 'var(--bg-card)', border: '1px solid var(--border-primary)', borderRadius: 8, fontSize: 12 }} />
              <Legend wrapperStyle={{ fontSize: 11 }} />
              <Line yAxisId="left" type="monotone" dataKey="satisfaction" stroke="#f59e0b" strokeWidth={2} name="Satisfaction" dot={{ r: 3 }} />
              <Line yAxisId="right" type="monotone" dataKey="avgDays" stroke="#ef4444" strokeWidth={2} name="Avg Days" dot={{ r: 3 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
