import { useState, useRef, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  Search, Bell, Sun, Moon, Menu, ChevronRight,
  LogOut, User, Settings, Shield, UserCircle,
} from 'lucide-react';
import { useAuthStore, demoUsers } from '../../stores/authStore';
import { useThemeStore } from '../../stores/themeStore';
import type { UserRole } from '../../types/user';

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const { user, notifications, unreadCount, markAllNotificationsRead, setRole, logout } = useAuthStore();
  const { theme, toggleTheme, setSidebarMobileOpen } = useThemeStore();
  const [showNotifications, setShowNotifications] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const notifRef = useRef<HTMLDivElement>(null);
  const userMenuRef = useRef<HTMLDivElement>(null);

  // Close dropdowns on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (notifRef.current && !notifRef.current.contains(e.target as Node)) {
        setShowNotifications(false);
      }
      if (userMenuRef.current && !userMenuRef.current.contains(e.target as Node)) {
        setShowUserMenu(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const getBreadcrumbs = () => {
    const parts = location.pathname.split('/').filter(Boolean);
    return parts.map((p) => p.charAt(0).toUpperCase() + p.slice(1).replace(/-/g, ' '));
  };

  const breadcrumbs = getBreadcrumbs();

  const handleRoleSwitch = (role: UserRole) => {
    setRole(role);
    setShowUserMenu(false);
    navigate(`/${role}`);
  };

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const getInitials = (name: string) =>
    name.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase();

  return (
    <header className="header">
      <div className="header-left">
        <button
          className="header-icon-btn show-mobile-only"
          onClick={() => setSidebarMobileOpen(true)}
        >
          <Menu size={20} />
        </button>

        <div className="header-breadcrumb hide-mobile">
          {breadcrumbs.map((crumb, i) => (
            <span key={i}>
              {i > 0 && <ChevronRight size={14} style={{ margin: '0 4px', opacity: 0.5 }} />}
              {crumb}
            </span>
          ))}
        </div>

        <div className="header-search hide-mobile">
          <Search size={16} style={{ color: 'var(--text-tertiary)', flexShrink: 0 }} />
          <input
            type="text"
            placeholder="Search complaints, services..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      <div className="header-right">
        {/* Role Switcher (Demo) */}
        <div className="hide-mobile" style={{ display: 'flex', gap: 4, marginRight: 8 }}>
          {(['citizen', 'officer', 'admin'] as UserRole[]).map((role) => (
            <button
              key={role}
              className={`btn btn-sm ${user?.role === role ? 'btn-primary' : 'btn-ghost'}`}
              onClick={() => handleRoleSwitch(role)}
              style={{ fontSize: 11, padding: '2px 8px' }}
            >
              {role === 'citizen' ? '👤' : role === 'officer' ? '👮' : '🏛️'}
              <span className="hide-mobile" style={{ marginLeft: 4 }}>
                {role.charAt(0).toUpperCase() + role.slice(1)}
              </span>
            </button>
          ))}
        </div>

        {/* Theme Toggle */}
        <button className="header-icon-btn" onClick={toggleTheme} title="Toggle theme">
          {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
        </button>

        {/* Notifications */}
        <div ref={notifRef} style={{ position: 'relative' }}>
          <button
            className="header-icon-btn"
            onClick={() => {
              setShowNotifications(!showNotifications);
              setShowUserMenu(false);
            }}
          >
            <Bell size={18} />
            {unreadCount > 0 && (
              <span className="notification-badge">{unreadCount}</span>
            )}
          </button>

          {showNotifications && (
            <div className="dropdown" style={{ width: 360, right: 0, maxHeight: 400, overflow: 'auto' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px 12px' }}>
                <h4 style={{ fontSize: 14, fontWeight: 700 }}>Notifications</h4>
                <button
                  className="btn btn-ghost btn-sm"
                  onClick={() => markAllNotificationsRead()}
                  style={{ fontSize: 11 }}
                >
                  Mark all read
                </button>
              </div>
              <div className="dropdown-divider" />
              {notifications.map((notif) => (
                <div
                  key={notif.id}
                  className="dropdown-item"
                  style={{
                    alignItems: 'flex-start',
                    padding: '10px 12px',
                    background: notif.isRead ? 'transparent' : 'var(--primary-50)',
                    borderRadius: 8,
                  }}
                  onClick={() => {
                    setShowNotifications(false);
                    navigate(notif.link);
                  }}
                >
                  <span style={{ fontSize: 20, flexShrink: 0, lineHeight: 1 }}>{notif.icon}</span>
                  <div>
                    <div style={{ fontSize: 13, fontWeight: 600 }}>{notif.title}</div>
                    <div style={{ fontSize: 12, color: 'var(--text-tertiary)', marginTop: 2 }}>{notif.message}</div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* User Menu */}
        <div ref={userMenuRef} style={{ position: 'relative' }}>
          <div className="header-user-menu" onClick={() => {
            setShowUserMenu(!showUserMenu);
            setShowNotifications(false);
          }}>
            <div className="avatar avatar-sm avatar-placeholder" style={{ width: 32, height: 32, fontSize: 11 }}>
              {user ? getInitials(user.name) : 'U'}
            </div>
            <div className="hide-mobile">
              <div style={{ fontSize: 13, fontWeight: 600, lineHeight: 1.2 }}>{user?.name?.split(' ')[0]}</div>
              <div style={{ fontSize: 11, color: 'var(--text-tertiary)' }}>{user?.role}</div>
            </div>
          </div>

          {showUserMenu && (
            <div className="dropdown" style={{ width: 220 }}>
              <button className="dropdown-item" onClick={() => { setShowUserMenu(false); navigate(`/${user?.role}/profile`); }}>
                <UserCircle size={16} />
                <span>My Profile</span>
              </button>
              <button className="dropdown-item" onClick={() => { setShowUserMenu(false); navigate(`/${user?.role}/settings`); }}>
                <Settings size={16} />
                <span>Settings</span>
              </button>
              <div className="dropdown-divider" />
              <div style={{ padding: '4px 12px', fontSize: 11, color: 'var(--text-tertiary)', fontWeight: 600 }}>
                SWITCH ROLE
              </div>
              {(['citizen', 'officer', 'admin'] as UserRole[]).map((role) => (
                <button key={role} className="dropdown-item" onClick={() => handleRoleSwitch(role)}>
                  {role === 'citizen' ? <User size={16} /> : role === 'officer' ? <Shield size={16} /> : <Shield size={16} />}
                  <span>{role.charAt(0).toUpperCase() + role.slice(1)}</span>
                  {user?.role === role && <span style={{ marginLeft: 'auto', fontSize: 10 }}>✓</span>}
                </button>
              ))}
              <div className="dropdown-divider" />
              <button className="dropdown-item" onClick={handleLogout} style={{ color: 'var(--danger-600)' }}>
                <LogOut size={16} />
                <span>Logout</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
