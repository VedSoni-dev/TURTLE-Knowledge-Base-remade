import Article from '../../components/Article'
import Table from '../../components/Table'

function PhasesOfDevelopment() {
    return (
        <Article title="Phases of Development">
            <h2>Research Phase</h2>
            <p>
                The Research Phase of the project will begin after the project proposal has been accepted as an Advanced Project.
                The project lead can start accepting members into their project in this phase. This phase serves to allow project
                members to conduct research to explore feasibility and formalize the Project Objectives. The project will be given
                a budget of $100 per semester.
            </p>

            <h2>Prototyping Phase</h2>
            <p>
                The Prototyping Phase of the project will begin after the project has passed their PDR. This phase serves to allow
                project members to repeatedly build and test electrical, hardware, and software subsystems in an agile development
                process. The project will be given a budget of ≤ $500 per semester as proposed in their PDR or Continuing DR BOM.
            </p>

            <h2>Production Phase</h2>
            <p>
                The Production Phase of the project will begin after the project has passed their CDR. It is expected that the
                project will meet their objectives and end within one or two semesters in this phase. The project will be given
                a one-time ≤ $1000 budget as proposed in their CDR BOM.
            </p>

            <h2>Phases Summary</h2>

            <Table
                headers={['Milestone', 'Deliverables', 'Phase Transition', 'Budget']}
                rows={[
                    ['Project Proposal', 'Project Scope', 'None → Research', '$100'],
                    ['Preliminary Design Review (PDR)', 'Project Objectives, System requirements and design choices, Bill of Materials (BOM), Gantt Chart', 'Research → Prototyping', '≤ $500'],
                    ['Critical Design Review (CDR)', 'Project Objectives, System requirements and design choices, Bill of Materials (BOM), Gantt Chart', 'Prototyping → Production', '≤ $1000'],
                    ['Continuing Design Review', 'Ongoing documentation updates', 'No phase change', 'Same'],
                ]}
            />
        </Article>
    )
}

export default PhasesOfDevelopment
