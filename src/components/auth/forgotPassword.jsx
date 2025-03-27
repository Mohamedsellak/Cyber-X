import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  RiMailLine, 
  RiArrowLeftSLine, 
  RiShieldKeyholeLine,
  RiCheckboxCircleFill,
  RiLockLine
} from 'react-icons/ri';
import { HiOutlineExclamationCircle } from 'react-icons/hi';
import { FaShieldAlt } from 'react-icons/fa';

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    
    // Basic validation
    if (!email) {
      setError('Email address is required');
      return;
    }
    
    setIsLoading(true);
    setError('');
    setMessage('');
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Success - in a real app, this would call an API endpoint
      setMessage('Password reset instructions have been sent to your email');
      setIsLoading(false);
    } catch (err) {
      setError('Unable to send reset link. Please try again.');
      setIsLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen flex flex-col bg-gray-950 text-gray-100 overflow-hidden">
      <BackgroundMesh />
      
      <div className="flex-grow flex items-center justify-center p-8 relative z-10">
        <div className="w-full max-w-md bg-gray-900/40 backdrop-blur-xl rounded-2xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-gray-800/50 relative overflow-hidden hover:shadow-green-900/10 hover:shadow-2xl transition-all duration-300">
          {/* Glowing accent */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-400 via-emerald-500 to-green-400"></div>
          
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <div className="relative bg-gradient-to-br from-green-400 to-emerald-600 rounded-full p-3 shadow-lg">
                <RiLockLine className="w-8 h-8 text-white" />
              </div>
            </div>
            <h2 className="text-2xl font-bold text-white mb-1">Reset Your Password</h2>
            <p className="text-gray-400 text-sm">We'll send you instructions to reset your password</p>
          </div>

          {error && (
            <div className="mb-6 p-3 bg-red-500/10 border-l-4 border-red-500 text-red-200 text-sm rounded flex items-center">
              <HiOutlineExclamationCircle className="h-5 w-5 mr-2 text-red-400" />
              <span>{error}</span>
            </div>
          )}
          
          {message && (
            <div className="mb-6 p-3 bg-green-500/10 border-l-4 border-green-500 text-green-200 text-sm rounded flex items-center">
              <RiCheckboxCircleFill className="h-5 w-5 mr-2 text-green-400" />
              <span>{message}</span>
            </div>
          )}

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1 flex items-center">
                Email Address
                {formSubmitted && !email && (
                  <span className="ml-2 text-red-400 text-xs">Required</span>
                )}
              </label>
              <div className="relative mt-1 group">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-500 group-focus-within:text-green-400 transition-colors duration-200">
                  <RiMailLine className="h-5 w-5" />
                </div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className={`block w-full pl-10 pr-3 py-3 bg-gray-800/70 border ${
                    formSubmitted && !email ? 'border-red-500' : 'border-gray-700 group-hover:border-gray-500'
                  } rounded-lg focus:ring-green-500 focus:border-green-500 text-sm placeholder-gray-500 text-white transition-all duration-200 ease-in-out`}
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setError('');
                  }}
                />
              </div>
            </div>

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
                      <span>Sending...</span>
                    </>
                  ) : (
                    <span>Send Reset Instructions</span>
                  )}
                </span>
              </button>
            </div>

            <div className="text-center">
              <Link
                to="/"
                className="inline-flex items-center text-sm font-medium text-green-400 hover:text-green-300 transition-colors duration-200 hover:underline group"
              >
                <RiArrowLeftSLine className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                Back to login
              </Link>
            </div>
          </form>
          
          {/* Security notes */}
          <div className="mt-8 pt-5 border-t border-gray-800/50 space-y-3">
            <div className="flex items-center text-xs text-gray-500">
              <RiCheckboxCircleFill className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
              <p>Reset links are valid for 24 hours</p>
            </div>
            <div className="flex items-center text-xs text-gray-500">
              <FaShieldAlt className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
              <p>Security verification may be required</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
