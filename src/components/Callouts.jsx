function Note({ children, title = "Note" }) {
    return (
        <div className="callout note">
            <div className="callout-title">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 16v-4M12 8h.01" />
                </svg>
                {title}
            </div>
            <div className="callout-content">{children}</div>
        </div>
    )
}

function Warning({ children, title = "Warning" }) {
    return (
        <div className="callout warning">
            <div className="callout-title">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                    <line x1="12" y1="9" x2="12" y2="13" />
                    <line x1="12" y1="17" x2="12.01" y2="17" />
                </svg>
                {title}
            </div>
            <div className="callout-content">{children}</div>
        </div>
    )
}

function Danger({ children, title = "Caution" }) {
    return (
        <div className="callout danger">
            <div className="callout-title">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="15" y1="9" x2="9" y2="15" />
                    <line x1="9" y1="9" x2="15" y2="15" />
                </svg>
                {title}
            </div>
            <div className="callout-content">{children}</div>
        </div>
    )
}

function Tip({ children, title = "Tip" }) {
    return (
        <div className="callout tip">
            <div className="callout-title">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 18h6M10 22h4M12 2v1M12 21v-6" />
                    <path d="M4.22 10.22l.77-.77M18.36 5.64l.71-.71M1 12h2M21 12h2M4.22 13.78l.77.77M18.36 18.36l.71.71" />
                    <circle cx="12" cy="9" r="4" />
                </svg>
                {title}
            </div>
            <div className="callout-content">{children}</div>
        </div>
    )
}

export { Note, Warning, Danger, Tip }
