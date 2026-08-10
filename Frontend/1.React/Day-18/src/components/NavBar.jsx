import React from 'react'
import { NavLink } from 'react-router'

const NavBar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo区域 */}
          <div className="flex-shrink-0">
            <NavLink to="/" className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              YourBrand
            </NavLink>
          </div>

          {/* 导航链接 - 桌面端 */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                `relative px-4 py-2 text-sm font-medium transition-all duration-300 group ${
                  isActive 
                    ? 'text-indigo-600' 
                    : 'text-gray-700 hover:text-indigo-600'
                }`
              }
            >
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-600 to-purple-600 transition-all duration-300 group-hover:w-full"></span>
            </NavLink>
            
            <NavLink 
              to="/about" 
              className={({ isActive }) => 
                `relative px-4 py-2 text-sm font-medium transition-all duration-300 group ${
                  isActive 
                    ? 'text-indigo-600' 
                    : 'text-gray-700 hover:text-indigo-600'
                }`
              }
            >
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-600 to-purple-600 transition-all duration-300 group-hover:w-full"></span>
            </NavLink>
            
            <NavLink 
              to="/contact" 
              className={({ isActive }) => 
                `relative px-4 py-2 text-sm font-medium transition-all duration-300 group ${
                  isActive 
                    ? 'text-indigo-600' 
                    : 'text-gray-700 hover:text-indigo-600'
                }`
              }
            >
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-600 to-purple-600 transition-all duration-300 group-hover:w-full"></span>
            </NavLink>
          </div>

          {/* CTA按钮 */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="px-6 py-2.5 text-sm font-medium text-white bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full hover:shadow-lg hover:shadow-indigo-500/30 transition-all duration-300 transform hover:scale-105">
              Get Started
            </button>
          </div>

          {/* 移动端菜单按钮 */}
          <div className="md:hidden">
            <button className="p-2 rounded-lg text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* 移动端菜单 - 默认隐藏 */}
      <div className="md:hidden hidden">
        <div className="px-4 pt-4 pb-6 space-y-2 bg-white border-t border-gray-100">
          <NavLink 
            to="/" 
            className={({ isActive }) => 
              `block px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                isActive 
                  ? 'bg-indigo-50 text-indigo-600' 
                  : 'text-gray-700 hover:bg-gray-50'
              }`
            }
          >
            Home
          </NavLink>
          <NavLink 
            to="/about" 
            className={({ isActive }) => 
              `block px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                isActive 
                  ? 'bg-indigo-50 text-indigo-600' 
                  : 'text-gray-700 hover:bg-gray-50'
              }`
            }
          >
            About
          </NavLink>
          <NavLink 
            to="/contact" 
            className={({ isActive }) => 
              `block px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                isActive 
                  ? 'bg-indigo-50 text-indigo-600' 
                  : 'text-gray-700 hover:bg-gray-50'
              }`
            }
          >
            Contact
          </NavLink>
          <button className="w-full mt-4 px-6 py-3 text-base font-medium text-white bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg hover:shadow-lg transition-all">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  )
}

export default NavBar