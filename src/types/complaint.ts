export type ComplaintStatus = 'submitted' | 'assigned' | 'in_progress' | 'resolved' | 'rejected' | 'reopened';
export type ComplaintPriority = 'critical' | 'high' | 'medium' | 'low';
export type ComplaintCategory =
  | 'pothole'
  | 'garbage'
  | 'water_supply'
  | 'sewage'
  | 'streetlight'
  | 'road_damage'
  | 'drainage'
  | 'illegal_construction'
  | 'noise_pollution'
  | 'air_pollution'
  | 'encroachment'
  | 'stray_animals'
  | 'tree_fallen'
  | 'traffic_signal'
  | 'mosquito_breeding'
  | 'other';

export interface GeoLocation {
  lat: number;
  lng: number;
  address: string;
  ward: string;
  zone: string;
}

export interface AIAnalysis {
  category: ComplaintCategory;
  confidence: number;
  severity: ComplaintPriority;
  description: string;
  suggestedTitle: string;
  assignedDepartment: string;
  estimatedResolutionDays: number;
  tags: string[];
  urgencyScore: number;
}

export interface TimelineEvent {
  id: string;
  timestamp: string;
  status: ComplaintStatus;
  message: string;
  updatedBy: string;
  role: 'citizen' | 'officer' | 'admin' | 'system';
}

export interface Complaint {
  id: string;
  ticketNumber: string;
  title: string;
  description: string;
  category: ComplaintCategory;
  status: ComplaintStatus;
  priority: ComplaintPriority;
  citizenId: string;
  citizenName: string;
  citizenPhone: string;
  location: GeoLocation;
  images: string[];
  afterImages: string[];
  aiAnalysis: AIAnalysis;
  assignedOfficerId: string | null;
  assignedOfficerName: string | null;
  departmentId: string;
  departmentName: string;
  timeline: TimelineEvent[];
  citizenRating: number | null;
  citizenFeedback: string | null;
  createdAt: string;
  updatedAt: string;
  resolvedAt: string | null;
  isEmergency: boolean;
}

export interface ComplaintFilters {
  status: ComplaintStatus | 'all';
  priority: ComplaintPriority | 'all';
  category: ComplaintCategory | 'all';
  department: string | 'all';
  ward: string | 'all';
  dateRange: { start: string; end: string } | null;
  search: string;
}
