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

  const renderSettingCard = ({ icon: Icon, title, description, children }) => (
    <div className="group bg-gray-900/40 backdrop-blur-xl p-6 rounded-xl border border-gray-800/50 hover:border-green-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-green-900/10 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-emerald-500/5 to-green-600/5 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
      <div className="absolute top-0 left-0 w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-green-400 via-emerald-500 to-green-400 transition-all duration-500"></div>
      
      <div className="flex items-center justify-between mb-6 relative">
        <div className="flex items-center">
          <div className="p-2 bg-green-500/10 rounded-lg mr-3">
            <Icon className="w-6 h-6 text-green-400" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-100">{title}</h3>
            <p className="text-sm text-gray-400">{description}</p>
          </div>
        </div>
      </div>
      <div className="space-y-4 relative">
        {children}
      </div>
    </div>
  );

  const renderSettingButton = ({ icon: Icon, label }) => (
    <button className="w-full text-left p-3 rounded-lg bg-gray-800/50 text-gray-300 hover:bg-green-500/10 hover:text-green-400 transition-all duration-150 flex items-center justify-between group border border-gray-700/30">
      <div className="flex items-center space-x-3">
        <Icon className="w-5 h-5" />
        <span>{label}</span>
      </div>
      <RiArrowRightSLine className="w-5 h-5 text-gray-400 group-hover:text-green-500 group-hover:translate-x-1 transition-all duration-150" />
    </button>
  );

  return (
    <div className="max-w-7xl mx-auto px-4">
      {/* Enhanced Header */}
      <div className="mb-8">
        <div className="flex items-center text-sm text-gray-400 mb-4">
          <RiHome4Line className="mr-2" />
          <span className="mr-2">Home</span>
          <RiArrowRightSLine className="mr-2" />
          <span className="text-green-400">Settings</span>
        </div>
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent">
              System Settings
            </h1>
            <p className="text-gray-400">Configure your security preferences and system settings</p>
          </div>
          <button 
            onClick={handleSave}
            disabled={isSaving}
            className="px-4 py-2 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-lg transition-all duration-300 flex items-center group relative overflow-hidden"
          >
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-green-600 to-emerald-600 opacity-0 group-hover:opacity-80 transition-opacity duration-300"></span>
            <span className="relative flex items-center">
              {isSaving ? (
                <>
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Saving...
                </>
              ) : (
                <>
                  <RiSaveLine className="mr-2" />
                  Save Changes
                </>
              )}
            </span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          {renderSettingCard({
            icon: RiUser3Line,
            title: "Profile Settings",
            description: "Manage your account information",
            children: (
              <>
                {renderSettingButton({ icon: RiUser3Line, label: "Account Information" })}
                {renderSettingButton({ icon: RiNotification3Line, label: "Email Preferences" })}
              </>
            )
          })}

          {renderSettingCard({
            icon: RiShieldLine,
            title: "Security Settings",
            description: "Enhance your account security",
            children: (
              <>
                {renderSettingButton({ icon: RiKey2Line, label: "Change Password" })}
                {renderSettingButton({ icon: RiSmartphoneLine, label: "Two-Factor Authentication" })}
              </>
            )
          })}

          {renderSettingCard({
            icon: RiNotification3Line,
            title: "Notification Settings",
            description: "Manage your notification preferences",
            children: (
              <>
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
              </>
            )
          })}
        </div>

        <div className="space-y-6">
          {/* Quick Actions */}
          <div className="bg-gray-900/40 backdrop-blur-xl p-6 rounded-xl border border-gray-800/50 hover:border-green-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-green-900/10 relative overflow-hidden">
            <h3 className="text-lg font-semibold text-gray-100 mb-4">Quick Actions</h3>
            <div className="space-y-3">
              <button className="w-full p-3 bg-green-500/10 text-green-400 rounded-lg hover:bg-green-500/20 transition-all duration-150 flex items-center justify-center group">
                <RiShieldLine className="mr-2 group-hover:rotate-12 transition-transform" />
                Security Scan
              </button>
              <button className="w-full p-3 bg-gray-800/70 text-gray-300 rounded-lg hover:bg-gray-700 transition-all duration-150 flex items-center justify-center">
                <RiHistoryLine className="mr-2" />
                View Activity Log
              </button>
            </div>
          </div>

          {/* Status Card */}
          <div className="bg-gray-900/40 backdrop-blur-xl p-6 rounded-xl border border-gray-800/50 hover:border-green-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-green-900/10 relative overflow-hidden">
            <div className="flex items-center space-x-4 mb-4">
              <div className="h-2 w-2 bg-green-500 rounded-full"></div>
              <h3 className="text-lg font-semibold text-gray-100">System Status</h3>
            </div>
            <div className="space-y-4">
              {/* Add status items here */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}