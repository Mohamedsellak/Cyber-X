import React from 'react'

export default function Home() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold mb-2 text-purple-500">Welcome to Cyber X</h1>
        <p className="text-gray-400">Your comprehensive security analysis dashboard</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
          <h3 className="text-lg font-semibold mb-2 text-gray-100">Security Status</h3>
          <p className="text-gray-400">System status: Protected</p>
          <div className="mt-4">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-600 text-white">
              Active
            </span>
          </div>
        </div>
        
        <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
          <h3 className="text-lg font-semibold mb-2 text-gray-100">Recent Scans</h3>
          <p className="text-gray-400">No recent scans</p>
          <button className="mt-4 text-purple-500 text-sm hover:text-purple-400">
            Run New Scan →
          </button>
        </div>
        
        <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
          <h3 className="text-lg font-semibold mb-2 text-gray-100">Quick Actions</h3>
          <div className="space-y-2">
            <button className="w-full text-left p-2 rounded bg-gray-800 text-gray-100 hover:bg-gray-700">
              Network Scan
            </button>
            <button className="w-full text-left p-2 rounded bg-gray-800 text-gray-100 hover:bg-gray-700">
              Vulnerability Check
            </button>
            <button className="w-full text-left p-2 rounded bg-gray-800 text-gray-100 hover:bg-gray-700">
              Security Report
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
