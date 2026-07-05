import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';
import { useThemeStore } from '../../stores/themeStore';

export default function DashboardLayout() {
  const { sidebarCollapsed, sidebarMobileOpen, setSidebarMobileOpen } = useThemeStore();

  return (
    <div className={`dashboard-layout ${sidebarCollapsed ? 'sidebar-collapsed' : ''}`}>
      {/* Mobile overlay */}
      {sidebarMobileOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0,0,0,0.5)',
            zIndex: 29,
          }}
          onClick={() => setSidebarMobileOpen(false)}
        />
      )}

      <Sidebar />
      <div className="dashboard-main">
        <Header />
        <main className="dashboard-content">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
