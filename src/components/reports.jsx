import React from 'react';
import {
  RiFileTextLine,
  RiTimeLine,
  RiDownloadLine,
  RiFileChartLine,
  RiShieldFlashLine,
  RiServerLine,
  RiRefreshLine,
  RiArrowRightSLine
} from 'react-icons/ri';

export default function Reports() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold mb-2 text-purple-500">Security Reports</h1>
        <p className="text-gray-400">View and generate detailed security analysis reports</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-gray-900 p-6 rounded-lg border border-gray-800">
          <div className="space-y-4">
            <div className="border-b border-gray-800 pb-4">
              <div className="flex items-center mb-4">
                <RiFileTextLine className="w-6 h-6 text-purple-500 mr-3" />
                <h3 className="text-lg font-semibold text-gray-100">Recent Reports</h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors duration-150 group">
                  <div className="flex items-center space-x-3">
                    <RiShieldFlashLine className="w-8 h-8 text-purple-500/70" />
                    <div>
                      <h4 className="text-gray-100">Network Vulnerability Report</h4>
                      <div className="flex items-center text-sm text-gray-400">
                        <RiTimeLine className="w-4 h-4 mr-1" />
                        <span>Generated 2 hours ago</span>
                      </div>
                    </div>
                  </div>
                  <button className="text-purple-500 hover:text-purple-400 p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-150">
                    <RiDownloadLine className="w-5 h-5" />
                  </button>
                </div>

                <div className="flex items-center justify-between p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors duration-150 group">
                  <div className="flex items-center space-x-3">
                    <RiServerLine className="w-8 h-8 text-purple-500/70" />
                    <div>
                      <h4 className="text-gray-100">System Security Audit</h4>
                      <div className="flex items-center text-sm text-gray-400">
                        <RiTimeLine className="w-4 h-4 mr-1" />
                        <span>Generated yesterday</span>
                      </div>
                    </div>
                  </div>
                  <button className="text-purple-500 hover:text-purple-400 p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-150">
                    <RiDownloadLine className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
          <div className="flex items-center mb-4">
            <RiFileChartLine className="w-6 h-6 text-purple-500 mr-3" />
            <h3 className="text-lg font-semibold text-gray-100">Generate Report</h3>
          </div>
          <div className="space-y-3">
            <button className="w-full text-left p-3 rounded bg-gray-800 text-gray-100 hover:bg-gray-700 transition-colors duration-150 flex items-center justify-between group">
              <div className="flex items-center">
                <RiRefreshLine className="w-5 h-5 mr-2 text-purple-500 group-hover:rotate-180 transition-transform duration-300" />
                <span>Network Scan</span>
              </div>
              <RiArrowRightSLine className="w-5 h-5 text-gray-400 group-hover:text-purple-500 transition-colors duration-150" />
            </button>
            <button className="w-full text-left p-3 rounded bg-gray-800 text-gray-100 hover:bg-gray-700 transition-colors duration-150 flex items-center justify-between group">
              <div className="flex items-center">
                <RiRefreshLine className="w-5 h-5 mr-2 text-purple-500 group-hover:rotate-180 transition-transform duration-300" />
                <span>Vulnerability Scan</span>
              </div>
              <RiArrowRightSLine className="w-5 h-5 text-gray-400 group-hover:text-purple-500 transition-colors duration-150" />
            </button>
            <button className="w-full text-left p-3 rounded bg-gray-800 text-gray-100 hover:bg-gray-700 transition-colors duration-150 flex items-center justify-between group">
              <div className="flex items-center">
                <RiRefreshLine className="w-5 h-5 mr-2 text-purple-500 group-hover:rotate-180 transition-transform duration-300" />
                <span>System Audit</span>
              </div>
              <RiArrowRightSLine className="w-5 h-5 text-gray-400 group-hover:text-purple-500 transition-colors duration-150" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 