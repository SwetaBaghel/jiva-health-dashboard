// src/pages/UserListPage.tsx
import { useState } from 'react';
import { useUserStore } from '../store/useUserStore';
import UserCard from '../components/UserCard';
import AddUserModal from '../components/AddUserModal';

export default function UserListPage() {
  const { users } = useUserStore();
  const [searchQuery, setSearchQuery] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.role.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      
      {/* HEADER SECTION */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
        <div>
          <h1 style={{ fontSize: '28px', fontWeight: '700', color: '#0f172a', margin: 0, letterSpacing: '-0.02em' }}>
            User Management
          </h1>
          <p style={{ fontSize: '14px', color: '#64748b', marginTop: '4px', margin: 0 }}>
            Manage medical staff directory, patient status, and profiles.
          </p>
        </div>
      </div>

      {/* SEARCH AND ADD USER BAR */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
        <div style={{ position: 'relative', flexGrow: 1, maxWidth: '420px', width: '100%' }}>
          <span style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', color: '#94a3b8', fontSize: '16px' }}>
            🔍
          </span>
          <input 
            type="text" 
            placeholder="Search by name, role or email..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{ 
              padding: '12px 16px 12px 42px', 
              width: '100%', 
              borderRadius: '12px', 
              border: '1px solid #e2e8f0', 
              outline: 'none', 
              backgroundColor: '#ffffff',
              fontSize: '14px',
              color: '#334155',
              boxShadow: '0 1px 2px rgba(0,0,0,0.02)',
              boxSizing: 'border-box',
              transition: 'all 0.2s'
            }} 
            onFocus={(e) => e.currentTarget.style.borderColor = '#059669'}
            onBlur={(e) => e.currentTarget.style.borderColor = '#e2e8f0'}
          />
        </div>
        
        <button 
          onClick={() => setIsModalOpen(true)}
          style={{ 
            padding: '12px 24px', 
            backgroundColor: '#059669', 
            color: '#ffffff', 
            border: 'none', 
            borderRadius: '12px', 
            fontWeight: '600', 
            fontSize: '14px',
            cursor: 'pointer', 
            boxShadow: '0 4px 12px rgba(5, 150, 105, 0.15)',
            transition: 'all 0.2s'
          }}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#047857'}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#059669'}
        >
          + Add New Profile
        </button>
      </div>

      {/* USER CARDS LIST */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {filteredUsers.length === 0 ? (
          <div style={{ padding: '48px', textAlign: 'center', backgroundColor: '#ffffff', borderRadius: '16px', border: '1px solid #e2e8f0', color: '#64748b' }}>
            No matching users found. Try searching something else!
          </div>
        ) : (
          filteredUsers.map(user => (
            <UserCard key={user.id} user={user} />
          ))
        )}
      </div>

      <AddUserModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}