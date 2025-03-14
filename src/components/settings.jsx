import React from 'react';
import {
  RiUser3Line,
  RiNotification3Line,
  RiShieldLine,
  RiKey2Line,
  RiSmartphoneLine,
  RiCloudLine,
  RiSettings3Line,
  RiArrowRightSLine,
  RiSaveLine  // Changed from RiSave3Line to RiSaveLine
} from 'react-icons/ri';

export default function Settings() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold mb-2 text-purple-500">Settings</h1>
        <p className="text-gray-400">Manage your security preferences and account settings</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="space-y-6">
          <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
            <div className="flex items-center mb-4">
              <RiUser3Line className="w-6 h-6 text-purple-500 mr-3" />
              <h3 className="text-lg font-semibold text-gray-100">Profile Settings</h3>
            </div>
            <div className="space-y-4">
              <button className="w-full text-left p-3 rounded bg-gray-800 text-gray-100 hover:bg-gray-700 transition-colors duration-150 flex items-center justify-between group">
                <div className="flex items-center space-x-3">
                  <span>Account Information</span>
                </div>
                <RiArrowRightSLine className="w-5 h-5 text-gray-400 group-hover:text-purple-500 transition-colors duration-150" />
              </button>
              <button className="w-full text-left p-3 rounded bg-gray-800 text-gray-100 hover:bg-gray-700 transition-colors duration-150 flex items-center justify-between group">
                <div className="flex items-center space-x-3">
                  <span>Email Preferences</span>
                </div>
                <RiArrowRightSLine className="w-5 h-5 text-gray-400 group-hover:text-purple-500 transition-colors duration-150" />
              </button>
            </div>
          </div>

          <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
            <div className="flex items-center mb-4">
              <RiShieldLine className="w-6 h-6 text-purple-500 mr-3" />
              <h3 className="text-lg font-semibold text-gray-100">Security Settings</h3>
            </div>
            <div className="space-y-4">
              <button className="w-full text-left p-3 rounded bg-gray-800 text-gray-100 hover:bg-gray-700 transition-colors duration-150 flex items-center justify-between group">
                <div className="flex items-center space-x-3">
                  <RiKey2Line className="w-5 h-5 text-gray-400" />
                  <span>Change Password</span>
                </div>
                <RiArrowRightSLine className="w-5 h-5 text-gray-400 group-hover:text-purple-500 transition-colors duration-150" />
              </button>
              <button className="w-full text-left p-3 rounded bg-gray-800 text-gray-100 hover:bg-gray-700 transition-colors duration-150 flex items-center justify-between group">
                <div className="flex items-center space-x-3">
                  <RiSmartphoneLine className="w-5 h-5 text-gray-400" />
                  <span>Two-Factor Authentication</span>
                </div>
                <RiArrowRightSLine className="w-5 h-5 text-gray-400 group-hover:text-purple-500 transition-colors duration-150" />
              </button>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
            <div className="flex items-center mb-4">
              <RiNotification3Line className="w-6 h-6 text-purple-500 mr-3" />
              <h3 className="text-lg font-semibold text-gray-100">Notification Settings</h3>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-gray-800 rounded-lg">
                <span className="text-gray-100">Security Alerts</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" defaultChecked />
                  <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"></div>
                </label>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-800 rounded-lg">
                <span className="text-gray-100">Scan Notifications</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" defaultChecked />
                  <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"></div>
                </label>
              </div>
            </div>
          </div>

          <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
            <div className="flex items-center mb-4">
              <RiSettings3Line className="w-6 h-6 text-purple-500 mr-3" />
              <h3 className="text-lg font-semibold text-gray-100">System Settings</h3>
            </div>
            <div className="space-y-4">
              <button className="w-full text-left p-3 rounded bg-gray-800 text-gray-100 hover:bg-gray-700 transition-colors duration-150 flex items-center justify-between group">
                <div className="flex items-center space-x-3">
                  <RiCloudLine className="w-5 h-5 text-gray-400" />
                  <span>Auto-Update Settings</span>
                </div>
                <RiArrowRightSLine className="w-5 h-5 text-gray-400 group-hover:text-purple-500 transition-colors duration-150" />
              </button>
            </div>
          </div>


          {/* Save Button */}
          <div className="flex justify-end mt-4">
            <button className="px-6 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 flex items-center">
              <RiSaveLine className="mr-2" /> Save Changes {/* Changed from RiSave3Line to RiSaveLine */}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}