import { NavLink, useLocation } from 'react-router-dom';
import {
  LayoutDashboard, FileText, PlusCircle, Search, MapPin,
  ClipboardList, CheckSquare, FileBarChart, Shield,
  Activity, Building2, BarChart3, Brain, Lightbulb,
  Truck, FileOutput, Globe, Users, AlertTriangle,
  Settings, LogOut, ChevronLeft, ChevronRight, Briefcase, Zap,
} from 'lucide-react';
import { useAuthStore } from '../../stores/authStore';
import { useThemeStore } from '../../stores/themeStore';

const citizenNav = [
  { section: 'Main', items: [
    { to: '/citizen', icon: LayoutDashboard, label: 'Dashboard', end: true },
    { to: '/citizen/register-complaint', icon: PlusCircle, label: 'New Complaint' },
    { to: '/citizen/complaints', icon: FileText, label: 'My Complaints', badge: 3 },
    { to: '/citizen/services', icon: Briefcase, label: 'Services' },
    { to: '/citizen/emergency', icon: AlertTriangle, label: 'Emergency' },
  ]},
  { section: 'Account', items: [
    { to: '/citizen/profile', icon: Users, label: 'Profile' },
    { to: '/citizen/settings', icon: Settings, label: 'Settings' },
  ]},
];

const officerNav = [
  { section: 'Main', items: [
    { to: '/officer', icon: LayoutDashboard, label: 'Dashboard', end: true },
    { to: '/officer/tasks', icon: ClipboardList, label: 'My Tasks', badge: 8 },
    { to: '/officer/map', icon: MapPin, label: 'Task Map' },
    { to: '/officer/completed', icon: CheckSquare, label: 'Completed' },
    { to: '/officer/reports', icon: FileBarChart, label: 'Work Report' },
  ]},
];

const adminNav = [
  { section: 'Overview', items: [
    { to: '/admin', icon: LayoutDashboard, label: 'Dashboard', end: true },
    { to: '/admin/live', icon: Activity, label: 'Live City', badge: 12 },
    { to: '/admin/departments', icon: Building2, label: 'Departments' },
  ]},
  { section: 'Intelligence', items: [
    { to: '/admin/analytics', icon: BarChart3, label: 'Analytics' },
    { to: '/admin/predictions', icon: Brain, label: 'Predictions' },
    { to: '/admin/decisions', icon: Lightbulb, label: 'AI Decisions' },
    { to: '/admin/resources', icon: Truck, label: 'Resources' },
    { to: '/admin/reports', icon: FileOutput, label: 'Reports' },
  ]},
  { section: 'Public', items: [
    { to: '/transparency', icon: Globe, label: 'Transparency' },
  ]},
];

export default function Sidebar() {
  const { user } = useAuthStore();
  const { sidebarCollapsed, toggleSidebar } = useThemeStore();
  const location = useLocation();

  const role = user?.role || 'citizen';
  const navSections = role === 'admin' ? adminNav : role === 'officer' ? officerNav : citizenNav;

  const getInitials = (name: string) =>
    name.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase();

  return (
    <aside className={`sidebar ${sidebarCollapsed ? '' : ''}`}>
      <div className="sidebar-header">
        <div className="sidebar-logo">
          <Zap size={20} />
        </div>
        <div className="sidebar-brand">
          <span className="sidebar-brand-name">MuniCare AI</span>
          <span className="sidebar-brand-sub">Smart City Platform</span>
        </div>
      </div>

      <nav className="sidebar-nav">
        {navSections.map((section) => (
          <div key={section.section}>
            <div className="sidebar-section-title">{section.section}</div>
            {section.items.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.end}
                className={({ isActive }) =>
                  `sidebar-item ${isActive ? 'active' : ''}`
                }
              >
                <span className="sidebar-item-icon">
                  <item.icon size={18} />
                </span>
                <span className="sidebar-item-label">{item.label}</span>
                {item.badge && (
                  <span className="sidebar-item-badge">{item.badge}</span>
                )}
              </NavLink>
            ))}
          </div>
        ))}
      </nav>

      <div className="sidebar-footer">
        <button
          className="sidebar-item"
          onClick={toggleSidebar}
          style={{ width: '100%', marginBottom: 8 }}
        >
          <span className="sidebar-item-icon">
            {sidebarCollapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
          </span>
          <span className="sidebar-item-label">Collapse</span>
        </button>

        <div className="sidebar-user">
          <div className="avatar avatar-sm avatar-placeholder" style={{ width: 36, height: 36, fontSize: 12 }}>
            {user ? getInitials(user.name) : 'U'}
          </div>
          <div className="sidebar-user-info">
            <div className="sidebar-user-name">{user?.name || 'User'}</div>
            <div className="sidebar-user-role">{user?.role === 'admin' ? 'Commissioner' : user?.role === 'officer' ? 'Field Officer' : 'Citizen'}</div>
          </div>
        </div>
      </div>
    </aside>
  );
}
