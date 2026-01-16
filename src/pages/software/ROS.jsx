import Article from '../../components/Article'
import Table from '../../components/Table'
import ExternalLink from '../../components/ExternalLink'

function ROS() {
    return (
        <Article title="Robot Operating System (ROS)">
            <h2>Quick Links</h2>
            <ul>
                <li><ExternalLink href="http://wiki.ros.org">ROS Wiki</ExternalLink>: primary reference for distro details, APIs, and package index.</li>
                <li><ExternalLink href="https://docs.ros.org/en/humble">ROS 2 Documentation</ExternalLink>: jump into current ROS 2 guides (switch distro in the top left).</li>
            </ul>

            <h2>Recommended Distros</h2>

            <Table
                headers={['Track', 'Distro (ROS)', 'Ubuntu', 'Notes']}
                rows={[
                    ['LTS', 'Jazzy Jalisco (ROS 2)', '24.04 (Noble)', 'Latest LTS; best for new development where Ubuntu 24.04 is available.'],
                    ['LTS', 'Humble Hawksbill (ROS 2)', '22.04 (Jammy)', 'Stable, widely used; supported through May 2027.'],
                    ['LTS', 'Noetic Ninjemys (ROS 1)', '20.04 (Focal)', 'Legacy ROS 1; maintenance ends May 2025.'],
                    ['STS', 'Iron Irwini (ROS 2)', '22.04 (Jammy)', 'Short-term support; bridge path toward Jazzy.'],
                ]}
            />

            <h2>Starter Tutorials</h2>
            <ul>
                <li>ROS 2: <ExternalLink href="https://docs.ros.org/en/humble/Tutorials.html">Core tutorials (beginner, intermediate)</ExternalLink></li>
                <li>ROS 2: <ExternalLink href="https://docs.ros.org/en/humble/Tutorials/Beginner-Client-Libraries/Understanding-ROS2-Nodes/Creating-Your-First-ROS2-Package-Py.html">Writing a simple publisher/subscriber (Python)</ExternalLink></li>
                <li>ROS 2: <ExternalLink href="https://docs.ros.org/en/humble/Tutorials/Intermediate/URDF/Modeling-a-Robot-with-URDF.html">URDF + RViz quickstart</ExternalLink></li>
                <li>ROS 1: <ExternalLink href="http://wiki.ros.org/ROS/Tutorials">Official wiki tutorials</ExternalLink></li>
                <li>Simulation: <ExternalLink href="https://classic.gazebosim.org/tutorials?tut=ros_overview">Gazebo-ROS integration overview</ExternalLink></li>
            </ul>

            <h2>Workspace Structure</h2>
            <p><em>TODO: Define how catkin/colcon workspaces are organized in the repo.</em></p>

            <h2>Node Development</h2>
            <p><em>TODO: Outline expectations for node composition, parameters, and logging.</em></p>

            <h2>Simulation & Testing</h2>
            <p><em>TODO: Document Gazebo/ignition workflows and automated tests.</em></p>

            <h2>Deployment</h2>
            <p><em>TODO: Explain how launches are run on robots and how configs are versioned.</em></p>
        </Article>
    )
}

export default ROS
