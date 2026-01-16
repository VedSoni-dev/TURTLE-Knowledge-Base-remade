import { Link } from 'react-router-dom'
import { Note } from '../components/Callouts'
import { externalLinks } from '../data/navigation'

function Home() {
    return (
        <div className="home">
            <div className="home-hero">
                <h1>Welcome to the TURTLE Robotics Knowledge Base!</h1>
                <p>
                    This knowledge base is designed to provide a supplementary resource for TURTLE Robotics
                    members and anyone interested in robotics. It contains documentation on the common tools,
                    software, and hardware used in our projects.
                </p>
            </div>

            <div className="home-note">
                <Note>This wiki is under active development.</Note>
            </div>

            <div className="home-section">
                <h2>Quick Start</h2>
                <div className="home-links">
                    <Link to="/general/lab-tools" className="home-link">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                        </svg>
                        Lab Safety & Tools
                    </Link>
                    <Link to="/systems/phases" className="home-link">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                        </svg>
                        Phases of Development
                    </Link>
                    <Link to="/mechanical/3d-printers" className="home-link">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <rect x="2" y="6" width="20" height="12" rx="2" />
                            <path d="M12 12h.01" />
                            <path d="M17 12h.01" />
                            <path d="M7 12h.01" />
                        </svg>
                        3D Printing Guide
                    </Link>
                    <Link to="/software/ros" className="home-link">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <polyline points="16 18 22 12 16 6" />
                            <polyline points="8 6 2 12 8 18" />
                        </svg>
                        ROS Documentation
                    </Link>
                </div>
            </div>

            <div className="home-section">
                <h2>Other TURTLE Resources</h2>
                <div className="home-links">
                    {externalLinks.map((link) => (
                        <a
                            key={link.url}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="home-link"
                        >
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                                <polyline points="15 3 21 3 21 9" />
                                <line x1="10" y1="14" x2="21" y2="3" />
                            </svg>
                            {link.title}
                        </a>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Home
