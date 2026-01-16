import Article from '../../components/Article'
import ExternalLink from '../../components/ExternalLink'

function UniResources() {
    return (
        <Article title="University Resources">
            <p>This is a collection of useful online and physical resources from Texas A&M in College Station.</p>

            <ul>
                <li>
                    <strong>Zachry Fisher Engineering Design Center (FEDC)</strong>
                    <ul>
                        <li><ExternalLink href="https://engineering.tamu.edu/fedc/">FEDC Website</ExternalLink></li>
                        <li>CSWA Certification waivers for students</li>
                        <li>Red badge general entry with tool checkout</li>
                        <li>Pop up courses and workshops</li>
                    </ul>
                </li>

                <li>
                    <strong>Mechanical Engineering Rapid Prototyping Studio (RPS)</strong>
                    <ul>
                        <li><ExternalLink href="https://me.tamu.edu/facilities/rapid-prototyping-studio.html">RPS Website</ExternalLink></li>
                        <li>3D printing, laser cutting, CNC machining</li>
                        <li>Credits provided to students in MEEN courses (including non-MEEN students)</li>
                    </ul>
                </li>

                <li>
                    <strong>A&M Architecture Print Shop</strong>
                    <ul>
                        <li><ExternalLink href="https://archone.tamu.edu/print-shop/">Architecture Print Shop Website</ExternalLink></li>
                        <li>Large format printing (posters, banners, etc)</li>
                        <li>Affordable pricing for students (print credits not taken)</li>
                    </ul>
                </li>

                <li>
                    <strong>Texas A&M Libraries</strong>
                    <ul>
                        <li><ExternalLink href="https://library.tamu.edu/">TAMU Libraries Website</ExternalLink></li>
                        <li>Access to textbooks, and online resources</li>
                    </ul>
                </li>
            </ul>

            <h2>Relevant Coursework</h2>

            <div className="table-wrapper">
                <table>
                    <thead>
                        <tr>
                            <th>Department</th>
                            <th>Number</th>
                            <th>Course Name / Topic</th>
                            <th>Major Textbook (recommendation)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>MEEN</td>
                            <td>408</td>
                            <td>Mechanics of Robotic Manipulators</td>
                            <td><ExternalLink href="https://hades.mech.northwestern.edu/images/7/7f/MR.pdf">Modern Robotics (Park and Lynch)</ExternalLink></td>
                        </tr>
                        <tr>
                            <td>CSCE</td>
                            <td>452</td>
                            <td>Robotics and Spatial Intelligence</td>
                            <td><ExternalLink href="https://lavalle.pl/planning/book.pdf">Planning Algorithms (LaValle)</ExternalLink></td>
                        </tr>
                        <tr>
                            <td>ECEN</td>
                            <td>420</td>
                            <td>Linear Control Systems</td>
                            <td><em>Modern Control Systems (Dorf & Kapor)</em></td>
                        </tr>
                        <tr>
                            <td>MATH</td>
                            <td>407</td>
                            <td>Complex Analysis</td>
                            <td>No textbook endorsed.</td>
                        </tr>
                        <tr>
                            <td>MEEN</td>
                            <td>364</td>
                            <td>Dynamic Systems and Controls</td>
                            <td>No textbook endorsed.</td>
                        </tr>
                        <tr>
                            <td>ECEN</td>
                            <td>314</td>
                            <td>Signals and Systems</td>
                            <td>No textbook endorsed.</td>
                        </tr>
                        <tr>
                            <td>CSCE</td>
                            <td>221</td>
                            <td>Data Structures and Algorithms</td>
                            <td>No textbook endorsed.</td>
                        </tr>
                        <tr>
                            <td>MATH</td>
                            <td>304/311</td>
                            <td>Linear Algebra*</td>
                            <td>No textbook endorsed.</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h2>Robotics Affiliated Faculty</h2>

            <div className="table-wrapper">
                <table>
                    <thead>
                        <tr>
                            <th>Professor</th>
                            <th>Department</th>
                            <th>Lab</th>
                            <th>Research Interest</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Robert Ambrose</td>
                            <td>Mechanical</td>
                            <td><ExternalLink href="https://rad.engr.tamu.edu/">RAD Lab</ExternalLink></td>
                            <td>Space Robotics</td>
                        </tr>
                        <tr>
                            <td>Jason O'Kane</td>
                            <td>Computer Science</td>
                            <td><ExternalLink href="https://aarrg.jokane.net/">AARRG</ExternalLink></td>
                            <td>Autonomy & Planning</td>
                        </tr>
                        <tr>
                            <td>Gray Thomas</td>
                            <td>Mechanical</td>
                            <td><ExternalLink href="https://herc.engr.tamu.edu/">HERC Lab</ExternalLink></td>
                            <td>Controls & Exoskeletons</td>
                        </tr>
                        <tr>
                            <td>Mingui Zheng</td>
                            <td>Mechanical</td>
                            <td><ExternalLink href="https://zh.engr.tamu.edu/">CTRLROBOT Lab</ExternalLink></td>
                            <td>Human Robot Interaction</td>
                        </tr>
                        <tr>
                            <td>Kiju Lee</td>
                            <td>Mechanical</td>
                            <td><ExternalLink href="https://art.engr.tamu.edu/">ART Lab</ExternalLink></td>
                            <td>Art in Robotics, Interfaces</td>
                        </tr>
                        <tr>
                            <td>Sivakumar Rathinam</td>
                            <td>Mechanical</td>
                            <td><ExternalLink href="https://autonomy.engr.tamu.edu/">Autonomous Systems Lab</ExternalLink></td>
                            <td>Autonomous Vehicles</td>
                        </tr>
                        <tr>
                            <td>Manoranjan Majji</td>
                            <td>Aerospace</td>
                            <td><ExternalLink href="https://lasr.tamu.edu/">LASR Lab</ExternalLink></td>
                            <td>Space Robotics & Dynamics/Controls</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </Article>
    )
}

export default UniResources
