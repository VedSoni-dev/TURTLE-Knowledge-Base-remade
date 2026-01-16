import Article from '../../components/Article'

function DesignReviews() {
    return (
        <Article title="Design Reviews (DRs)">
            <h2>Introduction</h2>
            <p>
                Design reviews serve to evaluate the project's progress throughout its development process. Members of the
                Design Review Committee will be present at each DR presentation to identify issues and provide technical feedback.
                DRs are expected to last 60–90 minutes each. They are by default public, allowing all TURTLE members to attend.
            </p>

            <ol>
                <li>Project leads must submit their deliverables beforehand (2~3 days before).</li>
                <li>Project leads may submit a list of topics they may specifically want detailed feedback on.</li>
                <li>
                    Project leads may choose to do one or two DRs per semester. They are by default Continuing DRs.
                    <ol type="a">
                        <li>1 DR: One Saturday in the midterm of the semester.</li>
                        <li>2 DRs: Two Saturdays in the thirds of the semester. Transition DRs (PDR/CDR) will be done at the second third of the semester.</li>
                    </ol>
                </li>
                <li>Project subteam leads are expected to attend to present and explain their decisions and design choices. It is encouraged that project members are involved in making the design review deliverables.</li>
                <li>Project leads may choose to close their DR from the public.</li>
            </ol>

            <hr />

            <h2>Continuing Design Reviews</h2>

            <h3>Definition</h3>
            <p>
                A design review to evaluate the project's progress during its respective phase. Each semester, project leads may
                replace one of their Continuing Design Reviews with a transition Design Review (PDR or CDR).
            </p>

            <h3>Deliverables</h3>
            <ol>
                <li>
                    <strong>Project Objectives</strong> (if <strong>not</strong> in Research Phase)
                    <ol type="a">
                        <li>A list of objectives that the project intends to meet at the end of its development. These define the specific milestones the project needs to achieve.</li>
                        <li>Number them as PO-1, PO-2, etc.</li>
                    </ol>
                </li>
                <li>
                    <strong>System requirements and design choices</strong> (if <strong>not</strong> in Research Phase)
                    <ol type="a">
                        <li>Functional and performance requirements and their rationale to meet the Project Objectives.</li>
                        <li>Start with high-level requirements and number them as R-1, R-2, etc.</li>
                        <li>All design choices must be traced back to a system requirement, supported by the level of detail appropriate to the current development phase.</li>
                    </ol>
                </li>
                <li>
                    <strong>Bill of Materials (BOM)</strong>
                    <ol type="a">
                        <li>A list of materials, components, and the quantities of each needed to progress in the current phase.</li>
                        <li>The BOM must list all purchases necessary until the next Design Review.</li>
                    </ol>
                </li>
                <li>
                    <strong>Gantt Chart</strong>
                    <ol type="a">
                        <li>The project schedule until the next Design Review in the following semester.</li>
                        <li>The chart must contain all necessary project tasks and identify who is responsible for each task.</li>
                    </ol>
                </li>
            </ol>

            <hr />

            <h2>Preliminary Design Review (PDR)</h2>

            <h3>Definition</h3>
            <p>A transition Design Review to progress from the Research Phase to the Prototyping Phase.</p>

            <h3>Deliverables</h3>
            <ol>
                <li>
                    <strong>Project Objectives</strong>
                    <ol type="a">
                        <li>A list of objectives that the project intends to meet at the end of its development.</li>
                        <li>Number them as PO-1, PO-2, etc.</li>
                    </ol>
                </li>
                <li>
                    <strong>System requirements and design choices</strong>
                    <ol type="a">
                        <li>Functional and performance requirements and their rationale to meet the Project Objectives.</li>
                        <li>Start with high-level requirements and number them as R-1, R-2, etc.</li>
                        <li>All system requirements must be traced back to a Project Objective.</li>
                        <li>All design choices must be traced back to a system requirement and supported by basic electronic diagrams, high-level pseudocode, rough CAD drawings, and/or images. All code must be uploaded to the project GitHub repository.</li>
                    </ol>
                </li>
                <li>
                    <strong>Bill of Materials (BOM)</strong>
                    <ol type="a">
                        <li>A list of materials, components, and quantities needed to progress into the Prototyping Phase.</li>
                        <li>The BOM must list all purchases necessary until the next Design Review.</li>
                    </ol>
                </li>
                <li>
                    <strong>Gantt Chart</strong>
                    <ol type="a">
                        <li>The project schedule until the next Design Review in the following semester.</li>
                        <li>The chart must contain all necessary project tasks and identify who is responsible for each task.</li>
                    </ol>
                </li>
            </ol>

            <hr />

            <h2>Critical Design Review (CDR)</h2>

            <h3>Definition</h3>
            <p>A transition Design Review to progress from the Prototyping Phase to the Production Phase.</p>

            <h3>Deliverables</h3>
            <ol>
                <li>
                    <strong>Project Objectives</strong>
                    <ol type="a">
                        <li>A list of objectives that the project intends to meet at the end of its development.</li>
                        <li>Number them as PO-1, PO-2, etc.</li>
                    </ol>
                </li>
                <li>
                    <strong>Finalized system requirements and design choices</strong>
                    <ol type="a">
                        <li>Functional and performance requirements and their rationale to meet the Project Objectives.</li>
                        <li>Start with high-level requirements and number them as R-1, R-2, etc.</li>
                        <li>All design choices must be traced back to a system requirement and supported by trade studies, detailed electronic diagrams, functional code, detailed CAD drawings, simulations, test data, and/or images. All code must be uploaded to the project GitHub repository.</li>
                    </ol>
                </li>
                <li>
                    <strong>Final Bill of Materials (BOM)</strong>
                    <ol type="a">
                        <li>A final list of materials, components, and quantities required to progress into the Production Phase.</li>
                    </ol>
                </li>
                <li>
                    <strong>Gantt Chart</strong>
                    <ol type="a">
                        <li>The project schedule through the end of the development process.</li>
                        <li>The chart must contain all necessary project tasks and identify who is responsible for each task.</li>
                    </ol>
                </li>
            </ol>
        </Article>
    )
}

export default DesignReviews
