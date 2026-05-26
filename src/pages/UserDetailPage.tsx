import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useUserStore } from '../store/useUserStore';

export default function UserDetailPage() {
  const { id } = useParams(); // URL se id nikalne ke liye (/user/EL -> id="EL")
  const navigate = useNavigate();
  const { users } = useUserStore();

  const user = users.find(u => u.id === id);

  if (!user) {
    return <div style={{ padding: '40px' }}>User not found!</div>;
  }

  return (
    <div>
      <button 
        onClick={() => navigate('/')} 
        style={{ padding: '8px 16px', backgroundColor: '#ffffff', border: '1px solid #cbd5e1', borderRadius: '6px', cursor: 'pointer', marginBottom: '24px' }}
      >
        ← Back to List
      </button>

      <div style={{ backgroundColor: '#ffffff', padding: '32px', borderRadius: '12px', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '24px', marginBottom: '32px' }}>
          <div style={{ width: '80px', height: '80px', borderRadius: '50%', backgroundColor: user.avatarColor, color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '28px', fontWeight: 'bold' }}>
            {user.id}
          </div>
          <div>
            <h2 style={{ fontSize: '24px', fontWeight: 'bold', margin: 0 }}>{user.name}</h2>
            <p style={{ color: '#64748b', marginTop: '4px' }}>{user.role} — {user.userType}</p>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', fontSize: '15px' }}>
          <div style={{ borderBottom: '1px solid #f1f5f9', paddingBottom: '12px' }}><strong>Email:</strong> {user.email}</div>
          <div style={{ borderBottom: '1px solid #f1f5f9', paddingBottom: '12px' }}><strong>Phone:</strong> {user.phone}</div>
          <div style={{ borderBottom: '1px solid #f1f5f9', paddingBottom: '12px' }}><strong>Status:</strong> {user.status}</div>
          <div style={{ borderBottom: '1px solid #f1f5f9', paddingBottom: '12px' }}><strong>Total Appointments:</strong> {user.appointmentsCount}</div>
          <div style={{ borderBottom: '1px solid #f1f5f9', paddingBottom: '12px' }}><strong>Joined Date:</strong> {user.joinedDate}</div>
          <div style={{ borderBottom: '1px solid #f1f5f9', paddingBottom: '12px' }}><strong>Last Active:</strong> {user.lastActiveDate}</div>
        </div>
      </div>
    </div>
  );
}