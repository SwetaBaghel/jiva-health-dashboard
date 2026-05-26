import React from 'react';
import { User } from '../types';
import { useUserStore } from '../store/useUserStore';
import { useNavigate } from 'react-router-dom';

interface UserCardProps {
  user: User;
}

export default function UserCard({ user }: UserCardProps) {
  const { toggleUserStatus } = useUserStore();
  const navigate = useNavigate();

  return (
    <div 
      onClick={() => navigate(`/user/${user.id}`)} // Card par click karte hi detail page ka route trigger hoga
      style={{ 
        display: 'flex', 
        alignItems: 'center', 
        backgroundColor: '#ffffff', 
        padding: '20px', 
        borderRadius: '12px', 
        boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
        justifyContent: 'space-between',
        cursor: 'pointer',
        transition: 'transform 0.2s',
      }}
      onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.01)')}
      onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
    >
      {/* Avatar + Name */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <div style={{ 
          width: '48px', height: '48px', borderRadius: '50%', 
          backgroundColor: user.avatarColor, color: '#ffffff', 
          display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' 
        }}>
          {user.id}
        </div>
        <div>
          <h3 style={{ fontSize: '16px', fontWeight: '600', margin: 0 }}>{user.name}</h3>
          <div style={{ display: 'flex', gap: '8px', marginTop: '4px', alignItems: 'center' }} onClick={(e) => e.stopPropagation()}>
            <span style={{ fontSize: '12px', color: '#64748b' }}>{user.role}</span>
            <span 
              onClick={() => toggleUserStatus(user.id)}
              style={{ 
                fontSize: '11px', padding: '2px 8px', borderRadius: '12px', fontWeight: '600',
                backgroundColor: user.status === 'Active' ? '#dcfce7' : '#fee2e2',
                color: user.status === 'Active' ? '#15803d' : '#b91c1c'
              }}
            >
              {user.status}
            </span>
          </div>
        </div>
      </div>

      {/* Contact */}
      <div style={{ fontSize: '13px', color: '#475569' }}>
        <div>📧 {user.email}</div>
        <div>📞 {user.phone}</div>
      </div>

      {/* Appointments */}
      <div style={{ textAlign: 'center' }}>
        <span style={{ fontSize: '12px', color: '#64748b' }}>Appointments</span>
        <div style={{ fontSize: '20px', fontWeight: 'bold' }}>{user.appointmentsCount}</div>
      </div>
    </div>
  );
}