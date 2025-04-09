import React, { useState, useEffect } from 'react';
import {
  RiRouterLine,
  RiRefreshLine,
  RiGlobalLine,
  RiWifiLine,
  RiErrorWarningLine,
} from 'react-icons/ri';

const DefaultGateway = () => {
  const [ipv4Gateway, setIpv4Gateway] = useState(null);
  const [ipv6Gateway, setIpv6Gateway] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const getGatewayInfo = async () => {
    try {
      setIsLoading(true);
      setError(null);
      const result = await window.api.getGatewayInfo();
      
      setIpv4Gateway(result.ipv4);
      setIpv6Gateway(result.ipv6);
    } catch (err) {
      setError(`Failed to fetch gateway info: ${err.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getGatewayInfo();
  }, []);

  return (
    <div className="space-y-6">
      {/* Enhanced Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent flex items-center mb-2">
            <RiRouterLine className="mr-3 text-green-500" />
            Default Gateway
          </h2>
          <p className="text-gray-400">View and analyze network gateway information</p>
        </div>
        <div className="flex items-center space-x-2 text-sm">
          <span className="px-3 py-1 bg-green-500/10 text-green-400 rounded-full border border-green-500/20">
            Network Tool
          </span>
        </div>
      </div>

      {/* Controls Section */}
      <div className="group bg-gray-900/40 backdrop-blur-xl p-6 rounded-xl border border-gray-800/50 hover:border-green-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-green-900/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-emerald-500/5 to-green-600/5 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
        <div className="absolute top-0 left-0 w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-green-400 via-emerald-500 to-green-400 transition-all duration-500"></div>
        
        <div className="flex justify-end space-x-4 relative">
          <button
            onClick={getGatewayInfo}
            className="px-4 py-2 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-lg transition-all duration-300 flex items-center hover:shadow-lg hover:shadow-green-900/20"
          >
            <RiRefreshLine className="mr-2" />
            Refresh
          </button>
        </div>
      </div>

      {/* Gateway Information */}
      {(ipv4Gateway || ipv6Gateway) && (
        <div className="group bg-gray-900/40 backdrop-blur-xl p-6 rounded-xl border border-gray-800/50 hover:border-green-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-green-900/10 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-emerald-500/5 to-green-600/5 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
          <div className="absolute top-0 left-0 w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-green-400 via-emerald-500 to-green-400 transition-all duration-500"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
            {ipv4Gateway && (
              <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700/50 hover:border-green-500/30 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <RiGlobalLine className="w-6 h-6 text-green-400 mr-2" />
                  <h3 className="text-xl font-semibold text-gray-100">IPv4 Gateway</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-gray-700/30 rounded-lg">
                    <span className="text-gray-400">Gateway IP</span>
                    <span className="text-green-400 font-mono">{ipv4Gateway.gateway}</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-700/30 rounded-lg">
                    <span className="text-gray-400">Interface</span>
                    <span className="text-green-400 font-mono">{ipv4Gateway.int || 'Not available'}</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-700/30 rounded-lg">
                    <span className="text-gray-400">Version</span>
                    <span className="text-green-400">{ipv4Gateway.version}</span>
                  </div>
                </div>
              </div>
            )}

            {ipv6Gateway && (
              <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700/50 hover:border-green-500/30 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <RiWifiLine className="w-6 h-6 text-green-400 mr-2" />
                  <h3 className="text-xl font-semibold text-gray-100">IPv6 Gateway</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-gray-700/30 rounded-lg">
                    <span className="text-gray-400">Gateway IP</span>
                    <span className="text-green-400 font-mono">{ipv6Gateway.gateway}</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-700/30 rounded-lg">
                    <span className="text-gray-400">Interface</span>
                    <span className="text-green-400 font-mono">{ipv6Gateway.int || 'Not available'}</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-700/30 rounded-lg">
                    <span className="text-gray-400">Version</span>
                    <span className="text-green-400">{ipv6Gateway.version}</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Error Message */}
      {error && (
        <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4 flex items-center text-red-400">
          <RiErrorWarningLine className="w-5 h-5 mr-2 text-red-500" />
          <span>{error}</span>
        </div>
      )}
    </div>
  );
};

export default DefaultGateway;
