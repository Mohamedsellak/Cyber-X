import React, { useState, useEffect } from 'react';
import {
  RiAlertLine,
  RiUserLine,
  RiCpuLine,
  RiHardDriveLine,
  RiDatabase2Line,
  RiSpeedLine,
  RiWifiLine,
  RiTempHotLine,
  RiRefreshLine,
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

  const MetricCard = ({ icon: Icon, title, value, unit, details, gradient }) => (
    <div className="group bg-gray-900/40 backdrop-blur-xl p-6 rounded-lg border border-gray-800/50 hover:border-green-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-green-900/10">
      <div className={`absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-300 rounded-lg ${gradient}`} />
      <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-green-400/50 via-emerald-500/50 to-green-400/50" />
      
      <div className="flex justify-between items-start mb-4 relative">
        <div className="flex items-center">
          <div className="p-2 bg-gray-800/50 rounded-lg mr-3 group-hover:bg-gray-800/70 transition-colors">
            <Icon className="w-6 h-6 text-green-400" />
          </div>
          <h3 className="text-lg font-semibold text-gray-100 group-hover:text-green-400 transition-colors">{title}</h3>
        </div>
      </div>
      
      <div className="relative">
        <div className="flex items-center justify-between mb-2">
          <div className="text-3xl font-bold text-white group-hover:text-green-400 transition-colors">{value}{unit}</div>
          <span className="text-sm text-gray-400 bg-gray-800/50 px-2 py-1 rounded">{details}</span>
        </div>
        <div className="overflow-hidden h-2 text-xs flex rounded-full bg-gray-800/50">
          <div 
            style={{ width: `${typeof value === 'number' ? value : 50}%` }}
            className={`transition-all duration-500 ease-out rounded-full ${gradient}`}
          />
        </div>
      </div>
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto px-4">
      {/* Dashboard Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-3 bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent flex items-center">
          <RiSpeedLine className="w-8 h-8 mr-3 text-green-500" />
          Security Dashboard
        </h1>
        <div className="flex items-center justify-between">
          <p className="text-gray-400">Real-time system monitoring and security analytics</p>
          <button className="px-4 py-2 bg-gradient-to-r from-green-600 to-emerald-600 hover:shadow-lg hover:shadow-green-900/20 rounded-lg text-white flex items-center group">
            <RiRefreshLine className="w-5 h-5 mr-2 group-hover:rotate-180 transition-transform duration-300" />
            Refresh Metrics
          </button>
        </div>
      </div>

      {/* Quick Stats Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {[
          { title: 'Threats Detected', value: '12', trend: '+2', color: 'bg-red-500' },
          { title: 'System Health', value: '98%', trend: '+5', color: 'bg-green-500' },
          { title: 'Active Users', value: '5', trend: '-1', color: 'bg-blue-500' },
          { title: 'Security Score', value: '85', trend: '+3', color: 'bg-purple-500' }
        ].map((stat, i) => (
          <div key={i} className="bg-gray-900/40 backdrop-blur-xl p-4 rounded-lg border border-gray-800/50 group hover:border-green-500/30 transition-all duration-300">
            <div className={`${stat.color}/10 p-2 rounded-lg w-fit mb-2`}>
              <div className={`w-3 h-3 ${stat.color} rounded-full`} />
            </div>
            <p className="text-sm text-gray-400">{stat.title}</p>
            <div className="flex items-end justify-between mt-1">
              <p className="text-2xl font-bold text-white group-hover:text-green-400 transition-colors">{stat.value}</p>
              <span className={`text-sm ${stat.trend.startsWith('+') ? 'text-green-400' : 'text-red-400'}`}>
                {stat.trend}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* System Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <MetricCard 
          icon={RiCpuLine}
          title="CPU Usage"
          value={systemMetrics.cpu}
          unit="%"
          details="8 Cores"
          gradient="bg-gradient-to-r from-blue-500 to-cyan-500"
        />
        <MetricCard 
          icon={RiDatabase2Line}
          title="Memory Usage"
          value={systemMetrics.ram}
          unit="%"
          details="16GB Total"
          gradient="bg-gradient-to-r from-purple-500 to-pink-500"
        />
        <MetricCard 
          icon={RiHardDriveLine}
          title="Storage"
          value={systemMetrics.storage}
          unit="%"
          details="432GB/512GB"
          gradient="bg-gradient-to-r from-green-500 to-teal-500"
        />
        <MetricCard 
          icon={RiWifiLine}
          title="Network"
          value={systemMetrics.network}
          unit="%"
          details="24MB/s"
          gradient="bg-gradient-to-r from-yellow-500 to-orange-500"
        />
        <MetricCard 
          icon={RiTempHotLine}
          title="Temperature"
          value={systemMetrics.temp}
          unit="°C"
          details="Normal"
          gradient="bg-gradient-to-r from-red-500 to-pink-500"
        />
        <MetricCard 
          icon={RiSpeedLine}
          title="System Uptime"
          value={systemMetrics.uptime}
          unit=""
          details="Since last reboot"
          gradient="bg-gradient-to-r from-gray-500 to-gray-700"
        />
      </div>

      {/* Rest of the dashboard content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div className="bg-gray-800/30 backdrop-blur-sm p-6 rounded-lg border border-gray-700/30 hover:border-green-500/30 transition-all duration-300">
          <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-green-400/50 via-emerald-500/50 to-green-400/50"></div>
          <h3 className="text-lg font-semibold text-white mb-4">Security Incidents</h3>
          <div className="h-64 flex items-center justify-center text-gray-500">
            [Security Incidents Chart Placeholder]
          </div>
        </div>

        <div className="bg-gray-800/30 backdrop-blur-sm p-6 rounded-lg border border-gray-700/30 hover:border-green-500/30 transition-all duration-300">
          <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-green-400/50 via-emerald-500/50 to-green-400/50"></div>
          <h3 className="text-lg font-semibold text-white mb-4">System Performance</h3>
          <div className="h-64 flex items-center justify-center text-gray-500">
            [Performance Chart Placeholder]
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-gray-800/30 backdrop-blur-sm p-6 rounded-lg border border-gray-700/30 hover:border-green-500/30 transition-all duration-300">
          <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-green-400/50 via-emerald-500/50 to-green-400/50"></div>
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

        <div className="bg-gray-800/30 backdrop-blur-sm p-6 rounded-lg border border-gray-700/30 hover:border-green-500/30 transition-all duration-300">
          <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-green-400/50 via-emerald-500/50 to-green-400/50"></div>
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
  );
}
