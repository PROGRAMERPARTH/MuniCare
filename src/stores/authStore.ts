import { create } from 'zustand';
import type { UserRole, Notification } from '../types/user';

interface AuthUser {
  id: string;
  name: string;
  email: string;
  phone: string;
  role: UserRole;
  avatar: string;
  ward: string;
  zone: string;
}

interface AuthState {
  user: AuthUser | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  notifications: Notification[];
  unreadCount: number;

  // Actions
  login: (user: AuthUser) => void;
  logout: () => void;
  setRole: (role: UserRole) => void;
  setLoading: (loading: boolean) => void;
  addNotification: (notification: Notification) => void;
  markNotificationRead: (id: string) => void;
  markAllNotificationsRead: () => void;
}

// Demo users for each role
const demoUsers: Record<UserRole, AuthUser> = {
  citizen: {
    id: 'citizen-001',
    name: 'Arjun Sharma',
    email: 'arjun.sharma@email.com',
    phone: '+91 98765 43210',
    role: 'citizen',
    avatar: '',
    ward: 'Ward 15 - Koramangala',
    zone: 'South Zone',
  },
  officer: {
    id: 'officer-001',
    name: 'Priya Patel',
    email: 'priya.patel@muni.gov.in',
    phone: '+91 98765 43211',
    role: 'officer',
    avatar: '',
    ward: 'Ward 15 - Koramangala',
    zone: 'South Zone',
  },
  admin: {
    id: 'admin-001',
    name: 'Commissioner Rajesh Kumar',
    email: 'commissioner@muni.gov.in',
    phone: '+91 98765 43212',
    role: 'admin',
    avatar: '',
    ward: 'All Wards',
    zone: 'All Zones',
  },
};

const defaultNotifications: Notification[] = [
  {
    id: 'n1',
    userId: 'citizen-001',
    title: 'Complaint Resolved',
    message: 'Your pothole complaint #MUN-2024-1847 has been resolved.',
    type: 'complaint_update',
    isRead: false,
    link: '/citizen/complaints/MUN-2024-1847',
    createdAt: '2024-03-15T10:30:00Z',
    icon: '✅',
  },
  {
    id: 'n2',
    userId: 'citizen-001',
    title: 'New Assignment',
    message: 'A field officer has been assigned to your garbage complaint.',
    type: 'assignment',
    isRead: false,
    link: '/citizen/complaints/MUN-2024-1902',
    createdAt: '2024-03-15T09:15:00Z',
    icon: '👤',
  },
  {
    id: 'n3',
    userId: 'citizen-001',
    title: 'Water Supply Advisory',
    message: 'Scheduled maintenance in Ward 15 on March 17. Water supply will be interrupted from 10 AM to 2 PM.',
    type: 'system',
    isRead: true,
    link: '/citizen/notifications',
    createdAt: '2024-03-14T16:00:00Z',
    icon: '💧',
  },
  {
    id: 'n4',
    userId: 'citizen-001',
    title: 'Achievement Unlocked',
    message: 'You have filed 10 complaints! You are an Active Citizen.',
    type: 'achievement',
    isRead: true,
    link: '/citizen/profile',
    createdAt: '2024-03-13T12:00:00Z',
    icon: '🏆',
  },
];

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isAuthenticated: false,
  isLoading: false,
  notifications: defaultNotifications,
  unreadCount: defaultNotifications.filter(n => !n.isRead).length,

  login: (user) =>
    set({
      user,
      isAuthenticated: true,
      isLoading: false,
    }),

  logout: () =>
    set({
      user: null,
      isAuthenticated: false,
      isLoading: false,
    }),

  setRole: (role) =>
    set({
      user: demoUsers[role],
      isAuthenticated: true,
    }),

  setLoading: (loading) => set({ isLoading: loading }),

  addNotification: (notification) =>
    set((state) => ({
      notifications: [notification, ...state.notifications],
      unreadCount: state.unreadCount + 1,
    })),

  markNotificationRead: (id) =>
    set((state) => ({
      notifications: state.notifications.map((n) =>
        n.id === id ? { ...n, isRead: true } : n
      ),
      unreadCount: Math.max(0, state.unreadCount - 1),
    })),

  markAllNotificationsRead: () =>
    set((state) => ({
      notifications: state.notifications.map((n) => ({ ...n, isRead: true })),
      unreadCount: 0,
    })),
}));

export { demoUsers };
