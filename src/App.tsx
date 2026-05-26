// src/App.tsx
import React, { useState } from 'react';
import { initialUsers } from './mockData';

function App() {
  // Humne initialUsers data ko React ke state mein load kiya hai
  const [users] = useState(initialUsers);

  return (
    <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: '#f8fafc' }}>
      
      {/* 1. LEFT SIDEBAR */}
      <aside style={{ width: '260px', backgroundColor: '#ffffff', borderRight: '1px solid #e2e8f0', padding: '24px' }}>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '32px' }}>
          <span style={{ fontSize: '24px', fontWeight: 'bold', color: '#059669' }}>Jiva</span>
          <span style={{ fontSize: '12px', fontWeight: '600', color: '#94a3b8', marginLeft: '4px', marginTop: '8px' }}>HEALTH</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <div style={{ padding: '12px', color: '#64748b' }}>Dashboard</div>
          <div style={{ padding: '12px', color: '#64748b' }}>Organization</div>
          <div style={{ padding: '12px', backgroundColor: '#e6f4ea', color: '#137333', borderRadius: '8px', fontWeight: '600' }}>
            User Management
          </div>
          <div style={{ padding: '12px', color: '#64748b' }}>Services</div>
        </div>
      </aside>

      {/* 2. RIGHT MAIN CONTENT AREA */}
      <main style={{ flexGrow: 1, padding: '40px' }}>
        {/* Topbar Row */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
          <input 
            type="text" 
            placeholder="Search users..." 
            style={{ padding: '12px 16px', width: '360px', borderRadius: '8px', border: '1px solid #cbd5e1', outline: 'none', backgroundColor: '#ffffff' }} 
          />
        </div>

        <h1 style={{ fontSize: '24px', fontWeight: '600', marginBottom: '24px' }}>User Management</h1>

        {/* USER LIST CONTAINER (ROW CONTAINER) */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {users.map((user) => (
            <div 
              key={user.id} 
              style={{ 
                display: 'flex', 
                alignItems: 'center', 
                backgroundColor: '#ffffff', 
                padding: '20px', 
                borderRadius: '12px', 
                boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
                justifyContent: 'space-between'
              }}
            >
              {/* Left Group: Avatar + Name Details */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                {/* Dynamic Circle Avatar */}
                <div style={{ 
                  width: '48px', 
                  height: '48px', 
                  borderRadius: '50%', 
                  backgroundColor: user.avatarColor, 
                  color: '#ffffff', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  fontWeight: 'bold',
                  fontSize: '16px'
                }}>
                  {user.id}
                </div>
                
                {/* Text Fields */}
                <div>
                  <h3 style={{ fontSize: '16px', fontWeight: '600', margin: 0 }}>{user.name}</h3>
                  <div style={{ display: 'flex', gap: '8px', marginTop: '4px', alignItems: 'center' }}>
                    <span style={{ fontSize: '12px', color: '#64748b' }}>{user.role}</span>
                    <span style={{ 
                      fontSize: '11px', 
                      padding: '2px 8px', 
                      borderRadius: '12px', 
                      fontWeight: '600',
                      backgroundColor: user.status === 'Active' ? '#dcfce7' : '#fee2e2',
                      color: user.status === 'Active' ? '#15803d' : '#b91c1c'
                    }}>
                      {user.status}
                    </span>
                  </div>
                  <p style={{ fontSize: '12px', color: '#94a3b8', margin: '4px 0 0 0' }}>{user.userType}</p>
                </div>
              </div>

              {/* Middle Group: Contact Info */}
              <div style={{ fontSize: '13px', color: '#475569', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <div>📧 {user.email}</div>
                <div>📞 {user.phone}</div>
              </div>

              {/* Joined Date Group */}
              <div style={{ fontSize: '13px', color: '#475569' }}>
                <strong>Joined:</strong> {user.joinedDate}<br/>
                <span style={{ fontSize: '11px', color: '#94a3b8' }}>Last Active: {user.lastActiveDate}</span>
              </div>

              {/* Right Group: Appointments Count */}
              <div style={{ textAlign: 'center' }}>
                <span style={{ fontSize: '12px', color: '#64748b' }}>Appointments</span>
                <div style={{ fontSize: '20px', fontWeight: 'bold', color: '#1e293b' }}>{user.appointmentsCount}</div>
              </div>

            </div>
          ))}
        </div>

      </main>
    </div>
  );
}

export default App;