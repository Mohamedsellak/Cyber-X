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
    <div className="space-y-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent flex items-center mb-2">
            <RiRadarLine className="mr-3 text-blue-500" />
            Network Device Scanner
          </h2>
          <p className="text-gray-400">Discover active devices on your network</p>
        </div>
        <div className="flex items-center space-x-2 text-sm">
          <span className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full border border-blue-500/20">
            Discovery Tool
          </span>
        </div>
      </div>

      <div className="bg-gray-900/40 backdrop-blur-xl p-6 rounded-xl border border-gray-800/50 hover:border-blue-500/30 transition-all duration-300">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="p-2 bg-blue-500/10 rounded-lg">
              <RiWifiLine className="w-5 h-5 text-blue-400" />
            </div>
            <div>
              <div className="text-sm text-gray-400">Network Range</div>
              <div className="text-gray-200 font-medium">192.168.1.1/24</div>
            </div>
          </div>
          <button
            onClick={handleScan}
            disabled={isScanning}
            className="px-6 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg transition-all duration-300 flex items-center hover:shadow-lg hover:shadow-blue-500/20"
          >
            {isScanning ? (
              <>
                <RiTimeLine className="animate-spin mr-2" />
                Scanning...
              </>
            ) : (
              <>
                <RiRadarLine className="mr-2" />
                Rescan Network
              </>
            )}
          </button>
        </div>
      </div>

      {stats && (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: 'Total Devices', value: stats.totalDevices, icon: RiComputerLine },
            { label: 'Routers', value: stats.routers, icon: RiRouteLine },
            { label: 'Named Devices', value: stats.namedDevices, icon: RiServerLine },
            { label: 'Unknown', value: stats.unknownDevices, icon: RiInformationLine }
          ].map((stat, i) => (
            <div key={i} className="bg-gray-900/40 backdrop-blur-xl p-4 rounded-xl border border-gray-800/50 hover:border-blue-500/30 transition-all duration-300">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-blue-500/10 rounded-lg">
                  <stat.icon className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                  <div className="text-2xl font-bold text-gray-200">{stat.value}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {results && (
        <div className="bg-gray-900/40 backdrop-blur-xl p-6 rounded-xl border border-gray-800/50">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold text-gray-100 flex items-center">
              <RiRadarLine className="w-6 h-6 text-blue-400 mr-2" />
              Network Devices
            </h3>
            <div className="flex items-center space-x-2 px-3 py-1 bg-blue-500/10 rounded-full border border-blue-500/20">
              <RiTimeLine className="text-blue-400" />
              <span className="text-blue-400 text-sm">Last scan: {results.scanTime}</span>
            </div>
          </div>

          <div className="space-y-3">
            {results.devices.map((device, index) => {
              const DeviceIcon = getDeviceIcon(device);
              return (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 bg-gray-800/50 rounded-lg border border-gray-700/50 hover:border-blue-500/30 transition-all duration-300"
                >
                  <div className="flex items-center space-x-4">
                    <div className="p-2 bg-blue-500/10 text-blue-400 rounded-lg">
                      <DeviceIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-gray-300 font-medium">{device.ip}</div>
                      <div className="text-sm text-gray-500">
                        {device.type} | {device.hostname}
                      </div>
                    </div>
                  </div>
                  <div className="text-sm px-3 py-1 bg-green-500/10 text-green-400 rounded-full border border-green-500/20">
                    Active
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {error && (
        <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4 flex items-center text-red-400">
          <RiErrorWarningLine className="w-5 h-5 mr-2 text-red-500" />
          <span>{error}</span>
        </div>
      )}
    </div>
  );
}
