import { Bell, Moon, Shield, Globe } from 'lucide-react';
import { useThemeStore } from '../../stores/themeStore';

export default function Settings() {
  const { theme, toggleTheme } = useThemeStore();

  return (
    <div className="animate-fadeIn" style={{ maxWidth: 800, margin: '0 auto' }}>
      <div className="page-header">
        <h1>Settings</h1>
        <p>Manage your app preferences and notifications</p>
      </div>

      <div className="card" style={{ marginBottom: 'var(--space-4)' }}>
        <h3 style={{ marginBottom: 'var(--space-4)' }}>Appearance</h3>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div style={{ width: 40, height: 40, borderRadius: 'var(--radius-lg)', background: 'var(--bg-tertiary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Moon size={20} />
            </div>
            <div>
              <div style={{ fontWeight: 600 }}>Dark Mode</div>
              <div style={{ fontSize: 'var(--text-xs)', color: 'var(--text-tertiary)' }}>Toggle dark/light theme</div>
            </div>
          </div>
          <button className={`btn ${theme === 'dark' ? 'btn-primary' : 'btn-outline'} btn-sm`} onClick={toggleTheme}>
            {theme === 'dark' ? 'Enabled' : 'Disabled'}
          </button>
        </div>
      </div>

      <div className="card" style={{ marginBottom: 'var(--space-4)' }}>
        <h3 style={{ marginBottom: 'var(--space-4)' }}>Notifications</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
          {[
            { title: 'Push Notifications', desc: 'Receive alerts for complaint updates', icon: Bell, active: true },
            { title: 'SMS Alerts', desc: 'Receive text messages for emergency updates', icon: Shield, active: false },
            { title: 'Email Digest', desc: 'Weekly summary of municipal news', icon: Globe, active: true },
          ].map((item, i) => (
            <div key={i} className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div style={{ width: 40, height: 40, borderRadius: 'var(--radius-lg)', background: 'var(--bg-tertiary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <item.icon size={20} />
                </div>
                <div>
                  <div style={{ fontWeight: 600 }}>{item.title}</div>
                  <div style={{ fontSize: 'var(--text-xs)', color: 'var(--text-tertiary)' }}>{item.desc}</div>
                </div>
              </div>
              <label className="switch">
                <input type="checkbox" defaultChecked={item.active} />
                <span className="slider round"></span>
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
