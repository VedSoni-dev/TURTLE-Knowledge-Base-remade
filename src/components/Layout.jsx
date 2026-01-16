import { useState } from 'react'
import Sidebar from './Sidebar'

function Layout({ children }) {
    const [sidebarOpen, setSidebarOpen] = useState(false)

    return (
        <div className="app-layout">
            {/* Mobile menu toggle */}
            <button
                className="mobile-menu-toggle"
                onClick={() => setSidebarOpen(!sidebarOpen)}
                aria-label="Toggle menu"
            >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    {sidebarOpen ? (
                        <path d="M18 6L6 18M6 6l12 12" />
                    ) : (
                        <path d="M3 12h18M3 6h18M3 18h18" />
                    )}
                </svg>
            </button>

            {/* Mobile overlay */}
            <div
                className={`mobile-overlay ${sidebarOpen ? 'open' : ''}`}
                onClick={() => setSidebarOpen(false)}
            />

            {/* Sidebar */}
            <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

            {/* Main content */}
            <main className="main-content">
                <div className="content-wrapper">
                    {children}
                </div>
            </main>
        </div>
    )
}

export default Layout
