// src/components/Sidebar.tsx
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Sidebar() {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;
  
  // Responsive screen check state
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Desktop Style
  const sidebarStyle: React.CSSProperties = {
    width: '260px',
    backgroundColor: '#ffffff',
    borderRight: '1px solid #e2e8f0',
    padding: '32px 24px',
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    gap: '32px',
    flexShrink: 0
  };

  // Mobile Header Style
  const mobileHeaderStyle: React.CSSProperties = {
    width: '100%',
    backgroundColor: '#ffffff',
    borderBottom: '1px solid #e2e8f0',
    padding: '16px 24px',
    boxSizing: 'border-box',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  };

  if (isMobile) {
    return (
      <header style={mobileHeaderStyle}>
        {/* Logo Section */}
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <span style={{ fontSize: '20px', fontWeight: 'bold', color: '#059669', letterSpacing: '-0.03em' }}>Jiva</span>
          <span style={{ fontSize: '10px', fontWeight: '700', color: '#94a3b8', marginLeft: '4px', marginTop: '4px' }}>HEALTH</span>
        </div>
        
        {/* Mobile Navigation Links - Teeno links vapas row format mein line up ho gaye */}
        <nav style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
          <Link to="/" style={{ 
            fontSize: '12px', 
            fontWeight: '600', 
            textDecoration: 'none',
            color: isActive('/') ? '#137333' : '#64748b',
            backgroundColor: isActive('/') ? '#e6f4ea' : 'transparent',
            padding: '6px 10px',
            borderRadius: '6px'
          }}>
            Users
          </Link>
          <span style={{ fontSize: '12px', color: '#cbd5e1', fontWeight: '500', padding: '6px 4px', cursor: 'not-allowed' }}>
            Dashboard
          </span>
          <span style={{ fontSize: '12px', color: '#cbd5e1', fontWeight: '500', padding: '6px 4px', cursor: 'not-allowed' }}>
            Services
          </span>
        </nav>
      </header>
    );
  }

  // Return Desktop Sidebar
  return (
    <aside style={sidebarStyle}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <span style={{ fontSize: '24px', fontWeight: 'bold', color: '#059669', letterSpacing: '-0.03em' }}>Jiva</span>
        <span style={{ fontSize: '11px', fontWeight: '700', color: '#94a3b8', marginLeft: '4px', marginTop: '6px' }}>HEALTH</span>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', width: '100%' }}>
        <Link to="/" style={{ 
          padding: '12px 16px', 
          color: isActive('/') ? '#137333' : '#64748b', 
          backgroundColor: isActive('/') ? '#e6f4ea' : 'transparent',
          borderRadius: '10px', 
          fontWeight: isActive('/') ? '600' : '500',
          textDecoration: 'none',
          fontSize: '14px',
          display: 'block',
          transition: 'all 0.2s'
        }}>
          User Management
        </Link>
        <div style={{ padding: '12px 16px', color: '#cbd5e1', fontSize: '14px', fontWeight: '500', cursor: 'not-allowed' }}>Dashboard</div>
        <div style={{ padding: '12px 16px', color: '#cbd5e1', fontSize: '14px', fontWeight: '500', cursor: 'not-allowed' }}>Services</div>
      </div>
    </aside>
  );
}