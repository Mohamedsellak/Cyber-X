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
      {/* Header */}
      <div className="border-b border-gray-800 pb-4">
        <h2 className="text-2xl font-bold text-gray-100 flex items-center">
          <RiWifiLine className="mr-2 text-green-500" />
          Port Scanner
        </h2>
        <p className="text-gray-400">Analyze open ports and potential security risks</p>
      </div>

      {/* Scan Form */}
      <form onSubmit={handleScan} className="bg-gray-900/40 backdrop-blur-xl p-6 rounded-lg border border-gray-800/50 shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-green-900/10 hover:shadow-2xl transition-all duration-300">
        <div className="space-y-4">
          <div>
            <label className="block text-gray-300 mb-2">Target Host/IP</label>
            <input
              type="text"
              value={target}
              onChange={(e) => setTarget(e.target.value)}
              placeholder="Enter hostname or IP address"
              className="w-full bg-gray-800/70 border border-gray-700 rounded-lg py-2 px-4 text-gray-200 focus:border-green-500 focus:ring-1 focus:ring-green-500"
              required
            />
          </div>
          <div>
            <label className="block text-gray-300 mb-2">Port Range</label>
            <input
              type="text"
              value={portRange}
              onChange={(e) => setPortRange(e.target.value)}
              placeholder="e.g., 1-1000"
              className="w-full bg-gray-800/70 border border-gray-700 rounded-lg py-2 px-4 text-gray-200 focus:border-green-500 focus:ring-1 focus:ring-green-500"
            />
          </div>
          <button
            type="submit"
            disabled={isScanning}
            className={`w-full ${
              isScanning
                ? 'bg-gray-700 cursor-not-allowed'
                : 'bg-gradient-to-r from-green-600 to-emerald-600 hover:shadow-lg hover:shadow-green-900/20'
            } text-white py-2 px-4 rounded-lg transition-all duration-300 flex items-center justify-center overflow-hidden group relative`}
          >
            {!isScanning && <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-green-600 to-emerald-600 opacity-0 group-hover:opacity-80 transition-opacity duration-300"></span>}
            <span className="relative flex items-center">
              {isScanning ? (
                <>
                  <RiTimeLine className="animate-spin mr-2" />
                  Scanning...
                </>
              ) : (
                <>
                  <RiSearchLine className="mr-2" />
                  Start Scan
                </>
              )}
            </span>
          </button>
        </div>
      </form>

      {/* Results */}
      {results && (
        <div className="bg-gray-900/40 backdrop-blur-xl p-6 rounded-lg border border-gray-800/50 shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-green-900/10 hover:shadow-2xl transition-all duration-300">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-100">Scan Results</h3>
            <div className="flex items-center text-sm text-gray-400">
              <RiTimeLine className="mr-1" />
              {results.scanTime}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="bg-gray-800/50 p-4 rounded-lg">
              <div className="text-2xl font-bold text-green-500">{results.portsScanned}</div>
              <div className="text-sm text-gray-400">Ports Scanned</div>
            </div>
            <div className="bg-gray-800/50 p-4 rounded-lg">
              <div className="text-2xl font-bold text-green-500">
                {results.openPorts.length}
              </div>
              <div className="text-sm text-gray-400">Open Ports</div>
            </div>
          </div>

          <div className="space-y-2">
            {results.openPorts.map((port) => (
              <div
                key={port.port}
                className="flex items-center justify-between p-3 bg-gray-800/30 rounded-lg"
              >
                <div className="flex items-center">
                  {port.status === 'open' ? (
                    <RiCheckboxCircleLine className="text-green-500 mr-2" />
                  ) : (
                    <RiCloseCircleLine className="text-yellow-500 mr-2" />
                  )}
                  <span className="text-gray-300">Port {port.port}</span>
                  <span className="ml-2 text-gray-500">({port.service})</span>
                </div>
                <span className={`text-sm ${
                  port.status === 'open' ? 'text-green-500' : 'text-yellow-500'
                }`}>
                  {port.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Error Message */}
      {error && (
        <div className="bg-red-900/20 border border-red-800 text-red-500 p-4 rounded-lg flex items-center">
          <RiErrorWarningLine className="mr-2" />
          {error}
        </div>
      )}
    </div>
  );
}
