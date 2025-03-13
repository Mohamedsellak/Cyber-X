import React from 'react';
import Navbar from '../navbar.jsx';

export default function AuthLayout({ children }) {
  return (
    <div className="flex min-h-screen bg-gray-950">
      <Navbar />
      <main className="flex-1 p-8 overflow-auto">
        <div className="max-w-7xl mx-auto text-gray-100">
          {children}
        </div>
      </main>
    </div>
  );
} 