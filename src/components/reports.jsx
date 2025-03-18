import React from 'react';
import {
  RiFileTextLine, RiTimeLine, RiDownloadLine,
  RiFileChartLine, RiShieldFlashLine, RiServerLine,
  RiRefreshLine, RiArrowRightSLine, RiAlertLine,
  RiCheckLine, RiLoader4Line
} from 'react-icons/ri';

export default function Reports() {
  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-3 text-purple-500 flex items-center">
          <RiFileTextLine className="w-8 h-8 mr-3" />
          Security Reports
        </h1>
        <div className="flex items-center justify-between">
          <p className="text-gray-400">View and generate detailed security analysis reports</p>
          <div className="flex items-center space-x-4">
            <button className="px-4 py-2 bg-purple-500 hover:bg-purple-600 rounded-lg text-white flex items-center">
              <RiRefreshLine className="w-5 h-5 mr-2" />
              Refresh All
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
            <div className="space-y-4">
              <div className="border-b border-gray-800 pb-4">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center">
                    <RiFileTextLine className="w-6 h-6 text-purple-500 mr-3" />
                    <h3 className="text-xl font-semibold text-gray-100">Recent Reports</h3>
                  </div>
                  <select className="bg-gray-800 text-gray-300 px-3 py-2 rounded-lg border border-gray-700">
                    <option>All Reports</option>
                    <option>Network Scans</option>
                    <option>Security Audits</option>
                  </select>
                </div>

                <div className="space-y-4">
                  <ReportCard
                    icon={<RiShieldFlashLine className="w-8 h-8" />}
                    title="Network Vulnerability Report"
                    time="2 hours ago"
                    status="completed"
                    severity="high"
                  />
                  <ReportCard
                    icon={<RiServerLine className="w-8 h-8" />}
                    title="System Security Audit"
                    time="yesterday"
                    status="in-progress"
                    severity="medium"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
            <h3 className="text-lg font-semibold text-gray-100 mb-4">Report Statistics</h3>
            <div className="grid grid-cols-3 gap-4">
              <StatCard title="Total Reports" value="24" trend="+3" />
              <StatCard title="Critical Issues" value="5" trend="-2" />
              <StatCard title="Resolved" value="19" trend="+5" />
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center">
                <RiFileChartLine className="w-6 h-6 text-purple-500 mr-3" />
                <h3 className="text-xl font-semibold text-gray-100">Generate Report</h3>
              </div>
            </div>
            <div className="space-y-3">
              <ScanButton title="Network Scan" description="Full network analysis" />
              <ScanButton title="Vulnerability Scan" description="Security weaknesses" />
              <ScanButton title="System Audit" description="System health check" />
            </div>
          </div>

          <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
            <h3 className="text-lg font-semibold text-gray-100 mb-4">Quick Actions</h3>
            <div className="space-y-2">
              <button className="w-full text-left p-3 rounded bg-purple-500/10 text-purple-400 hover:bg-purple-500/20 transition-colors duration-150">
                Export All Reports
              </button>
              <button className="w-full text-left p-3 rounded bg-purple-500/10 text-purple-400 hover:bg-purple-500/20 transition-colors duration-150">
                Schedule Scan
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const ReportCard = ({ icon, title, time, status, severity }) => {
  const severityColors = {
    high: 'text-red-400',
    medium: 'text-yellow-400',
    low: 'text-green-400'
  };

  const statusIcons = {
    'completed': <RiCheckLine className="w-5 h-5 text-green-400" />,
    'in-progress': <RiLoader4Line className="w-5 h-5 text-blue-400 animate-spin" />,
    'failed': <RiAlertLine className="w-5 h-5 text-red-400" />
  };

  return (
    <div className="flex items-center justify-between p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-all duration-150 group border border-gray-700">
      <div className="flex items-center space-x-4">
        <div className="text-purple-500/70">{icon}</div>
        <div>
          <h4 className="text-gray-100 font-medium">{title}</h4>
          <div className="flex items-center space-x-3 text-sm">
            <div className="flex items-center text-gray-400">
              <RiTimeLine className="w-4 h-4 mr-1" />
              <span>{time}</span>
            </div>
            <div className="flex items-center">
              {statusIcons[status]}
              <span className="ml-1 text-gray-400 capitalize">{status}</span>
            </div>
            <span className={`${severityColors[severity]} capitalize`}>{severity}</span>
          </div>
        </div>
      </div>
      <button className="text-purple-500 hover:text-purple-400 p-2 opacity-0 group-hover:opacity-100 transition-all duration-150">
        <RiDownloadLine className="w-5 h-5" />
      </button>
    </div>
  );
};

const StatCard = ({ title, value, trend }) => (
  <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
    <h4 className="text-gray-400 text-sm mb-2">{title}</h4>
    <div className="flex items-end justify-between">
      <span className="text-2xl font-bold text-gray-100">{value}</span>
      <span className={`text-sm ${trend.startsWith('+') ? 'text-green-400' : 'text-red-400'}`}>
        {trend}
      </span>
    </div>
  </div>
);

const ScanButton = ({ title, description }) => (
  <button className="w-full text-left p-4 rounded bg-gray-800 hover:bg-gray-700 transition-colors duration-150 group border border-gray-700">
    <div className="flex items-center justify-between">
      <div>
        <div className="flex items-center text-gray-100">
          <RiRefreshLine className="w-5 h-5 mr-2 text-purple-500 group-hover:rotate-180 transition-transform duration-300" />
          <span className="font-medium">{title}</span>
        </div>
        <p className="text-sm text-gray-400 mt-1">{description}</p>
      </div>
      <RiArrowRightSLine className="w-5 h-5 text-gray-400 group-hover:text-purple-500 transition-colors duration-150" />
    </div>
  </button>
);