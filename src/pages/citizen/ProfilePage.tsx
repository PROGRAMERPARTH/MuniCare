import { useState } from 'react';
import { useAuthStore } from '../../stores/authStore';
import { User, Mail, Phone, MapPin, Shield, Key } from 'lucide-react';

export default function ProfilePage() {
  const { user } = useAuthStore();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    phone: '+91 98765 43210',
    address: '5th Cross, Koramangala',
    ward: user?.ward || '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsEditing(false);
    // Real implementation would save to backend
  };

  return (
    <div className="animate-fadeIn" style={{ maxWidth: 800, margin: '0 auto' }}>
      <div className="page-header">
        <h1>My Profile</h1>
        <p>Manage your personal information and preferences</p>
      </div>

      <div className="card" style={{ marginBottom: 'var(--space-6)' }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 'var(--space-6)' }}>
          <div className="flex items-center gap-4">
            <div style={{ width: 80, height: 80, borderRadius: '50%', background: 'var(--primary-100)', color: 'var(--primary-600)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 32, fontWeight: 700 }}>
              {user?.name.charAt(0)}
            </div>
            <div>
              <h2 style={{ fontSize: 'var(--text-xl)', fontWeight: 700 }}>{user?.name}</h2>
              <p style={{ color: 'var(--text-secondary)' }}>{user?.role === 'citizen' ? 'Verified Citizen' : user?.role}</p>
            </div>
          </div>
          <button className={`btn ${isEditing ? 'btn-outline' : 'btn-primary'} btn-sm`} onClick={() => setIsEditing(!isEditing)}>
            {isEditing ? 'Cancel' : 'Edit Profile'}
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-2" style={{ gap: 'var(--space-4)' }}>
            <div className="input-group">
              <label>Full Name</label>
              <div className="auth-input-wrapper">
                <User size={16} className="auth-input-icon" />
                <input className="input" style={{ paddingLeft: 40 }} value={formData.name} disabled={!isEditing} onChange={e => setFormData({ ...formData, name: e.target.value })} />
              </div>
            </div>
            <div className="input-group">
              <label>Email Address</label>
              <div className="auth-input-wrapper">
                <Mail size={16} className="auth-input-icon" />
                <input className="input" style={{ paddingLeft: 40 }} value={formData.email} disabled={!isEditing} onChange={e => setFormData({ ...formData, email: e.target.value })} />
              </div>
            </div>
            <div className="input-group">
              <label>Phone Number</label>
              <div className="auth-input-wrapper">
                <Phone size={16} className="auth-input-icon" />
                <input className="input" style={{ paddingLeft: 40 }} value={formData.phone} disabled={!isEditing} onChange={e => setFormData({ ...formData, phone: e.target.value })} />
              </div>
            </div>
            <div className="input-group">
              <label>Ward</label>
              <div className="auth-input-wrapper">
                <Shield size={16} className="auth-input-icon" />
                <input className="input" style={{ paddingLeft: 40 }} value={formData.ward} disabled={true} />
              </div>
            </div>
            <div className="input-group" style={{ gridColumn: '1 / -1' }}>
              <label>Residential Address</label>
              <div className="auth-input-wrapper">
                <MapPin size={16} className="auth-input-icon" />
                <input className="input" style={{ paddingLeft: 40 }} value={formData.address} disabled={!isEditing} onChange={e => setFormData({ ...formData, address: e.target.value })} />
              </div>
            </div>
          </div>
          
          {isEditing && (
            <div style={{ marginTop: 'var(--space-6)', display: 'flex', justifyContent: 'flex-end' }}>
              <button type="submit" className="btn btn-primary">Save Changes</button>
            </div>
          )}
        </form>
      </div>

      <div className="card">
        <h3 style={{ marginBottom: 'var(--space-4)' }}>Account Security</h3>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: 'var(--space-3) 0', borderBottom: '1px solid var(--border-primary)' }}>
          <div className="flex items-center gap-3">
            <div style={{ width: 40, height: 40, borderRadius: 'var(--radius-lg)', background: 'var(--bg-tertiary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Key size={18} />
            </div>
            <div>
              <div style={{ fontWeight: 600 }}>Password</div>
              <div style={{ fontSize: 'var(--text-xs)', color: 'var(--text-tertiary)' }}>Last changed 3 months ago</div>
            </div>
          </div>
          <button className="btn btn-outline btn-sm">Change</button>
        </div>
      </div>
    </div>
  );
}
