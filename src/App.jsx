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

// Import the tools components
import PortScan from "./components/tools/PortScan.jsx";
import NetworkScanner from "./components/tools/NetworkScanner.jsx";
import PasswordAnalyzer from "./components/tools/PasswordAnalyzer.jsx";
import SSLCertificateManager from "./components/tools/SSLCertificateManager.jsx";

export default function App() {

  useEffect(() => {
    const fetchSystemInfo = async () => {
      // const networkDevices = await window.api.scanNetwork();
      // console.log("Network Devices:", networkDevices);

      // const openPorts = await window.api.portScan('192.168.1.1', '1-1000');
      // console.log("Open Ports:", openPorts);// This should print the open ports

      // const serviceDiscovery = await window.api.serviceDiscovery();
      // console.log("Service Discovery:", serviceDiscovery);
    };
    fetchSystemInfo();
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

          <Route path="network-scan" element={<NetworkScanner />} />
          <Route path="port-scan" element={<PortScan />} />
          <Route path="password-analyzer" element={<PasswordAnalyzer />} />
          <Route path="ssl-manager" element={<SSLCertificateManager />} />
          
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
