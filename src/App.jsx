import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import MarkdownPage from './components/MarkdownPage'
import Home from './pages/Home'

// Web Resources still uses JSX because it has a LOT of links that are nicer in JSX
import WebResources from './pages/general/WebResources'

function App() {
    return (
        <Layout>
            <Routes>
                <Route path="/" element={<Home />} />

                {/* General - Markdown files */}
                <Route path="/general/lab-tools" element={<MarkdownPage file="general/lab-tools.md" />} />
                <Route path="/general/uni-resources" element={<MarkdownPage file="general/uni-resources.md" />} />
                <Route path="/general/web-resources" element={<WebResources />} />

                {/* Systems - Markdown files */}
                <Route path="/systems/phases" element={<MarkdownPage file="systems/phases.md" />} />
                <Route path="/systems/design-reviews" element={<MarkdownPage file="systems/design-reviews.md" />} />

                {/* Mechanical - Markdown files */}
                <Route path="/mechanical/solidworks" element={<MarkdownPage file="mechanical/solidworks.md" />} />
                <Route path="/mechanical/3d-printers" element={<MarkdownPage file="mechanical/3d-printers.md" />} />

                {/* Electrical - Markdown files */}
                <Route path="/electrical/batteries" element={<MarkdownPage file="electrical/batteries.md" />} />
                <Route path="/electrical/cables-connectors" element={<MarkdownPage file="electrical/cables-connectors.md" />} />

                {/* Software - Markdown files */}
                <Route path="/software/ros" element={<MarkdownPage file="software/ros.md" />} />
                <Route path="/software/arduino" element={<MarkdownPage file="software/arduino.md" />} />
            </Routes>
        </Layout>
    )
}

export default App
