import React, { useState } from 'react';
import {
  RiGlobalLine,
  RiSearchLine,
  RiInformationLine,
  RiErrorWarningLine,
  RiTimeLine,
  RiServerLine,
} from 'react-icons/ri';

const Whois = () => {
  const [domain, setDomain] = useState('');
  const [whoisData, setWhoisData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const data = await window.api.whois(domain);
      setWhoisData(data);
    } catch (err) {
      setError('Failed to fetch WHOIS data');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      {/* Enhanced Header with App Theme */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent flex items-center mb-2">
            <RiGlobalLine className="mr-3 text-green-500" />
            WHOIS Lookup
          </h2>
          <p className="text-gray-400">Domain registration and ownership information</p>
        </div>
        <div className="flex items-center space-x-2 text-sm">
          <span className="px-3 py-1 bg-green-500/10 text-green-400 rounded-full border border-green-500/20">
            Domain Tool
          </span>
        </div>
      </div>

      {/* Enhanced Form */}
      <div className="group bg-gray-900/40 backdrop-blur-xl p-6 rounded-xl border border-gray-800/50 hover:border-green-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-green-900/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-emerald-500/5 to-green-600/5 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
        <div className="absolute top-0 left-0 w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-green-400 via-emerald-500 to-green-400 transition-all duration-500"></div>
        
        <form onSubmit={handleSubmit} className="relative">
          <div className="flex gap-4">
            <div className="flex-1">
              <label className="text-gray-300 flex items-center text-sm mb-2">
                <RiGlobalLine className="mr-2 text-green-500" />
                Domain Name
              </label>
              <input
                type="text"
                value={domain}
                onChange={(e) => setDomain(e.target.value)}
                placeholder="Enter domain name (e.g., example.com)"
                className="w-full bg-gray-800/50 border border-gray-700/50 rounded-lg py-3 px-4 text-gray-200 placeholder-gray-500 focus:border-green-500 focus:ring-1 focus:ring-green-500/50 transition-all duration-300"
                required
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="self-end py-3 px-6 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-lg transition-all duration-300 flex items-center justify-center group/btn relative overflow-hidden hover:shadow-lg hover:shadow-green-900/20"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-green-600 to-emerald-600 opacity-0 group-hover/btn:opacity-80 transition-opacity duration-300"></span>
              <span className="relative flex items-center">
                {loading ? (
                  <>
                    <RiTimeLine className="animate-spin -ml-1 mr-2" />
                    Searching...
                  </>
                ) : (
                  <>
                    <RiSearchLine className="mr-2 group-hover/btn:scale-110 transition-transform" />
                    Lookup
                  </>
                )}
              </span>
            </button>
          </div>
        </form>
      </div>

      {/* Enhanced Error Message */}
      {error && (
        <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4 flex items-center text-red-400">
          <RiErrorWarningLine className="w-5 h-5 mr-2 text-red-500" />
          <span>{error}</span>
        </div>
      )}

      {/* Enhanced Results */}
      {whoisData && (
        <div className="group bg-gray-900/40 backdrop-blur-xl p-6 rounded-xl border border-gray-800/50 hover:border-green-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-green-900/10 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-emerald-500/5 to-green-600/5 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
          <div className="absolute top-0 left-0 w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-green-400 via-emerald-500 to-green-400 transition-all duration-500"></div>

          <div className="flex items-center justify-between mb-6 relative">
            <h3 className="text-xl font-semibold text-gray-100 flex items-center">
              <RiInformationLine className="w-6 h-6 text-green-400 mr-2" />
              WHOIS Information
            </h3>
            <div className="flex items-center space-x-2 px-3 py-1 bg-green-500/10 rounded-full border border-green-500/20">
              <RiTimeLine className="text-green-400" />
              <span className="text-green-400 text-sm">{new Date().toLocaleString()}</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 relative">
            {Object.entries(whoisData).map(([key, value], index) => {
              // Skip empty or null values
              if (!value || value === 'null' || value === '') return null;

              // Determine if the value is an array or object
              const isComplex = typeof value === 'object' || Array.isArray(value);
              
              return (
                <div
                  key={key}
                  className={`${
                    isComplex ? 'col-span-full' : 'col-span-1'
                  } bg-gray-800/50 rounded-lg border border-gray-700/50 hover:border-green-500/30 transition-all duration-300 overflow-hidden group/card`}
                >
                  <div className="p-4 border-b border-gray-700/50 bg-gray-900/30 flex items-center justify-between">
                    <div className="flex items-center">
                      <RiServerLine className="w-5 h-5 text-green-400 mr-2" />
                      <h4 className="text-gray-300 font-medium capitalize">
                        {key.replace(/_/g, ' ')}
                      </h4>
                    </div>
                    {!isComplex && (
                      <span className="text-xs px-2 py-1 rounded-full bg-green-500/10 text-green-400 border border-green-500/20">
                        {typeof value}
                      </span>
                    )}
                  </div>
                  <div className="p-4">
                    {isComplex ? (
                      <pre className="text-sm text-gray-300 bg-gray-900/50 p-3 rounded border border-gray-700/50 overflow-x-auto">
                        {JSON.stringify(value, null, 2)}
                      </pre>
                    ) : (
                      <p className="text-gray-300 break-words">
                        {String(value)}
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default Whois;
