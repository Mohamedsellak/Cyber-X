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
import PortScan from "./components/tools/PortScan.jsx";

export default function App() {

  useEffect(() => {
    const fetchSystemInfo = async () => {
      const systemInfo = await window.api.getSystemInfo();
      const temperature = await window.api.getTemperature();
      const uptime = await window.api.getUptime();
      const networkStats = await window.api.getNetworkStats();
      console.log("Network Stats:", networkStats);
      console.log("System Info:", systemInfo);
      console.log("Temperature:", temperature);
      console.log("Uptime:", uptime);
    };
    fetchSystemInfo();
  }, []);

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
        <Route path="/tools" element={<AuthLayout><Tools /></AuthLayout>}>
          <Route path="port-scan" element={<PortScan />} />
          {/* <Route path="xss" element={<XssScan />} />
          <Route path="sql-scan" element={<SqlScan />} />
          <Route path="ssl-scan" element={<SslScan />} /> */}
        </Route>
        
        {/* Fallback route */}
        <Route path="*" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}
