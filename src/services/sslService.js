export const checkSSLCertificate = async (endpoint) => {
  try {
    const result = await window.api.checkSSLCertificate(endpoint);
    return {
      ...result,
      securityGrade: calculateSecurityGrade(result),
      vulnerabilities: checkVulnerabilities(result)
    };
  } catch (error) {
    throw new Error(`SSL check failed: ${error.message}`);
  }
};

const calculateSecurityGrade = (data) => {
  let score = 100;
  
  if (!data.valid) return 'F';
  
  if (data.protocols.includes('SSLv2') || data.protocols.includes('SSLv3')) {
    score -= 40;
  }
  if (!data.protocols.includes('TLSv1.2') && !data.protocols.includes('TLSv1.3')) {
    score -= 30;
  }
  
  const keyStrength = parseInt(data.keyStrength);
  if (keyStrength < 2048) {
    score -= 30;
  }
  
  if (score >= 90) return 'A';
  if (score >= 80) return 'B';
  if (score >= 70) return 'C';
  if (score >= 60) return 'D';
  return 'F';
};

const checkVulnerabilities = (data) => {
  const vulnerabilities = [];

  if (data.protocols.includes('SSLv2')) {
    vulnerabilities.push({
      name: 'SSLv2 Enabled',
      severity: 'Critical',
      description: 'SSLv2 is cryptographically broken and should not be used'
    });
  }

  if (data.protocols.includes('SSLv3')) {
    vulnerabilities.push({
      name: 'POODLE Vulnerability',
      severity: 'High',
      description: 'SSLv3 is vulnerable to the POODLE attack'
    });
  }

  const keyStrength = parseInt(data.keyStrength);
  if (keyStrength < 2048) {
    vulnerabilities.push({
      name: 'Weak Key Strength',
      severity: 'High',
      description: `Key strength (${keyStrength} bits) is below recommended 2048 bits`
    });
  }

  const daysToExpiry = parseInt(data.expiresIn);
  if (daysToExpiry <= 30) {
    vulnerabilities.push({
      name: 'Certificate Expiring Soon',
      severity: 'Warning',
      description: `Certificate will expire in ${daysToExpiry} days`
    });
  }

  return vulnerabilities;
};
