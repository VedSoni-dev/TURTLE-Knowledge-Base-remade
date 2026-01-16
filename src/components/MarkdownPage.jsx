import { useState, useEffect } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

function MarkdownPage({ file, title }) {
    const [content, setContent] = useState('')
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        setLoading(true)
        fetch(`/content/${file}`)
            .then(res => {
                if (!res.ok) throw new Error('File not found')
                return res.text()
            })
            .then(text => {
                setContent(text)
                setLoading(false)
            })
            .catch(err => {
                setError(err.message)
                setLoading(false)
            })
    }, [file])

    if (loading) {
        return (
            <article className="article">
                <div className="article-content">
                    <p style={{ color: 'var(--text-muted)' }}>Loading...</p>
                </div>
            </article>
        )
    }

    if (error) {
        return (
            <article className="article">
                <div className="article-content">
                    <p style={{ color: 'var(--danger-text)' }}>Error loading content: {error}</p>
                </div>
            </article>
        )
    }

    // Extract title from markdown (first # heading) if not provided
    const extractedTitle = title || content.match(/^#\s+(.+)/m)?.[1] || 'Untitled'

    // Remove the first heading from content since we display it separately
    const contentWithoutTitle = content.replace(/^#\s+.+\n+/, '')

    return (
        <article className="article">
            <header className="article-header">
                <h1 className="article-title">{extractedTitle}</h1>
            </header>
            <div className="article-content">
                <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                    components={{
                        // Custom rendering for blockquotes to handle notes/warnings
                        blockquote: ({ children }) => {
                            const text = children?.toString() || ''
                            if (text.includes('⚠️ Warning:') || text.includes('Warning:')) {
                                return <div className="callout warning"><div className="callout-content">{children}</div></div>
                            }
                            if (text.includes('Note:')) {
                                return <div className="callout note"><div className="callout-content">{children}</div></div>
                            }
                            return <blockquote>{children}</blockquote>
                        },
                        // Make external links open in new tab
                        a: ({ href, children }) => (
                            <a href={href} target="_blank" rel="noopener noreferrer">{children}</a>
                        ),
                        // Wrap tables for horizontal scrolling
                        table: ({ children }) => (
                            <div className="table-wrapper">
                                <table>{children}</table>
                            </div>
                        ),
                    }}
                >
                    {contentWithoutTitle}
                </ReactMarkdown>
            </div>
        </article>
    )
}

export default MarkdownPage
