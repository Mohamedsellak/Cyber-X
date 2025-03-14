import React from 'react'
import { NavLink } from 'react-router-dom'
import { 
  RiDashboardLine,
  RiFileList3Line,
  RiToolsLine,
  RiSettings4Line,
  RiLogoutBoxRLine,
  RiShieldCheckLine
} from 'react-icons/ri'

export default function Navbar() {
  return (
    <div className="h-screen w-64 bg-gray-900 text-gray-100 p-4 flex flex-col border-r border-gray-800">
      <div className="mb-8 flex items-center space-x-3">
        <RiShieldCheckLine className="w-8 h-8 text-purple-500" />
        <div>
          <h1 className="text-2xl font-bold text-purple-500">Cyber X</h1>
          <p className="text-sm text-gray-400">Security Analysis Tool</p>
        </div>
      </div>
      
      <nav className="space-y-2 flex-1">
        <NavLink 
          to="/home" 
          className={({ isActive }) =>
            `flex items-center space-x-2 p-2 rounded-lg transition-colors duration-150 ${
              isActive ? 'bg-purple-500 text-white' : 'hover:bg-gray-800'
            }`
          }
        >
          <RiDashboardLine className="w-5 h-5" />
          <span>Dashboard</span>
        </NavLink>
        <NavLink 
          to="/reports" 
          className={({ isActive }) =>
            `flex items-center space-x-2 p-2 rounded-lg transition-colors duration-150 ${
              isActive ? 'bg-purple-500 text-white' : 'hover:bg-gray-800'
            }`
          }
        >
          <RiFileList3Line className="w-5 h-5" />
          <span>Reports</span>
        </NavLink>
        <NavLink 
          to="/tools" 
          className={({ isActive }) =>
            `flex items-center space-x-2 p-2 rounded-lg transition-colors duration-150 ${
              isActive ? 'bg-purple-500 text-white' : 'hover:bg-gray-800'
            }`
          }
        >
          <RiToolsLine className="w-5 h-5" />
          <span>Tools</span>
        </NavLink>
        <NavLink 
          to="/settings" 
          className={({ isActive }) =>
            `flex items-center space-x-2 p-2 rounded-lg transition-colors duration-150 ${
              isActive ? 'bg-purple-500 text-white' : 'hover:bg-gray-800'
            }`
          }
        >
          <RiSettings4Line className="w-5 h-5" />
          <span>Settings</span>
        </NavLink>
      </nav>

      <div className="mt-auto pt-4 border-t border-gray-800">
        <button 
          onClick={() => {window.location.href = '/login'}}
          className="w-full p-2 rounded-lg text-left text-red-500 hover:bg-gray-800 flex items-center space-x-2 transition-colors duration-150"
        >
          <RiLogoutBoxRLine className="w-5 h-5" />
          <span>Logout</span>
        </button>
      </div>
    </div>
  )
}
