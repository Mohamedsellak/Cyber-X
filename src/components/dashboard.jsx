import React, { useState, useEffect } from 'react';
import {
  RiAlertLine,
  RiArrowUpLine,
  RiArrowDownLine,
  RiUserLine,
  RiCpuLine,
  RiHardDriveLine,
  RiDatabase2Line,
  RiSpeedLine,
  RiWifiLine,
  RiTempHotLine,
  RiLogoutBoxLine,
  RiSettings4Line,
  RiNotification3Line,
  RiSearchLine,
} from 'react-icons/ri';

export default function Dashboard() {
  const [systemMetrics, setSystemMetrics] = useState({
    cpu: 45,
    ram: 62,
    storage: 78,
    network: 25,
    temp: 42,
    uptime: '12:42:33'
  });

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      setSystemMetrics(prev => ({
        cpu: Math.floor(Math.random() * 30) + 40,
        ram: Math.floor(Math.random() * 20) + 50,
        storage: prev.storage,
        network: Math.floor(Math.random() * 40) + 20,
        temp: Math.floor(Math.random() * 10) + 35,
        uptime: prev.uptime
      }));
    }, 500);

    return () => clearInterval(interval);
  }, []);

  const Header = () => (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-xl border-b border-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <span className="text-xl font-bold bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
              CyberX
            </span>
          </div>
          
          {/* Search Bar */}
          <div className="hidden md:block flex-1 max-w-md mx-4">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <RiSearchLine className="h-5 w-5 text-gray-500" />
              </div>
              <input
                type="search"
                placeholder="Search..."
                className="w-full bg-gray-800/50 border border-gray-700 rounded-lg pl-10 pr-4 py-2 text-sm text-gray-300 placeholder-gray-500 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500"
              />
            </div>
          </div>

          {/* Header Actions */}
          <div className="flex items-center space-x-4">
            <button className="p-2 text-gray-400 hover:text-green-400 transition-colors relative">
              <RiNotification3Line className="h-6 w-6" />
              <span className="absolute top-1 right-1 h-2 w-2 bg-green-500 rounded-full"></span>
            </button>
            <button className="p-2 text-gray-400 hover:text-green-400 transition-colors">
              <RiSettings4Line className="h-6 w-6" />
            </button>
            <div className="h-8 w-px bg-gray-800"></div>
            <button className="flex items-center space-x-2 text-gray-400 hover:text-green-400 transition-colors">
              <RiLogoutBoxLine className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );

  // Background mesh effect - purely decorative (same as login page)
  const BackgroundMesh = () => (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      <div className="absolute top-0 -left-1/4 w-1/2 h-1/2 bg-gradient-to-br from-green-500/10 via-green-300/5 to-transparent rounded-full filter blur-3xl"></div>
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-gradient-to-b from-green-500/10 to-emerald-500/5 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-0 left-1/3 w-1/3 h-1/3 bg-gradient-to-tr from-emerald-500/10 to-green-400/5 rounded-full filter blur-3xl"></div>
      
      {/* Network-like grid lines */}
      <div className="absolute inset-0 opacity-10">
        <div className="h-full w-full bg-[linear-gradient(to_right,#232323_1px,transparent_1px),linear-gradient(to_bottom,#232323_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      </div>
      
      {/* Cyber dots */}
      <div className="absolute inset-0">
        {Array.from({ length: 20 }).map((_, i) => (
          <div 
            key={i}
            className="absolute rounded-full bg-green-500"
            style={{
              width: `${Math.random() * 4 + 1}px`,
              height: `${Math.random() * 4 + 1}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.3 + 0.1,
            }}
          ></div>
        ))}
      </div>
    </div>
  );

  const MetricCard = ({ icon: Icon, title, value, unit, details }) => (
    <div className="group bg-gray-900/40 backdrop-blur-xl p-6 rounded-xl border border-gray-800/50 hover:border-green-500/50 transition-all duration-300 shadow-lg hover:shadow-green-900/10 hover:shadow-2xl relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-400 via-emerald-500 to-green-400 opacity-50 group-hover:opacity-100 transition-opacity"></div>
      
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center">
          <div className="p-2 bg-green-500/10 rounded-lg mr-3">
            <Icon className="w-6 h-6 text-green-400" />
          </div>
          <h3 className="text-lg font-semibold text-white group-hover:text-green-400 transition-colors">{title}</h3>
        </div>
      </div>
      
      <div className="relative pt-2">
        <div className="flex mb-2 items-center justify-between">
          <div className="text-3xl font-bold text-white">{value}{unit}</div>
          <span className="text-sm text-gray-400">{details}</span>
        </div>
        <div className="overflow-hidden h-2 text-xs flex rounded-full bg-gray-800/70">
          <div 
            style={{ 
              width: `${typeof value === 'number' ? value : 50}%`,
              transition: 'all 0.5s ease'
            }}
            className="bg-gradient-to-r from-green-600 to-emerald-500 h-full rounded-full"
          />
        </div>
      </div>
    </div>
  );

  return (
    <div className="relative min-h-screen flex flex-col bg-gray-950 text-gray-100">
      <Header />
      <BackgroundMesh />
      
      <main className="flex-1 pt-20 pb-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Dashboard Header */}
          <div className="mb-8 bg-gray-900/40 backdrop-blur-xl p-6 rounded-xl border border-gray-800/50">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent mb-2">
              Security Dashboard
            </h1>
            <p className="text-gray-400">Real-time system monitoring and security analytics</p>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
              {['Threats Detected', 'System Health', 'Active Users', 'Security Score'].map((stat, i) => (
                <div key={i} className="bg-gray-800/50 px-4 py-3 rounded-lg">
                  <p className="text-sm text-gray-500">{stat}</p>
                  <p className="text-xl font-semibold text-white mt-1">
                    {i === 0 ? '12' : i === 1 ? '98%' : i === 2 ? '5' : '85/100'}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* System Metrics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <MetricCard 
              icon={RiCpuLine}
              title="CPU Usage"
              value={systemMetrics.cpu}
              unit="%"
              details="8 Cores"
            />
            <MetricCard 
              icon={RiDatabase2Line}
              title="Memory Usage"
              value={systemMetrics.ram}
              unit="%"
              details="16GB Total"
            />
            <MetricCard 
              icon={RiHardDriveLine}
              title="Storage"
              value={systemMetrics.storage}
              unit="%"
              details="432GB/512GB"
            />
            <MetricCard 
              icon={RiWifiLine}
              title="Network"
              value={systemMetrics.network}
              unit="%"
              details="24MB/s"
            />
            <MetricCard 
              icon={RiTempHotLine}
              title="Temperature"
              value={systemMetrics.temp}
              unit="°C"
              details="Normal"
            />
            <MetricCard 
              icon={RiSpeedLine}
              title="System Uptime"
              value={systemMetrics.uptime}
              unit=""
              details="Since last reboot"
            />
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {['Active Threats', 'System Health', 'Network Status', 'Security Score'].map((stat, index) => (
              <div key={index} className="bg-gray-900/40 backdrop-blur-xl p-6 rounded-lg border border-gray-800/50 hover:border-green-500/50 transition-all duration-300 shadow-lg hover:shadow-green-900/10 hover:shadow-2xl relative overflow-hidden">
                {/* Glowing accent */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-400 via-emerald-500 to-green-400"></div>
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-gray-400 text-sm">{stat}</p>
                    <h3 className="text-2xl font-bold text-white mt-1">
                      {index === 0 ? '3' : index === 1 ? '98%' : index === 2 ? 'Secure' : '85/100'}
                    </h3>
                  </div>
                  <span className={`flex items-center ${index === 0 ? 'text-red-500' : 'text-green-400'}`}>
                    {index === 0 ? <RiArrowUpLine /> : <RiArrowDownLine />}
                    <span className="ml-1">12%</span>
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Charts Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <div className="bg-gray-900/40 backdrop-blur-xl p-6 rounded-lg border border-gray-800/50 hover:border-green-500/50 transition-all duration-300 shadow-lg hover:shadow-green-900/10 hover:shadow-2xl relative overflow-hidden">
              {/* Glowing accent */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-400 via-emerald-500 to-green-400"></div>
              <h3 className="text-lg font-semibold text-white mb-4">Security Incidents</h3>
              <div className="h-64 flex items-center justify-center text-gray-500">
                [Security Incidents Chart Placeholder]
              </div>
            </div>

            <div className="bg-gray-900/40 backdrop-blur-xl p-6 rounded-lg border border-gray-800/50 hover:border-green-500/50 transition-all duration-300 shadow-lg hover:shadow-green-900/10 hover:shadow-2xl relative overflow-hidden">
              {/* Glowing accent */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-400 via-emerald-500 to-green-400"></div>
              <h3 className="text-lg font-semibold text-white mb-4">System Performance</h3>
              <div className="h-64 flex items-center justify-center text-gray-500">
                [Performance Chart Placeholder]
              </div>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 bg-gray-900/40 backdrop-blur-xl p-6 rounded-lg border border-gray-800/50 hover:border-green-500/50 transition-all duration-300 shadow-lg hover:shadow-green-900/10 hover:shadow-2xl relative overflow-hidden">
              {/* Glowing accent */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-400 via-emerald-500 to-green-400"></div>
              <h3 className="text-lg font-semibold text-white mb-4">Recent Activity</h3>
              <div className="space-y-4">
                {[1, 2, 3, 4].map((item) => (
                  <div key={item} className="flex items-center space-x-3 text-sm">
                    <RiAlertLine className="text-yellow-500" />
                    <span className="text-gray-400">Security scan completed on Server #1</span>
                    <span className="text-gray-500">2min ago</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gray-900/40 backdrop-blur-xl p-6 rounded-lg border border-gray-800/50 hover:border-green-500/50 transition-all duration-300 shadow-lg hover:shadow-green-900/10 hover:shadow-2xl relative overflow-hidden">
              {/* Glowing accent */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-400 via-emerald-500 to-green-400"></div>
              <h3 className="text-lg font-semibold text-white mb-4">Active Users</h3>
              <div className="space-y-4">
                {[1, 2, 3].map((user) => (
                  <div key={user} className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                      <RiUserLine className="text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-300">User {user}</p>
                      <p className="text-xs text-gray-500">Active now</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
