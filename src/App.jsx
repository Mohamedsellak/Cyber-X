import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./components/auth/login.jsx";
import ForgotPassword from "./components/auth/forgotPassword.jsx";
import AuthLayout from "./components/layout/AuthLayout.jsx";

// Import these new components (you'll need to create them)
import Reports from "./components/reports.jsx";
import Settings from "./components/settings.jsx";
import Tools from "./components/tools.jsx";
import Dashboard from "./components/dashboard.jsx";

export default function App() {
  useEffect(() => {
    document.title = "Cyber X - Security Analysis Platform";
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        
        {/* Protected routes */}
        <Route path="/dashboard" element={<AuthLayout><Dashboard /></AuthLayout>} />
        <Route path="/reports" element={<AuthLayout><Reports /></AuthLayout>} />
        <Route path="/settings" element={<AuthLayout><Settings /></AuthLayout>} />
        <Route path="/tools" element={<AuthLayout><Tools /></AuthLayout>} />
        
        {/* Fallback route */}
        <Route path="*" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}
