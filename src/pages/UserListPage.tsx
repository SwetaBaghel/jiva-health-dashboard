import React from 'react';
import { useUserStore } from '../store/useUserStore';
import UserCard from '../components/UserCard';

export default function UserListPage() {
  const { users, searchQuery, setSearchQuery } = useUserStore();

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.role.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div style={{ width: '100%' }}>
      <div style={{ marginBottom: '32px' }}>
        <input 
          type="text" 
          placeholder="Search users..." 
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          style={{ padding: '12px 16px', width: '360px', borderRadius: '8px', border: '1px solid #cbd5e1', outline: 'none' }} 
        />
      </div>

      <h1 style={{ fontSize: '24px', fontWeight: '600', marginBottom: '24px' }}>User Management</h1>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {filteredUsers.map(user => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
}