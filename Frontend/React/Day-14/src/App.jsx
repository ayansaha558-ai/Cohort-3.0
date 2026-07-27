import React from 'react'
import NavBar from './components/NavBar'
import AppRoutes from './routes/AppRoutes'

const App = () => {
  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-amber-50'>
      <div className="navbar bg-slate-800/90 backdrop-blur-sm border-b border-slate-700/50 shadow-lg shadow-slate-900/20">
        <NavBar/>
      </div>
      <AppRoutes/>
    </div>
  )
}

export default App