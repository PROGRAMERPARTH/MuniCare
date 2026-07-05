import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useThemeStore } from './stores/themeStore';
import { useAuthStore } from './stores/authStore';

// Layout
import DashboardLayout from './components/layout/DashboardLayout';

// Auth
import LoginPage from './pages/auth/LoginPage';
import RegisterPage from './pages/auth/RegisterPage';

// Citizen
import CitizenDashboard from './pages/citizen/CitizenDashboard';
import ComplaintRegistration from './pages/citizen/ComplaintRegistration';
import ComplaintTracker from './pages/citizen/ComplaintTracker';
import ServicePortal from './pages/citizen/ServicePortal';
import EmergencyReport from './pages/citizen/EmergencyReport';
import ProfilePage from './pages/citizen/ProfilePage';
import AIAssistantChat from './pages/citizen/AIAssistantChat';
import CitizenComplaintDetail from './pages/citizen/CitizenComplaintDetail';
import Settings from './pages/Settings';

// Officer
import OfficerDashboard from './pages/officer/OfficerDashboard';
import TaskList from './pages/officer/TaskList';
import TaskDetail from './pages/officer/TaskDetail';
import WorkReport from './pages/officer/WorkReport';
import OfficerMap from './pages/officer/OfficerMap';
import OfficerCompletedTasks from './pages/officer/OfficerCompletedTasks';

// Admin
import AdminDashboard from './pages/admin/AdminDashboard';
import LiveCityDashboard from './pages/admin/LiveCityDashboard';
import DepartmentManagement from './pages/admin/DepartmentManagement';
import AnalyticsPage from './pages/admin/AnalyticsPage';
import PredictiveIntelligence from './pages/admin/PredictiveIntelligence';
import DecisionIntelligence from './pages/admin/DecisionIntelligence';
import ResourceOptimization from './pages/admin/ResourceOptimization';
import ReportsPage from './pages/admin/ReportsPage';

// Public
import LandingPage from './pages/public/LandingPage';
import TransparencyPortal from './pages/public/TransparencyPortal';

function AppInit() {
  const { theme } = useThemeStore();

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return null;
}

// Simple placeholder for routes not yet created
function Placeholder({ title }: { title: string }) {
  return (
    <div className="animate-fadeIn">
      <div className="page-header">
        <h1>{title}</h1>
        <p>This page is under development</p>
      </div>
      <div className="card" style={{ textAlign: 'center', padding: 'var(--space-16)' }}>
        <div style={{ fontSize: 48, marginBottom: 16 }}>🚧</div>
        <h3>Coming Soon</h3>
        <p style={{ color: 'var(--text-secondary)', marginTop: 8 }}>
          This feature is being built as part of the Smart Municipal AI Platform
        </p>
      </div>
    </div>
  );
}

export default function App() {
  const { isAuthenticated, user } = useAuthStore();

  return (
    <BrowserRouter>
      <AppInit />
      <Routes>
        {/* Public */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/transparency" element={<TransparencyPortal />} />

        {/* Citizen Portal */}
        <Route path="/citizen" element={<DashboardLayout />}>
          <Route index element={<CitizenDashboard />} />
          <Route path="register-complaint" element={<ComplaintRegistration />} />
          <Route path="complaints" element={<ComplaintTracker />} />
          <Route path="complaints/:id" element={<CitizenComplaintDetail />} />
          <Route path="services" element={<ServicePortal />} />
          <Route path="emergency" element={<EmergencyReport />} />
          <Route path="profile" element={<ProfilePage />} />
          <Route path="settings" element={<Settings />} />
          <Route path="chat" element={<AIAssistantChat />} />
        </Route>

        {/* Officer Portal */}
        <Route path="/officer" element={<DashboardLayout />}>
          <Route index element={<OfficerDashboard />} />
          <Route path="tasks" element={<TaskList />} />
          <Route path="tasks/:id" element={<TaskDetail />} />
          <Route path="map" element={<OfficerMap />} />
          <Route path="completed" element={<OfficerCompletedTasks />} />
          <Route path="reports" element={<WorkReport />} />
          <Route path="profile" element={<ProfilePage />} />
          <Route path="settings" element={<Settings />} />
        </Route>

        {/* Admin Portal */}
        <Route path="/admin" element={<DashboardLayout />}>
          <Route index element={<AdminDashboard />} />
          <Route path="live" element={<LiveCityDashboard />} />
          <Route path="departments" element={<DepartmentManagement />} />
          <Route path="analytics" element={<AnalyticsPage />} />
          <Route path="predictions" element={<PredictiveIntelligence />} />
          <Route path="decisions" element={<DecisionIntelligence />} />
          <Route path="resources" element={<ResourceOptimization />} />
          <Route path="reports" element={<ReportsPage />} />
        </Route>

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
