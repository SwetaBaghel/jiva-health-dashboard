// src/components/Sidebar.tsx
import { Link, useLocation } from 'react-router-dom';

export default function Sidebar() {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
    // flexBasis aur width ko dynamic kiya taaki choti screen par ye full width row ban jaye
    <aside style={{ 
      flexGrow: 1,
      flexBasis: '260px',
      backgroundColor: '#ffffff', 
      borderRight: '1px solid #e2e8f0', 
      borderBottom: '1px solid #e2e8f0',
      padding: '24px',
      boxSizing: 'border-box',
      display: 'flex',
      flexDirection: 'column',
      gap: '16px',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '24px' }}>
        <span style={{ fontSize: '24px', fontWeight: 'bold', color: '#059669' }}>Jiva</span>
        <span style={{ fontSize: '12px', fontWeight: '600', color: '#94a3b8', marginLeft: '4px', marginTop: '8px' }}>HEALTH</span>
      </div>
      {/* Navigation Links Container*/}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', width: '100%' }}>
        <Link to="/" style={{ 
          padding: '12px 16px', 
          color: isActive('/') ? '#137333' : '#64748b', 
          backgroundColor: isActive('/') ? '#e6f4ea' : 'transparent',
          borderRadius: '8px', 
          fontWeight: isActive('/') ? '600' : 'normal',
          textDecoration: 'none',
          fontSize: '14px',
          display: 'block'
        }}>
          User Management
        </Link>
        <div style={{ padding: '12px 16px', color: '#94a3b8', fontSize: '14px', cursor: 'not-allowed' }}>Dashboard</div>
        <div style={{ padding: '12px 16px', color: '#94a3b8', fontSize: '14px', cursor: 'not-allowed' }}>Services</div>
      </div>
    </aside>
  );
}