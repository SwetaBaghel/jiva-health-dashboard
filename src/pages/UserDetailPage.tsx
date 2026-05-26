// src/pages/UserDetailPage.tsx
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useUserStore } from '../store/useUserStore';

export default function UserDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { users } = useUserStore();

  // Active Tab state create karna ('appointments' default rahega)
  const [activeTab, setActiveTab] = useState<'appointments' | 'payments' | 'family'>('appointments');

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

      {/* TOP PROFILE CARD */}
      <div style={{ backgroundColor: '#ffffff', padding: '32px', borderRadius: '12px', boxShadow: '0 1px 3px rgba(0,0,0,0.05)', marginBottom: '24px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '24px', marginBottom: '32px' }}>
          <div style={{ width: '80px', height: '80px', borderRadius: '50%', backgroundColor: user.avatarColor, color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '28px', fontWeight: 'bold' }}>
            {user.id}
          </div>
          <div>
            <h2 style={{ fontSize: '24px', fontWeight: 'bold', margin: 0 }}>{user.name}</h2>
            <p style={{ color: '#64748b', marginTop: '4px' }}>{user.role} — {user.userType}</p>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', fontSize: '14px' }}>
          <div><strong>Email:</strong> {user.email}</div>
          <div><strong>Phone:</strong> {user.phone}</div>
          <div><strong>Status:</strong> {user.status}</div>
          <div><strong>Registration Date:</strong> {user.joinedDate}</div>
        </div>
      </div>

      {/* SUB-TABS NAVIGATION BAR */}
      <div style={{ display: 'flex', borderBottom: '2px solid #e2e8f0', marginBottom: '20px', gap: '24px' }}>
        <button 
          onClick={() => setActiveTab('appointments')}
          style={{ padding: '12px 4px', fontSize: '15px', fontWeight: '600', border: 'none', background: 'none', cursor: 'pointer', borderBottom: activeTab === 'appointments' ? '3px solid #059669' : '3px solid transparent', color: activeTab === 'appointments' ? '#059669' : '#64748b' }}
        >
          Appointments ({user.appointments.length})
        </button>
        <button 
          onClick={() => setActiveTab('payments')}
          style={{ padding: '12px 4px', fontSize: '15px', fontWeight: '600', border: 'none', background: 'none', cursor: 'pointer', borderBottom: activeTab === 'payments' ? '3px solid #059669' : '3px solid transparent', color: activeTab === 'payments' ? '#059669' : '#64748b' }}
        >
          Orders & Payments ({user.payments.length})
        </button>
        <button 
          onClick={() => setActiveTab('family')}
          style={{ padding: '12px 4px', fontSize: '15px', fontWeight: '600', border: 'none', background: 'none', cursor: 'pointer', borderBottom: activeTab === 'family' ? '3px solid #059669' : '3px solid transparent', color: activeTab === 'family' ? '#059669' : '#64748b' }}
        >
          Family Members ({user.familyMembers.length})
        </button>
      </div>

      {/* DYNAMIC TAB CONTENT AREA */}
      <div style={{ backgroundColor: '#ffffff', padding: '24px', borderRadius: '12px', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
        
        {/* 1. Appointments Content View */}
        {activeTab === 'appointments' && (
          <div>
            <h3 style={{ marginBottom: '16px', fontSize: '18px' }}>History of Appointments</h3>
            {user.appointments.length === 0 ? <p style={{ color: '#94a3b8' }}>No appointments recorded.</p> : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {user.appointments.map(app => (
                  <div key={app.id} style={{ padding: '16px', border: '1px solid #e2e8f0', borderRadius: '8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                      <strong>{app.type}</strong> with {app.doctorName}
                      <div style={{ fontSize: '12px', color: '#64748b', marginTop: '4px' }}>📅 {app.date} | ⏰ {app.time}</div>
                    </div>
                    <span style={{ fontSize: '12px', padding: '4px 10px', borderRadius: '20px', fontWeight: '600', backgroundColor: app.status === 'Completed' ? '#dcfce7' : '#fef9c3', color: app.status === 'Completed' ? '#15803d' : '#a16207' }}>
                      {app.status}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* 2. Payments Content View */}
        {activeTab === 'payments' && (
          <div>
            <h3 style={{ marginBottom: '16px', fontSize: '18px' }}>Billing & Transaction Records</h3>
            {user.payments.length === 0 ? <p style={{ color: '#94a3b8' }}>No payment invoices found.</p> : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {user.payments.map(pay => (
                  <div key={pay.id} style={{ padding: '16px', border: '1px solid #e2e8f0', borderRadius: '8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                      <strong>{pay.service}</strong>
                      <div style={{ fontSize: '12px', color: '#64748b', marginTop: '4px' }}>ID: {pay.id} | Date: {pay.date}</div>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <div style={{ fontWeight: 'bold', color: '#0f172a' }}>${pay.amount}</div>
                      <span style={{ fontSize: '11px', color: '#16a34a', fontWeight: '600' }}>● {pay.status}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* 3. Family Members Content View */}
        {activeTab === 'family' && (
          <div>
            <h3 style={{ marginBottom: '16px', fontSize: '18px' }}>Linked Family Accounts</h3>
            {user.familyMembers.length === 0 ? <p style={{ color: '#94a3b8' }}>No family members linked to this profile.</p> : (
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                {user.familyMembers.map(member => (
                  <div key={member.id} style={{ padding: '16px', border: '1px solid #e2e8f0', borderRadius: '8px', backgroundColor: '#f8fafc' }}>
                    <div style={{ fontWeight: '600', fontSize: '15px' }}>{member.name}</div>
                    <div style={{ fontSize: '13px', color: '#64748b', marginTop: '4px' }}>Relation: {member.relation} | Age: {member.age} yrs</div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

      </div>
    </div>
  );
}