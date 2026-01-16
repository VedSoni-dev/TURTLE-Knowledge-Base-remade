function Article({ title, children }) {
    return (
        <article className="article">
            <header className="article-header">
                <h1 className="article-title">{title}</h1>
            </header>
            <div className="article-content">
                {children}
            </div>
        </article>
    )
}

export default Article
