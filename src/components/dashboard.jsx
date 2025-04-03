import React, { useState, useEffect } from 'react';
import {
  RiAlertLine,
  RiUserLine,
  RiCpuLine,
  RiHardDriveLine,
  RiDatabase2Line,
  RiSpeedLine,
  RiTempHotLine,
  RiRefreshLine,
} from 'react-icons/ri';
import NetworkInfo from './NetworkInfo';

export default function Dashboard() {
  const [systemMetrics, setSystemMetrics] = useState({
    cpu: { usage: 0, cores: 0 },
    ram: { used: 0, total: 0, usage: 0 },
    storage: { used: 0, total: 0, usage: 0 },
    network: { speed: 0, speedIn: 0, speedOut: 0, usage: 0 },
    temp: { main: 0 },
    uptime: '00:00:00',
    networkInterfaces: []
  });

  const fetchSystemData = async () => {
    try {
      const [sysInfo, temp, uptime, networkStats] = await Promise.all([
        window.api.getSystemInfo(),
        window.api.getTemperature(),
        window.api.getUptime(),
        window.api.getNetworkStats()
      ]);

      const ramUsage = (sysInfo.mem.used / sysInfo.mem.total) * 100;
      const storageUsage = (sysInfo.disk[0].used / sysInfo.disk[0].size) * 100;
      
      // Format uptime to HH:MM:SS
      const formatUptime = (seconds) => {
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        const secs = Math.floor(seconds % 60);
        return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
      };

      setSystemMetrics({
        cpu: { 
          usage: sysInfo.cpu.speed,
          cores: sysInfo.cpu.cores 
        },
        ram: { 
          used: Math.round(sysInfo.mem.used / (1024 * 1024 * 1024)), // Convert to GB
          total: Math.round(sysInfo.mem.total / (1024 * 1024 * 1024)),
          usage: Math.round(ramUsage)
        },
        storage: {
          used: Math.round(sysInfo.disk[0].used / (1024 * 1024 * 1024)),
          total: Math.round(sysInfo.disk[0].size / (1024 * 1024 * 1024)),
          usage: Math.round(storageUsage)
        },
        network: {
          speed: networkStats.total,
          speedIn: networkStats.speedIn,
          speedOut: networkStats.speedOut,
          usage: Math.min(Math.round((networkStats.total / 12.5) * 100), 100) // Calculate usage percentage based on typical network speeds
        },
        temp: {
          main: temp.main || 0
        },
        uptime: formatUptime(uptime.uptime),
        networkInterfaces: sysInfo.network
      });
    } catch (error) {
      console.error('Error fetching system metrics:', error);
    }
  };

  useEffect(() => {
    fetchSystemData(); // Initial fetch
    const interval = setInterval(fetchSystemData, 1000); // Update every second
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
          value={systemMetrics.cpu.usage}
          unit="%"
          details={`${systemMetrics.cpu.cores} Cores`}
          gradient="bg-gradient-to-r from-blue-500 to-cyan-500"
        />
        <MetricCard 
          icon={RiDatabase2Line}
          title="Memory Usage"
          value={systemMetrics.ram.usage}
          unit="%"
          details={`${systemMetrics.ram.used}GB/${systemMetrics.ram.total}GB`}
          gradient="bg-gradient-to-r from-purple-500 to-pink-500"
        />
        <MetricCard 
          icon={RiHardDriveLine}
          title="Storage"
          value={systemMetrics.storage.usage}
          unit="%"
          details={`${systemMetrics.storage.used}GB/${systemMetrics.storage.total}GB`}
          gradient="bg-gradient-to-r from-green-500 to-teal-500"
        />
        <MetricCard 
          icon={RiTempHotLine}
          title="Temperature"
          value={systemMetrics.temp.main}
          unit="°C"
          details="CPU Temp"
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

      {/* Network Information */}
      <NetworkInfo 
        networkData={systemMetrics.networkInterfaces}
        networkSpeed={{
          speedIn: systemMetrics.network.speedIn,
          speedOut: systemMetrics.network.speedOut
        }}
      />

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
