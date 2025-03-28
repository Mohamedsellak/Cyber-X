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
    { id: 'cloud', name: 'Cloud' },
  ];

  const categoryColors = {
    network: { 
      gradient: "from-blue-500/10 to-cyan-500/10",
      border: "hover:border-blue-500/50",
      text: "text-blue-400",
      icon: "text-blue-500"
    },
    system: {
      gradient: "from-purple-500/10 to-pink-500/10",
      border: "hover:border-purple-500/50",
      text: "text-purple-400",
      icon: "text-purple-500"
    },
    web: {
      gradient: "from-emerald-500/10 to-teal-500/10",
      border: "hover:border-emerald-500/50",
      text: "text-emerald-400",
      icon: "text-emerald-500"
    },
    cloud: {
      gradient: "from-orange-500/10 to-amber-500/10",
      border: "hover:border-orange-500/50",
      text: "text-orange-400",
      icon: "text-orange-500"
    }
  };

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
      className={`group relative bg-gray-800/30 backdrop-blur-sm p-6 rounded-xl border border-gray-700/30 ${categoryColors[tool.category].border} transition-all duration-300 hover:shadow-xl hover:shadow-green-900/10 overflow-hidden`}
    >
      {/* Animated gradient background */}
      <div className={`absolute inset-0 bg-gradient-to-br ${categoryColors[tool.category].gradient} opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-xl`}></div>
      
      {/* Tool Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-start space-x-4">
          <div className={`p-3 bg-gray-900/50 rounded-xl group-hover:bg-${categoryColors[tool.category].icon}/10 transition-colors duration-300`}>
            <tool.icon className={`w-6 h-6 ${categoryColors[tool.category].text}`} />
          </div>
          <div>
            <h3 className={`text-lg font-semibold text-gray-100 group-hover:${categoryColors[tool.category].text} transition-colors duration-300`}>
              {tool.name}
            </h3>
            <div className="flex items-center mt-1 space-x-2">
              <span className={`px-2 py-0.5 text-xs rounded-full bg-gray-900/50 ${categoryColors[tool.category].text} border border-gray-700/30`}>
                {tool.category.charAt(0).toUpperCase() + tool.category.slice(1)}
              </span>
              <span className="flex items-center text-xs text-gray-500">
                <RiShieldCheckLine className={`w-3 h-3 mr-1 ${categoryColors[tool.category].icon}`} />
                Active
              </span>
            </div>
          </div>
        </div>
        
        {/* Usage Badge with colored progress */}
        <div className="flex flex-col items-end">
          <div className={`text-sm font-medium ${categoryColors[tool.category].text}`}>{tool.uses} uses</div>
          <div className="w-20 h-1 bg-gray-700/30 rounded-full mt-2 overflow-hidden">
            <div 
              className={`h-full bg-gradient-to-r ${categoryColors[tool.category].gradient.replace('/10', '')} transition-all duration-300`}
              style={{ width: `${(tool.uses / 250) * 100}%` }}
            />
          </div>
        </div>
      </div>

      <p className="text-gray-400 text-sm mb-6 relative">{tool.description}</p>

      {/* Launch Button with category color */}
      <div className="relative">
        <button className={`w-full px-4 py-2.5 bg-gray-900/50 hover:bg-${categoryColors[tool.category].icon}/10 text-gray-300 hover:${categoryColors[tool.category].text} rounded-lg transition-all duration-300 flex items-center justify-center group/btn`}>
          <RiRefreshLine className="w-4 h-4 mr-2 group-hover/btn:rotate-180 transition-transform duration-500" />
          <span className="font-medium">Launch Tool</span>
        </button>
      </div>
    </Link>
  );

  const renderCategoryButton = (cat) => (
    <button
      key={cat.id}
      onClick={() => setActiveTab(cat.id)}
      className={`px-4 py-2 rounded-lg transition-all duration-300 ${
        activeTab === cat.id
          ? `bg-gradient-to-r ${cat.id === 'all' ? 'from-green-500 to-emerald-500' : categoryColors[cat.id]?.gradient.replace('/10', '')} text-white shadow-lg shadow-${cat.id === 'all' ? 'green' : categoryColors[cat.id]?.icon}-500/20`
          : 'bg-gray-900/50 text-gray-400 hover:bg-gray-800/50'
      } flex items-center space-x-2`}
    >
      <span>{cat.name}</span>
      {activeTab === cat.id && (
        <span className="bg-green-400/20 px-2 py-0.5 rounded-full text-xs">
          {cat.id === 'all' 
            ? tools.length 
            : tools.filter(t => t.category === cat.id).length}
        </span>
      )}
    </button>
  );

  return (
    <div className="max-w-7xl mx-auto px-4">
      {/* Render nested routes */}
      <Outlet />

      {/* Only show the tools list when on the main tools page */}
      {location.pathname === '/tools' && (
        <>
          {/* Enhanced Header */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-2">
              <h1 className="text-3xl font-bold bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent flex items-center">
                <RiShieldCheckLine className="w-8 h-8 mr-3 text-green-500" />
                Security Tools
              </h1>
              <span className="px-3 py-1 bg-green-500/10 text-green-400 rounded-full text-sm border border-green-500/20">
                {tools.length} Tools Available
              </span>
            </div>
            <p className="text-gray-400">Enterprise-grade security analysis suite</p>
          </div>

          {/* Enhanced Search and Categories */}
          <div className="mb-8 bg-gray-800/30 backdrop-blur-sm p-4 rounded-xl border border-gray-700/30">
            <div className="flex flex-col md:flex-row gap-4">
              {/* Search Bar with Icon */}
              <div className="relative flex-1">
                <RiSearchLine className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                <input
                  type="text"
                  placeholder="Search security tools..."
                  className="w-full bg-gray-900/50 border border-gray-700/30 rounded-lg pl-10 pr-4 py-2 text-gray-300 placeholder-gray-500 focus:border-green-500 focus:ring-green-500/20 focus:ring-2 transition-all duration-300"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              
              {/* Category Buttons */}
              <div className="flex gap-2 flex-wrap">
                {categories.map(renderCategoryButton)}
              </div>
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