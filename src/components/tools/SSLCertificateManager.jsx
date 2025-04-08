import React, { useState, useEffect } from 'react';
import { RiShieldCheckLine, RiAlertLine, RiTimeLine } from 'react-icons/ri';
import { checkSSLCertificate, validateCertificate } from '../../services/sslService';

export default function SSLCertificateManager() {
  const [domain, setDomain] = useState('');
  const [loading, setLoading] = useState(false);
  const [certInfo, setCertInfo] = useState(null);
  const [error, setError] = useState(null);

  const handleCheck = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    
    try {
      // Validate input
      if (!domain.match(/^(?:https?:\/\/)?(?:[\w-]+\.)+[\w-]+(?::\d+)?(?:\/[\w-./?%&=]*)?$/)) {
        throw new Error('Please enter a valid domain or URL');
      }

      const result = await window.api.checkSSLCertificate(domain);
      setCertInfo(result);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-100 flex items-center">
          <RiShieldCheckLine className="w-6 h-6 mr-2 text-green-500" />
          SSL Certificate Manager
        </h1>
        <p className="text-gray-400 mt-2">Analyze and monitor SSL/TLS certificates for your domains</p>
      </div>

      <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700/30">
        <form onSubmit={handleCheck} className="mb-6">
          <div className="flex gap-4">
            <input
              type="text"
              value={domain}
              onChange={(e) => setDomain(e.target.value)}
              placeholder="Enter domain name (e.g., example.com)"
              className="flex-1 bg-gray-900/50 border border-gray-700/30 rounded-lg px-4 py-2 text-gray-300 placeholder-gray-500 focus:border-green-500 focus:ring-green-500/20 focus:ring-2"
            />
            <button
              type="submit"
              disabled={loading || !domain}
              className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Checking...' : 'Check Certificate'}
            </button>
          </div>
        </form>

        {error && (
          <div className="mb-6 p-4 bg-red-500/10 border border-red-500/30 rounded-lg text-red-400">
            <div className="flex items-center">
              <RiAlertLine className="w-5 h-5 mr-2" />
              {error}
            </div>
          </div>
        )}

        {certInfo && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <CertificateInfoCard
                title="Certificate Status"
                value={certInfo.valid ? 'Valid' : 'Invalid'}
                status={certInfo.valid ? 'success' : 'error'}
              />
              <CertificateInfoCard
                title="Expiration"
                value={certInfo.expiresIn}
                status={certInfo.expiryStatus}
              />
            </div>

            <div className="bg-gray-900/50 rounded-lg p-4">
              <h3 className="text-lg font-medium text-gray-100 mb-4">Certificate Details</h3>
              <div className="space-y-3">
                <DetailRow label="Issued To" value={certInfo.issuedTo} />
                <DetailRow label="Issued By" value={certInfo.issuedBy} />
                <DetailRow label="Valid From" value={certInfo.validFrom} />
                <DetailRow label="Valid Until" value={certInfo.validUntil} />
                <DetailRow label="Serial Number" value={certInfo.serialNumber} />
              </div>
            </div>

            {/* Security Grade */}
            <div className="bg-gray-900/50 rounded-lg p-4">
              <h3 className="text-lg font-medium text-gray-100 mb-4">Security Assessment</h3>
              <div className={`text-4xl font-bold ${
                certInfo.securityGrade === 'A' ? 'text-green-500' :
                certInfo.securityGrade === 'B' ? 'text-blue-500' :
                certInfo.securityGrade === 'C' ? 'text-yellow-500' :
                'text-red-500'
              }`}>
                {certInfo.securityGrade}
              </div>
            </div>

            {/* Technical Details */}
            <div className="bg-gray-900/50 rounded-lg p-4">
              <h3 className="text-lg font-medium text-gray-100 mb-4">Technical Details</h3>
              <div className="space-y-3">
                <DetailRow label="Key Strength" value={`${certInfo.keyStrength} bits`} />
                <DetailRow label="Signature Algorithm" value={certInfo.algorithm} />
                <DetailRow label="Version" value={certInfo.version} />
                <DetailRow 
                  label="Subject Alternative Names" 
                  value={
                    <div className="flex flex-wrap gap-2">
                      {certInfo.subjectAltNames?.map((san, idx) => (
                        <span key={idx} className="px-2 py-1 bg-gray-800 rounded text-xs">
                          {san}
                        </span>
                      ))}
                    </div>
                  }
                />
              </div>
            </div>

            {/* Cipher Suites */}
            <div className="bg-gray-900/50 rounded-lg p-4">
              <h3 className="text-lg font-medium text-gray-100 mb-4">Supported Cipher Suites</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {certInfo.cipherSuites?.map((cipher, idx) => (
                  <div key={idx} className="px-3 py-2 bg-gray-800/50 rounded text-sm text-gray-300">
                    {cipher}
                  </div>
                ))}
              </div>
            </div>

            {/* Protocols */}
            <div className="bg-gray-900/50 rounded-lg p-4">
              <h3 className="text-lg font-medium text-gray-100 mb-4">Supported Protocols</h3>
              <div className="flex flex-wrap gap-2">
                {certInfo.protocols?.map(protocol => (
                  <span key={protocol} className="px-3 py-1 bg-gray-800 rounded-full text-sm text-gray-300">
                    {protocol}
                  </span>
                ))}
              </div>
            </div>

            {/* Vulnerabilities */}
            {certInfo.vulnerabilities?.length > 0 && (
              <div className="bg-gray-900/50 rounded-lg p-4">
                <h3 className="text-lg font-medium text-gray-100 mb-4">Vulnerabilities</h3>
                <div className="space-y-3">
                  {certInfo.vulnerabilities.map((vuln, index) => (
                    <div key={index} className="p-3 bg-red-500/10 border border-red-500/30 rounded-lg">
                      <div className="font-medium text-red-400">{vuln.name}</div>
                      <div className="text-sm text-gray-400">{vuln.description}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

const CertificateInfoCard = ({ title, value, status }) => {
  const getStatusColors = () => {
    switch (status) {
      case 'success':
        return 'bg-green-500/10 border-green-500/30 text-green-400';
      case 'warning':
        return 'bg-yellow-500/10 border-yellow-500/30 text-yellow-400';
      case 'error':
        return 'bg-red-500/10 border-red-500/30 text-red-400';
      default:
        return 'bg-gray-500/10 border-gray-500/30 text-gray-400';
    }
  };

  return (
    <div className={`p-4 rounded-lg border ${getStatusColors()}`}>
      <div className="text-sm mb-1">{title}</div>
      <div className="text-lg font-semibold">{value}</div>
    </div>
  );
};

const DetailRow = ({ label, value }) => (
  <div className="flex justify-between py-2 border-b border-gray-700/30">
    <span className="text-gray-400">{label}</span>
    <span className="text-gray-100">{value}</span>
  </div>
);
