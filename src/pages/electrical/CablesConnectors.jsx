import Article from '../../components/Article'
import { Note, Warning } from '../../components/Callouts'

function CablesConnectors() {
    return (
        <Article title="Cables & Connectors">
            <h2>DC Power</h2>
            <ul>
                <li><strong>XT30/60/90 Connectors</strong> - most common for battery systems. Comes in three (popular) sizes based on current rating.</li>
                <li><strong>Deans T-Plug Connectors</strong> - popular in semi-modular RC applications. Typically rated for lower current than XT connectors.</li>
                <li><strong>Barrel Connectors</strong> - most common on commercial electronics. Can be very proprietary in size.</li>
                <li><strong>Anderson Powerpole Connectors</strong> - FIRST Robotics standard connector. Universally genderless design, color coded for various outputs.</li>
                <li><strong>4mm Bullet Connectors</strong> - common for smaller ESC connections. Have a smaller profile than other high-current connectors.</li>
            </ul>

            <Warning>
                USB ports on microcontroller boards are not designed for high current (limited to ~200mA).
                Avoid using USB ports for power when possible.
            </Warning>

            <h2>Telemetry</h2>
            <ul>
                <li><strong>UART</strong> - Universal Asynchronous Receiver/Transmitter: a very common serial RX + TX communication protocol. Ports connect in series TX → RX and RX → TX.</li>
                <li><strong>I2C</strong> - Inter-Integrated Circuit: a common protocol for short-distance communication between components. Uses two wires (SDA for data, SCL for clock) to allow multiple devices to share the same bus with unique addresses.</li>
                <li><strong>CAN Bus</strong> - Controller Area Network: a robust vehicle bus standard designed to allow microcontrollers and devices to communicate. Voltage difference provides robustness against line loss and interference.</li>
                <li><strong>PWM</strong> - Pulse Width Modulation: a modulation technique used to encode a message into a pulsing signal. Commonly used for motor control and servos.</li>
            </ul>

            <Note>
                There are plenty of open source communication protocols (SPI, RS232, RS485, etc), as well as various proprietary protocols.
                Industry practice considers EMI, cybersecurity, and speed concerns, but the ones listed above are very well documented
                and designed for modularity.
            </Note>
        </Article>
    )
}

export default CablesConnectors
