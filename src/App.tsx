// src/App.tsx
import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import UserListPage from './pages/UserListPage';
import UserDetailPage from './pages/UserDetailPage';

function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <BrowserRouter>
      <div style={{ 
        display: 'flex', 
        flexDirection: isMobile ? 'column' : 'row', // Mobile par top-down, desktop par side-by-side
        minHeight: '100vh', 
        backgroundColor: '#f8fafc', 
        width: '100%' 
      }}>
        
        <Sidebar />

        <main style={{ 
          flexGrow: 1, 
          padding: isMobile ? '20px 16px' : '40px', // Mobile par tight padding
          boxSizing: 'border-box', 
          overflowX: 'hidden',
          width: '100%'
        }}>
          <Routes>
            <Route path="/" element={<UserListPage />} />
            <Route path="/user/:id" element={<UserDetailPage />} />
          </Routes>
        </main>

      </div>
    </BrowserRouter>
  );
}

export default App;