import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { navigation, externalLinks } from '../data/navigation'

function Sidebar({ isOpen, onClose }) {
    const [expanded, setExpanded] = useState(['General', 'Systems', 'Mechanical', 'Electrical', 'Software'])

    const toggleCategory = (title) => {
        setExpanded(prev =>
            prev.includes(title)
                ? prev.filter(t => t !== title)
                : [...prev, title]
        )
    }

    return (
        <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
            {/* Logo */}
            <div className="sidebar-header">
                <Link to="/" className="sidebar-logo" onClick={onClose}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10" />
                        <path d="M12 16v-4M12 8h.01" />
                        <path d="M8 14s1.5 2 4 2 4-2 4-2" />
                    </svg>
                    <div>
                        <h1>TURTLE</h1>
                        <span>Knowledge Base</span>
                    </div>
                </Link>
            </div>

            {/* Navigation */}
            <nav className="sidebar-nav">
                {navigation.map((category) => (
                    <div
                        key={category.title}
                        className={`nav-category ${expanded.includes(category.title) ? 'expanded' : ''}`}
                    >
                        <button
                            className="nav-category-title"
                            onClick={() => toggleCategory(category.title)}
                        >
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M9 18l6-6-6-6" />
                            </svg>
                            {category.title}
                        </button>
                        <div className="nav-links">
                            {category.items.map((item) => (
                                <NavLink
                                    key={item.path}
                                    to={item.path}
                                    className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                                    onClick={onClose}
                                >
                                    {item.title}
                                </NavLink>
                            ))}
                        </div>
                    </div>
                ))}
            </nav>

            {/* External Links */}
            <div className="sidebar-footer">
                {externalLinks.slice(0, 2).map((link) => (
                    <a
                        key={link.url}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                            <polyline points="15 3 21 3 21 9" />
                            <line x1="10" y1="14" x2="21" y2="3" />
                        </svg>
                        {link.title}
                    </a>
                ))}
            </div>
        </aside>
    )
}

export default Sidebar
