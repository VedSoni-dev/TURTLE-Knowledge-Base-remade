import { useState } from 'react'

function Tabs({ children, labels }) {
    const [activeTab, setActiveTab] = useState(0)
    const childArray = Array.isArray(children) ? children : [children]

    return (
        <div className="tabs">
            <div className="tabs-header">
                {labels.map((label, index) => (
                    <button
                        key={index}
                        className={`tab-button ${activeTab === index ? 'active' : ''}`}
                        onClick={() => setActiveTab(index)}
                    >
                        {label}
                    </button>
                ))}
            </div>
            <div className="tab-content">
                {childArray[activeTab]}
            </div>
        </div>
    )
}

function Tab({ children }) {
    return <>{children}</>
}

export { Tabs, Tab }
