import React, { useState, useMemo } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
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
  RiTerminalBoxLine,
  RiMailLine,
  RiServerLine,
  RiUserSettingsLine,
  RiCodeLine,
  RiFingerprint2Line,
  RiBrainLine,
  RiLockLine,
  RiCloudLine,
  RiCodeBlock
} from 'react-icons/ri';

export default function Tools() {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const tools = [
    {
      id: 2,
      name: 'Port Scanner',
      description: 'Analyze open ports and potential security risks',
      icon: RiWifiLine,
      category: 'network',
      uses: 98,
      path: 'port-scan'
    },
    {
      id: 1,
      name: 'Network Scanner',
      description: 'Detect vulnerabilities in your network infrastructure',
      icon: RiComputerLine,
      category: 'network',
      uses: 124,
      path: 'network-scan'
    },
    {
      id: 3,
      name: 'Malware Detector',
      description: 'Scan systems for potential malware threats',
      icon: RiBugLine,
      category: 'system',
      uses: 156,
      path: '/'

    },
    {
      id: 4,
      name: 'Password Analyzer',
      description: 'Check password strength and identify vulnerabilities',
      icon: RiLockPasswordLine,
      category: 'web',
      uses: 203,
      path: '/'
    },
    {
      id: 5,
      name: 'Web Application Firewall',
      description: 'Protect web applications from common attacks and vulnerabilities',
      icon: RiShieldKeyholeLine,
      category: 'web',
      uses: 167,
      path: '/'
    },
    {
      id: 6,
      name: 'Network Traffic Analyzer',
      description: 'Deep packet inspection and network traffic analysis',
      icon: RiRadarLine,
      category: 'network',
      uses: 145,
      path: '/'
    },
    {
      id: 7,
      name: 'API Security Scanner',
      description: 'Test REST APIs for security vulnerabilities',
      icon: RiFileCodeLine,
      category: 'web',
      uses: 189,
      path: '/'
    },
    {
      id: 8,
      name: 'Memory Analyzer',
      description: 'Detect memory leaks and analyze system memory usage',
      icon: RiDatabase2Line,
      category: 'system',
      uses: 112,
      path: '/'
    },
    {
      id: 9,
      name: 'Container Security Scanner',
      description: 'Analyze Docker containers for security issues',
      icon: RiFileShieldLine,
      category: 'system',
      uses: 134,
      path: '/'
    },
    {
      id: 10,
      name: 'SSL Certificate Manager',
      description: 'Manage and monitor SSL/TLS certificates',
      icon: RiShieldCheckLine,
      category: 'web',
      uses: 178,
      path: '/'
    },
    {
      id: 11,
      name: 'Firewall Analyzer',
      description: 'Analyze firewall rules and configurations',
      icon: RiShieldKeyholeLine,
      category: 'network',
      uses: 156,
      path: '/'
    },
    {
      id: 12,
      name: 'Log Analyzer',
      description: 'Advanced security log analysis and monitoring',
      icon: RiFileCodeLine,
      category: 'system',
      uses: 201,
      path: '/'
    },
    {
      id: 13,
      name: 'Database Security Scanner',
      description: 'Identify database vulnerabilities and misconfigurations',
      icon: RiDatabase2Line,
      category: 'system',
      uses: 145,
      path: '/'
    },
    {
      id: 14,
      name: 'SIEM Tool',
      description: 'Security Information and Event Management system',
      icon: RiBarChartBoxLine,
      category: 'system',
      uses: 167,
      path: '/'
    },
    {
      id: 15,
      name: 'Email Security Analyzer',
      description: 'Scan emails for phishing and malware threats',
      icon: RiMailLine,
      category: 'network',
      uses: 189,
      path: '/'
    },
    {
      id: 16,
      name: 'Cloud Security Analyzer',
      description: 'Analyze cloud infrastructure security and compliance',
      icon: RiCloudLine,
      category: 'cloud',
      uses: 178,
      path: '/'
    },
    {
      id: 17,
      name: 'Access Control Manager',
      description: 'Manage and audit access control policies',
      icon: RiLockLine,
      category: 'system',
      uses: 165,
      path: '/'
    },
    {
      id: 18,
      name: 'Threat Intelligence Platform',
      description: 'Real-time threat detection and analysis',
      icon: RiBrainLine,
      category: 'network',
      uses: 212,
      path: '/'
    },
    {
      id: 19,
      name: 'Zero Trust Validator',
      description: 'Validate zero trust architecture implementation',
      icon: RiShieldKeyholeLine,
      category: 'network',
      uses: 143,
      path: '/'
    },
    {
      id: 20,
      name: 'Identity Verification System',
      description: 'Advanced biometric and multi-factor authentication',
      icon: RiFingerprint2Line,
      category: 'system',
      uses: 198,
      path: '/'
    },
    {
      id: 21,
      name: 'API Gateway Security',
      description: 'Secure and monitor API gateway endpoints',
      icon: RiCodeLine,
      category: 'web',
      uses: 167,
      path: '/'
    },
    {
      id: 22,
      name: 'DDoS Protection',
      description: 'Advanced DDoS attack detection and mitigation',
      icon: RiCodeBlock,
      category: 'network',
      uses: 189,
      path: '/'
    },
    {
      id: 23,
      name: 'IAM Analyzer',
      description: 'Identity and Access Management policy analyzer',
      icon: RiUserSettingsLine,
      category: 'system',
      uses: 156,
      path: '/'
    },
    {
      id: 24,
      name: 'Kubernetes Security Scanner',
      description: 'Container orchestration security analysis',
      icon: RiServerLine,
      category: 'cloud',
      uses: 145,
      path: '/'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Tools' },
    { id: 'network', name: 'Network' },
    { id: 'system', name: 'System' },
    { id: 'web', name: 'Web Security' },
  ];

  const filteredTools = useMemo(() => {
    return tools.filter(tool => {
      const matchesSearch = tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          tool.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = activeTab === 'all' || tool.category === activeTab;
      return matchesSearch && matchesCategory;
    });
  }, [tools, searchQuery, activeTab]);

  const renderTool = (tool) => (
    <Link
      key={tool.id}
      to={tool.path}
      className="bg-gray-900/40 backdrop-blur-xl p-6 rounded-lg border border-gray-800/50 hover:border-green-500/50 hover:shadow-green-900/10 hover:shadow-2xl transition-all duration-300"
    >
      <div className="flex items-center mb-4">
        <tool.icon className="w-6 h-6 text-green-500 mr-3" />
        <h3 className="text-lg font-semibold text-gray-100">{tool.name}</h3>
      </div>
      <p className="text-gray-400 mb-4">{tool.description}</p>
      <div className="space-y-3">
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center text-gray-400">
            <RiShieldCheckLine className="w-4 h-4 text-green-500 mr-2" />
            <span>Status: Ready</span>
          </div>
          <span className="text-green-400">Uses: {tool.uses}</span>
        </div>
        <div className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white px-4 py-2 rounded-lg transition-all duration-300 flex items-center justify-center relative overflow-hidden group">
          <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-green-600 to-emerald-600 opacity-0 group-hover:opacity-80 transition-opacity duration-300"></span>
          <span className="relative flex items-center">
            <RiRefreshLine className="w-4 h-4 mr-2" />
            Launch Tool
          </span>
        </div>
      </div>
    </Link>
  );

  return (
    <div className="max-w-7xl mx-auto">
      {/* Render nested routes */}
      <Outlet />

      {/* Only show the tools list when on the main tools page */}
      {location.pathname === '/tools' && (
        <>
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-3 bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent">
              Security Tools
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
                className="w-full bg-gray-800/70 border border-gray-700 rounded-lg py-2 pl-10 pr-4 focus:border-green-500 focus:ring-1 focus:ring-green-500 text-gray-200"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex gap-2 flex-wrap">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveTab(cat.id)}
                  className={`px-4 py-2 rounded-lg transition-all duration-200 ${
                    activeTab === cat.id
                      ? 'bg-green-500 text-white'
                      : 'bg-gray-800/70 text-gray-400 hover:bg-gray-700'
                  }`}
                >
                  {cat.name}
                  {activeTab === cat.id && (
                    <span className="ml-2 bg-green-400 px-2 py-0.5 rounded-full text-xs">
                      {cat.id === 'all' 
                        ? tools.length 
                        : tools.filter(t => t.category === cat.id).length}
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Tools Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTools.length > 0 ? (
              filteredTools.map(renderTool)
            ) : (
              <div className="col-span-full text-center py-8 text-gray-400">
                No tools found matching your search criteria
              </div>
            )}
          </div>

          {/* Enhanced Statistics Section */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-900/40 backdrop-blur-xl p-6 rounded-lg border border-gray-800/50 hover:shadow-green-900/10 hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center mb-4">
                <RiBarChartBoxLine className="w-6 h-6 text-green-500 mr-3" />
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

            <div className="bg-gray-900/40 backdrop-blur-xl p-6 rounded-lg border border-gray-800/50 hover:shadow-green-900/10 hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center mb-4">
                <RiShieldCheckLine className="w-6 h-6 text-green-500 mr-3" />
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
        </>
      )}
    </div>
  );
}