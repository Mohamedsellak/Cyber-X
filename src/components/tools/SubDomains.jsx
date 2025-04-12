import React, { useState } from 'react';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { RiScanLine, RiGlobalLine } from 'react-icons/ri';

const SubDomains = () => {
  const [domain, setDomain] = useState('');
  const [subdomains, setSubdomains] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleScan = async () => {
    if (!domain) {
      setError('Please enter a domain');
      return;
    }

    try {
      setLoading(true);
      setError(null);
      const results = await window.api.getSubDomains(domain);
      setSubdomains(results);
    } catch (err) {
      setError(err.message || 'An error occurred during the scan');
      setSubdomains([]);
    } finally {
      setLoading(false);
    }
  };

  // This debugging function helps understand the structure of each subdomain
  const renderSubdomainContent = (subdomain) => {
    if (typeof subdomain === 'string') {
      return subdomain;
    }
    
    if (typeof subdomain === 'object' && subdomain !== null) {
      // Return the hostname or address as primary display
      if (subdomain.hostname) {
        return (
          <div className="flex flex-col">
            <span className="font-medium">{subdomain.hostname}</span>
            {subdomain.address && <span className="text-sm text-gray-400">IP: {subdomain.address}</span>}
            {subdomain.nameserver && <span className="text-sm text-gray-400">NS: {subdomain.nameserver}</span>}
          </div>
        );
      } else if (subdomain.address) {
        return (
          <div className="flex flex-col">
            <span className="font-medium">{subdomain.address}</span>
            {subdomain.nameserver && <span className="text-sm text-gray-400">NS: {subdomain.nameserver}</span>}
          </div>
        );
      }
      
      // Fallback for unknown object structure
      return JSON.stringify(subdomain).substring(0, 100);
    }
    
    // Fallback for any other type
    return "Unknown subdomain format";
  };

  return (
    <div className="max-w-7xl mx-auto px-4">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-3 bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent flex items-center">
          <RiScanLine className="w-8 h-8 mr-3 text-green-500" />
          Subdomain Scanner
        </h1>
        <p className="text-gray-400">Discover all subdomains associated with a target domain</p>
      </div>

      {/* Scan Input Card */}
      <div className="bg-gray-900/40 backdrop-blur-xl p-6 rounded-lg border border-gray-800/50 hover:border-green-500/30 transition-all duration-300 mb-6">
        <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-green-400/50 via-emerald-500/50 to-green-400/50" />
        <div className="flex gap-4">
          <div className="flex-1 relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <RiGlobalLine className="h-5 w-5 text-gray-400" />
            </div>
            <input
              className="w-full pl-10 p-3 bg-gray-800/50 border border-gray-700/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500/50 focus:border-green-500/50 text-gray-100 disabled:bg-gray-800/30 disabled:cursor-not-allowed transition-colors"
              type="text"
              placeholder="Domain (e.g., example.com)"
              value={domain}
              onChange={(e) => setDomain(e.target.value)}
              disabled={loading}
            />
          </div>
          <button
            className="min-w-[120px] bg-gradient-to-r from-green-600 to-emerald-600 text-white px-6 py-3 rounded-lg hover:shadow-lg hover:shadow-green-900/20 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center"
            onClick={handleScan}
            disabled={loading}
          >
            {loading ? (
              <AiOutlineLoading3Quarters className="animate-spin" size={24} />
            ) : (
              'Scan'
            )}
          </button>
        </div>
      </div>

      {error && (
        <div className="mb-6 p-4 bg-red-900/30 backdrop-blur-xl border border-red-500/30 text-red-400 rounded-lg">
          {error}
        </div>
      )}

      {subdomains.length > 0 && (
        <div className="bg-gray-900/40 backdrop-blur-xl rounded-lg border border-gray-800/50 hover:border-green-500/30 transition-all duration-300">
          <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-green-400/50 via-emerald-500/50 to-green-400/50" />
          <div className="p-4 border-b border-gray-700/50">
            <h3 className="text-lg font-semibold text-white">
              Found Subdomains ({subdomains.length})
            </h3>
          </div>
          <ul className="divide-y divide-gray-800/50">
            {subdomains.map((subdomain, index) => (
              <li 
                key={index} 
                className="px-4 py-3 text-gray-300 hover:bg-gray-800/30 transition-colors"
              >
                <div className="flex items-center">
                  <RiGlobalLine className="h-5 w-5 mr-3 text-green-500 flex-shrink-0" />
                  {renderSubdomainContent(subdomain)}
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SubDomains;
