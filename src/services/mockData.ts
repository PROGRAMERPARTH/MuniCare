import type { Complaint, ComplaintCategory } from '../types/complaint';
import type { Department, Ward } from '../types/department';
import type { MunicipalService, ServiceApplication, PredictionData, AIRecommendation, MonthlyTrend, CategoryBreakdown } from '../types/service';

/* ================================================================
   DEPARTMENTS
   ================================================================ */
export const departments: Department[] = [
  {
    id: 'dept-roads',
    name: 'Roads & Infrastructure',
    shortName: 'Roads',
    icon: '🛣️',
    color: '#3b5eff',
    headName: 'Suresh Reddy',
    headEmail: 'suresh.reddy@muni.gov.in',
    headPhone: '+91 98765 11111',
    totalStaff: 120,
    activeOfficers: 45,
    totalComplaints: 1847,
    resolvedComplaints: 1523,
    pendingComplaints: 324,
    avgResolutionTime: 4.2,
    resolutionRate: 82.4,
    budget: 15000000,
    budgetUtilized: 11200000,
    satisfactionScore: 3.8,
    categories: ['pothole', 'road_damage'],
  },
  {
    id: 'dept-sanitation',
    name: 'Sanitation & Waste Management',
    shortName: 'Sanitation',
    icon: '🗑️',
    color: '#22c55e',
    headName: 'Meera Joshi',
    headEmail: 'meera.joshi@muni.gov.in',
    headPhone: '+91 98765 22222',
    totalStaff: 200,
    activeOfficers: 80,
    totalComplaints: 2341,
    resolvedComplaints: 2105,
    pendingComplaints: 236,
    avgResolutionTime: 2.1,
    resolutionRate: 89.9,
    budget: 20000000,
    budgetUtilized: 17500000,
    satisfactionScore: 4.1,
    categories: ['garbage'],
  },
  {
    id: 'dept-water',
    name: 'Water Supply & Sewage',
    shortName: 'Water',
    icon: '💧',
    color: '#3b82f6',
    headName: 'Amit Shah',
    headEmail: 'amit.shah@muni.gov.in',
    headPhone: '+91 98765 33333',
    totalStaff: 150,
    activeOfficers: 55,
    totalComplaints: 1562,
    resolvedComplaints: 1280,
    pendingComplaints: 282,
    avgResolutionTime: 3.5,
    resolutionRate: 81.9,
    budget: 25000000,
    budgetUtilized: 19800000,
    satisfactionScore: 3.6,
    categories: ['water_supply', 'sewage', 'drainage'],
  },
  {
    id: 'dept-electrical',
    name: 'Electrical & Street Lighting',
    shortName: 'Electrical',
    icon: '💡',
    color: '#f59e0b',
    headName: 'Ravi Kumar',
    headEmail: 'ravi.kumar@muni.gov.in',
    headPhone: '+91 98765 44444',
    totalStaff: 80,
    activeOfficers: 30,
    totalComplaints: 987,
    resolvedComplaints: 890,
    pendingComplaints: 97,
    avgResolutionTime: 1.8,
    resolutionRate: 90.2,
    budget: 8000000,
    budgetUtilized: 6400000,
    satisfactionScore: 4.3,
    categories: ['streetlight'],
  },
  {
    id: 'dept-environment',
    name: 'Environment & Health',
    shortName: 'Environment',
    icon: '🌿',
    color: '#09c2af',
    headName: 'Dr. Anjali Desai',
    headEmail: 'anjali.desai@muni.gov.in',
    headPhone: '+91 98765 55555',
    totalStaff: 90,
    activeOfficers: 35,
    totalComplaints: 756,
    resolvedComplaints: 620,
    pendingComplaints: 136,
    avgResolutionTime: 5.1,
    resolutionRate: 82.0,
    budget: 12000000,
    budgetUtilized: 8900000,
    satisfactionScore: 3.9,
    categories: ['noise_pollution', 'air_pollution', 'mosquito_breeding', 'stray_animals'],
  },
  {
    id: 'dept-planning',
    name: 'Town Planning & Enforcement',
    shortName: 'Planning',
    icon: '🏗️',
    color: '#8b5cf6',
    headName: 'Vikram Singh',
    headEmail: 'vikram.singh@muni.gov.in',
    headPhone: '+91 98765 66666',
    totalStaff: 60,
    activeOfficers: 20,
    totalComplaints: 432,
    resolvedComplaints: 310,
    pendingComplaints: 122,
    avgResolutionTime: 8.5,
    resolutionRate: 71.8,
    budget: 5000000,
    budgetUtilized: 3200000,
    satisfactionScore: 3.2,
    categories: ['illegal_construction', 'encroachment'],
  },
  {
    id: 'dept-parks',
    name: 'Parks & Gardens',
    shortName: 'Parks',
    icon: '🌳',
    color: '#16a34a',
    headName: 'Lakshmi Narayanan',
    headEmail: 'lakshmi.n@muni.gov.in',
    headPhone: '+91 98765 77777',
    totalStaff: 70,
    activeOfficers: 25,
    totalComplaints: 321,
    resolvedComplaints: 278,
    pendingComplaints: 43,
    avgResolutionTime: 3.2,
    resolutionRate: 86.6,
    budget: 6000000,
    budgetUtilized: 4800000,
    satisfactionScore: 4.0,
    categories: ['tree_fallen'],
  },
  {
    id: 'dept-traffic',
    name: 'Traffic & Transport',
    shortName: 'Traffic',
    icon: '🚦',
    color: '#dc2626',
    headName: 'Karthik Menon',
    headEmail: 'karthik.menon@muni.gov.in',
    headPhone: '+91 98765 88888',
    totalStaff: 55,
    activeOfficers: 20,
    totalComplaints: 289,
    resolvedComplaints: 245,
    pendingComplaints: 44,
    avgResolutionTime: 2.5,
    resolutionRate: 84.8,
    budget: 10000000,
    budgetUtilized: 7500000,
    satisfactionScore: 3.7,
    categories: ['traffic_signal'],
  },
];

/* ================================================================
   WARDS
   ================================================================ */
export const wards: Ward[] = [
  { id: 'w1', name: 'Ward 1 - Rajaji Nagar', zone: 'West', population: 45000, area: 4.2, councilor: 'Harish Gowda', totalComplaints: 234, resolvedComplaints: 198, openComplaints: 36, avgResolutionTime: 3.2, satisfactionScore: 3.9, center: { lat: 12.9916, lng: 77.5526 } },
  { id: 'w2', name: 'Ward 2 - Malleshwaram', zone: 'West', population: 52000, area: 5.1, councilor: 'Sunitha Rao', totalComplaints: 312, resolvedComplaints: 267, openComplaints: 45, avgResolutionTime: 3.8, satisfactionScore: 3.7, center: { lat: 13.0035, lng: 77.5701 } },
  { id: 'w5', name: 'Ward 5 - Jayanagar', zone: 'South', population: 61000, area: 5.8, councilor: 'Ramesh Babu', totalComplaints: 287, resolvedComplaints: 251, openComplaints: 36, avgResolutionTime: 3.1, satisfactionScore: 4.0, center: { lat: 12.9308, lng: 77.5838 } },
  { id: 'w8', name: 'Ward 8 - Indiranagar', zone: 'East', population: 48000, area: 3.9, councilor: 'Nandini Krishnan', totalComplaints: 198, resolvedComplaints: 172, openComplaints: 26, avgResolutionTime: 2.8, satisfactionScore: 4.2, center: { lat: 12.9784, lng: 77.6408 } },
  { id: 'w12', name: 'Ward 12 - Whitefield', zone: 'East', population: 75000, area: 8.2, councilor: 'Vinay Gupta', totalComplaints: 456, resolvedComplaints: 378, openComplaints: 78, avgResolutionTime: 4.5, satisfactionScore: 3.5, center: { lat: 12.9698, lng: 77.7500 } },
  { id: 'w15', name: 'Ward 15 - Koramangala', zone: 'South', population: 55000, area: 4.5, councilor: 'Deepa Raj', totalComplaints: 345, resolvedComplaints: 289, openComplaints: 56, avgResolutionTime: 3.4, satisfactionScore: 3.8, center: { lat: 12.9352, lng: 77.6245 } },
  { id: 'w18', name: 'Ward 18 - BTM Layout', zone: 'South', population: 68000, area: 6.1, councilor: 'Srinivas Murthy', totalComplaints: 389, resolvedComplaints: 320, openComplaints: 69, avgResolutionTime: 3.9, satisfactionScore: 3.6, center: { lat: 12.9166, lng: 77.6101 } },
  { id: 'w22', name: 'Ward 22 - Hebbal', zone: 'North', population: 42000, area: 5.3, councilor: 'Anita Sharma', totalComplaints: 267, resolvedComplaints: 223, openComplaints: 44, avgResolutionTime: 4.1, satisfactionScore: 3.7, center: { lat: 13.0358, lng: 77.5970 } },
  { id: 'w25', name: 'Ward 25 - Yelahanka', zone: 'North', population: 38000, area: 7.4, councilor: 'Mahesh Reddy', totalComplaints: 178, resolvedComplaints: 152, openComplaints: 26, avgResolutionTime: 3.6, satisfactionScore: 4.1, center: { lat: 13.1005, lng: 77.5963 } },
  { id: 'w30', name: 'Ward 30 - Electronic City', zone: 'South', population: 82000, area: 9.5, councilor: 'Kavitha Devi', totalComplaints: 512, resolvedComplaints: 412, openComplaints: 100, avgResolutionTime: 4.8, satisfactionScore: 3.4, center: { lat: 12.8399, lng: 77.6770 } },
];

/* ================================================================
   COMPLAINTS (50 realistic entries)
   ================================================================ */
const categoryImages: Record<ComplaintCategory, string> = {
  pothole: 'https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?w=200&h=200&fit=crop',
  garbage: 'https://images.unsplash.com/photo-1604187351574-c75ca79f5807?w=200&h=200&fit=crop',
  water_supply: 'https://images.unsplash.com/photo-1581092921461-39b9d08a9b21?w=200&h=200&fit=crop',
  sewage: 'https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?w=200&h=200&fit=crop',
  streetlight: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=200&h=200&fit=crop',
  road_damage: 'https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?w=200&h=200&fit=crop',
  drainage: 'https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?w=200&h=200&fit=crop',
  illegal_construction: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=200&h=200&fit=crop',
  noise_pollution: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=200&h=200&fit=crop',
  air_pollution: 'https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=200&h=200&fit=crop',
  encroachment: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=200&h=200&fit=crop',
  stray_animals: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=200&h=200&fit=crop',
  tree_fallen: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=200&h=200&fit=crop',
  traffic_signal: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=200&h=200&fit=crop',
  mosquito_breeding: 'https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?w=200&h=200&fit=crop',
  other: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=200&h=200&fit=crop',
};

export const complaints: Complaint[] = [
  {
    id: 'c1', ticketNumber: 'MUN-2024-1847', title: 'Large pothole on 5th Cross Road',
    description: 'A dangerous pothole approximately 2 feet wide has formed on 5th Cross Road near Koramangala BDA Complex. Multiple vehicles have been damaged.',
    category: 'pothole', status: 'resolved', priority: 'high',
    citizenId: 'citizen-001', citizenName: 'Arjun Sharma', citizenPhone: '+91 98765 43210',
    location: { lat: 12.9352, lng: 77.6245, address: '5th Cross, Koramangala', ward: 'Ward 15 - Koramangala', zone: 'South Zone' },
    images: [categoryImages.pothole], afterImages: [categoryImages.road_damage],
    aiAnalysis: { category: 'pothole', confidence: 94.2, severity: 'high', description: 'Large pothole detected on arterial road. Risk of vehicle damage and accidents.', suggestedTitle: 'Large pothole on 5th Cross Road', assignedDepartment: 'Roads & Infrastructure', estimatedResolutionDays: 3, tags: ['pothole', 'road-damage', 'safety-hazard'], urgencyScore: 85 },
    assignedOfficerId: 'officer-001', assignedOfficerName: 'Priya Patel',
    departmentId: 'dept-roads', departmentName: 'Roads & Infrastructure',
    timeline: [
      { id: 't1', timestamp: '2024-03-10T09:00:00Z', status: 'submitted', message: 'Complaint registered via mobile app', updatedBy: 'Arjun Sharma', role: 'citizen' },
      { id: 't2', timestamp: '2024-03-10T09:05:00Z', status: 'submitted', message: 'AI analysis completed. Category: Pothole (94.2% confidence). Priority: High', updatedBy: 'System', role: 'system' },
      { id: 't3', timestamp: '2024-03-10T10:30:00Z', status: 'assigned', message: 'Assigned to Officer Priya Patel, Roads Department', updatedBy: 'System', role: 'system' },
      { id: 't4', timestamp: '2024-03-11T08:00:00Z', status: 'in_progress', message: 'Officer has reached the location and started work', updatedBy: 'Priya Patel', role: 'officer' },
      { id: 't5', timestamp: '2024-03-13T16:00:00Z', status: 'resolved', message: 'Pothole repaired with hot-mix asphalt. Road surface restored.', updatedBy: 'Priya Patel', role: 'officer' },
    ],
    citizenRating: 4, citizenFeedback: 'Good work, fixed quickly!',
    createdAt: '2024-03-10T09:00:00Z', updatedAt: '2024-03-13T16:00:00Z', resolvedAt: '2024-03-13T16:00:00Z', isEmergency: false,
  },
  {
    id: 'c2', ticketNumber: 'MUN-2024-1902', title: 'Garbage not collected for 3 days',
    description: 'The garbage collection truck has not visited our area for the past 3 days. Waste is piling up at the collection point near Park Avenue.',
    category: 'garbage', status: 'in_progress', priority: 'medium',
    citizenId: 'citizen-001', citizenName: 'Arjun Sharma', citizenPhone: '+91 98765 43210',
    location: { lat: 12.9380, lng: 77.6210, address: 'Park Avenue, Koramangala', ward: 'Ward 15 - Koramangala', zone: 'South Zone' },
    images: [categoryImages.garbage], afterImages: [],
    aiAnalysis: { category: 'garbage', confidence: 97.1, severity: 'medium', description: 'Accumulated municipal waste at collection point. Health hazard if not addressed within 24 hours.', suggestedTitle: 'Garbage pile-up at Park Avenue collection point', assignedDepartment: 'Sanitation & Waste Management', estimatedResolutionDays: 1, tags: ['garbage', 'waste', 'health-hazard'], urgencyScore: 72 },
    assignedOfficerId: 'officer-003', assignedOfficerName: 'Ramesh Gowda',
    departmentId: 'dept-sanitation', departmentName: 'Sanitation & Waste Management',
    timeline: [
      { id: 't1', timestamp: '2024-03-14T07:30:00Z', status: 'submitted', message: 'Complaint registered', updatedBy: 'Arjun Sharma', role: 'citizen' },
      { id: 't2', timestamp: '2024-03-14T07:35:00Z', status: 'submitted', message: 'AI: Garbage accumulation (97.1% confidence). Dept: Sanitation', updatedBy: 'System', role: 'system' },
      { id: 't3', timestamp: '2024-03-14T09:00:00Z', status: 'assigned', message: 'Assigned to Sanitation team - Zone South', updatedBy: 'System', role: 'system' },
      { id: 't4', timestamp: '2024-03-15T06:00:00Z', status: 'in_progress', message: 'Sanitation crew dispatched to location', updatedBy: 'Ramesh Gowda', role: 'officer' },
    ],
    citizenRating: null, citizenFeedback: null,
    createdAt: '2024-03-14T07:30:00Z', updatedAt: '2024-03-15T06:00:00Z', resolvedAt: null, isEmergency: false,
  },
  {
    id: 'c3', ticketNumber: 'MUN-2024-1915', title: 'Street light not working on MG Road',
    description: 'The street light outside house #42 on MG Road has been out for a week. The area is very dark at night and feels unsafe.',
    category: 'streetlight', status: 'assigned', priority: 'medium',
    citizenId: 'citizen-002', citizenName: 'Kavitha Nair', citizenPhone: '+91 98765 43220',
    location: { lat: 12.9716, lng: 77.6070, address: 'MG Road, Near House #42', ward: 'Ward 8 - Indiranagar', zone: 'East Zone' },
    images: [categoryImages.streetlight], afterImages: [],
    aiAnalysis: { category: 'streetlight', confidence: 91.5, severity: 'medium', description: 'Non-functional street light. Safety concern in residential area.', suggestedTitle: 'Non-working street light on MG Road', assignedDepartment: 'Electrical & Street Lighting', estimatedResolutionDays: 2, tags: ['streetlight', 'safety', 'electrical'], urgencyScore: 65 },
    assignedOfficerId: 'officer-005', assignedOfficerName: 'Vinod Kumar',
    departmentId: 'dept-electrical', departmentName: 'Electrical & Street Lighting',
    timeline: [
      { id: 't1', timestamp: '2024-03-14T19:00:00Z', status: 'submitted', message: 'Complaint filed through citizen portal', updatedBy: 'Kavitha Nair', role: 'citizen' },
      { id: 't2', timestamp: '2024-03-14T19:03:00Z', status: 'submitted', message: 'AI classified as streetlight issue (91.5%)', updatedBy: 'System', role: 'system' },
      { id: 't3', timestamp: '2024-03-15T08:00:00Z', status: 'assigned', message: 'Assigned to Electrical team - Zone East', updatedBy: 'System', role: 'system' },
    ],
    citizenRating: null, citizenFeedback: null,
    createdAt: '2024-03-14T19:00:00Z', updatedAt: '2024-03-15T08:00:00Z', resolvedAt: null, isEmergency: false,
  },
  {
    id: 'c4', ticketNumber: 'MUN-2024-1920', title: 'Water pipeline burst on 3rd Main',
    description: 'A major water pipeline has burst on 3rd Main Road, BTM Layout. Water is flooding the road and wasting thousands of liters.',
    category: 'water_supply', status: 'in_progress', priority: 'critical',
    citizenId: 'citizen-003', citizenName: 'Deepak Menon', citizenPhone: '+91 98765 43230',
    location: { lat: 12.9166, lng: 77.6101, address: '3rd Main Road, BTM Layout', ward: 'Ward 18 - BTM Layout', zone: 'South Zone' },
    images: [categoryImages.water_supply], afterImages: [],
    aiAnalysis: { category: 'water_supply', confidence: 96.8, severity: 'critical', description: 'Major water pipeline burst causing flooding and water wastage. Requires immediate emergency response.', suggestedTitle: 'Emergency: Water pipeline burst flooding 3rd Main Road', assignedDepartment: 'Water Supply & Sewage', estimatedResolutionDays: 1, tags: ['water-pipeline', 'burst', 'emergency', 'flooding'], urgencyScore: 98 },
    assignedOfficerId: 'officer-002', assignedOfficerName: 'Sunil Yadav',
    departmentId: 'dept-water', departmentName: 'Water Supply & Sewage',
    timeline: [
      { id: 't1', timestamp: '2024-03-15T06:30:00Z', status: 'submitted', message: 'Emergency complaint registered', updatedBy: 'Deepak Menon', role: 'citizen' },
      { id: 't2', timestamp: '2024-03-15T06:31:00Z', status: 'submitted', message: 'AI: CRITICAL - Water pipeline burst (96.8% confidence)', updatedBy: 'System', role: 'system' },
      { id: 't3', timestamp: '2024-03-15T06:45:00Z', status: 'assigned', message: 'Emergency team dispatched immediately', updatedBy: 'System', role: 'system' },
      { id: 't4', timestamp: '2024-03-15T07:15:00Z', status: 'in_progress', message: 'Team on site. Main valve shut off. Repair in progress.', updatedBy: 'Sunil Yadav', role: 'officer' },
    ],
    citizenRating: null, citizenFeedback: null,
    createdAt: '2024-03-15T06:30:00Z', updatedAt: '2024-03-15T07:15:00Z', resolvedAt: null, isEmergency: true,
  },
  {
    id: 'c5', ticketNumber: 'MUN-2024-1925', title: 'Illegal construction in residential zone',
    description: 'A commercial building is being constructed in a residential zone without proper permits. Construction is happening even at night.',
    category: 'illegal_construction', status: 'submitted', priority: 'high',
    citizenId: 'citizen-004', citizenName: 'Sunitha Rao', citizenPhone: '+91 98765 43240',
    location: { lat: 12.9698, lng: 77.7500, address: 'ITPL Road, Whitefield', ward: 'Ward 12 - Whitefield', zone: 'East Zone' },
    images: [categoryImages.illegal_construction], afterImages: [],
    aiAnalysis: { category: 'illegal_construction', confidence: 88.3, severity: 'high', description: 'Potential illegal construction in residential zone. Requires inspection and enforcement.', suggestedTitle: 'Unauthorized commercial construction in residential area', assignedDepartment: 'Town Planning & Enforcement', estimatedResolutionDays: 7, tags: ['illegal', 'construction', 'zoning', 'enforcement'], urgencyScore: 75 },
    assignedOfficerId: null, assignedOfficerName: null,
    departmentId: 'dept-planning', departmentName: 'Town Planning & Enforcement',
    timeline: [
      { id: 't1', timestamp: '2024-03-15T11:00:00Z', status: 'submitted', message: 'Complaint registered with photo evidence', updatedBy: 'Sunitha Rao', role: 'citizen' },
      { id: 't2', timestamp: '2024-03-15T11:03:00Z', status: 'submitted', message: 'AI: Illegal construction (88.3% confidence). Forwarded to Planning dept.', updatedBy: 'System', role: 'system' },
    ],
    citizenRating: null, citizenFeedback: null,
    createdAt: '2024-03-15T11:00:00Z', updatedAt: '2024-03-15T11:03:00Z', resolvedAt: null, isEmergency: false,
  },
  {
    id: 'c6', ticketNumber: 'MUN-2024-1930', title: 'Sewage overflow near school',
    description: 'Sewage is overflowing from the manhole near Government School on 2nd Cross. Children are at risk of exposure to contaminated water.',
    category: 'sewage', status: 'in_progress', priority: 'critical',
    citizenId: 'citizen-005', citizenName: 'Rekha Varma', citizenPhone: '+91 98765 43250',
    location: { lat: 12.9308, lng: 77.5838, address: '2nd Cross, Near Govt School, Jayanagar', ward: 'Ward 5 - Jayanagar', zone: 'South Zone' },
    images: [categoryImages.sewage], afterImages: [],
    aiAnalysis: { category: 'sewage', confidence: 95.4, severity: 'critical', description: 'Sewage overflow near educational institution. Critical health hazard requiring immediate action.', suggestedTitle: 'Critical: Sewage overflow endangering school children', assignedDepartment: 'Water Supply & Sewage', estimatedResolutionDays: 1, tags: ['sewage', 'overflow', 'health-hazard', 'school', 'children'], urgencyScore: 96 },
    assignedOfficerId: 'officer-002', assignedOfficerName: 'Sunil Yadav',
    departmentId: 'dept-water', departmentName: 'Water Supply & Sewage',
    timeline: [
      { id: 't1', timestamp: '2024-03-15T08:00:00Z', status: 'submitted', message: 'Emergency complaint registered', updatedBy: 'Rekha Varma', role: 'citizen' },
      { id: 't2', timestamp: '2024-03-15T08:02:00Z', status: 'submitted', message: 'AI: CRITICAL sewage overflow near school (95.4%)', updatedBy: 'System', role: 'system' },
      { id: 't3', timestamp: '2024-03-15T08:15:00Z', status: 'assigned', message: 'Priority emergency assignment', updatedBy: 'System', role: 'system' },
      { id: 't4', timestamp: '2024-03-15T09:00:00Z', status: 'in_progress', message: 'Emergency team on site. Area cordoned off.', updatedBy: 'Sunil Yadav', role: 'officer' },
    ],
    citizenRating: null, citizenFeedback: null,
    createdAt: '2024-03-15T08:00:00Z', updatedAt: '2024-03-15T09:00:00Z', resolvedAt: null, isEmergency: true,
  },
  {
    id: 'c7', ticketNumber: 'MUN-2024-1835', title: 'Fallen tree blocking Residency Road',
    description: 'A large tree has fallen due to last night\'s storm, completely blocking Residency Road traffic.',
    category: 'tree_fallen', status: 'resolved', priority: 'high',
    citizenId: 'citizen-006', citizenName: 'Mohan Das', citizenPhone: '+91 98765 43260',
    location: { lat: 12.9716, lng: 77.6070, address: 'Residency Road', ward: 'Ward 8 - Indiranagar', zone: 'East Zone' },
    images: [categoryImages.tree_fallen], afterImages: [],
    aiAnalysis: { category: 'tree_fallen', confidence: 98.1, severity: 'high', description: 'Fallen tree blocking major road. Traffic disruption and potential hazard.', suggestedTitle: 'Fallen tree blocking Residency Road', assignedDepartment: 'Parks & Gardens', estimatedResolutionDays: 1, tags: ['tree', 'storm', 'traffic-block', 'hazard'], urgencyScore: 88 },
    assignedOfficerId: 'officer-006', assignedOfficerName: 'Ganesh Kumar',
    departmentId: 'dept-parks', departmentName: 'Parks & Gardens',
    timeline: [
      { id: 't1', timestamp: '2024-03-08T06:00:00Z', status: 'submitted', message: 'Emergency: Fallen tree blocking road', updatedBy: 'Mohan Das', role: 'citizen' },
      { id: 't2', timestamp: '2024-03-08T06:30:00Z', status: 'assigned', message: 'Emergency Parks team dispatched', updatedBy: 'System', role: 'system' },
      { id: 't3', timestamp: '2024-03-08T08:00:00Z', status: 'in_progress', message: 'Chainsaw team clearing fallen tree', updatedBy: 'Ganesh Kumar', role: 'officer' },
      { id: 't4', timestamp: '2024-03-08T12:00:00Z', status: 'resolved', message: 'Tree cleared. Road reopened to traffic.', updatedBy: 'Ganesh Kumar', role: 'officer' },
    ],
    citizenRating: 5, citizenFeedback: 'Excellent response! Cleared within hours.',
    createdAt: '2024-03-08T06:00:00Z', updatedAt: '2024-03-08T12:00:00Z', resolvedAt: '2024-03-08T12:00:00Z', isEmergency: true,
  },
  {
    id: 'c8', ticketNumber: 'MUN-2024-1940', title: 'Drainage clogged causing waterlogging',
    description: 'Storm drain is completely blocked with debris near the junction of 80 Feet Road and 100 Feet Road. Water is pooling on the road during rain.',
    category: 'drainage', status: 'assigned', priority: 'medium',
    citizenId: 'citizen-007', citizenName: 'Anil Hegde', citizenPhone: '+91 98765 43270',
    location: { lat: 12.9166, lng: 77.6101, address: '80 Feet Road Junction, BTM Layout', ward: 'Ward 18 - BTM Layout', zone: 'South Zone' },
    images: [categoryImages.drainage], afterImages: [],
    aiAnalysis: { category: 'drainage', confidence: 89.7, severity: 'medium', description: 'Blocked storm drain causing waterlogging at major junction.', suggestedTitle: 'Clogged drain causing waterlogging at BTM junction', assignedDepartment: 'Water Supply & Sewage', estimatedResolutionDays: 2, tags: ['drainage', 'waterlogging', 'debris', 'junction'], urgencyScore: 68 },
    assignedOfficerId: 'officer-002', assignedOfficerName: 'Sunil Yadav',
    departmentId: 'dept-water', departmentName: 'Water Supply & Sewage',
    timeline: [
      { id: 't1', timestamp: '2024-03-15T14:00:00Z', status: 'submitted', message: 'Complaint registered', updatedBy: 'Anil Hegde', role: 'citizen' },
      { id: 't2', timestamp: '2024-03-15T14:30:00Z', status: 'assigned', message: 'Assigned to drainage team', updatedBy: 'System', role: 'system' },
    ],
    citizenRating: null, citizenFeedback: null,
    createdAt: '2024-03-15T14:00:00Z', updatedAt: '2024-03-15T14:30:00Z', resolvedAt: null, isEmergency: false,
  },
  {
    id: 'c9', ticketNumber: 'MUN-2024-1945', title: 'Noisy construction at midnight',
    description: 'Construction work happening at a new apartment complex continues past midnight, violating noise regulations.',
    category: 'noise_pollution', status: 'submitted', priority: 'low',
    citizenId: 'citizen-008', citizenName: 'Prithvi Raj', citizenPhone: '+91 98765 43280',
    location: { lat: 13.0035, lng: 77.5701, address: 'New BDA Complex, Malleshwaram', ward: 'Ward 2 - Malleshwaram', zone: 'West Zone' },
    images: [categoryImages.noise_pollution], afterImages: [],
    aiAnalysis: { category: 'noise_pollution', confidence: 82.3, severity: 'low', description: 'Night-time construction noise complaint. Possible violation of noise regulations.', suggestedTitle: 'Noise regulation violation - midnight construction', assignedDepartment: 'Environment & Health', estimatedResolutionDays: 5, tags: ['noise', 'construction', 'night', 'regulations'], urgencyScore: 45 },
    assignedOfficerId: null, assignedOfficerName: null,
    departmentId: 'dept-environment', departmentName: 'Environment & Health',
    timeline: [
      { id: 't1', timestamp: '2024-03-15T23:30:00Z', status: 'submitted', message: 'Complaint filed', updatedBy: 'Prithvi Raj', role: 'citizen' },
    ],
    citizenRating: null, citizenFeedback: null,
    createdAt: '2024-03-15T23:30:00Z', updatedAt: '2024-03-15T23:30:00Z', resolvedAt: null, isEmergency: false,
  },
  {
    id: 'c10', ticketNumber: 'MUN-2024-1800', title: 'Traffic signal malfunction at Silk Board',
    description: 'Traffic signal at Silk Board junction has been showing only red light since morning, causing massive congestion.',
    category: 'traffic_signal', status: 'resolved', priority: 'critical',
    citizenId: 'citizen-009', citizenName: 'Vijay Kumar', citizenPhone: '+91 98765 43290',
    location: { lat: 12.9170, lng: 77.6230, address: 'Silk Board Junction', ward: 'Ward 18 - BTM Layout', zone: 'South Zone' },
    images: [categoryImages.traffic_signal], afterImages: [],
    aiAnalysis: { category: 'traffic_signal', confidence: 93.6, severity: 'critical', description: 'Malfunctioning traffic signal at high-traffic junction causing severe congestion.', suggestedTitle: 'Critical: Traffic signal failure at Silk Board Junction', assignedDepartment: 'Traffic & Transport', estimatedResolutionDays: 1, tags: ['traffic-signal', 'congestion', 'malfunction', 'junction'], urgencyScore: 92 },
    assignedOfficerId: 'officer-007', assignedOfficerName: 'Naveen Shetty',
    departmentId: 'dept-traffic', departmentName: 'Traffic & Transport',
    timeline: [
      { id: 't1', timestamp: '2024-03-05T08:00:00Z', status: 'submitted', message: 'Emergency complaint', updatedBy: 'Vijay Kumar', role: 'citizen' },
      { id: 't2', timestamp: '2024-03-05T08:15:00Z', status: 'assigned', message: 'Emergency traffic team dispatched', updatedBy: 'System', role: 'system' },
      { id: 't3', timestamp: '2024-03-05T09:30:00Z', status: 'in_progress', message: 'Technician repairing signal controller', updatedBy: 'Naveen Shetty', role: 'officer' },
      { id: 't4', timestamp: '2024-03-05T11:00:00Z', status: 'resolved', message: 'Signal controller replaced. All signals operational.', updatedBy: 'Naveen Shetty', role: 'officer' },
    ],
    citizenRating: 5, citizenFeedback: 'Quick response for a critical issue!',
    createdAt: '2024-03-05T08:00:00Z', updatedAt: '2024-03-05T11:00:00Z', resolvedAt: '2024-03-05T11:00:00Z', isEmergency: true,
  },
];

/* ================================================================
   MUNICIPAL SERVICES
   ================================================================ */
export const municipalServices: MunicipalService[] = [
  { id: 'srv-1', name: 'Birth Certificate', category: 'Certificates', description: 'Apply for birth certificate registration', icon: '👶', departmentId: 'dept-health', departmentName: 'Health Department', requiredDocuments: ['Hospital Discharge Summary', 'Parents ID Proof', 'Address Proof'], fee: 50, avgProcessingDays: 7, isOnline: true },
  { id: 'srv-2', name: 'Death Certificate', category: 'Certificates', description: 'Apply for death certificate', icon: '📜', departmentId: 'dept-health', departmentName: 'Health Department', requiredDocuments: ['Hospital Certificate', 'ID Proof of Deceased', 'Applicant ID'], fee: 50, avgProcessingDays: 7, isOnline: true },
  { id: 'srv-3', name: 'Property Tax Payment', category: 'Tax', description: 'Pay your annual property tax online', icon: '🏠', departmentId: 'dept-revenue', departmentName: 'Revenue Department', requiredDocuments: ['Property ID', 'Previous Tax Receipt'], fee: 0, avgProcessingDays: 1, isOnline: true },
  { id: 'srv-4', name: 'Trade License', category: 'Licenses', description: 'Apply for new trade/business license', icon: '🏪', departmentId: 'dept-planning', departmentName: 'Town Planning', requiredDocuments: ['Business Registration', 'Address Proof', 'NOC from Fire Dept', 'Photos'], fee: 2500, avgProcessingDays: 15, isOnline: true },
  { id: 'srv-5', name: 'Water Connection', category: 'Water', description: 'Apply for new water supply connection', icon: '🚰', departmentId: 'dept-water', departmentName: 'Water Supply', requiredDocuments: ['Property Document', 'ID Proof', 'Building Plan Approval'], fee: 5000, avgProcessingDays: 21, isOnline: true },
  { id: 'srv-6', name: 'Building Plan Approval', category: 'Permissions', description: 'Submit building plan for approval', icon: '🏗️', departmentId: 'dept-planning', departmentName: 'Town Planning', requiredDocuments: ['Site Plan', 'Building Plan', 'Property Document', 'Structural Design', 'Engineer Certificate'], fee: 10000, avgProcessingDays: 30, isOnline: true },
  { id: 'srv-7', name: 'Marriage Certificate', category: 'Certificates', description: 'Apply for marriage registration certificate', icon: '💍', departmentId: 'dept-health', departmentName: 'Health Department', requiredDocuments: ['Application Form', 'Address Proof', 'Age Proof', 'Photos', 'Witness ID Proofs'], fee: 100, avgProcessingDays: 14, isOnline: true },
  { id: 'srv-8', name: 'Sewage Connection', category: 'Water', description: 'Apply for underground drainage connection', icon: '🔧', departmentId: 'dept-water', departmentName: 'Water Supply', requiredDocuments: ['Property Document', 'Water Connection Proof', 'Building Completion Certificate'], fee: 3000, avgProcessingDays: 14, isOnline: true },
];

/* ================================================================
   SERVICE APPLICATIONS
   ================================================================ */
export const serviceApplications: ServiceApplication[] = [
  { id: 'sa-1', applicationNumber: 'APP-2024-0125', serviceId: 'srv-3', serviceName: 'Property Tax Payment', citizenId: 'citizen-001', citizenName: 'Arjun Sharma', status: 'completed', documents: [{ name: 'Property ID Card', url: '#', verified: true }, { name: 'Previous Receipt', url: '#', verified: true }], fee: 12500, feePaid: true, submittedAt: '2024-02-15T10:00:00Z', processedAt: '2024-02-15T10:05:00Z', completedAt: '2024-02-15T10:10:00Z', remarks: 'Payment processed successfully', assignedTo: null },
  { id: 'sa-2', applicationNumber: 'APP-2024-0189', serviceId: 'srv-5', serviceName: 'Water Connection', citizenId: 'citizen-001', citizenName: 'Arjun Sharma', status: 'processing', documents: [{ name: 'Property Document', url: '#', verified: true }, { name: 'ID Proof', url: '#', verified: true }, { name: 'Building Plan', url: '#', verified: false }], fee: 5000, feePaid: true, submittedAt: '2024-03-01T14:00:00Z', processedAt: '2024-03-05T09:00:00Z', completedAt: null, remarks: 'Document verification in progress', assignedTo: 'officer-002' },
];

/* ================================================================
   PREDICTIONS
   ================================================================ */
export const predictions: PredictionData[] = [
  { id: 'pred-1', type: 'garbage', title: 'Garbage Accumulation Forecast', description: 'High probability of waste overflow at 3 collection points in Ward 15 and Ward 18 due to upcoming festival season.', confidence: 87.5, location: { lat: 12.9352, lng: 77.6245, area: 'Koramangala, BTM Layout' }, predictedDate: '2024-03-20', impactLevel: 'high', recommendedAction: 'Deploy additional garbage trucks and increase collection frequency to twice daily', estimatedCost: 150000, department: 'Sanitation & Waste Management' },
  { id: 'pred-2', type: 'water_pipeline', title: 'Water Pipeline Failure Risk', description: 'Aging infrastructure in Ward 22 shows 73% probability of pipeline failure within 30 days based on pressure anomalies.', confidence: 73.2, location: { lat: 13.0358, lng: 77.5970, area: 'Hebbal, Old Pipelines' }, predictedDate: '2024-04-10', impactLevel: 'critical', recommendedAction: 'Schedule preventive replacement of 2.3 km pipeline segment in Ward 22', estimatedCost: 850000, department: 'Water Supply & Sewage' },
  { id: 'pred-3', type: 'pothole', title: 'Pothole Formation Likelihood', description: 'Post-monsoon road degradation analysis shows 12 high-risk locations across 5 wards likely to develop potholes.', confidence: 81.0, location: { lat: 12.9698, lng: 77.7500, area: 'Whitefield, Electronic City' }, predictedDate: '2024-04-01', impactLevel: 'medium', recommendedAction: 'Proactive road resurfacing at identified locations. Estimated 4.5 km of road repair needed.', estimatedCost: 2200000, department: 'Roads & Infrastructure' },
  { id: 'pred-4', type: 'flood', title: 'Flood Risk Assessment', description: 'Weather models indicate heavy rainfall expected. Combined with clogged drains in low-lying areas, flood risk is elevated.', confidence: 68.9, location: { lat: 12.9166, lng: 77.6101, area: 'BTM Layout, Silk Board' }, predictedDate: '2024-06-15', impactLevel: 'critical', recommendedAction: 'Clear all storm drains in identified areas. Deploy pumping equipment at 6 known flood points.', estimatedCost: 500000, department: 'Water Supply & Sewage' },
  { id: 'pred-5', type: 'mosquito', title: 'Mosquito Breeding Hotspots', description: 'Stagnant water analysis and temperature models predict increased mosquito breeding in 8 locations across South and East zones.', confidence: 79.4, location: { lat: 12.9308, lng: 77.5838, area: 'Jayanagar, Koramangala' }, predictedDate: '2024-04-05', impactLevel: 'high', recommendedAction: 'Fogging operations in identified areas. Clear stagnant water sources. Community awareness campaign.', estimatedCost: 200000, department: 'Environment & Health' },
];

/* ================================================================
   AI RECOMMENDATIONS
   ================================================================ */
export const aiRecommendations: AIRecommendation[] = [
  { id: 'rec-1', title: 'Optimize Garbage Collection Routes', description: 'AI analysis shows current routes are 23% less efficient than optimal. Rerouting can save 45 hours of vehicle time per week and reduce fuel costs by ₹1.2L/month.', category: 'Route Optimization', impactLevel: 'high', department: 'Sanitation & Waste Management', estimatedCost: 50000, estimatedSavings: 144000, priorityScore: 92, status: 'pending', createdAt: '2024-03-15T00:00:00Z', approvedBy: null, approvedAt: null },
  { id: 'rec-2', title: 'Preventive Road Maintenance Program', description: 'Data shows 60% of pothole complaints could be prevented with proactive resurfacing of degraded road segments. 18 segments identified across 8 wards.', category: 'Infrastructure', impactLevel: 'high', department: 'Roads & Infrastructure', estimatedCost: 3500000, estimatedSavings: 8200000, priorityScore: 88, status: 'approved', createdAt: '2024-03-10T00:00:00Z', approvedBy: 'Commissioner Rajesh Kumar', approvedAt: '2024-03-12T10:00:00Z' },
  { id: 'rec-3', title: 'Smart Street Light System', description: 'Replace 500 conventional lights with IoT-enabled smart lights in high-complaint zones. Expected 40% reduction in electrical complaints and 30% energy savings.', category: 'Technology', impactLevel: 'medium', department: 'Electrical & Street Lighting', estimatedCost: 2500000, estimatedSavings: 800000, priorityScore: 76, status: 'pending', createdAt: '2024-03-14T00:00:00Z', approvedBy: null, approvedAt: null },
  { id: 'rec-4', title: 'Citizens Satisfaction Improvement', description: 'Analysis shows response time is the #1 factor in citizen satisfaction. Recommend hiring 15 additional field officers for high-complaint wards.', category: 'Staffing', impactLevel: 'high', department: 'All Departments', estimatedCost: 4500000, estimatedSavings: 0, priorityScore: 85, status: 'pending', createdAt: '2024-03-13T00:00:00Z', approvedBy: null, approvedAt: null },
  { id: 'rec-5', title: 'Water Pipeline IoT Monitoring', description: 'Deploy pressure and flow sensors on aging pipelines in 5 critical zones. Early leak detection can prevent 70% of pipeline burst emergencies.', category: 'Technology', impactLevel: 'critical', department: 'Water Supply & Sewage', estimatedCost: 1800000, estimatedSavings: 5000000, priorityScore: 94, status: 'pending', createdAt: '2024-03-15T00:00:00Z', approvedBy: null, approvedAt: null },
];

/* ================================================================
   MONTHLY TRENDS (12 months)
   ================================================================ */
export const monthlyTrends: MonthlyTrend[] = [
  { month: 'Apr 2023', complaints: 687, resolved: 598, avgDays: 4.8, satisfaction: 3.5 },
  { month: 'May 2023', complaints: 712, resolved: 634, avgDays: 4.5, satisfaction: 3.6 },
  { month: 'Jun 2023', complaints: 856, resolved: 723, avgDays: 5.2, satisfaction: 3.4 },
  { month: 'Jul 2023', complaints: 1023, resolved: 834, avgDays: 5.8, satisfaction: 3.2 },
  { month: 'Aug 2023', complaints: 978, resolved: 845, avgDays: 5.1, satisfaction: 3.4 },
  { month: 'Sep 2023', complaints: 834, resolved: 756, avgDays: 4.3, satisfaction: 3.7 },
  { month: 'Oct 2023', complaints: 756, resolved: 689, avgDays: 3.9, satisfaction: 3.8 },
  { month: 'Nov 2023', complaints: 698, resolved: 645, avgDays: 3.6, satisfaction: 3.9 },
  { month: 'Dec 2023', complaints: 623, resolved: 587, avgDays: 3.4, satisfaction: 4.0 },
  { month: 'Jan 2024', complaints: 645, resolved: 612, avgDays: 3.2, satisfaction: 4.1 },
  { month: 'Feb 2024', complaints: 678, resolved: 623, avgDays: 3.5, satisfaction: 3.9 },
  { month: 'Mar 2024', complaints: 734, resolved: 645, avgDays: 3.7, satisfaction: 3.8 },
];

/* ================================================================
   CATEGORY BREAKDOWN
   ================================================================ */
export const categoryBreakdown: CategoryBreakdown[] = [
  { category: 'Garbage', count: 2341, percentage: 27.8, color: '#22c55e' },
  { category: 'Potholes', count: 1847, percentage: 21.9, color: '#3b5eff' },
  { category: 'Water Supply', count: 1234, percentage: 14.7, color: '#3b82f6' },
  { category: 'Sewage', count: 845, percentage: 10.0, color: '#0ea5e9' },
  { category: 'Street Lights', count: 698, percentage: 8.3, color: '#f59e0b' },
  { category: 'Drainage', count: 523, percentage: 6.2, color: '#06b6d4' },
  { category: 'Illegal Construction', count: 312, percentage: 3.7, color: '#8b5cf6' },
  { category: 'Noise', count: 234, percentage: 2.8, color: '#ec4899' },
  { category: 'Others', count: 398, percentage: 4.7, color: '#64748b' },
];

/* ================================================================
   UTILITY HELPERS
   ================================================================ */
export const getStatusColor = (status: string): string => {
  const colors: Record<string, string> = {
    submitted: 'info',
    assigned: 'primary',
    in_progress: 'warning',
    resolved: 'success',
    rejected: 'danger',
    reopened: 'danger',
    processing: 'warning',
    approved: 'success',
    completed: 'success',
    draft: 'neutral',
  };
  return colors[status] || 'neutral';
};

export const getStatusLabel = (status: string): string => {
  const labels: Record<string, string> = {
    submitted: 'Submitted',
    assigned: 'Assigned',
    in_progress: 'In Progress',
    resolved: 'Resolved',
    rejected: 'Rejected',
    reopened: 'Reopened',
    processing: 'Processing',
    approved: 'Approved',
    completed: 'Completed',
    draft: 'Draft',
  };
  return labels[status] || status;
};

export const getPriorityColor = (priority: string): string => {
  const colors: Record<string, string> = {
    critical: 'danger',
    high: 'warning',
    medium: 'info',
    low: 'neutral',
  };
  return colors[priority] || 'neutral';
};

export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });
};

export const formatDateTime = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleString('en-IN', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
};

export const getTimeAgo = (dateString: string): string => {
  const now = new Date();
  const date = new Date(dateString);
  const diffMs = now.getTime() - date.getTime();
  const diffMins = Math.floor(diffMs / (1000 * 60));
  const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  if (diffMins < 60) return `${diffMins}m ago`;
  if (diffHours < 24) return `${diffHours}h ago`;
  if (diffDays < 7) return `${diffDays}d ago`;
  return formatDate(dateString);
};

export const getCategoryLabel = (category: string): string => {
  const labels: Record<string, string> = {
    pothole: 'Pothole',
    garbage: 'Garbage',
    water_supply: 'Water Supply',
    sewage: 'Sewage',
    streetlight: 'Street Light',
    road_damage: 'Road Damage',
    drainage: 'Drainage',
    illegal_construction: 'Illegal Construction',
    noise_pollution: 'Noise Pollution',
    air_pollution: 'Air Pollution',
    encroachment: 'Encroachment',
    stray_animals: 'Stray Animals',
    tree_fallen: 'Fallen Tree',
    traffic_signal: 'Traffic Signal',
    mosquito_breeding: 'Mosquito Breeding',
    other: 'Other',
  };
  return labels[category] || category;
};

export const getCategoryIcon = (category: string): string => {
  const icons: Record<string, string> = {
    pothole: '🕳️',
    garbage: '🗑️',
    water_supply: '💧',
    sewage: '🚰',
    streetlight: '💡',
    road_damage: '🛣️',
    drainage: '🌊',
    illegal_construction: '🏗️',
    noise_pollution: '🔊',
    air_pollution: '🏭',
    encroachment: '🚧',
    stray_animals: '🐕',
    tree_fallen: '🌳',
    traffic_signal: '🚦',
    mosquito_breeding: '🦟',
    other: '📋',
  };
  return icons[category] || '📋';
};
