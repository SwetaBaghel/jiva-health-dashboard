import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Sidebar() {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <aside style={{ width: '260px', backgroundColor: '#ffffff', borderRight: '1px solid #e2e8f0', padding: '24px' }}>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '32px' }}>
        <span style={{ fontSize: '24px', fontWeight: 'bold', color: '#059669' }}>Jiva</span>
        <span style={{ fontSize: '12px', fontWeight: '600', color: '#94a3b8', marginLeft: '4px', marginTop: '8px' }}>HEALTH</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <Link to="/" style={{ 
          padding: '12px', 
          color: isActive('/') ? '#137333' : '#64748b', 
          backgroundColor: isActive('/') ? '#e6f4ea' : 'transparent',
          borderRadius: '8px', 
          fontWeight: isActive('/') ? '600' : 'normal',
          textDecoration: 'none'
        }}>
          User Management
        </Link>
        <div style={{ padding: '12px', color: '#64748b', cursor: 'not-allowed' }}>Dashboard (Soon)</div>
        <div style={{ padding: '12px', color: '#64748b', cursor: 'not-allowed' }}>Services (Soon)</div>
      </div>
    </aside>
  );
}