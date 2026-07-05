export interface Department {
  id: string;
  name: string;
  shortName: string;
  icon: string;
  color: string;
  headName: string;
  headEmail: string;
  headPhone: string;
  totalStaff: number;
  activeOfficers: number;
  totalComplaints: number;
  resolvedComplaints: number;
  pendingComplaints: number;
  avgResolutionTime: number;
  resolutionRate: number;
  budget: number;
  budgetUtilized: number;
  satisfactionScore: number;
  categories: string[];
}

export interface Ward {
  id: string;
  name: string;
  zone: string;
  population: number;
  area: number;
  councilor: string;
  totalComplaints: number;
  resolvedComplaints: number;
  openComplaints: number;
  avgResolutionTime: number;
  satisfactionScore: number;
  center: { lat: number; lng: number };
}

export interface DepartmentPerformance {
  departmentId: string;
  departmentName: string;
  month: string;
  complaintsReceived: number;
  complaintsResolved: number;
  avgResolutionDays: number;
  satisfactionScore: number;
  budgetUtilized: number;
}
