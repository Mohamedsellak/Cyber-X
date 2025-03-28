import React, { useState } from 'react';
import {
  RiWifiLine,
  RiSearchLine,
  RiShieldCheckLine,
  RiErrorWarningLine,
  RiTimeLine,
  RiCheckboxCircleLine,
  RiCloseCircleLine,
} from 'react-icons/ri';

export default function PortScan() {
  const [target, setTarget] = useState('');
  const [portRange, setPortRange] = useState('1-1000');
  const [isScanning, setIsScanning] = useState(false);
  const [results, setResults] = useState(null);
  const [error, setError] = useState(null);

  const handleScan = async (e) => {
    e.preventDefault();
    setIsScanning(true);
    setError(null);
    
    try {
      // Simulate scan - Replace with actual API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Mock results
      setResults({
        target: target,
        scanTime: '2.3s',
        portsScanned: 1000,
        openPorts: [
          { port: 80, service: 'HTTP', status: 'open' },
          { port: 443, service: 'HTTPS', status: 'open' },
          { port: 22, service: 'SSH', status: 'open' },
          { port: 21, service: 'FTP', status: 'filtered' }
        ]
      });
    } catch (err) {
      setError('Failed to complete port scan. Please try again.');
    } finally {
      setIsScanning(false);
    }
  };

  return (
    <div className="space-y-6">
      {/* Enhanced Header with App Theme */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent flex items-center mb-2">
            <RiWifiLine className="mr-3 text-green-500" />
            Port Scanner
          </h2>
          <p className="text-gray-400">Analyze open ports and potential security risks</p>
        </div>
        <div className="flex items-center space-x-2 text-sm">
          <span className="px-3 py-1 bg-green-500/10 text-green-400 rounded-full border border-green-500/20">
            Security Tool
          </span>
        </div>
      </div>

      {/* Enhanced Scan Form */}
      <div className="group bg-gray-900/40 backdrop-blur-xl p-6 rounded-xl border border-gray-800/50 hover:border-green-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-green-900/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-emerald-500/5 to-green-600/5 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
        <div className="absolute top-0 left-0 w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-green-400 via-emerald-500 to-green-400 transition-all duration-500"></div>
        
        <form onSubmit={handleScan} className="relative space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-gray-300 flex items-center text-sm">
                <RiWifiLine className="mr-2 text-green-500" />
                Target Host/IP
              </label>
              <input
                type="text"
                value={target}
                onChange={(e) => setTarget(e.target.value)}
                placeholder="Enter hostname or IP address"
                className="w-full bg-gray-800/50 border border-gray-700/50 rounded-lg py-3 px-4 text-gray-200 placeholder-gray-500 focus:border-green-500 focus:ring-1 focus:ring-green-500/50 transition-all duration-300"
                required
              />
            </div>
            <div className="space-y-2">
              <label className="text-gray-300 flex items-center text-sm">
                <RiSearchLine className="mr-2 text-green-500" />
                Port Range
              </label>
              <input
                type="text"
                value={portRange}
                onChange={(e) => setPortRange(e.target.value)}
                placeholder="e.g., 1-1000"
                className="w-full bg-gray-800/50 border border-gray-700/50 rounded-lg py-3 px-4 text-gray-200 placeholder-gray-500 focus:border-green-500 focus:ring-1 focus:ring-green-500/50 transition-all duration-300"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={isScanning}
            className="w-full py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-lg transition-all duration-300 flex items-center justify-center group/btn relative overflow-hidden hover:shadow-lg hover:shadow-green-900/20"
          >
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-green-600 to-emerald-600 opacity-0 group-hover/btn:opacity-80 transition-opacity duration-300"></span>
            <span className="relative flex items-center">
              {isScanning ? (
                <>
                  <RiTimeLine className="animate-spin -ml-1 mr-2" />
                  Running Port Scan...
                </>
              ) : (
                <>
                  <RiSearchLine className="mr-2 group-hover/btn:scale-110 transition-transform" />
                  Start Port Scan
                </>
              )}
            </span>
          </button>
        </form>
      </div>

      {/* Enhanced Results */}
      {results && (
        <div className="group bg-gray-900/40 backdrop-blur-xl p-6 rounded-xl border border-gray-800/50 hover:border-green-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-green-900/10 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-emerald-500/5 to-green-600/5 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
          <div className="absolute top-0 left-0 w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-green-400 via-emerald-500 to-green-400 transition-all duration-500"></div>

          <div className="flex items-center justify-between mb-6 relative">
            <h3 className="text-xl font-semibold text-gray-100 flex items-center">
              <RiShieldCheckLine className="w-6 h-6 text-green-400 mr-2" />
              Scan Results
            </h3>
            <div className="flex items-center space-x-2 px-3 py-1 bg-green-500/10 rounded-full border border-green-500/20">
              <RiTimeLine className="text-green-400" />
              <span className="text-green-400 text-sm">{results.scanTime}</span>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6 relative">
            {[
              { label: 'Target', value: results.target, icon: RiWifiLine },
              { label: 'Ports Scanned', value: results.portsScanned, icon: RiSearchLine },
              { label: 'Open Ports', value: results.openPorts.length, icon: RiCheckboxCircleLine },
              { label: 'Scan Time', value: results.scanTime, icon: RiTimeLine }
            ].map((stat, i) => (
              <div key={i} className="bg-gray-800/50 p-4 rounded-lg border border-gray-700/50 group/stat hover:border-green-500/30 transition-all duration-300">
                <div className="flex items-center mb-2">
                  <stat.icon className="w-4 h-4 text-green-400 mr-2" />
                  <span className="text-sm text-gray-400">{stat.label}</span>
                </div>
                <div className="text-xl font-bold text-white group-hover/stat:text-green-400 transition-colors">{stat.value}</div>
              </div>
            ))}
          </div>

          <div className="space-y-2 relative">
            {results.openPorts.map((port) => (
              <div
                key={port.port}
                className="flex items-center justify-between p-4 bg-gray-800/50 rounded-lg border border-gray-700/50 group/port hover:border-green-500/30 transition-all duration-300"
              >
                <div className="flex items-center space-x-4">
                  <div className={`p-2 rounded-lg ${
                    port.status === 'open' 
                      ? 'bg-green-500/10 text-green-400' 
                      : 'bg-yellow-500/10 text-yellow-400'
                  }`}>
                    {port.status === 'open' ? (
                      <RiCheckboxCircleLine className="w-4 h-4" />
                    ) : (
                      <RiCloseCircleLine className="w-4 h-4" />
                    )}
                  </div>
                  <div>
                    <div className="text-gray-300 font-medium group-hover/port:text-green-400 transition-colors">Port {port.port}</div>
                    <div className="text-sm text-gray-500">{port.service}</div>
                  </div>
                </div>
                <span className={`text-sm px-2 py-1 rounded-full border ${
                  port.status === 'open'
                    ? 'text-green-400 border-green-500/20 bg-green-500/10'
                    : 'text-yellow-400 border-yellow-500/20 bg-yellow-500/10'
                }`}>
                  {port.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Enhanced Error Message */}
      {error && (
        <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4 flex items-center text-red-400">
          <RiErrorWarningLine className="w-5 h-5 mr-2 text-red-500" />
          <span>{error}</span>
        </div>
      )}
    </div>
  );
}
