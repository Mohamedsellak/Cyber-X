import React, { useState } from 'react';
import {
  RiUser3Line,
  RiNotification3Line,
  RiShieldLine,
  RiKey2Line,
  RiSmartphoneLine,
  RiArrowRightSLine,
  RiSaveLine,
  RiHistoryLine,
  RiHome4Line,
  RiAlertLine,
} from 'react-icons/ri';

export default function Settings() {
  const [isSaving, setIsSaving] = useState(false);

  const handleSave = () => {
    setIsSaving(true);
    // Simulate API call
    setTimeout(() => setIsSaving(false), 1000);
  };

  return (
    <div className="max-w-7xl mx-auto">
      {/* Enhanced Header */}
      <div className="mb-8">
        <div className="flex items-center text-sm text-gray-400 mb-4">
          <RiHome4Line className="mr-2" />
          <span className="mr-2">Home</span>
          <RiArrowRightSLine className="mr-2" />
          <span className="text-green-500">Settings</span>
        </div>
        <h1 className="text-3xl font-bold mb-3 bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent">
          System Settings
        </h1>
        <p className="text-gray-400 text-lg">Configure your security preferences and system settings</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Settings Column */}
        <div className="lg:col-span-2 space-y-6">
          {/* Profile Settings Card */}
          <div className="bg-gray-900/40 backdrop-blur-xl p-6 rounded-lg border border-gray-800/50 hover:border-green-500/50 hover:shadow-green-900/10 hover:shadow-2xl transition-all duration-300">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center">
                <RiUser3Line className="w-6 h-6 text-green-500 mr-3" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-100">Profile Settings</h3>
                  <p className="text-sm text-gray-400">Manage your account information</p>
                </div>
              </div>
              <span className="px-3 py-1 bg-green-500/10 text-green-500 rounded-full text-sm">Active</span>
            </div>
            <div className="space-y-4">
              <button className="w-full text-left p-3 rounded bg-gray-800/70 text-gray-100 hover:bg-gray-700 transition-colors duration-150 flex items-center justify-between group">
                <div className="flex items-center space-x-3">
                  <span>Account Information</span>
                </div>
                <RiArrowRightSLine className="w-5 h-5 text-gray-400 group-hover:text-green-500 transition-colors duration-150" />
              </button>
              <button className="w-full text-left p-3 rounded bg-gray-800/70 text-gray-100 hover:bg-gray-700 transition-colors duration-150 flex items-center justify-between group">
                <div className="flex items-center space-x-3">
                  <span>Email Preferences</span>
                </div>
                <RiArrowRightSLine className="w-5 h-5 text-gray-400 group-hover:text-green-500 transition-colors duration-150" />
              </button>
            </div>
          </div>

          {/* Security Settings Card */}
          <div className="bg-gray-900/40 backdrop-blur-xl p-6 rounded-lg border border-gray-800/50 hover:border-green-500/50 hover:shadow-green-900/10 hover:shadow-2xl transition-all duration-300">
            <div className="flex items-center mb-4">
              <RiShieldLine className="w-6 h-6 text-green-500 mr-3" />
              <h3 className="text-lg font-semibold text-gray-100">Security Settings</h3>
            </div>
            <div className="space-y-4">
              <button className="w-full text-left p-3 rounded bg-gray-800/70 text-gray-100 hover:bg-gray-700 transition-colors duration-150 flex items-center justify-between group">
                <div className="flex items-center space-x-3">
                  <RiKey2Line className="w-5 h-5 text-gray-400" />
                  <span>Change Password</span>
                </div>
                <RiArrowRightSLine className="w-5 h-5 text-gray-400 group-hover:text-green-500 transition-colors duration-150" />
              </button>
              <button className="w-full text-left p-3 rounded bg-gray-800/70 text-gray-100 hover:bg-gray-700 transition-colors duration-150 flex items-center justify-between group">
                <div className="flex items-center space-x-3">
                  <RiSmartphoneLine className="w-5 h-5 text-gray-400" />
                  <span>Two-Factor Authentication</span>
                </div>
                <RiArrowRightSLine className="w-5 h-5 text-gray-400 group-hover:text-green-500 transition-colors duration-150" />
              </button>
            </div>
            <div className="mt-4 p-4 bg-green-500/10 rounded-lg border border-green-500/20">
              <div className="flex items-start">
                <RiAlertLine className="w-5 h-5 text-green-500 mt-0.5 mr-3" />
                <p className="text-sm text-gray-400">
                  We recommend enabling two-factor authentication for enhanced security.
                </p>
              </div>
            </div>
          </div>

          {/* Notification Settings */}
          <div className="bg-gray-900/40 backdrop-blur-xl p-6 rounded-lg border border-gray-800/50 hover:border-green-500/50 hover:shadow-green-900/10 hover:shadow-2xl transition-all duration-300">
            <div className="flex items-center mb-4">
              <RiNotification3Line className="w-6 h-6 text-green-500 mr-3" />
              <h3 className="text-lg font-semibold text-gray-100">Notification Settings</h3>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-gray-800/70 rounded-lg">
                <span className="text-gray-100">Security Alerts</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" defaultChecked />
                  <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"></div>
                </label>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-800/70 rounded-lg">
                <span className="text-gray-100">Scan Notifications</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" defaultChecked />
                  <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"></div>
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* Side Column */}
        <div className="space-y-6">
          {/* Quick Actions */}
          <div className="bg-gray-900/40 backdrop-blur-xl p-6 rounded-lg border border-gray-800/50 hover:shadow-green-900/10 hover:shadow-2xl transition-all duration-300">
            <h3 className="text-lg font-semibold text-gray-100 mb-4">Quick Actions</h3>
            <div className="space-y-3">
              <button className="w-full p-3 bg-green-500/10 text-green-500 rounded-lg hover:bg-green-500/20 transition-colors duration-150 flex items-center justify-center">
                <RiShieldLine className="mr-2" /> Security Scan
              </button>
              <button className="w-full p-3 bg-gray-800/70 text-gray-300 rounded-lg hover:bg-gray-700 transition-colors duration-150 flex items-center justify-center">
                <RiHistoryLine className="mr-2" /> View Activity Log
              </button>
            </div>
          </div>

          {/* Save Changes Card */}
          <div className="bg-gray-900/40 backdrop-blur-xl p-6 rounded-lg border border-gray-800/50 sticky top-6 hover:shadow-green-900/10 hover:shadow-2xl transition-all duration-300">
            <h3 className="text-lg font-semibold text-gray-100 mb-4">Save Changes</h3>
            <p className="text-sm text-gray-400 mb-4">
              Your changes will be automatically synced across all devices.
            </p>
            <button 
              onClick={handleSave}
              disabled={isSaving}
              className="relative w-full py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-lg transition-all duration-300 flex items-center justify-center disabled:opacity-50 overflow-hidden group"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-green-600 to-emerald-600 opacity-0 group-hover:opacity-80 transition-opacity duration-300"></span>
              {isSaving ? (
                <span className="flex items-center relative">
                  <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  Saving Changes...
                </span>
              ) : (
                <span className="flex items-center relative">
                  <RiSaveLine className="mr-2" /> Save Changes
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}