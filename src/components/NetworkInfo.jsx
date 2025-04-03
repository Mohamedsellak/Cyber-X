import React from 'react';
import { 
  RiWifiLine, 
  RiArrowUpLine, 
  RiArrowDownLine,
  RiWifiOffLine,
  RiRadarLine,
  RiGlobalLine,
  RiComputerLine,
  RiServerLine,
  RiRouterLine
} from 'react-icons/ri';

const formatBytes = (bytes) => {
  if (bytes === 0) return '0 B';
  const k = 1024;
  const sizes = ['B', 'KB', 'MB', 'GB', 'TB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(2))} ${sizes[i]}`;
};

const formatSpeed = (speed) => {
  if (speed < 0.01) return '0.00';
  return speed.toFixed(2);
};

const getInterfaceIcon = (type, isVirtual) => {
  if (isVirtual) return RiServerLine;
  switch (type?.toLowerCase()) {
    case 'wireless': return RiWifiLine;
    case 'wired': return RiComputerLine;
    case 'virtual': return RiServerLine;
    default: return RiRouterLine;
  }
};

const getInterfaceColor = (operstate, isVirtual) => {
  if (isVirtual) return 'purple';
  switch (operstate) {
    case 'up': return 'green';
    case 'down': return 'red';
    default: return 'gray';
  }
};

const NetworkInterface = ({ iface, isActive, isDefault }) => {
  const Icon = getInterfaceIcon(iface.type, iface.virtual);
  const color = getInterfaceColor(iface.operstate, iface.virtual);
  
  return (
    <div className={`bg-gray-800/50 rounded-lg p-4 border border-${color}-500/20 hover:border-${color}-500/40 transition-all duration-300`}>
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center space-x-2">
          <Icon className={`w-5 h-5 text-${color}-400`} />
          <h3 className="text-gray-300 font-medium">{iface.iface}</h3>
          {isDefault && (
            <span className="px-2 py-1 text-xs bg-blue-500/20 text-blue-400 rounded">Default</span>
          )}
        </div>
        <div className="flex items-center space-x-2">
          <span className={`px-2 py-1 rounded text-xs bg-${color}-500/20 text-${color}-400`}>
            {iface.type || 'Unknown'}
          </span>
          <span className={`px-2 py-1 rounded text-xs bg-${color}-500/20 text-${color}-400`}>
            {iface.operstate}
          </span>
        </div>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
        <div>
          <p className="text-gray-500">IPv4</p>
          <p className="text-gray-300 font-mono truncate" title={iface.ip4}>
            {iface.ip4 || 'N/A'}
          </p>
        </div>
        <div>
          <p className="text-gray-500">IPv6</p>
          <p className="text-gray-300 font-mono truncate" title={iface.ip6}>
            {iface.ip6 || 'N/A'}
          </p>
        </div>
        <div>
          <p className="text-gray-500">MAC</p>
          <p className="text-gray-300 font-mono">{iface.mac || 'N/A'}</p>
        </div>
        <div>
          <p className="text-gray-500">MTU</p>
          <p className="text-gray-300">{iface.mtu || 'N/A'}</p>
        </div>
      </div>
    </div>
  );
};

const NetworkInfo = ({ networkData, networkSpeed }) => {
  const activeInterfaces = networkData.filter(iface => iface.operstate === 'up');
  const inactiveInterfaces = networkData.filter(iface => iface.operstate !== 'up');

  return (
    <div className="bg-gray-900/40 backdrop-blur-xl p-6 rounded-lg border border-gray-800/50 mb-8">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <RiWifiLine className="w-6 h-6 text-green-400 mr-2" />
          <h2 className="text-xl font-semibold text-white">Network Information</h2>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-sm text-gray-400">
            Active Interfaces: {activeInterfaces.length}
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Speed Monitor */}
        <div className="lg:col-span-1">
          <div className="bg-gray-800/50 rounded-lg p-4 space-y-4">
            <h3 className="text-gray-400 flex items-center">
              <RiRadarLine className="w-4 h-4 mr-2" />
              Real-time Network Speed
            </h3>
            
            {/* Download Speed */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <RiArrowDownLine className="w-5 h-5 text-blue-400 mr-2" />
                  <span className="text-gray-300">Download</span>
                </div>
                <span className="text-2xl font-bold text-blue-400">
                  {formatSpeed(networkSpeed.speedIn)} MB/s
                </span>
              </div>
              <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-blue-500 transition-all duration-300"
                  style={{ width: `${Math.min((networkSpeed.speedIn / 10) * 100, 100)}%` }}
                />
              </div>
            </div>

            {/* Upload Speed */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <RiArrowUpLine className="w-5 h-5 text-green-400 mr-2" />
                  <span className="text-gray-300">Upload</span>
                </div>
                <span className="text-2xl font-bold text-green-400">
                  {formatSpeed(networkSpeed.speedOut)} MB/s
                </span>
              </div>
              <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-green-500 transition-all duration-300"
                  style={{ width: `${Math.min((networkSpeed.speedOut / 10) * 100, 100)}%` }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Active Interfaces */}
        <div className="lg:col-span-2 space-y-4">
          <h3 className="text-gray-400 flex items-center">
            <RiGlobalLine className="w-4 h-4 mr-2" />
            Network Interfaces
          </h3>
          
          <div className="space-y-4">
            {activeInterfaces.map((iface, index) => (
              <NetworkInterface 
                key={index} 
                iface={iface} 
                isActive={true} 
                isDefault={iface.default || false} 
              />
            ))}

            {inactiveInterfaces.length > 0 && (
              <div className="mt-4">
                <h4 className="text-gray-500 flex items-center mb-2">
                  <RiWifiOffLine className="w-4 h-4 mr-2" />
                  Inactive Interfaces
                </h4>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                  {inactiveInterfaces.map((iface, index) => (
                    <div key={index} className="bg-gray-800/30 rounded px-3 py-2">
                      <span className="text-gray-400 text-sm">{iface.iface}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NetworkInfo;
