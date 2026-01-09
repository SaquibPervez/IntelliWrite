import React from 'react'

function Footer() {
  return (
    <footer className="px-6 py-8">
          <div className="max-w-7xl mx-auto text-center text-slate-400 text-sm">
            © {new Date().getFullYear()} IntelliWrite. All rights reserved.
          </div>
        </footer>
  )
}

export default Footer