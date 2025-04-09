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
import Whois from "./components/tools/Whois.jsx";
import TcpiePing from "./components/tools/tcpiePing.jsx";
import DefaultGateway from "./components/tools/defaultGetway.jsx";


export default function App() {

  useEffect(() => {
    // const performTcpScan = async () => {
    //   const tcpie = await window.api.tcpPing("example.com", 22, {
    //     count: 5,
    //     interval: 1000,
    //     timeout: 3000
    //   }); // This will start a TCP scan on example.com port 22

    //   console.log("TCP Scan Results:", tcpie);
    // };

    // performTcpScan();
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
          <Route path="whois" element={<Whois />} />
          <Route path="tcpie" element={<TcpiePing />} />
          <Route path="defaultGateway" element={<DefaultGateway />} />

          
        </Route>
        
        {/* Fallback route */}
        <Route path="*" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}
