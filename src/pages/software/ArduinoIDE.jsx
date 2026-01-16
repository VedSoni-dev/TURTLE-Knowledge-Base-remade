import Article from '../../components/Article'
import { Tabs, Tab } from '../../components/Tabs'
import { Note } from '../../components/Callouts'
import ExternalLink from '../../components/ExternalLink'

function ArduinoIDE() {
    return (
        <Article title="Embedded Programming">
            <Tabs labels={['Arduino IDE', 'VS Code']}>
                <div>
                    <h2>Setup & Configuration</h2>

                    <ol>
                        <li>
                            Download and install the Arduino IDE from the official website:{' '}
                            <ExternalLink href="https://www.arduino.cc/en/software">https://www.arduino.cc/en/software</ExternalLink>
                        </li>
                        <li>
                            Connect your board to the computer via USB
                            <p><strong>Windows:</strong> Open Device Manager (Win + X &gt; Device Manager) and look under "Ports (COM & LPT)" to verify your board appears.</p>
                            <p><strong>Linux:</strong> Run <code>ls /dev/tty*</code> in the terminal before and after plugging in your board. Look for new entries like <code>/dev/ttyUSB0</code> or <code>/dev/ttyACM0</code>.</p>
                        </li>
                        <li>
                            Set up the board and port by navigating to:
                            <ul>
                                <li>Tools &gt; Board: Select your board type</li>
                                <li>Tools &gt; Port: Select the correct COM port</li>
                            </ul>
                        </li>
                        <li>
                            Install any libraries needed for your project via the Library Manager:
                            <ol type="a">
                                <li>Go to Sketch &gt; Include Library &gt; Manage Libraries...</li>
                                <li>Once installed, include it in your sketch via Sketch &gt; Include Library</li>
                            </ol>
                        </li>
                    </ol>

                    <Note>
                        Each library you include will use memory on your microcontroller, which can run out quickly if you include too many libraries.
                    </Note>

                    <ol start={5}>
                        <li>
                            Write your code in the IDE, likely starting from a template or hatchling example:{' '}
                            <ExternalLink href="https://github.com/turtle-robotics/Hatchling-Examples">https://github.com/turtle-robotics/Hatchling-Examples</ExternalLink>
                        </li>
                        <li>Verify your code by clicking the Verify button (check mark at top-left) to check for errors</li>
                        <li>Click Upload (right arrow at top-left) to compile and upload the sketch to your board</li>
                    </ol>
                </div>

                <div>
                    <h2>ESP-IDF Extension</h2>
                    <p>
                        The recommended way to work with ESP microcontrollers in VS Code is using the ESP-IDF (ESP-IoT Development Framework) extension.
                    </p>

                    <h3>Installation</h3>
                    <ol>
                        <li>Open VS Code</li>
                        <li>Navigate to the Extensions marketplace (Ctrl+Shift+X / Cmd+Shift+X)</li>
                        <li>Search for "ESP-IDF" by Espressif</li>
                        <li>Click Install on the official extension</li>
                    </ol>

                    <p>
                        Espressif has their own Quick Installation Guide:{' '}
                        <ExternalLink href="https://github.com/espressif/vscode-esp-idf-extension/blob/master/docs/tutorial/install.md">
                            https://github.com/espressif/vscode-esp-idf-extension/blob/master/docs/tutorial/install.md
                        </ExternalLink>
                    </p>

                    <p><em>TODO: Talk about ARM and AMD</em></p>
                </div>
            </Tabs>
        </Article>
    )
}

export default ArduinoIDE
