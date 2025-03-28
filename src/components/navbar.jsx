import React from 'react'
import { NavLink,useNavigate } from 'react-router-dom'
import { 
  RiDashboardLine,
  RiFileList3Line,
  RiToolsLine,
  RiSettings4Line,
  RiLogoutBoxRLine,
  RiShieldKeyholeLine,
  RiUserLine,
  RiBellLine,
} from 'react-icons/ri'

export default function Navbar() {

  const navigate = useNavigate();

  const logout = () => {
    // cookies.remove('token');
    // localStorage.getItem('token')
    navigate('/');
  }

  return (
    <div className="h-screen w-72 fixed top-0 left-0 bg-gradient-to-b from-gray-900 via-gray-900 to-gray-800 text-gray-100 flex flex-col border-r border-gray-800/50 shadow-xl">
      {/* Logo Section */}
      <div className="p-6 border-b border-gray-800/50">
        <div className="flex items-center space-x-3 mb-6">
          <div className="p-2 bg-green-500/10 rounded-xl">
            <RiShieldKeyholeLine className="w-8 h-8 text-green-500" />
          </div>
          <div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent">
              Cyber X
            </h1>
            <p className="text-sm text-gray-400">Security Analysis Tool</p>
          </div>
        </div>

        {/* User Profile */}
        <div className="flex items-center space-x-4 p-3 bg-gray-800/50 rounded-xl mb-4 backdrop-blur-sm border border-gray-800/50 hover:shadow-green-900/10 hover:shadow-md transition-all duration-300">
          <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
            <RiUserLine className="w-5 h-5 text-green-500" />
          </div>
          <div className="flex-1">
            <h3 className="text-sm font-medium text-gray-200">Admin User</h3>
            <p className="text-xs text-gray-400">admin@cyberx.com</p>
          </div>
          <RiBellLine className="w-5 h-5 text-gray-400 hover:text-green-400 cursor-pointer transition-colors" />
        </div>
      </div>
      
      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-1">
        <NavLink 
          to="/dashboard" 
          className={({ isActive }) =>
            `flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-150 relative group ${
              isActive 
                ? 'bg-gradient-to-r from-green-600 to-emerald-600 text-white shadow-lg shadow-green-500/20' 
                : 'hover:bg-gray-800/50 text-gray-400 hover:text-white'
            }`
          }
        >
          <RiDashboardLine className="w-5 h-5" />
          <span className="font-medium">Dashboard</span>
        </NavLink>
        <NavLink 
          to="/reports" 
          className={({ isActive }) =>
            `flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-150 relative group ${
              isActive 
                ? 'bg-gradient-to-r from-green-600 to-emerald-600 text-white shadow-lg shadow-green-500/20' 
                : 'hover:bg-gray-800/50 text-gray-400 hover:text-white'
            }`
          }
        >
          <RiFileList3Line className="w-5 h-5" />
          <span className="font-medium">Reports</span>
        </NavLink>
        <NavLink 
          to="/tools" 
          className={({ isActive }) =>
            `flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-150 relative group ${
              isActive 
                ? 'bg-gradient-to-r from-green-600 to-emerald-600 text-white shadow-lg shadow-green-500/20' 
                : 'hover:bg-gray-800/50 text-gray-400 hover:text-white'
            }`
          }
        >
          <RiToolsLine className="w-5 h-5" />
          <span className="font-medium">Tools</span>
        </NavLink>
        <NavLink 
          to="/settings" 
          className={({ isActive }) =>
            `flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-150 relative group ${
              isActive 
                ? 'bg-gradient-to-r from-green-600 to-emerald-600 text-white shadow-lg shadow-green-500/20' 
                : 'hover:bg-gray-800/50 text-gray-400 hover:text-white'
            }`
          }
        >
          <RiSettings4Line className="w-5 h-5" />
          <span className="font-medium">Settings</span>
        </NavLink>
      </nav>

      {/* Footer/Logout Section */}
      <div className="p-4 border-t border-gray-800/50">
        <button 
          onClick={() => logout()}
          className="w-full px-4 py-3 rounded-xl text-left text-gray-400 hover:text-red-400 
                     hover:bg-red-500/10 flex items-center space-x-3 transition-colors duration-150
                     group"
        >
          <RiLogoutBoxRLine className="w-5 h-5 transition-transform duration-150 group-hover:translate-x-1" />
          <span className="font-medium">Logout</span>
        </button>
      </div>
    </div>
  )
}
