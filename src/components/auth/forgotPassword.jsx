import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  RiMailLine, 
  RiArrowLeftSLine, 
  RiShieldCheckLine 
} from 'react-icons/ri';

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle password reset logic here
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-950 px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <div className="flex justify-center mb-4">
            <RiShieldCheckLine className="w-12 h-12 text-purple-500" />
          </div>
          <h2 className="mt-6 text-3xl font-bold tracking-tight text-purple-500">
            Reset Password
          </h2>
          <p className="mt-2 text-sm text-gray-400">
            Enter your email address and we'll send you a reset link
          </p>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4 rounded-md">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <RiMailLine className="h-5 w-5 text-gray-400" />
              </div>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="pl-10 relative block w-full rounded-lg border border-gray-800 bg-gray-900 px-3 py-2 text-gray-100 placeholder-gray-500 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500 sm:text-sm"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative flex w-full justify-center rounded-lg border border-transparent bg-green-600 px-4 py-2 text-sm font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-900 transition-colors duration-150"
            >
              Send reset link
            </button>
          </div>

          <div className="text-center">
            <button
              type="button"
              onClick={() => navigate('/')}
              className="inline-flex items-center text-sm font-medium text-purple-500 hover:text-purple-400 transition-colors duration-150"
            >
              <RiArrowLeftSLine className="w-4 h-4 mr-2" />
              Back to login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
