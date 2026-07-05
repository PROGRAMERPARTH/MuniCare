export type UserRole = 'citizen' | 'officer' | 'admin';

export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  role: UserRole;
  avatar: string;
  ward: string;
  zone: string;
  address: string;
  isActive: boolean;
  createdAt: string;
}

export interface CitizenProfile extends User {
  role: 'citizen';
  totalComplaints: number;
  resolvedComplaints: number;
  pendingComplaints: number;
  satisfactionScore: number;
}

export interface OfficerProfile extends User {
  role: 'officer';
  departmentId: string;
  departmentName: string;
  designation: string;
  assignedWards: string[];
  tasksCompleted: number;
  tasksPending: number;
  avgResolutionTime: number;
  performanceScore: number;
}

export interface AdminProfile extends User {
  role: 'admin';
  designation: string;
  departmentId: string | null;
  accessLevel: 'commissioner' | 'department_head' | 'supervisor';
}

export interface Notification {
  id: string;
  userId: string;
  title: string;
  message: string;
  type: 'complaint_update' | 'assignment' | 'alert' | 'system' | 'achievement';
  isRead: boolean;
  link: string;
  createdAt: string;
  icon: string;
}
