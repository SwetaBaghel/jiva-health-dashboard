// src/components/AddUserModal.tsx
import { useState } from 'react';
import { useUserStore } from '../store/useUserStore';
import { User } from '../types';

interface AddUserModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AddUserModal({ isOpen, onClose }: AddUserModalProps) {
  const { addUser } = useUserStore();

  // Form input states
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [role, setRole] = useState<'Patient' | 'Nurse' | 'Doctor'>('Patient');
  const [userType, setUserType] = useState<'Normal User' | 'Support Staff' | 'Admin User'>('Normal User');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !phone) {
      alert('Please fill all main fields!');
      return;
    }

    // Ek unique 2-letter ID generate karna avatar ke liye (jaise Amit Kumar -> AK)
    const idInitials = name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2) || "UN";

    // Random pastel colors for avatar background
    const colors = ['#2563eb', '#059669', '#dc2626', '#7c3aed', '#db2777', '#ea580c'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];

    const today = new Date().toISOString().split('T')[0];

    const newUser: User = {
      id: idInitials + Math.floor(Math.random() * 90 + 10), // Example: AK45
      name,
      email,
      phone,
      role,
      status: 'Active',
      userType,
      joinedDate: today,
      lastActiveDate: today,
      appointmentsCount: 0,
      avatarColor: randomColor,
      appointments: [],
      payments: [],
      familyMembers: []
    };

    addUser(newUser);
    
    // Form reset aur close karna
    setName('');
    setEmail('');
    setPhone('');
    onClose();
  };

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000 }}>
      <div style={{ backgroundColor: '#ffffff', padding: '32px', borderRadius: '16px', width: '90%', maxWidth: '450px', boxShadow: '0 20px 25px -5px rgba(0,0,0,0.1)', boxSizing: 'border-box' }}>
        <h2 style={{ marginBottom: '24px', fontSize: '20px', fontWeight: 'bold' }}>Create New User Profile</h2>
        
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div>
            <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', marginBottom: '6px', color: '#475569' }}>Full Name</label>
            <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder="e.g. John Doe" style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #cbd5e1', outline: 'none' }} required />
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', marginBottom: '6px', color: '#475569' }}>Email Address</label>
            <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="johndoe@email.com" style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #cbd5e1', outline: 'none' }} required />
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', marginBottom: '6px', color: '#475569' }}>Phone Number</label>
            <input type="text" value={phone} onChange={e => setPhone(e.target.value)} placeholder="+1 (555) 000-0000" style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #cbd5e1', outline: 'none' }} required />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
            <div>
              <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', marginBottom: '6px', color: '#475569' }}>Role</label>
              <select value={role} onChange={e => setRole(e.target.value as any)} style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #cbd5e1', backgroundColor: '#fff' }}>
                <option value="Patient">Patient</option>
                <option value="Nurse">Nurse</option>
                <option value="Doctor">Doctor</option>
              </select>
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', marginBottom: '6px', color: '#475569' }}>User Type</label>
              <select value={userType} onChange={e => setUserType(e.target.value as any)} style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #cbd5e1', backgroundColor: '#fff' }}>
                <option value="Normal User">Normal User</option>
                <option value="Support Staff">Support Staff</option>
                <option value="Admin User">Admin User</option>
              </select>
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '12px', marginTop: '16px' }}>
            <button type="button" onClick={onClose} style={{ padding: '10px 16px', borderRadius: '6px', border: '1px solid #cbd5e1', backgroundColor: '#fff', cursor: 'pointer' }}>Cancel</button>
            <button type="submit" style={{ padding: '10px 16px', borderRadius: '6px', border: 'none', backgroundColor: '#059669', color: '#fff', fontWeight: '600', cursor: 'pointer' }}>Save Profile</button>
          </div>
        </form>
      </div>
    </div>
  );
}