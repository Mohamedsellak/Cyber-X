import React, { useState, useEffect } from 'react';
import {
  RiRadarLine,
  RiComputerLine,
  RiTimeLine,
  RiErrorWarningLine,
  RiWifiLine,
  RiServerLine,
  RiRouteLine,
  RiInformationLine,
} from 'react-icons/ri';

export default function NetworkScanner() {
  const [isScanning, setIsScanning] = useState(false);
  const [results, setResults] = useState(null);
  const [error, setError] = useState(null);
  const [stats, setStats] = useState(null);

  const getDeviceIcon = (device) => {
    if (device.hostname?.includes('router') || device.ip.endsWith('.1')) return RiRouteLine;
    if (device.hostname?.includes('server')) return RiServerLine;
    return RiComputerLine;
  };

  const getDeviceType = (device) => {
    if (device.hostname?.includes('router') || device.ip.endsWith('.1')) return 'Router';
    if (device.hostname?.includes('server')) return 'Server';
    if (device.hostname) return device.hostname;
    return 'Unknown Device';
  };

  const handleScan = async (e) => {
    e?.preventDefault();
    setIsScanning(true);
    setError(null);
    
    try {
      const scanResults = await window.api.scanNetwork('192.168.1.1/24');
      const scanTime = new Date().toLocaleTimeString();
      
      setResults({
        scanTime,
        devices: scanResults.map(device => ({
          ...device,
          type: getDeviceType(device),
          hostname: device.hostname || 'Unknown Host'
        }))
      });

      setStats({
        totalDevices: scanResults.length,
        routers: scanResults.filter(d => d.ip.endsWith('.1')).length,
        unknownDevices: scanResults.filter(d => !d.hostname).length,
        namedDevices: scanResults.filter(d => d.hostname).length
      });

    } catch (err) {
      setError('Failed to scan network. Please try again.');
      console.error(err);
    } finally {
      setIsScanning(false);
    }
  };

  useEffect(() => {
    handleScan();
  }, []);

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold bg-gradient-to-r from-green-400 via-green-500 to-emerald-600 bg-clip-text text-transparent flex items-center mb-3">
            <RiRadarLine className="mr-3 text-green-500 text-4xl" />
            Network Device Scanner
          </h2>
          <p className="text-gray-400 text-lg">Monitor and analyze your network infrastructure</p>
        </div>
        <div className="flex items-center space-x-3">
          <span className="px-4 py-2 bg-green-500/10 text-green-400 rounded-full border border-green-500/20 backdrop-blur-xl">
            Discovery Tool
          </span>
          <span className="px-4 py-2 bg-emerald-500/10 text-emerald-400 rounded-full border border-emerald-500/20 backdrop-blur-xl">
            Real-time Monitoring
          </span>
        </div>
      </div>

      <div className="bg-gray-900/40 backdrop-blur-xl p-8 rounded-2xl border border-gray-800/50 hover:border-green-500/30 transition-all duration-500 shadow-lg shadow-black/20">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-xl border border-green-500/20">
              <RiWifiLine className="w-6 h-6 text-green-400" />
            </div>
            <div>
              <div className="text-sm text-gray-400 mb-1">Network Range</div>
              <div className="text-gray-200 font-medium text-lg">192.168.1.1/24</div>
            </div>
          </div>
          <button
            onClick={handleScan}
            disabled={isScanning}
            className="px-8 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-xl transition-all duration-300 flex items-center hover:shadow-lg hover:shadow-green-500/20 disabled:opacity-50 disabled:cursor-not-allowed transform hover:translate-y-[-2px]"
          >
            {isScanning ? (
              <>
                <RiTimeLine className="animate-spin mr-2 text-xl" />
                Scanning Network...
              </>
            ) : (
              <>
                <RiRadarLine className="mr-2 text-xl" />
                Scan Network
              </>
            )}
          </button>
        </div>
      </div>

      {stats && (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { label: 'Total Devices', value: stats.totalDevices, icon: RiComputerLine, color: 'green' },
            { label: 'Routers', value: stats.routers, icon: RiRouteLine, color: 'emerald' },
            { label: 'Named Devices', value: stats.namedDevices, icon: RiServerLine, color: 'green' },
            { label: 'Unknown', value: stats.unknownDevices, icon: RiInformationLine, color: 'emerald' }
          ].map((stat, i) => (
            <div key={i} className="bg-gray-900/40 backdrop-blur-xl p-6 rounded-2xl border border-gray-800/50 hover:border-green-500/30 transition-all duration-500 transform hover:translate-y-[-2px]">
              <div className="flex items-center space-x-4">
                <div className={`p-3 bg-gradient-to-br from-${stat.color}-500/20 to-${stat.color}-600/20 rounded-xl border border-${stat.color}-500/20`}>
                  <stat.icon className={`w-6 h-6 text-${stat.color}-400`} />
                </div>
                <div>
                  <div className="text-sm text-gray-400 mb-1">{stat.label}</div>
                  <div className="text-3xl font-bold bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {results && (
        <div className="bg-gray-900/40 backdrop-blur-xl p-8 rounded-2xl border border-gray-800/50">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-bold text-gray-100 flex items-center">
              <RiRadarLine className="w-7 h-7 text-green-400 mr-3" />
              Network Devices
            </h3>
            <div className="flex items-center space-x-3 px-4 py-2 bg-green-500/10 rounded-xl border border-green-500/20">
              <RiTimeLine className="text-green-400 text-lg" />
              <span className="text-green-400">Last scan: {results.scanTime}</span>
            </div>
          </div>

          <div className="grid gap-4">
            {results.devices.map((device, index) => {
              const DeviceIcon = getDeviceIcon(device);
              return (
                <div
                  key={index}
                  className="flex items-center justify-between p-6 bg-gray-800/50 rounded-xl border border-gray-700/50 hover:border-green-500/30 transition-all duration-300 transform hover:translate-x-2"
                >
                  <div className="flex items-center space-x-6">
                    <div className="p-3 bg-gradient-to-br from-green-500/20 to-emerald-500/20 text-green-400 rounded-xl border border-green-500/20">
                      <DeviceIcon className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-lg text-gray-200 font-medium mb-1">{device.ip}</div>
                      <div className="text-sm text-gray-400 flex items-center space-x-2">
                        <span className="px-2 py-1 bg-gray-700/50 rounded-md">{device.type}</span>
                        <span>•</span>
                        <span>{device.hostname}</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-sm px-4 py-2 bg-green-500/10 text-green-400 rounded-xl border border-green-500/20">
                    Active
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {error && (
        <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-6 flex items-center text-red-400">
          <RiErrorWarningLine className="w-6 h-6 mr-3 text-red-500" />
          <span className="text-lg">{error}</span>
        </div>
      )}
    </div>
  );
}
