import Article from '../../components/Article'
import { Warning } from '../../components/Callouts'

function LabTools() {
    return (
        <Article title="TURTLE Lab Safety Rules">
            <h2>Safety</h2>
            <p>
                While in the lab, your safety is first and foremost your own responsibility.
                You are surrounded by resources and experienced people who can help you use them.
                If you are at any point unsure of what you are doing, <strong>ask</strong>.
                If you feel unsafe with a tool, then you are unsafe with a tool. Stop what you are doing
                immediately and do not resume work until you have received clarification.
            </p>

            <h3>Tools Requiring Training</h3>
            <ul>
                <li>Angle Grinder</li>
                <li>Dremel</li>
                <li>Drill Press</li>
                <li>Hand Drill</li>
                <li>Impact Driver</li>
                <li>Jig Saw</li>
                <li>LiPo Battery Charger</li>
                <li>Power Supply</li>
                <li>Printer (3D)</li>
                <li>Soldering Iron</li>
            </ul>

            <h3>Tools That Require Supervision</h3>
            <ul>
                <li>Angle Grinder</li>
                <li>Dremel</li>
            </ul>

            <h3>Safety Gear</h3>
            <p>
                PPE is required for all tools listed in the training section above, excluding the printers.
                Proper PPE includes: closed-toe shoes, bottoms that cover to the lower leg, a sleeved shirt,
                and safety glasses. All loose items and hair must also be properly secured up and out of the way.
            </p>

            <h3>Training</h3>
            <p>
                Any individual may be trained by an officer.
                All training is tool-specific and is not all-encompassing.
            </p>

            <hr />

            <h2>Lab Etiquette</h2>

            <h3>General Cleanliness</h3>
            <p>
                The lab should be left as clean or cleaner than it was when you started work.
                Keeping our space nice is the responsibility of each member.
            </p>
            <ul>
                <li>
                    Put all tools back in their proper place when you stop working.
                    All drill bits, Allen keys (hex wrenches), and screws should be organized by size
                    in their respective boxes, drawers, and sleeves.
                </li>
                <li>
                    If sawdust, plastic shavings, or other debris are generated during the course of work,
                    the floor must be swept or vacuumed.
                </li>
                <li>
                    The large trashcan by the door is the only trashcan in the lab in which food is permitted.
                    When this trashcan is filled up to the rim, it must be emptied.
                    Trash can be taken to the dumpster between HEB and CVLB; new trash bags can be found
                    in the supplies drawers.
                </li>
            </ul>

            <h3>3D Printing</h3>
            <ul>
                <li>Ensure that your file is sliced for the correct printer, plate, nozzle, and material before printing.</li>
                <li>If flipping the print plate, clean and dry the previous side before returning it to the printer bed.</li>
                <li>Remain in the lab for at least the first two layers of printing to avoid wasted filament on a failed print.</li>
                <li>Clean the nozzle with a wire brush after each use.</li>
                <li>The printers are not to be used for personal projects without permission.</li>
            </ul>

            <h3>Soldering</h3>
            <ul>
                <li>The fume hood must be used to maintain safe air quality for those in the lab.</li>
                <li>Solder at a reasonable temperature for your material to prevent degradation of materials and tools.</li>
                <li>Clear the soldering bench before and after your work to avoid damaging tools and to maintain the workspace for others.</li>
            </ul>

            <h3>Tool Cart</h3>
            <ul>
                <li>Charge drill batteries after use.</li>
                <li>Return tools to their labeled drawer and organizer as stated above.</li>
                <li>Do not place any liquid containers in the toolbox without ensuring that their lids are secure.</li>
            </ul>

            <h3>Corner Monitors</h3>
            <ul>
                <li>The same things should be plugged into the monitors after use as before, especially HDMI cables and any other labeled cables.</li>
                <li>Due to the small number of monitors, please clean the space of all personal or project items before leaving for an extended period.</li>
            </ul>

            <h3>Project Shelves</h3>
            <ul>
                <li>
                    All project parts and materials should be stored on the assigned project shelf when not in use.
                    Any materials left out whose project is unidentifiable may be added to the free stuff bin or used by another project.
                </li>
                <li>
                    Do not touch another project's shelf without permission.
                    This avoids crucial items being broken or misplaced.
                </li>
            </ul>

            <hr />

            <h2>Borrowing Equipment</h2>
            <ul>
                <li>All tools must remain in the lab unless given express permission from senior leadership to remove them.</li>
                <li>Ensure there is written evidence of permission and the object's removal before it leaves the lab.</li>
            </ul>

            <h2>General Lab Rules</h2>
            <ul>
                <li>An officer must be present in the lab at all times while the lab is in use.</li>
                <li>Any behavior deemed disrespectful or inappropriate can result in disciplinary action or a request to vacate.</li>
                <li>During a project's reserved lab time, the project lead may ask anyone to leave the lab for any reason.</li>
                <li>Project tasks always have priority over personal or school projects when it comes to lab tools and space.</li>
                <li>Misuse or unsafe lab practice will result in the revoking of privileges.</li>
                <li>If you need training or supervision for a tool and cannot receive it from those present, send an <code>@Officer</code>.</li>
                <li>If at any time, common sense would defy any of the rules detailed in this document, ask an officer for help.</li>
            </ul>

            <hr />

            <h2>In Case of Injury</h2>

            <h3>Major Injury</h3>
            <p>
                Call <strong>911</strong>.
                After urgent needs have been addressed, please send a message to <code>@Officer</code> in the Discord.
                Major injuries include but are not limited to:
            </p>
            <ul>
                <li>Arterial bleeding or bleeding not stopped by compression</li>
                <li>Difficulty breathing</li>
                <li>Loss of consciousness for any amount of time (unless directed otherwise prior to event)</li>
            </ul>

            <h3>Significant Injury</h3>
            <p>
                Send a message to <code>@Officer</code> in the Discord and please have someone present accompany you to
                University Health Services at <strong>A.P. Beutel Health Center, 311 Houston St.</strong>
            </p>
            <p>Significant injuries include but are not limited to:</p>
            <ul>
                <li>2nd degree burns</li>
                <li>Concussion</li>
                <li>Suspected broken bone</li>
            </ul>

            <h3>Minor Injury</h3>
            <p>
                Minor injuries can be treated on site with the provided first-aid kit.
                While the first-aid kit is checked regularly, please report low inventory items to the Lab Quality Committee.
            </p>
            <p>Minor injuries include but are not limited to:</p>
            <ul>
                <li>Abrasions</li>
                <li>Small lacerations that can be stopped with minor pressure and an adhesive bandage</li>
                <li>First degree burns</li>
            </ul>

            <hr />

            <h2>Liability Statement</h2>
            <p>
                By choosing to participate in activities within the TURTLE lab, you acknowledge the inherent risks of being
                present in a lab where potentially dangerous work may be taking place.
                TURTLE, the Mechanical Engineering Department of Texas A&M, and Texas A&M University are <strong>not responsible</strong> for
                injury caused in the lab.
                Risks may vary by project.
            </p>
            <p>
                If you have any safety concerns, please raise them to <code>@Officer</code> on Discord.
                If you have any questions on the risks related with participating in a given project, reach out to that project's
                Project Lead or to an <code>@Officer</code> in the Discord.
            </p>
        </Article>
    )
}

export default LabTools
