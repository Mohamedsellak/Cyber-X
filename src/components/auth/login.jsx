import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

// Icons (assuming using react-icons)
import { FaLock, FaEye, FaEyeSlash, FaShieldAlt, FaFingerprint, FaServer, FaNetworkWired } from 'react-icons/fa';
import { RiShieldKeyholeLine, RiUserLine, RiLockPasswordLine, RiCheckboxCircleFill } from 'react-icons/ri';
import { HiChevronRight, HiOutlineExclamationCircle } from 'react-icons/hi';

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: 'sellak@sellak.com',
    password: 'sellak',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    setFormSubmitted(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      if (formData.email && formData.password) {
        // Simulate successful login and redirect
        navigate('/dashboard');
      } else {
        throw new Error('Please fill in all required fields');
      }
    } catch (err) {
      setError(err.message || 'Authentication failed');
      setIsLoading(false);
    }
  };

  // Background mesh effect - purely decorative
  const BackgroundMesh = () => (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      <div className="absolute top-0 -left-1/4 w-1/2 h-1/2 bg-gradient-to-br from-green-500/10 via-green-300/5 to-transparent rounded-full filter blur-3xl"></div>
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-gradient-to-b from-green-500/10 to-emerald-500/5 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-0 left-1/3 w-1/3 h-1/3 bg-gradient-to-tr from-emerald-500/10 to-green-400/5 rounded-full filter blur-3xl"></div>
      
      {/* Network-like grid lines */}
      <div className="absolute inset-0 opacity-10">
        <div className="h-full w-full bg-[linear-gradient(to_right,#232323_1px,transparent_1px),linear-gradient(to_bottom,#232323_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      </div>
      
      {/* Cyber dots */}
      <div className="absolute inset-0">
        {Array.from({ length: 20 }).map((_, i) => (
          <div 
            key={i}
            className="absolute rounded-full bg-green-500"
            style={{
              width: `${Math.random() * 4 + 1}px`,
              height: `${Math.random() * 4 + 1}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.3 + 0.1,
            }}
          ></div>
        ))}
      </div>
    </div>
  );

  // Validate email format
  const isValidEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  // Check if field has error
  const hasError = (field) => {
    return formSubmitted && (
      (field === 'email' && (!formData.email || !isValidEmail(formData.email))) ||
      (field === 'password' && !formData.password)
    );
  };

  return (
    <div className="relative min-h-screen flex flex-col md:flex-row bg-gray-950 text-gray-100 overflow-hidden">
      <BackgroundMesh />
      
      {/* Left side - brand and description */}
      <div className="md:w-1/2 lg:w-3/5 p-8 md:p-16 flex flex-col justify-center relative z-10">
        <div className="max-w-xl">
          <div className="flex items-center mb-6 space-x-2 group cursor-pointer">
            <div className="relative">
              <div className="absolute inset-0 bg-green-500/20 rounded-full blur-lg transform group-hover:scale-110 transition-all duration-300"></div>
              <div className="relative bg-gradient-to-br from-green-400 to-emerald-600 rounded-full p-2.5">
                <RiShieldKeyholeLine className="h-8 w-8 text-white" />
              </div>
            </div>
            <div>
              <h1 className="text-3xl font-bold ml-1 text-white group-hover:text-green-400 transition-colors">Cyber X</h1>
              <div className="h-0.5 w-0 group-hover:w-full bg-green-500/50 transition-all duration-300"></div>
            </div>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
            Next-gen Security <br/>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-600">
              For Modern Threats
            </span>
          </h2>
          
          <p className="text-gray-400 max-w-lg mb-10 text-lg">
            Access our advanced security analysis tools and protect your systems with military-grade penetration testing and threat monitoring.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            <div className="flex items-start space-x-4 group">
              <div className="bg-gradient-to-br from-green-500/20 to-green-500/10 p-3 rounded-xl transform group-hover:scale-105 transition-all duration-300">
                <FaShieldAlt className="h-6 w-6 text-green-400" />
              </div>
              <div>
                <h3 className="font-medium text-white mb-1">Advanced Protection</h3>
                <p className="text-sm text-gray-400">Comprehensive security suite for all vulnerabilities</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4 group">
              <div className="bg-gradient-to-br from-green-500/20 to-green-500/10 p-3 rounded-xl transform group-hover:scale-105 transition-all duration-300">
                <FaFingerprint className="h-6 w-6 text-green-400" />
              </div>
              <div>
                <h3 className="font-medium text-white mb-1">Secure Access</h3>
                <p className="text-sm text-gray-400">Multi-factor authentication and encrypted sessions</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4 group">
              <div className="bg-gradient-to-br from-green-500/20 to-green-500/10 p-3 rounded-xl transform group-hover:scale-105 transition-all duration-300">
                <FaServer className="h-6 w-6 text-green-400" />
              </div>
              <div>
                <h3 className="font-medium text-white mb-1">Real-Time Monitoring</h3>
                <p className="text-sm text-gray-400">Instant alerts and threat detection systems</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4 group">
              <div className="bg-gradient-to-br from-green-500/20 to-green-500/10 p-3 rounded-xl transform group-hover:scale-105 transition-all duration-300">
                <FaNetworkWired className="h-6 w-6 text-green-400" />
              </div>
              <div>
                <h3 className="font-medium text-white mb-1">Network Security</h3>
                <p className="text-sm text-gray-400">Comprehensive firewall and intrusion prevention</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Right side - login form */}
      <div className="md:w-1/2 lg:w-2/5 p-8 md:p-16 flex items-center justify-center relative z-10">
        <div className="w-full max-w-md bg-gray-900/40 backdrop-blur-xl rounded-2xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-gray-800/50 relative overflow-hidden hover:shadow-green-900/10 hover:shadow-2xl transition-all duration-300">
          {/* Glowing accent */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-400 via-emerald-500 to-green-400"></div>
          
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-white mb-1">Welcome Back</h2>
            <p className="text-gray-400 text-sm">Secure access to your dashboard</p>
          </div>
          
          {error && (
            <div className="mb-6 p-3 bg-red-500/10 border-l-4 border-red-500 text-red-200 text-sm rounded flex items-center">
              <HiOutlineExclamationCircle className="h-5 w-5 mr-2 text-red-400" />
              <span>{error}</span>
            </div>
          )}
          
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email input */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1 flex items-center">
                Email Address
                {hasError('email') && (
                  <span className="ml-2 text-red-400 text-xs">Required</span>
                )}
              </label>
              <div className="relative mt-1 group">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-500 group-focus-within:text-green-400 transition-colors duration-200">
                  <RiUserLine className="h-5 w-5" />
                </div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className={`block w-full pl-10 pr-3 py-3 bg-gray-800/70 border ${
                    hasError('email') ? 'border-red-500' : 'border-gray-700 group-hover:border-gray-500'
                  } rounded-lg focus:ring-green-500 focus:border-green-500 text-sm placeholder-gray-500 text-white transition-all duration-200 ease-in-out`}
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={(e) => {
                    setFormData({...formData, email: e.target.value});
                    setError('');
                  }}
                />
              </div>
            </div>
            
            {/* Password input */}
            <div>
              <div className="flex items-center justify-between mb-1">
                <label htmlFor="password" className="block text-sm font-medium text-gray-300 flex items-center">
                  Password
                  {hasError('password') && (
                    <span className="ml-2 text-red-400 text-xs">Required</span>
                  )}
                </label>
              </div>
              <div className="relative mt-1 group">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-500 group-focus-within:text-green-400 transition-colors duration-200">
                  <RiLockPasswordLine className="h-5 w-5" />
                </div>
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="current-password"
                  required
                  className={`block w-full pl-10 pr-10 py-3 bg-gray-800/70 border ${
                    hasError('password') ? 'border-red-500' : 'border-gray-700 group-hover:border-gray-500'
                  } rounded-lg focus:ring-green-500 focus:border-green-500 text-sm placeholder-gray-500 text-white transition-all duration-200 ease-in-out`}
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={(e) => {
                    setFormData({...formData, password: e.target.value});
                    setError('');
                  }}
                />
                <button 
                  type="button" 
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500 hover:text-green-400 transition-colors"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? 
                    <FaEyeSlash className="h-5 w-5" /> : 
                    <FaEye className="h-5 w-5" />
                  }
                </button>
              </div>
            </div>
            
            {/* Remember me and forgot password */}
            <div className="flex items-center justify-between pt-2">
              <div className="flex items-center">
                <div className="relative flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="remember-me"
                      name="remember-me"
                      type="checkbox"
                      checked={rememberMe}
                      onChange={() => setRememberMe(!rememberMe)}
                      className="h-4 w-4 rounded border-gray-600 bg-gray-800 text-green-500 focus:ring-green-500 focus:ring-offset-gray-900 transition-all duration-200"
                    />
                  </div>
                  <div className="ml-2 text-sm">
                    <label htmlFor="remember-me" className="text-gray-400 cursor-pointer select-none">
                      Remember me
                    </label>
                  </div>
                </div>
              </div>
              <div>
                <Link to="/forgot-password" className="text-sm font-medium text-green-400 hover:text-green-300 transition-colors hover:underline flex items-center">
                  <span>Forgot password?</span>
                </Link>
              </div>
            </div>
            
            {/* Sign in button */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={isLoading}
                className={`relative w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-lg ${
                  isLoading ? 'bg-gray-700' : 'bg-gradient-to-r from-green-600 to-emerald-600'
                } text-white text-sm font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-900 transition-all duration-300 overflow-hidden group hover:shadow-lg hover:shadow-green-900/20`}
              >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-green-600 to-emerald-600 opacity-0 group-hover:opacity-80 transition-opacity duration-300"></span>
                <span className="relative flex items-center">
                  {isLoading ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      <span>Authenticating...</span>
                    </>
                  ) : (
                    <>
                      <span>Sign in to Dashboard</span>
                      <HiChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </span>
              </button>
            </div>
            
            
            {/* Security features */}
            <div className="mt-8 pt-5 border-t border-gray-800/50 space-y-3">
              <div className="flex items-center text-xs text-gray-500">
                <RiCheckboxCircleFill className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                <p>Advanced encryption protects your login information</p>
              </div>
              <div className="flex items-center text-xs text-gray-500">
                <RiCheckboxCircleFill className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                <p>Automatic session timeout for added security</p>
              </div>
              <div className="flex items-center text-xs text-gray-500">
                <RiCheckboxCircleFill className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                <p>Compliant with industry security standards</p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;