import React, { useState, useEffect } from 'react';
import {
  RiAlertLine,
  RiArrowUpLine,
  RiArrowDownLine,
  RiUserLine,
  RiCpuLine,
  RiHardDriveLine,
  RiMemoryFill,  
  RiSpeedLine,
  RiWifiLine,
  RiThermometerFill,  // Replace RiTemperatureLine
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
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  // New component for metric cards
  const MetricCard = ({ icon: Icon, title, value, color, unit, details }) => (
    <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-lg border border-gray-800 hover:border-purple-500/50 transition-all duration-300 shadow-lg">
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center">
          <Icon className={`w-6 h-6 ${color} mr-3`} />
          <h3 className="text-lg font-semibold text-gray-100">{title}</h3>
        </div>
      </div>
      <div className="relative pt-2">
        <div className="flex mb-2 items-center justify-between">
          <div className={`text-3xl font-bold ${color}`}>{value}{unit}</div>
          <span className="text-sm text-gray-400">{details}</span>
        </div>
        <div className="overflow-hidden h-2 text-xs flex rounded-full bg-gray-700">
          <div 
            style={{ width: `${typeof value === 'number' ? value : 50}%` }}
            className={`transition-all duration-500 shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center ${color.replace('text', 'bg')}`}
          />
        </div>
      </div>
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-3 bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
          Security Dashboard
        </h1>
        <p className="text-gray-400 text-lg">Real-time system monitoring and security analytics</p>
      </div>

      {/* System Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <MetricCard 
          icon={RiCpuLine}
          title="CPU Usage"
          value={systemMetrics.cpu}
          color="text-blue-500"
          unit="%"
          details="8 Cores"
        />
        <MetricCard 
          icon={RiMemoryFill}  // Changed from RiMemoryLine
          title="Memory Usage"
          value={systemMetrics.ram}
          color="text-purple-500"
          unit="%"
          details="16GB Total"
        />
        <MetricCard 
          icon={RiHardDriveLine}
          title="Storage"
          value={systemMetrics.storage}
          color="text-green-500"
          unit="%"
          details="432GB/512GB"
        />
        <MetricCard 
          icon={RiWifiLine}
          title="Network"
          value={systemMetrics.network}
          color="text-yellow-500"
          unit="%"
          details="24MB/s"
        />
        <MetricCard 
          icon={RiThermometerFill}  // Changed from RiTemperatureLine
          title="Temperature"
          value={systemMetrics.temp}
          color="text-red-500"
          unit="°C"
          details="Normal"
        />
        <MetricCard 
          icon={RiSpeedLine}
          title="System Uptime"
          value={systemMetrics.uptime}
          color="text-indigo-500"
          unit=""
          details="Since last reboot"
        />
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {['Active Threats', 'System Health', 'Network Status', 'Security Score'].map((stat, index) => (
          <div key={index} className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-lg border border-gray-800">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-gray-400 text-sm">{stat}</p>
                <h3 className="text-2xl font-bold text-white mt-1">
                  {index === 0 ? '3' : index === 1 ? '98%' : index === 2 ? 'Secure' : '85/100'}
                </h3>
              </div>
              <span className={`flex items-center ${index === 0 ? 'text-red-500' : 'text-green-500'}`}>
                {index === 0 ? <RiArrowUpLine /> : <RiArrowDownLine />}
                <span className="ml-1">12%</span>
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-lg border border-gray-800">
          <h3 className="text-lg font-semibold text-gray-100 mb-4">Security Incidents</h3>
          <div className="h-64 flex items-center justify-center text-gray-500">
            [Security Incidents Chart Placeholder]
          </div>
        </div>

        <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-lg border border-gray-800">
          <h3 className="text-lg font-semibold text-gray-100 mb-4">System Performance</h3>
          <div className="h-64 flex items-center justify-center text-gray-500">
            [Performance Chart Placeholder]
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-lg border border-gray-800">
          <h3 className="text-lg font-semibold text-gray-100 mb-4">Recent Activity</h3>
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

        <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-lg border border-gray-800">
          <h3 className="text-lg font-semibold text-gray-100 mb-4">Active Users</h3>
          <div className="space-y-4">
            {[1, 2, 3].map((user) => (
              <div key={user} className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
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
