import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Camera, Upload, MapPin, Sparkles, Send, ArrowLeft,
  ArrowRight, CheckCircle2, AlertTriangle, Clock,
  Building2, Tag,
} from 'lucide-react';

export default function ComplaintRegistration() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [images, setImages] = useState<string[]>([]);
  const [description, setDescription] = useState('');
  const [title, setTitle] = useState('');
  const [analyzing, setAnalyzing] = useState(false);
  const [analyzed, setAnalyzed] = useState(false);

  const mockAnalysis = {
    category: 'Pothole',
    confidence: 94.2,
    severity: 'High',
    description: 'Large pothole detected on road surface. Approximately 2 feet in diameter with a depth of 6 inches. Risk of vehicle damage and pedestrian injury.',
    suggestedTitle: 'Large pothole on residential road',
    assignedDepartment: 'Roads & Infrastructure',
    estimatedDays: 3,
    urgencyScore: 85,
    tags: ['pothole', 'road-damage', 'safety-hazard'],
  };

  const handleImageUpload = () => {
    // Simulating image upload
    setImages([
      'https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?w=300&h=300&fit=crop',
    ]);
  };

  const handleAnalyze = async () => {
    setAnalyzing(true);
    await new Promise((r) => setTimeout(r, 2500));
    setAnalyzing(false);
    setAnalyzed(true);
    setTitle(mockAnalysis.suggestedTitle);
    setDescription(mockAnalysis.description);
  };

  const handleSubmit = async () => {
    await new Promise((r) => setTimeout(r, 1000));
    navigate('/citizen/complaints');
  };

  const steps = [
    { num: 1, label: 'Upload Photo' },
    { num: 2, label: 'Location' },
    { num: 3, label: 'AI Analysis' },
    { num: 4, label: 'Review & Submit' },
  ];

  return (
    <div className="animate-fadeIn">
      <div className="page-header">
        <h1>Register New Complaint</h1>
        <p>AI will analyze your complaint and auto-route it to the right department</p>
      </div>

      {/* Stepper */}
      <div className="wizard">
        <div className="wizard-stepper">
          {steps.map((s, i) => (
            <div key={s.num} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <div className={`wizard-step ${step === s.num ? 'active' : step > s.num ? 'completed' : ''}`}>
                <div className="wizard-step-number">
                  {step > s.num ? <CheckCircle2 size={16} /> : s.num}
                </div>
                <span className="wizard-step-label hide-mobile">{s.label}</span>
              </div>
              {i < steps.length - 1 && (
                <div className={`wizard-connector ${step > s.num ? 'completed' : ''}`} />
              )}
            </div>
          ))}
        </div>

        <div className="wizard-content">
          {/* Step 1: Photo Upload */}
          {step === 1 && (
            <div className="card animate-slideUp">
              <h3 style={{ marginBottom: 'var(--space-4)' }}>📸 Capture the Issue</h3>
              <p style={{ color: 'var(--text-secondary)', marginBottom: 'var(--space-4)', fontSize: 'var(--text-sm)' }}>
                Take a clear photo of the issue. Our AI will analyze it to identify the problem category and severity.
              </p>

              {images.length === 0 ? (
                <div className="photo-upload" onClick={handleImageUpload}>
                  <div className="photo-upload-icon">
                    <Camera size={28} />
                  </div>
                  <p style={{ fontWeight: 600, marginBottom: 4 }}>Click to capture or upload photo</p>
                  <p style={{ fontSize: 'var(--text-xs)', color: 'var(--text-tertiary)' }}>
                    Supports JPG, PNG up to 10MB
                  </p>
                  <div style={{ display: 'flex', gap: 12, justifyContent: 'center', marginTop: 16 }}>
                    <button className="btn btn-primary btn-sm" type="button">
                      <Camera size={14} /> Take Photo
                    </button>
                    <button className="btn btn-outline btn-sm" type="button">
                      <Upload size={14} /> Upload
                    </button>
                  </div>
                </div>
              ) : (
                <div className="photo-upload has-image">
                  <div className="photo-preview">
                    {images.map((img, i) => (
                      <div key={i} className="photo-preview-item">
                        <img src={img} alt={`Upload ${i + 1}`} />
                        <button
                          className="photo-preview-remove"
                          onClick={(e) => { e.stopPropagation(); setImages(images.filter((_, j) => j !== i)); }}
                        >
                          ✕
                        </button>
                      </div>
                    ))}
                    <div className="photo-upload" onClick={handleImageUpload} style={{ padding: 20, minHeight: 120, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Camera size={24} />
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Step 2: Location */}
          {step === 2 && (
            <div className="card animate-slideUp">
              <h3 style={{ marginBottom: 'var(--space-4)' }}>📍 Confirm Location</h3>
              <div style={{ background: 'var(--bg-tertiary)', borderRadius: 'var(--radius-xl)', height: 250, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 'var(--space-4)', border: '1px solid var(--border-primary)' }}>
                <div style={{ textAlign: 'center', color: 'var(--text-tertiary)' }}>
                  <MapPin size={40} style={{ margin: '0 auto 12px', color: 'var(--primary-500)' }} />
                  <p style={{ fontWeight: 600, color: 'var(--text-primary)' }}>GPS Location Captured</p>
                  <p style={{ fontSize: 'var(--text-sm)' }}>5th Cross, Koramangala, Bangalore - 560034</p>
                  <p style={{ fontSize: 'var(--text-xs)', marginTop: 4 }}>12.9352°N, 77.6245°E</p>
                </div>
              </div>
              <div className="input-group">
                <label>Additional Address Details</label>
                <input className="input" placeholder="Nearby landmark, building name..." />
              </div>
            </div>
          )}

          {/* Step 3: AI Analysis */}
          {step === 3 && (
            <div className="card animate-slideUp">
              <h3 style={{ marginBottom: 'var(--space-4)' }}>
                <Sparkles size={20} style={{ display: 'inline', marginRight: 8, color: 'var(--primary-500)' }} />
                AI Analysis
              </h3>

              {!analyzing && !analyzed && (
                <div style={{ textAlign: 'center', padding: 'var(--space-8)' }}>
                  <div style={{ width: 80, height: 80, borderRadius: '50%', background: 'var(--gradient-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto var(--space-4)', boxShadow: 'var(--shadow-glow)' }}>
                    <Sparkles size={36} color="#fff" />
                  </div>
                  <p style={{ fontWeight: 600, marginBottom: 4 }}>Ready to Analyze</p>
                  <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', marginBottom: 'var(--space-4)' }}>
                    Our Gemini AI will analyze your photo to classify the issue
                  </p>
                  <button className="btn btn-primary btn-lg" onClick={handleAnalyze}>
                    <Sparkles size={18} /> Analyze with AI
                  </button>
                </div>
              )}

              {analyzing && (
                <div style={{ textAlign: 'center', padding: 'var(--space-8)' }}>
                  <div className="spinner spinner-lg" style={{ margin: '0 auto var(--space-4)' }} />
                  <p style={{ fontWeight: 600, marginBottom: 4 }}>Analyzing your complaint...</p>
                  <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-tertiary)' }}>
                    Using Gemini Vision AI to classify the issue
                  </p>
                </div>
              )}

              {analyzed && (
                <div className="ai-analysis animate-scaleIn">
                  <div className="ai-analysis-header">
                    <span className="ai-badge"><Sparkles size={10} /> AI Powered</span>
                    <span style={{ fontSize: 'var(--text-xs)', color: 'var(--text-tertiary)' }}>
                      Confidence: {mockAnalysis.confidence}%
                    </span>
                  </div>

                  <div className="ai-analysis-grid">
                    <div className="ai-analysis-item">
                      <div className="ai-analysis-item-label"><Tag size={12} style={{ display: 'inline', marginRight: 4 }} />Category</div>
                      <div className="ai-analysis-item-value">🕳️ {mockAnalysis.category}</div>
                    </div>
                    <div className="ai-analysis-item">
                      <div className="ai-analysis-item-label"><AlertTriangle size={12} style={{ display: 'inline', marginRight: 4 }} />Severity</div>
                      <div className="ai-analysis-item-value">
                        <span className="badge badge-warning">{mockAnalysis.severity}</span>
                      </div>
                    </div>
                    <div className="ai-analysis-item">
                      <div className="ai-analysis-item-label"><Building2 size={12} style={{ display: 'inline', marginRight: 4 }} />Department</div>
                      <div className="ai-analysis-item-value">{mockAnalysis.assignedDepartment}</div>
                    </div>
                    <div className="ai-analysis-item">
                      <div className="ai-analysis-item-label"><Clock size={12} style={{ display: 'inline', marginRight: 4 }} />Est. Resolution</div>
                      <div className="ai-analysis-item-value">{mockAnalysis.estimatedDays} days</div>
                    </div>
                  </div>

                  <div style={{ marginTop: 'var(--space-4)' }}>
                    <div className="ai-analysis-item-label" style={{ marginBottom: 8 }}>AI Description</div>
                    <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', lineHeight: 1.6, background: 'var(--bg-card)', padding: 'var(--space-3)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-secondary)' }}>
                      {mockAnalysis.description}
                    </p>
                  </div>

                  <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginTop: 'var(--space-3)' }}>
                    {mockAnalysis.tags.map((tag) => (
                      <span key={tag} className="badge badge-neutral">#{tag}</span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Step 4: Review & Submit */}
          {step === 4 && (
            <div className="card animate-slideUp">
              <h3 style={{ marginBottom: 'var(--space-4)' }}>📋 Review & Submit</h3>

              <div className="input-group" style={{ marginBottom: 'var(--space-4)' }}>
                <label>Complaint Title</label>
                <input className="input" value={title} onChange={(e) => setTitle(e.target.value)} />
              </div>

              <div className="input-group" style={{ marginBottom: 'var(--space-4)' }}>
                <label>Description</label>
                <textarea className="input textarea" value={description} onChange={(e) => setDescription(e.target.value)} />
              </div>

              <div className="card-gradient" style={{ padding: 'var(--space-4)', borderRadius: 'var(--radius-lg)', marginBottom: 'var(--space-4)' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 'var(--space-3)', fontSize: 'var(--text-sm)' }}>
                  <div><strong>Category:</strong> {mockAnalysis.category}</div>
                  <div><strong>Priority:</strong> {mockAnalysis.severity}</div>
                  <div><strong>Department:</strong> {mockAnalysis.assignedDepartment}</div>
                  <div><strong>Est. Time:</strong> {mockAnalysis.estimatedDays} days</div>
                  <div><strong>Location:</strong> 5th Cross, Koramangala</div>
                  <div><strong>Ward:</strong> Ward 15 - Koramangala</div>
                </div>
              </div>

              {images.length > 0 && (
                <div style={{ marginBottom: 'var(--space-4)' }}>
                  <label style={{ fontSize: 'var(--text-sm)', fontWeight: 600, color: 'var(--text-secondary)', display: 'block', marginBottom: 8 }}>Attached Photos</label>
                  <div className="photo-preview">
                    {images.map((img, i) => (
                      <div key={i} className="photo-preview-item">
                        <img src={img} alt={`Photo ${i + 1}`} />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Navigation Buttons */}
        <div className="wizard-footer">
          <button
            className="btn btn-outline"
            onClick={() => step === 1 ? navigate(-1) : setStep(step - 1)}
          >
            <ArrowLeft size={16} /> {step === 1 ? 'Cancel' : 'Back'}
          </button>

          {step < 4 ? (
            <button
              className="btn btn-primary"
              onClick={() => {
                if (step === 1 && images.length === 0) handleImageUpload();
                if (step === 3 && !analyzed) return;
                setStep(step + 1);
              }}
              disabled={step === 3 && !analyzed}
            >
              Next <ArrowRight size={16} />
            </button>
          ) : (
            <button className="btn btn-accent btn-lg" onClick={handleSubmit}>
              <Send size={18} /> Submit Complaint
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
