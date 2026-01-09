import React from 'react'
import { BsStars } from "react-icons/bs";

function Header() {
  return (
      <header className="px-6 py-4 top-0 z-30">
          <div className="max-w-7xl mx-auto flex items-center justify-between rounded-xl px-4 py-3 border border-slate-700/30 bg-slate-900/60 backdrop-blur-md backdrop-saturate-150 shadow-xl">
            <div className="flex items-center gap-3">
              <BsStars size={32} className="text-gray-200" />
              <span className="text-xl font-semibold bg-linear-to-r from-cyan-500 via-indigo-500 to-purple-500 bg-clip-text text-transparent">IntelliWrite</span>
            </div>
            <div className="text-sm text-slate-300">Your AI-Powered Application Assistant</div>
          </div>
        </header>
  )
}

export default Header