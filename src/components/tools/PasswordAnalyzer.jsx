import React, { useState, useEffect } from 'react';
import zxcvbn from 'zxcvbn';
import {
  RiLockLine,
  RiShieldCheckLine,
  RiCheckLine,
  RiCloseLine,
  RiTimer2Line,
} from 'react-icons/ri';

export default function PasswordAnalyzer() {
  const [password, setPassword] = useState('');
  const [strength, setStrength] = useState(0);
  const [feedback, setFeedback] = useState([]);
  const [analysis, setAnalysis] = useState(null);

  const checkStrength = (pass) => {
    if (!pass) {
      setStrength(0);
      setFeedback([]);
      setAnalysis(null);
      return;
    }

    const result = zxcvbn(pass);
    const score = result.score * 25; // Convert 0-4 score to 0-100
    const checks = [];

    // Basic checks
    checks.push({
      passed: pass.length >= 8,
      message: 'Length is sufficient (min 8 chars)',
    });
    checks.push({
      passed: /[A-Z]/.test(pass),
      message: 'Contains uppercase letters',
    });
    checks.push({
      passed: /[a-z]/.test(pass),
      message: 'Contains lowercase letters',
    });
    checks.push({
      passed: /\d/.test(pass),
      message: 'Contains numbers',
    });
    checks.push({
      passed: /[!@#$%^&*(),.?":{}|<>]/.test(pass),
      message: 'Contains special characters',
    });

    // Add zxcvbn feedback
    if (result.feedback.warning) {
      checks.push({
        passed: false,
        message: result.feedback.warning,
      });
    }

    result.feedback.suggestions.forEach((suggestion) => {
      checks.push({
        passed: false,
        message: suggestion,
      });
    });

    setStrength(score);
    setFeedback(checks);
    setAnalysis({
      crackTime: result.crack_times_display.offline_slow_hashing_1e4_per_second,
      score: result.score,
      patterns: result.sequence,
    });
  };

  const getStrengthColor = () => {
    if (strength >= 80) return 'text-green-400';
    if (strength >= 60) return 'text-yellow-400';
    if (strength >= 40) return 'text-orange-400';
    return 'text-red-400';
  };

  const getStrengthText = () => {
    if (strength >= 80) return 'Very Strong';
    if (strength >= 60) return 'Strong';
    if (strength >= 40) return 'Moderate';
    if (strength >= 20) return 'Weak';
    return 'Very Weak';
  };

  useEffect(() => {
    checkStrength(password);
  }, [password]);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent flex items-center mb-2">
            <RiLockLine className="mr-3 text-blue-500" />
            Password Analyzer
          </h2>
          <p className="text-gray-400">Check your password strength and security</p>
        </div>
        <div className="flex items-center space-x-2 text-sm">
          <span className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full border border-blue-500/20">
            Security Tool
          </span>
        </div>
      </div>

      <div className="bg-gray-900/40 backdrop-blur-xl p-6 rounded-xl border border-gray-800/50">
        <div className="space-y-4">
          <div className="relative">
            <input
              type="text"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password to analyze"
              className="w-full px-4 py-3 bg-gray-800/50 rounded-lg border border-gray-700/50 focus:border-blue-500/50 focus:outline-none focus:ring-2 focus:ring-blue-500/20 text-gray-200"
            />
          </div>

          {password && (
            <>
              <div className="flex items-center justify-between mt-4">
                <div className="flex items-center space-x-2">
                  <RiShieldCheckLine className={`w-5 h-5 ${getStrengthColor()}`} />
                  <span className={`font-medium ${getStrengthColor()}`}>
                    {getStrengthText()}
                  </span>
                </div>
                <div className="text-gray-400 text-sm">Strength: {strength}%</div>
              </div>

              <div className="w-full bg-gray-800/50 rounded-full h-2">
                <div
                  className={`h-2 rounded-full transition-all duration-300 ${
                    strength >= 80
                      ? 'bg-green-500'
                      : strength >= 60
                      ? 'bg-yellow-500'
                      : strength >= 40
                      ? 'bg-orange-500'
                      : 'bg-red-500'
                  }`}
                  style={{ width: `${strength}%` }}
                />
              </div>

              {analysis && (
                <div className="bg-blue-500/10 p-4 rounded-lg border border-blue-500/20 mt-4">
                  <div className="flex items-center space-x-2 text-blue-400 mb-2">
                    <RiTimer2Line className="w-5 h-5" />
                    <span className="font-medium">Crack Time Estimation</span>
                  </div>
                  <p className="text-gray-300">
                    Time to crack: <span className="text-blue-400">{analysis.crackTime}</span>
                  </p>
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                {feedback.map((item, index) => (
                  <div
                    key={index}
                    className={`flex items-center space-x-2 p-3 rounded-lg ${
                      item.passed ? 'bg-green-500/10' : 'bg-red-500/10'
                    }`}
                  >
                    {item.passed ? (
                      <RiCheckLine className="w-5 h-5 text-green-400" />
                    ) : (
                      <RiCloseLine className="w-5 h-5 text-red-400" />
                    )}
                    <span className={item.passed ? 'text-green-400' : 'text-red-400'}>
                      {item.message}
                    </span>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
