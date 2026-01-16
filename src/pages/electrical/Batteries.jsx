import Article from '../../components/Article'
import { Note, Warning } from '../../components/Callouts'

function Batteries() {
    return (
        <Article title="Batteries">
            <h2>Math</h2>
            <ul>
                <li>Voltage adds in series: V_total = V_1 + V_2 + ... + V_n</li>
                <li>Current adds in parallel: I_total = I_1 + I_2 + ... + I_n</li>
                <li>Power is measured in watts (W), which is found by multiplying the voltage and current.</li>
                <li>Energy is measured with power by time, or in watt-hours (Wh).</li>
            </ul>

            <p>
                However, most cells instead show a rating in milliamp hours (mAh). For a given cell, the voltage is known by the
                chemistry, and therefore the energy capacity can be found by simply dividing the watt-hours by the voltage to find
                the amp-hours (Ah). This value will become useful as we start to size batteries for our applications.
            </p>

            <h3>Packs</h3>
            <p>
                Rarely will a single cell be able to power your entire system, so often you will need to connect multiple cells
                into a battery pack. These are done by connecting cells in series, parallel, or both.
            </p>

            <p>
                These combinations are notated by <code>S</code> and <code>P</code>, where <code>S</code> is the number of cells in series,
                and <code>P</code> is the number of cells in parallel. For example, a 3S2P pack contains three cells in series, and two
                of these series strings connected in parallel. When there is only one cell in parallel, it is common to drop the <code>1P</code> notation,
                so a <code>4S1P</code> pack would just be called <code>4S</code>.
            </p>

            <p>
                We know that voltage adds in series, and current adds in parallel, so we can find the total voltage by adding the
                cell voltages in series, and the total pack current capacity by adding the cell current capacities (in mAh) in parallel.
            </p>

            <Note>
                Energy capacity in Wh is found by multiplying voltage (V), current (A), and time (h).
                By measuring capacity in mAh, we can find the energy capacity of a battery pack by multiplying the total voltage
                (from series connections) by the total current capacity (from parallel connections).
            </Note>

            <h2>Chemistries</h2>
            <ul>
                <li>LiPo (Lithium Polymer)</li>
                <li>Li-ion (Lithium Ion)</li>
                <li>NiMH (Nickel Metal Hydride)</li>
                <li>Pb Acid (Lead Acid)</li>
            </ul>

            <p><em>TODO: Compare LiPo, Li-ion, NiMH, and when each is used.</em></p>

            <h2>Sizing & Selection</h2>
            <ol>
                <li>Determine voltage requirements of your system.</li>
                <li>Estimate current draw under typical and peak loads.</li>
                <li>Calculate required capacity based on desired runtime.</li>
                <li>Choose a battery chemistry that fits your weight, size, and performance needs.</li>
                <li>Select a pack configuration (SxP) that meets voltage and capacity requirements.</li>
            </ol>

            <h2>Charging Procedures</h2>

            <Warning>
                Charging a LiPo or Li-ion battery is likely the single most dangerous activity you will do in your time with TURTLE.
                Please proceed with extreme caution, and ask for help if you are ever unsure of what to do.
            </Warning>

            <p>
                Before charging, always inspect the battery for any signs of damage, swelling, or punctures. Older batteries are
                susceptible to catastrophic failure, especially during charging.
            </p>

            <p>
                First, take note of the chemistry, voltage, and capacity of the battery, as you will need to input this to the charger.
                TURTLE has some chargers that plug into a wall outlet, and some that require direct DC power from the DC power supply.
                Set the charger to match the battery specifications. The large plug (typically XT60 or similar) on the battery is for
                charging and discharging high current loads, while the smaller connector (typically JST or similar) is used by the charger
                to monitor and balance each cell. Always connect the balance connector to the charger if available, and some chargers may
                refuse to charge without the balance connector.
            </p>
        </Article>
    )
}

export default Batteries
