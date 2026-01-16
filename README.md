# TURTLE Knowledge Base

A modern documentation site for TURTLE Robotics, built with React and deployed on Vercel.

## 📝 How to Edit Content (No Coding Required!)

All documentation pages are **simple Markdown files** located in:

```
public/content/
├── general/
│   ├── lab-tools.md
│   └── uni-resources.md
├── systems/
│   ├── phases.md
│   └── design-reviews.md
├── mechanical/
│   ├── solidworks.md
│   └── 3d-printers.md
├── electrical/
│   ├── batteries.md
│   └── cables-connectors.md
└── software/
    ├── ros.md
    └── arduino.md
```

### Editing a Page

1. Open any `.md` file in the `public/content/` folder
2. Edit using Markdown syntax (see guide below)
3. Save the file
4. Changes appear automatically on the site!

---

## 🎨 Markdown Formatting Guide

### Headings

```markdown
# Main Title (H1) - only one per page at the top
## Section (H2)
### Subsection (H3)
#### Smaller heading (H4)
```

### Text Formatting

```markdown
**Bold text**
*Italic text*
`code inline`
```

### Lists

```markdown
- Bullet point 1
- Bullet point 2
  - Nested bullet

1. Numbered item 1
2. Numbered item 2
```

### Links

```markdown
[Link text](https://example.com)
```

### Tables

```markdown
| Column 1 | Column 2 | Column 3 |
|----------|----------|----------|
| Data 1   | Data 2   | Data 3   |
| Data 4   | Data 5   | Data 6   |
```

### Notes and Warnings

Use blockquotes with special prefixes:

```markdown
> **Note:** This is a helpful note.

> **⚠️ Warning:** This is an important warning.
```

### Horizontal Line (Section Break)

```markdown
---
```

### Code Blocks

````markdown
```python
def hello():
    print("Hello World")
```
````

---

## 🚀 Adding a New Page

1. Create a new `.md` file in the appropriate folder under `public/content/`
2. Start with a title: `# Your Page Title`
3. Add your content using Markdown
4. To add it to navigation, edit `src/data/navigation.js` and add:
   ```javascript
   { title: 'Your Page Title', path: '/category/your-page' }
   ```
5. Add a route in `src/App.jsx`:
   ```jsx
   <Route path="/category/your-page" element={<MarkdownPage file="category/your-page.md" />} />
   ```

---

## 💻 Local Development

```bash
# Install dependencies (first time only)
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

---

## 🌐 Deploying to Vercel

1. Push changes to GitHub
2. Vercel automatically deploys from the main branch
3. That's it!

---

## 📁 Project Structure

```
├── public/
│   └── content/          ← EDIT THESE MARKDOWN FILES
│       ├── general/
│       ├── systems/
│       ├── mechanical/
│       ├── electrical/
│       └── software/
├── src/
│   ├── components/       ← React components (don't edit)
│   ├── pages/            ← Page components (mostly auto-loaded)
│   ├── data/
│   │   └── navigation.js ← Edit to add new nav links
│   └── styles/
│       └── index.css     ← Edit to change colors/styling
├── index.html
├── package.json
└── vercel.json
```

---

## Need Help?

- **Markdown Guide**: https://www.markdownguide.org/basic-syntax/
- **GitHub Markdown**: https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax
