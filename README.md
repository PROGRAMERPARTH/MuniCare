# MuniCare AI — Smart Municipal Platform

MuniCare AI is a comprehensive, modern web application designed to transform city governance from reactive to proactive using artificial intelligence. This platform features portals tailored for Citizens, Field Officers, and Municipal Administrators, providing real-time complaint tracking, automated issue routing, predictive infrastructure maintenance, and transparent public reporting.

## 🚀 Features

### 👤 Citizen Portal
- **AI-Powered Complaint Registration**: Simply upload a photo of the issue (potholes, garbage, etc.), and the mock Gemini Vision AI will automatically detect the category, severity, and route it to the correct department.
- **Complaint Tracker**: Monitor the real-time status of your filed issues with an interactive timeline.
- **Service Portal**: Discover and apply for municipal services and certificates.
- **Emergency Report**: Instantly report life-threatening situations for immediate routing.
- **AI Assistant**: Conversational chat interface to help citizens navigate municipal services.

### 👮 Officer Portal
- **Prioritized Task List**: View assigned field tasks dynamically sorted by AI-determined priority and urgency.
- **Task Resolution Workflow**: Upload resolution proof photos and closing notes right from the field.
- **Task Map**: Live geographic overview of pending assignments for route optimization.
- **Performance Reports**: Weekly metrics on task completion and average resolution time.

### 🏛️ Admin Console (Commissioner)
- **Live City Dashboard**: Real-time KPI metrics and a simulated map showing active complaints across the city.
- **Predictive Intelligence**: AI forecasts predicting infrastructure failures (e.g., pipeline bursts, road degradation) based on historical and sensor data.
- **Decision Intelligence**: A unified queue where commissioners can approve or reject automated AI recommendations.
- **Resource Optimization**: AI-driven allocation insights for field officers, waste trucks, and municipal equipment.
- **Analytics**: Deep visual insights using Recharts (Area, Bar, Pie charts) on monthly trends and department performance.

### 🌐 Public Transparency
- **Accountability Portal**: Public-facing dashboard showing department resolution rates, ward rankings, and citizen satisfaction scores.

## 🛠️ Technology Stack
- **Framework**: React 19 + Vite
- **Language**: TypeScript
- **State Management**: Zustand
- **Routing**: React Router v7
- **Styling**: Vanilla CSS (CSS Variables, Dark Theme, Custom Animations)
- **Icons**: Lucide React
- **Charts**: Recharts

## 💻 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/municare-ai.git
   cd municare-ai
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`.

## 🎨 Design System
The application utilizes a custom-built, modern design system featuring:
- Seamless Dark/Light mode support.
- Micro-interactions and CSS animations (`slideUp`, `fadeIn`, `emergencyPulse`).
- Fully responsive layouts tailored for mobile and desktop views.

## 🔮 Roadmap (Next Steps)
- Connect to Google Cloud Firebase for real authentication and data persistence.
- Integrate the official Gemini API and Google Cloud Vision API for live complaint analysis.
- Connect Google Maps API for live geographic routing.

---
*Built with ❤️ to make cities smarter.*
