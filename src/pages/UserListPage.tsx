// src/pages/UserListPage.tsx
import { useState } from 'react';
import { useUserStore } from '../store/useUserStore';
import UserCard from '../components/UserCard';
import AddUserModal from '../components/AddUserModal';

export default function UserListPage() {
  const { users, searchQuery, setSearchQuery } = useUserStore();
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal state

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.role.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div style={{ width: '100%' }}>
      
      {/* TOP ROW: Search Input + Add User Button */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap:'16px', flexWrap: 'wrap', marginBottom: '32px' }}>
        <input 
          type="text" 
          placeholder="Search users by name or role..." 
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          style={{ padding: '12px 16px', width: '100%', maxWidth: '360px', flexGrow: 1, borderRadius: '8px', border: '1px solid #cbd5e1', outline: 'none', backgroundColor: '#ffffff' }} 
        />
        
        <button 
          onClick={() => setIsModalOpen(true)} // Button click par popup khulega
          style={{ 
            padding: '12px 20px', 
            backgroundColor: '#059669', 
            color: '#ffffff', 
            border: 'none', 
            borderRadius: '8px', 
            fontWeight: '600', 
            cursor: 'pointer',
            width:'auto'
          }}
        >
          + Add User
        </button>
      </div>

      <h1 style={{ fontSize: '24px', fontWeight: '600', marginBottom: '24px' }}>User Management</h1>

      {/* USER CARDS LIST */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {filteredUsers.length > 0 ? (
          filteredUsers.map(user => (
            <UserCard key={user.id} user={user} />
          ))
        ) : (
          <div style={{ padding: '40px', textAlign: 'center', color: '#64748b', backgroundColor: '#ffffff', borderRadius: '12px' }}>
            No users found matching your search.
          </div>
        )}
      </div>

      {/* POPUP MODAL COMPONENT */}
      <AddUserModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      
    </div>
  );
}