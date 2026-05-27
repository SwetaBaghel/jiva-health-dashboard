// src/components/AddUserModal.tsx
import { useState } from 'react';
import { useUserStore } from '../store/useUserStore';

interface AddUserModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AddUserModal({ isOpen, onClose }: AddUserModalProps) {
  const { addUser } = useUserStore();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [role, setRole] = useState<'Patient' | 'Nurse' | 'Doctor'>('Patient');
  const [userType, setUserType] = useState<'Normal User' | 'Premium VIP'>('Normal User');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return alert('Name and Email are required!');

    addUser({
      name,
      email,
      phone: phone || '+1 (555) 000-0000',
      role,
      userType,
      status: 'Active',
      joinedDate: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      appointmentsCount: 0,
      avatarColor: ['#3b82f6', '#ec4899', '#10b981', '#f59e0b', '#8b5cf6'][Math.floor(Math.random() * 5)],
      appointments: [],
      payments: [],
      familyMembers: []
    });

    setName('');
    setEmail('');
    setPhone('');
    setRole('Patient');
    setUserType('Normal User');
    onClose();
  };

  return (
    <div style={{ 
      position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', 
      backgroundColor: 'rgba(15, 23, 42, 0.4)', backdropFilter: 'blur(4px)',
      display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000 
    }}>
      <div style={{ 
        backgroundColor: '#ffffff', padding: '32px', borderRadius: '20px', 
        width: '90%', maxWidth: '460px', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        boxSizing: 'border-box', border: '1px solid #e2e8f0'
      }}>
        
        {/* Modal Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
          <h2 style={{ fontSize: '20px', fontWeight: '700', color: '#0f172a', margin: 0 }}>Create User Account</h2>
          <button onClick={onClose} style={{ background: 'none', border: 'none', fontSize: '20px', cursor: 'pointer', color: '#94a3b8' }}>✕</button>
        </div>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
          
          <div>
            <label style={{ fontSize: '13px', fontWeight: '600', color: '#475569', display: 'block', marginBottom: '6px' }}>Full Name</label>
            <input type="text" placeholder="John Doe" value={name} onChange={e => setName(e.target.value)} style={{ width: '100%', padding: '10px 14px', borderRadius: '8px', border: '1px solid #cbd5e1', outline: 'none', boxSizing: 'border-box', fontSize: '14px' }} />
          </div>

          <div>
            <label style={{ fontSize: '13px', fontWeight: '600', color: '#475569', display: 'block', marginBottom: '6px' }}>Email Address</label>
            <input type="email" placeholder="johndoe@example.com" value={email} onChange={e => setEmail(e.target.value)} style={{ width: '100%', padding: '10px 14px', borderRadius: '8px', border: '1px solid #cbd5e1', outline: 'none', boxSizing: 'border-box', fontSize: '14px' }} />
          </div>

          <div>
            <label style={{ fontSize: '13px', fontWeight: '600', color: '#475569', display: 'block', marginBottom: '6px' }}>Phone Number</label>
            <input type="text" placeholder="+1 (555) 000-0000" value={phone} onChange={e => setPhone(e.target.value)} style={{ width: '100%', padding: '10px 14px', borderRadius: '8px', border: '1px solid #cbd5e1', outline: 'none', boxSizing: 'border-box', fontSize: '14px' }} />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
            <div>
              <label style={{ fontSize: '13px', fontWeight: '600', color: '#475569', display: 'block', marginBottom: '6px' }}>Staff Role</label>
              <select value={role} onChange={e => setRole(e.target.value as any)} style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #cbd5e1', backgroundColor: '#ffffff', outline: 'none', fontSize: '14px' }}>
                <option value="Patient">Patient</option>
                <option value="Nurse">Nurse</option>
                <option value="Doctor">Doctor</option>
              </select>
            </div>
            <div>
              <label style={{ fontSize: '13px', fontWeight: '600', color: '#475569', display: 'block', marginBottom: '6px' }}>Tier Category</label>
              <select value={userType} onChange={e => setUserType(e.target.value as any)} style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #cbd5e1', backgroundColor: '#ffffff', outline: 'none', fontSize: '14px' }}>
                <option value="Normal User">Normal User</option>
                <option value="Premium VIP">Premium VIP</option>
              </select>
            </div>
          </div>

          {/* Form Actions */}
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end', marginTop: '12px' }}>
            <button type="button" onClick={onClose} style={{ padding: '10px 18px', backgroundColor: '#f1f5f9', border: 'none', borderRadius: '8px', fontWeight: '600', color: '#475569', cursor: 'pointer', fontSize: '14px' }}>Cancel</button>
            <button type="submit" style={{ padding: '10px 20px', backgroundColor: '#059669', border: 'none', borderRadius: '8px', fontWeight: '600', color: '#ffffff', cursor: 'pointer', fontSize: '14px', boxShadow: '0 4px 12px rgba(5,150,105,0.15)' }}>Save Member</button>
          </div>

        </form>
      </div>
    </div>
  );
}