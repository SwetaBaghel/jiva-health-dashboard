// src/App.tsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import UserListPage from './pages/UserListPage';
import UserDetailPage from './pages/UserDetailPage';

function App() {
  return (
    <BrowserRouter>
      <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: '#f8fafc' }}>
        
        {/* Global Sidebar Component */}
        <Sidebar />

        {/* Dynamic Page Switching Content Area */}
        <main style={{ flexGrow: 1, padding: '40px' }}>
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