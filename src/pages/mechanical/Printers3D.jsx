import Article from '../../components/Article'
import { Tabs, Tab } from '../../components/Tabs'
import { Note } from '../../components/Callouts'

function Printers3D() {
    return (
        <Article title="3D Printers">
            <h2>Exporting</h2>

            <Tabs labels={['SolidWorks', 'Onshape']}>
                <div>
                    <ol>
                        <li>Open the part or assembly and verify sketches/features are fully resolved.</li>
                        <li>Choose <strong>File → Save As</strong> and pick a destination folder in your project workspace.</li>
                        <li>
                            For an <code>.STL</code> export:
                            <ul>
                                <li>Set <code>Save as type</code> to <code>STL (*.stl)</code> and click <strong>Options</strong>.</li>
                                <li>Switch <code>Output as</code> to <code>Binary</code> for smaller files and set the unit to match your model.</li>
                                <li>Tighten <code>Deviation</code>/<code>Angle</code> as needed (<code>0.01 mm</code> and <code>5°</code> work for most prints), then confirm and save.</li>
                            </ul>
                        </li>
                        <li>
                            For a <code>.STEP</code> export:
                            <ul>
                                <li>Repeat the save-as workflow but choose <code>STEP AP214 (*.step)</code>.</li>
                                <li>In <strong>Options</strong>, select <code>AP214</code> to keep color/layer data when available.</li>
                                <li>Save the file alongside the STL so fabrication and CAD teams share the same revision.</li>
                            </ul>
                        </li>
                    </ol>
                </div>
                <div>
                    <ol>
                        <li>Open the Part Studio or Assembly tab containing the geometry you need to fabricate.</li>
                        <li>Select the part(s) or the assembly in the feature tree, then right-click and choose <strong>Export</strong>.</li>
                        <li>In the dialog, pick <code>STL</code> or <code>STEP</code> under <strong>Format</strong>.</li>
                        <li>
                            For <code>STL</code>:
                            <ul>
                                <li>Choose <code>Binary</code> encoding, set the units (millimeters for most printers), and select the desired resolution preset (<code>Fine</code> for consumer printers, <code>Custom</code> for tight tolerances).</li>
                                <li>Enable <strong>Download</strong> or <strong>Send to cloud storage</strong> depending on your workflow, then click <strong>Export</strong>.</li>
                            </ul>
                        </li>
                        <li>
                            For <code>STEP</code>:
                            <ul>
                                <li>Select <code>STEP AP214</code> for best compatibility and keep the default chord tolerance unless your vendor requests otherwise.</li>
                                <li>Export to your Downloads folder or shared drive; rename the file with the part number/revision before sharing.</li>
                            </ul>
                        </li>
                    </ol>
                    <p>
                        Keeping both formats in the same release folder ensures downstream users can either print directly from
                        the <code>.STL</code> or modify the geometry using the <code>.STEP</code>.
                    </p>
                </div>
            </Tabs>

            <h3>File formats</h3>
            <ul>
                <li><code>.sldprt</code> and <code>.sldasm</code> are used by Solidworks to store your part. They hold your feature information, timestamps and user information, making them ideal for collaboration, but they cannot be read by most slicers.</li>
                <li><code>.STL</code> files are the most common way to export 3D models for printing. They represent the surface geometry of a 3D object without any color, texture information, making them very lightweight.</li>
                <li><code>.STEP</code> files retain feature history and are widely used for sharing between CAD programs. Most commonly, you can export your assembly as a STEP file to preserve relations or spacing for multicolor prints, at the cost of a larger file size.</li>
            </ul>

            <hr />

            <h2>Slicing</h2>

            <h3>Material Selection</h3>
            <ul>
                <li><strong>PLA</strong>: Easy to print, biodegradable, most common filament.</li>
                <li><strong>PETG</strong>: More flexible and higher peak strength compared to PLA, meant for durability.</li>
                <li><strong>ABS</strong>: Strong and heat-resistant, but requires heated bed and enclosure. Risk of warping. Common in injection molding.</li>
                <li><strong>TPU</strong>: Flexible material, meant for parts that need to bend, stretch, or bounce.</li>
                <li><strong>Polycarbonate (PC)</strong>: Extremely strong and heat-resistant, ideal for high-stress applications but challenging to print.</li>
                <li><strong>ASA</strong>: Similar to ABS but with better UV resistance, suitable for outdoor applications.</li>
                <li><strong>CF (Carbon Fiber Reinforced)</strong>: Improves strength and stiffness, common add on to PLA or PETG (PLA-CF, PETG-CF); requires hardened nozzles due to abrasive nature.</li>
                <li><strong>HF (High Flow)</strong>: Improves print speed and layer adhesion, filaments like PETG-HF, ABS-HF, or PC-HF. It's like premium gas for your car, it's a little nicer but doesn't change much.</li>
            </ul>

            <h3>Choosing a Slicer</h3>
            <p>
                The slicer converts your 3D model into machine instructions for the printer. This is the step where you set material,
                infill, supports, and print parameters. Any slicer can work if it outputs standard G-code, but we recommend:
            </p>
            <ul>
                <li><strong>Bambu Studio</strong>: Native support for AMS, multi-color, and machine profiles. Recommended for TURTLE Bambu printers.</li>
                <li><strong>Cura</strong>: Common base that many proprietary slicers are based on (Lulzbot, PrusaSlicer, Creality*, etc). Good support for various personal printers.</li>
                <li><strong>PrusaSlicer</strong>: Open-source, stronger but sharper learning curve. Provides foundation for plugins, custom supports, etc.</li>
                <li><strong>OrcaSlicer</strong>: Newer slicer endorsed by the Rapid Prototyping Studio (RPS) for use on their machines and in MEEN 210.</li>
            </ul>

            <h3>Machine Parameters</h3>
            <ul>
                <li><strong>Nozzle Diameter</strong>: Most printers use a 0.4 mm nozzle, but diameter affects print speed at final resolution.</li>
                <li><strong>Layer Height</strong>: Commonly set between 0.1 mm (high detail) to 0.3 mm (faster prints). Typically tuned with nozzle diameter.</li>
                <li><strong>Line widths</strong>: Usually stick to default based on nozzle diameter, but can affect layer adhesion within and between layers.</li>
            </ul>

            <h3>Printing Parameters</h3>
            <ul>
                <li><strong>Infill Pattern</strong>: The optimal infill will depend on geometry, required strength infill, and print time. Gyroid is a good all-around choice. Lightning performs well for low-infill parts, and cubic for high-infill parts. Rectilinear is fast to print.</li>
                <li><strong>Infill Density</strong>: 15-20% is plenty for most parts, increasing infill makes parts stronger and heavier.</li>
                <li><strong>Support Structures</strong>: Tree supports are often optimal but you may want to select <code>normal</code> for holes requiring precise fits, or long flat overhangs that tree may not contact well. You can set the overhang angle threshold to control how much support is generated, or you can paint supports manually.</li>
                <li>
                    <strong>Support Style</strong>:
                    <ul>
                        <li><strong>Tree Styles</strong>: There are <code>slim</code>, <code>strong</code>, <code>hybrid</code>, and <code>organic</code> styles. <code>Slim</code> branches slower and saves material. <code>Strong</code> makes more, overlapping trunks to add strength. <code>Hybrid</code> seems to create fewer, stronger tree branches. <code>Organic</code> branches faster to have better contact with the part surface.</li>
                        <li><strong>Normal Styles</strong>: There are <code>grid</code>, and <code>snug</code>. <code>Grid</code> alternates the perimeter direction each layer for better stability at the cost of vertical strength. <code>Snug</code> places supports closer to the part surface for better support, but is harder to remove, can affect tolerancing, and part surface.</li>
                    </ul>
                </li>
            </ul>

            <Note>
                If you need a stronger part, you are often better off increasing wall loops than direct infill. Just like an I-beam
                puts more mass on the edges to better resist bending, increasing wall loops places more material:
                <ol>
                    <li>Along the edges to increase mass moment of inertia.</li>
                    <li>On the loading surface where most fracture failures initialize.</li>
                </ol>
            </Note>

            <h3>Bambu Studio Slicing</h3>
            <ol>
                <li>Import the <code>.STL</code>.</li>
                <li>Select the printer profile (<code>Bambu X1C 0.4 nozzle</code>) and filament.</li>
                <li>Orient the part. Aligning layer lines for strength and minimizing support is an art form; most of the type it's fine to trust the auto-orient.</li>
                <li>Set infill percentage/pattern. For most parts, <code>15%</code> gyroid is plenty, then you can increase wall loops as needed for additional strength.</li>
                <li>Make sure to generate supports; for most applications <code>tree(auto)</code> is optimal.</li>
                <li>On the <strong>Print Plate</strong> button, select the <strong>Export plate sliced file</strong> then save to an SD card.</li>
                <li>Wait for the file to completely upload, then eject the SD card safely to prevent file corruption.</li>
            </ol>

            <hr />

            <h2>Bambu Printing</h2>

            <h3>1. Prep the printer</h3>

            <h4>Print Plates</h4>
            <Tabs labels={['PEI Plate', 'Cool/Engineering Plate']}>
                <div>
                    <ul>
                        <li>Ensure the PEI plate is clean. If there is an oily residue, use dish soap and sponge by the sink to remove oils.</li>
                        <li>Ensure the plate is dry and clean before printing.</li>
                        <li>Avoid PETG, TPU, Nylon, PC, and CF-filled materials on PEI; they chemically bond to the surface. Switch to a Cool/Engineering plate for those materials.</li>
                        <li>Do not put Elmer's glue on the PEI plates. A clean PEI surface is usually sufficient for adhesion, but glues and constant cleaning will degrade the surface over time.</li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li>Ensure the engineering plate is completely dry.</li>
                        <li>Apply Elmer's glue stick. You just need a couple of dense swipes, not a whole layer.</li>
                        <li>When flipping the plate over, ensure to completely remove the glue from the side you are placing face-down onto the print bed. Please use water and a sponge to clean off any residual glue.</li>
                        <li>Do not cool the plate too quickly. Let your print finish and open the door to let the plate cool naturally. Rapid cooling may warp the plate or create bubbles between the layers.</li>
                    </ul>
                </div>
            </Tabs>

            <h4>Printer Models</h4>
            <Tabs labels={['Bambu X1 Carbon', 'Bambu P1S', 'Other Printers']}>
                <div>
                    <ul>
                        <li>Printers may have <code>lidar sensor errors</code>, this is fine to ignore. The lidar is used for obstacle detection when using the AMS, but is not required for printing.</li>
                        <li>Ensure there is enough filament in the AMS slots; load fresh spools if needed.</li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li>Ensure that the materials in the AMS are correctly set with the slicer.</li>
                        <li>Ensure there is enough filament in the AMS slots; load fresh spools if needed.</li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li>Ensure the print bed is properly leveled.</li>
                        <li>Set correct material and load/unload filament as needed.</li>
                        <li>Be aware of any printer-specific setup steps, including recommended print parameters.</li>
                        <li>If printing without an enclosure, note that the lab is typically humid and can affect print quality.</li>
                    </ul>
                </div>
            </Tabs>

            <h3>2. Start the print</h3>
            <ul>
                <li>Insert the SD card into the printer.</li>
                <li>From the printer menu, select the sliced file and start the print.</li>
                <li>Confirm material selections if prompted.</li>
            </ul>

            <h3>3. During the print</h3>
            <ul>
                <li>Please monitor the first two layers to ensure proper adhesion before leaving the lab.</li>
                <li>If filament runs out, the Bambu AMS will only auto-switch if it has at least two spools of the same material, manufacturer, and color. It does not know any of these things, and therefore can be told what it needs to auto-switch if necessary.</li>
            </ul>

            <h3>4. Post-print</h3>
            <ul>
                <li>Allow the bed to cool so parts release cleanly.</li>
                <li>Clean up any scrap filament; if you do not know whose part it is, please place it in the bin labeled "Homeless Prints".</li>
            </ul>

            <p>Reach out to an officer in the lab if you have any issues or questions during the printing process!</p>
        </Article>
    )
}

export default Printers3D
