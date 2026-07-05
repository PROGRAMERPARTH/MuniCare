export type ServiceStatus = 'draft' | 'submitted' | 'processing' | 'approved' | 'rejected' | 'completed';

export interface MunicipalService {
  id: string;
  name: string;
  category: string;
  description: string;
  icon: string;
  departmentId: string;
  departmentName: string;
  requiredDocuments: string[];
  fee: number;
  avgProcessingDays: number;
  isOnline: boolean;
}

export interface ServiceApplication {
  id: string;
  applicationNumber: string;
  serviceId: string;
  serviceName: string;
  citizenId: string;
  citizenName: string;
  status: ServiceStatus;
  documents: { name: string; url: string; verified: boolean }[];
  fee: number;
  feePaid: boolean;
  submittedAt: string;
  processedAt: string | null;
  completedAt: string | null;
  remarks: string;
  assignedTo: string | null;
}

export interface PredictionData {
  id: string;
  type: 'garbage' | 'pothole' | 'water_pipeline' | 'flood' | 'mosquito';
  title: string;
  description: string;
  confidence: number;
  location: { lat: number; lng: number; area: string };
  predictedDate: string;
  impactLevel: 'critical' | 'high' | 'medium' | 'low';
  recommendedAction: string;
  estimatedCost: number;
  department: string;
}

export interface AIRecommendation {
  id: string;
  title: string;
  description: string;
  category: string;
  impactLevel: 'critical' | 'high' | 'medium' | 'low';
  department: string;
  estimatedCost: number;
  estimatedSavings: number;
  priorityScore: number;
  status: 'pending' | 'approved' | 'rejected' | 'implemented';
  createdAt: string;
  approvedBy: string | null;
  approvedAt: string | null;
}

export interface MonthlyTrend {
  month: string;
  complaints: number;
  resolved: number;
  avgDays: number;
  satisfaction: number;
}

export interface CategoryBreakdown {
  category: string;
  count: number;
  percentage: number;
  color: string;
}
