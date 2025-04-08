import React, { useState } from 'react';
import {
  RiWifiLine,
  RiPingPongLine,
  RiShieldCheckLine,
  RiErrorWarningLine,
  RiTimeLine,
  RiCheckboxCircleLine,
  RiSignalTowerLine,
} from 'react-icons/ri';

const TcpiePing = () => {
  const [host, setHost] = useState('');
  const [port, setPort] = useState('80');
  const [count, setCount] = useState('5');
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState(null);
  const [error, setError] = useState(null);

  const handlePing = async () => {
    try {
      setLoading(true);
      setError(null);
      setResults(null);

      const options = {
        count: parseInt(count),
        interval: 1000,
        timeout: 3000
      };

      const result = await window.api.tcpPing(host, parseInt(port), options);
      setResults(result);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      {/* Header Section - Same Style as PortScan */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent flex items-center mb-2">
            <RiPingPongLine className="mr-3 text-green-500" />
            TCP Ping Tool
          </h2>
          <p className="text-gray-400">Measure TCP connection latency and reliability</p>
        </div>
        <div className="flex items-center space-x-2 text-sm">
          <span className="px-3 py-1 bg-green-500/10 text-green-400 rounded-full border border-green-500/20">
            Network Analysis
          </span>
        </div>
      </div>

      {/* Form Section - Matching PortScan Style */}
      <div className="group bg-gray-900/40 backdrop-blur-xl p-6 rounded-xl border border-gray-800/50 hover:border-green-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-green-900/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-emerald-500/5 to-green-600/5 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
        <div className="absolute top-0 left-0 w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-green-400 via-emerald-500 to-green-400 transition-all duration-500"></div>
        
        <form onSubmit={(e) => { e.preventDefault(); handlePing(); }} className="relative space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <label className="text-gray-300 flex items-center text-sm">
                <RiWifiLine className="mr-2 text-green-500" />
                Target Host
              </label>
              <input
                type="text"
                value={host}
                onChange={(e) => setHost(e.target.value)}
                placeholder="Enter hostname or IP"
                className="w-full bg-gray-800/50 border border-gray-700/50 rounded-lg py-3 px-4 text-gray-200 placeholder-gray-500 focus:border-green-500 focus:ring-1 focus:ring-green-500/50 transition-all duration-300"
                required
              />
            </div>
            <div className="space-y-2">
              <label className="text-gray-300 flex items-center text-sm">
                <RiSignalTowerLine className="mr-2 text-green-500" />
                Port
              </label>
              <input
                type="number"
                value={port}
                onChange={(e) => setPort(e.target.value)}
                placeholder="80"
                className="w-full bg-gray-800/50 border border-gray-700/50 rounded-lg py-3 px-4 text-gray-200 placeholder-gray-500 focus:border-green-500 focus:ring-1 focus:ring-green-500/50 transition-all duration-300"
              />
            </div>
            <div className="space-y-2">
              <label className="text-gray-300 flex items-center text-sm">
                <RiPingPongLine className="mr-2 text-green-500" />
                Ping Count
              </label>
              <input
                type="number"
                value={count}
                onChange={(e) => setCount(e.target.value)}
                placeholder="5"
                className="w-full bg-gray-800/50 border border-gray-700/50 rounded-lg py-3 px-4 text-gray-200 placeholder-gray-500 focus:border-green-500 focus:ring-1 focus:ring-green-500/50 transition-all duration-300"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-lg transition-all duration-300 flex items-center justify-center group/btn relative overflow-hidden hover:shadow-lg hover:shadow-green-900/20"
          >
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-green-600 to-emerald-600 opacity-0 group-hover/btn:opacity-80 transition-opacity duration-300"></span>
            <span className="relative flex items-center">
              {loading ? (
                <>
                  <RiTimeLine className="animate-spin -ml-1 mr-2" />
                  Pinging...
                </>
              ) : (
                <>
                  <RiPingPongLine className="mr-2 group-hover/btn:scale-110 transition-transform" />
                  Start TCP Ping
                </>
              )}
            </span>
          </button>
        </form>
      </div>

      {/* Results Section - Updated with PortScan Style */}
      {results && (
        <div className="group bg-gray-900/40 backdrop-blur-xl p-6 rounded-xl border border-gray-800/50 hover:border-green-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-green-900/10 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-emerald-500/5 to-green-600/5 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
          <div className="absolute top-0 left-0 w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-green-400 via-emerald-500 to-green-400 transition-all duration-500"></div>

          <div className="flex items-center justify-between mb-6 relative">
            <h3 className="text-xl font-semibold text-gray-100 flex items-center">
              <RiShieldCheckLine className="w-6 h-6 text-green-400 mr-2" />
              Ping Results
            </h3>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6 relative">
            {[
              { label: 'Target', value: results.target?.host, icon: RiWifiLine },
              { label: 'Port', value: results.target?.port, icon: RiSignalTowerLine },
              { label: 'Success Rate', value: `${((results.success / results.sent) * 100).toFixed(1)}%`, icon: RiCheckboxCircleLine },
              { label: 'Total Pings', value: results.sent, icon: RiPingPongLine }
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

          {/* Terminal-like Display for Ping Attempts */}
          <div className="mb-6">
            <div className="bg-gray-950/50 rounded-lg overflow-hidden">
              <div className="flex items-center px-4 py-2 bg-gray-900/50 border-b border-gray-800">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                </div>
                <span className="ml-4 text-sm text-gray-400">TCP Ping Results</span>
              </div>
              <div className="p-4 font-mono text-sm space-y-1">
                {Array.from({ length: results.sent }).map((_, i) => (
                  <div 
                    key={i}
                    className={`flex items-start space-x-2 ${
                      i < results.success ? 'text-green-500' : 'text-red-400'
                    }`}
                  >
                    <span className="text-gray-500">$</span>
                    <span>
                      {i < results.success
                        ? `Connected to ${results.target?.host}:${results.target?.port} seq=${i + 1} time=${results.rtts[i]?.toFixed(1) || '?'} ms`
                        : `Error connecting to ${results.target?.host}:${results.target?.port}: Connection refused`
                      }
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {results.rtts?.length > 0 && (
            <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700/50 group/stats hover:border-green-500/30 transition-all duration-300">
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-sm text-gray-400 mb-1">Min RTT</div>
                  <div className="text-xl font-bold text-green-400">{Math.min(...results.rtts).toFixed(2)} ms</div>
                </div>
                <div className="text-center">
                  <div className="text-sm text-gray-400 mb-1">Avg RTT</div>
                  <div className="text-xl font-bold text-green-400">
                    {(results.rtts.reduce((a, b) => a + b, 0) / results.rtts.length).toFixed(2)} ms
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-sm text-gray-400 mb-1">Max RTT</div>
                  <div className="text-xl font-bold text-green-400">{Math.max(...results.rtts).toFixed(2)} ms</div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Error Message - Updated Style */}
      {error && (
        <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4 flex items-center text-red-400">
          <RiErrorWarningLine className="w-5 h-5 mr-2 text-red-500" />
          <span>{error}</span>
        </div>
      )}
    </div>
  );
};

export default TcpiePing;
