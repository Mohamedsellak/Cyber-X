import React, { useState } from 'react';
import {
  RiComputerLine,
  RiWifiLine,
  RiBugLine,
  RiShieldCheckLine,
  RiRefreshLine,
  RiBarChartBoxLine,
  RiLockPasswordLine,
  RiGlobalLine,
  RiShieldKeyholeLine,
  RiSearchLine,
  RiFileCodeLine,
  RiDatabase2Line,
  RiRadarLine,
  RiFileShieldLine,
  RiTerminalBoxLine
} from 'react-icons/ri';

export default function Tools() {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', name: 'All Tools' },
    { id: 'network', name: 'Network' },
    { id: 'system', name: 'System' },
    { id: 'web', name: 'Web Security' },
  ];

  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-3 bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
          Security Tools Dashboard
        </h1>
        <p className="text-gray-400 text-lg">Enterprise-grade security analysis suite</p>
      </div>

      {/* Search and Filter */}
      <div className="mb-8 flex flex-col md:flex-row gap-4 items-center">
        <div className="relative flex-1">
          <RiSearchLine className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search tools..."
            className="w-full bg-gray-800 border border-gray-700 rounded-lg py-2 pl-10 pr-4 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 text-gray-200"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="flex gap-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`px-4 py-2 rounded-lg transition-all duration-200 ${
                activeTab === cat.id
                  ? 'bg-purple-500 text-white'
                  : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* Tools Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Existing tools with enhanced design */}
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-lg border border-gray-800 hover:border-purple-500/50 transition-all duration-300 shadow-lg">
          <div className="flex items-center mb-4">
            <RiComputerLine className="w-6 h-6 text-purple-500 mr-3" />
            <h3 className="text-lg font-semibold text-gray-100">Network Scanner</h3>
          </div>
          <p className="text-gray-400 mb-4">Detect vulnerabilities in your network infrastructure</p>
          <div className="space-y-3">
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center text-gray-400">
                <RiShieldCheckLine className="w-4 h-4 text-green-500 mr-2" />
                <span>Status: Ready</span>
              </div>
              <span className="text-purple-400">Uses: 124</span>
            </div>
            <button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-150 flex items-center justify-center">
              <RiRefreshLine className="w-4 h-4 mr-2" />
              Launch Scanner
            </button>
          </div>
        </div>

        <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-lg border border-gray-800 hover:border-purple-500/50 transition-all duration-300 shadow-lg">
          <div className="flex items-center mb-4">
            <RiWifiLine className="w-6 h-6 text-purple-500 mr-3" />
            <h3 className="text-lg font-semibold text-gray-100">Port Scanner</h3>
          </div>
          <p className="text-gray-400 mb-4">Analyze open ports and potential security risks</p>
          <div className="space-y-3">
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center text-gray-400">
                <RiShieldCheckLine className="w-4 h-4 text-green-500 mr-2" />
                <span>Status: Ready</span>
              </div>
              <span className="text-purple-400">Uses: 124</span>
            </div>
            <button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-150 flex items-center justify-center">
              <RiRefreshLine className="w-4 h-4 mr-2" />
              Launch Scanner
            </button>
          </div>
        </div>

        <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-lg border border-gray-800 hover:border-purple-500/50 transition-all duration-300 shadow-lg">
          <div className="flex items-center mb-4">
            <RiBugLine className="w-6 h-6 text-purple-500 mr-3" />
            <h3 className="text-lg font-semibold text-gray-100">Malware Detector</h3>
          </div>
          <p className="text-gray-400 mb-4">Scan systems for potential malware threats</p>
          <div className="space-y-3">
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center text-gray-400">
                <RiShieldCheckLine className="w-4 h-4 text-green-500 mr-2" />
                <span>Status: Ready</span>
              </div>
              <span className="text-purple-400">Uses: 124</span>
            </div>
            <button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-150 flex items-center justify-center">
              <RiRefreshLine className="w-4 h-4 mr-2" />
              Start Scan
            </button>
          </div>
        </div>

        <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-lg border border-gray-800 hover:border-purple-500/50 transition-all duration-300 shadow-lg">
          <div className="flex items-center mb-4">
            <RiLockPasswordLine className="w-6 h-6 text-purple-500 mr-3" />
            <h3 className="text-lg font-semibold text-gray-100">Password Analyzer</h3>
          </div>
          <p className="text-gray-400 mb-4">Check password strength and identify vulnerabilities</p>
          <div className="space-y-3">
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center text-gray-400">
                <RiShieldCheckLine className="w-4 h-4 text-green-500 mr-2" />
                <span>Status: Ready</span>
              </div>
              <span className="text-purple-400">Uses: 124</span>
            </div>
            <button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-150 flex items-center justify-center">
              <RiRefreshLine className="w-4 h-4 mr-2" />
              Analyze Password
            </button>
          </div>
        </div>

        <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-lg border border-gray-800 hover:border-purple-500/50 transition-all duration-300 shadow-lg">
          <div className="flex items-center mb-4">
            <RiGlobalLine className="w-6 h-6 text-purple-500 mr-3" />
            <h3 className="text-lg font-semibold text-gray-100">DNS Lookup</h3>
          </div>
          <p className="text-gray-400 mb-4">Analyze DNS records and detect misconfigurations</p>
          <div className="space-y-3">
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center text-gray-400">
                <RiShieldCheckLine className="w-4 h-4 text-green-500 mr-2" />
                <span>Status: Ready</span>
              </div>
              <span className="text-purple-400">Uses: 124</span>
            </div>
            <button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-150 flex items-center justify-center">
              <RiRefreshLine className="w-4 h-4 mr-2" />
              Lookup DNS
            </button>
          </div>
        </div>

        <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-lg border border-gray-800 hover:border-purple-500/50 transition-all duration-300 shadow-lg">
          <div className="flex items-center mb-4">
            <RiShieldKeyholeLine className="w-6 h-6 text-purple-500 mr-3" />
            <h3 className="text-lg font-semibold text-gray-100">SSL Checker</h3>
          </div>
          <p className="text-gray-400 mb-4">Verify SSL certificates and security configurations</p>
          <div className="space-y-3">
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center text-gray-400">
                <RiShieldCheckLine className="w-4 h-4 text-green-500 mr-2" />
                <span>Status: Ready</span>
              </div>
              <span className="text-purple-400">Uses: 124</span>
            </div>
            <button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-150 flex items-center justify-center">
              <RiRefreshLine className="w-4 h-4 mr-2" />
              Check Certificate
            </button>
          </div>
        </div>

        {/* New Tools */}
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-lg border border-gray-800 hover:border-purple-500/50 transition-all duration-300 shadow-lg">
          <div className="flex items-center mb-4">
            <RiFileCodeLine className="w-6 h-6 text-purple-500 mr-3" />
            <h3 className="text-lg font-semibold text-gray-100">Code Scanner</h3>
          </div>
          <p className="text-gray-400 mb-4">Static code analysis for security vulnerabilities</p>
          <div className="space-y-3">
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center text-gray-400">
                <RiShieldCheckLine className="w-4 h-4 text-green-500 mr-2" />
                <span>Status: Ready</span>
              </div>
              <span className="text-purple-400">Uses: 124</span>
            </div>
            <button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-150 flex items-center justify-center">
              <RiRefreshLine className="w-4 h-4 mr-2" />
              Scan Code
            </button>
          </div>
        </div>

        <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-lg border border-gray-800 hover:border-purple-500/50 transition-all duration-300 shadow-lg">
          <div className="flex items-center mb-4">
            <RiDatabase2Line className="w-6 h-6 text-purple-500 mr-3" />
            <h3 className="text-lg font-semibold text-gray-100">Database Security Analyzer</h3>
          </div>
          <p className="text-gray-400 mb-4">Analyze database security configurations</p>
          <div className="space-y-3">
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center text-gray-400">
                <RiShieldCheckLine className="w-4 h-4 text-green-500 mr-2" />
                <span>Status: Ready</span>
              </div>
              <span className="text-purple-400">Uses: 124</span>
            </div>
            <button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-150 flex items-center justify-center">
              <RiRefreshLine className="w-4 h-4 mr-2" />
              Analyze Database
            </button>
          </div>
        </div>

        <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-lg border border-gray-800 hover:border-purple-500/50 transition-all duration-300 shadow-lg">
          <div className="flex items-center mb-4">
            <RiRadarLine className="w-6 h-6 text-purple-500 mr-3" />
            <h3 className="text-lg font-semibold text-gray-100">Intrusion Detection System</h3>
          </div>
          <p className="text-gray-400 mb-4">Monitor network traffic for suspicious activity</p>
          <div className="space-y-3">
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center text-gray-400">
                <RiShieldCheckLine className="w-4 h-4 text-green-500 mr-2" />
                <span>Status: Ready</span>
              </div>
              <span className="text-purple-400">Uses: 124</span>
            </div>
            <button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-150 flex items-center justify-center">
              <RiRefreshLine className="w-4 h-4 mr-2" />
              Monitor Traffic
            </button>
          </div>
        </div>

        <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-lg border border-gray-800 hover:border-purple-500/50 transition-all duration-300 shadow-lg">
          <div className="flex items-center mb-4">
            <RiFileShieldLine className="w-6 h-6 text-purple-500 mr-3" />
            <h3 className="text-lg font-semibold text-gray-100">File Integrity Monitor</h3>
          </div>
          <p className="text-gray-400 mb-4">Monitor files for unauthorized changes</p>
          <div className="space-y-3">
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center text-gray-400">
                <RiShieldCheckLine className="w-4 h-4 text-green-500 mr-2" />
                <span>Status: Ready</span>
              </div>
              <span className="text-purple-400">Uses: 124</span>
            </div>
            <button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-150 flex items-center justify-center">
              <RiRefreshLine className="w-4 h-4 mr-2" />
              Monitor Files
            </button>
          </div>
        </div>

        <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-lg border border-gray-800 hover:border-purple-500/50 transition-all duration-300 shadow-lg">
          <div className="flex items-center mb-4">
            <RiTerminalBoxLine className="w-6 h-6 text-purple-500 mr-3" />
            <h3 className="text-lg font-semibold text-gray-100">Command Injection Tester</h3>
          </div>
          <p className="text-gray-400 mb-4">Test for command injection vulnerabilities</p>
          <div className="space-y-3">
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center text-gray-400">
                <RiShieldCheckLine className="w-4 h-4 text-green-500 mr-2" />
                <span>Status: Ready</span>
              </div>
              <span className="text-purple-400">Uses: 124</span>
            </div>
            <button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-150 flex items-center justify-center">
              <RiRefreshLine className="w-4 h-4 mr-2" />
              Test Command Injection
            </button>
          </div>
        </div>
      </div>

      {/* Enhanced Statistics Section */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-lg border border-gray-800">
          <div className="flex items-center mb-4">
            <RiBarChartBoxLine className="w-6 h-6 text-purple-500 mr-3" />
            <h3 className="text-lg font-semibold text-gray-100">Recent Activity</h3>
          </div>
          <div className="space-y-3">
            {/* Add recent activity items here */}
            <div className="flex items-center justify-between text-sm text-gray-400">
              <span>Network Scan Completed</span>
              <span>2 min ago</span>
            </div>
            {/* ...more activity items... */}
          </div>
        </div>

        <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-lg border border-gray-800">
          <div className="flex items-center mb-4">
            <RiShieldCheckLine className="w-6 h-6 text-purple-500 mr-3" />
            <h3 className="text-lg font-semibold text-gray-100">System Status</h3>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {/* Add system status metrics here */}
            <div className="bg-gray-800/50 p-4 rounded-lg">
              <div className="text-2xl font-bold text-green-500">98%</div>
              <div className="text-sm text-gray-400">Tools Available</div>
            </div>
            {/* ...more status metrics... */}
          </div>
        </div>
      </div>
    </div>
  );
}