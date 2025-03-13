import React from 'react';
import {
  RiComputerLine,
  RiWifiLine,
  RiBugLine,
  RiShieldCheckLine,
  RiRefreshLine,
  RiBarChartBoxLine
} from 'react-icons/ri';

export default function Tools() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold mb-2 text-purple-500">Security Tools</h1>
        <p className="text-gray-400">Advanced tools for comprehensive security analysis</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-gray-900 p-6 rounded-lg border border-gray-800 hover:border-purple-500/50 transition-colors duration-300">
          <div className="flex items-center mb-4">
            <RiComputerLine className="w-6 h-6 text-purple-500 mr-3" />
            <h3 className="text-lg font-semibold text-gray-100">Network Scanner</h3>
          </div>
          <p className="text-gray-400 mb-4">Detect vulnerabilities in your network infrastructure</p>
          <div className="space-y-3">
            <div className="flex items-center text-sm text-gray-400">
              <RiShieldCheckLine className="w-4 h-4 text-green-500 mr-2" />
              <span>Status: Ready</span>
            </div>
            <button className="w-full bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors duration-150 flex items-center justify-center">
              <RiRefreshLine className="w-4 h-4 mr-2" />
              Launch Scanner
            </button>
          </div>
        </div>

        <div className="bg-gray-900 p-6 rounded-lg border border-gray-800 hover:border-purple-500/50 transition-colors duration-300">
          <div className="flex items-center mb-4">
            <RiWifiLine className="w-6 h-6 text-purple-500 mr-3" />
            <h3 className="text-lg font-semibold text-gray-100">Port Scanner</h3>
          </div>
          <p className="text-gray-400 mb-4">Analyze open ports and potential security risks</p>
          <div className="space-y-3">
            <div className="flex items-center text-sm text-gray-400">
              <RiShieldCheckLine className="w-4 h-4 text-green-500 mr-2" />
              <span>Status: Ready</span>
            </div>
            <button className="w-full bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors duration-150 flex items-center justify-center">
              <RiRefreshLine className="w-4 h-4 mr-2" />
              Launch Scanner
            </button>
          </div>
        </div>

        <div className="bg-gray-900 p-6 rounded-lg border border-gray-800 hover:border-purple-500/50 transition-colors duration-300">
          <div className="flex items-center mb-4">
            <RiBugLine className="w-6 h-6 text-purple-500 mr-3" />
            <h3 className="text-lg font-semibold text-gray-100">Malware Detector</h3>
          </div>
          <p className="text-gray-400 mb-4">Scan systems for potential malware threats</p>
          <div className="space-y-3">
            <div className="flex items-center text-sm text-gray-400">
              <RiShieldCheckLine className="w-4 h-4 text-green-500 mr-2" />
              <span>Status: Ready</span>
            </div>
            <button className="w-full bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors duration-150 flex items-center justify-center">
              <RiRefreshLine className="w-4 h-4 mr-2" />
              Start Scan
            </button>
          </div>
        </div>
      </div>

      <div className="mt-6">
        <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
          <div className="flex items-center mb-4">
            <RiBarChartBoxLine className="w-6 h-6 text-purple-500 mr-3" />
            <h3 className="text-lg font-semibold text-gray-100">Scan History</h3>
          </div>
          <div className="space-y-3">
            <div className="text-gray-400 text-sm">No recent scans</div>
          </div>
        </div>
      </div>
    </div>
  );
} 