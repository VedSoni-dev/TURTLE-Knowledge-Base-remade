import Article from '../../components/Article'
import { Tabs, Tab } from '../../components/Tabs'
import { Note, Warning } from '../../components/Callouts'
import ExternalLink from '../../components/ExternalLink'

function SolidWorks() {
    return (
        <Article title="SolidWorks">
            <p>
                <ExternalLink href="https://www.solidworks.com/">SolidWorks</ExternalLink> is a powerful CAD software used for
                3D modeling, simulation, and product design. In TURTLE, we use SolidWorks for mechanical design and prototyping
                of our robotics projects.
            </p>

            <h2>Installation</h2>

            <Tabs labels={['Windows', 'macOS', 'Linux']}>
                <div>
                    <ol>
                        <li>
                            Obtain a student license for SolidWorks from the Texas A&M University software website:{' '}
                            <ExternalLink href="https://software.tamu.edu/">https://software.tamu.edu/</ExternalLink>
                            <br />Add SolidWorks to your cart and complete the checkout process. The license will be sent to your email.
                        </li>
                        <li>
                            Download the version of SolidWorks corresponding to your license from the SolidWorks website:{' '}
                            <ExternalLink href="https://www.solidworks.com/support/community-download">https://www.solidworks.com/support/community-download</ExternalLink>
                            <Note>Select <strong>Yes</strong> for "I already have a Serial Number that starts with 9020".</Note>
                        </li>
                        <li>
                            Run the installer and follow the prompts to install SolidWorks. Use the serial number provided in your email when prompted.
                            <Warning>
                                Do not unpack SolidWorks in the OneDrive folder. SolidWorks requires a large amount of disk space to install,
                                and OneDrive may not sync large files properly.
                            </Warning>
                        </li>
                    </ol>
                </div>

                <div>
                    <p>
                        SolidWorks is not natively supported on macOS. You can either use the Texas A&M Virtual Online Access Labs (VOAL)
                        or use Boot Camp to run Windows and install SolidWorks.
                    </p>

                    <h3>VOAL</h3>
                    <ol>
                        <li>Go to the Texas A&M Virtual Online Access Labs: <ExternalLink href="https://voal.tamu.edu/">https://voal.tamu.edu/</ExternalLink></li>
                        <li>Log in with your Texas A&M credentials.</li>
                        <li>Launch SolidWorks from the available applications.</li>
                    </ol>

                    <h3>Boot Camp</h3>
                    <ol>
                        <li>Install Boot Camp on your Mac to run Windows.</li>
                        <li>Follow the Windows installation steps above to install SolidWorks.</li>
                    </ol>
                </div>

                <div>
                    <p>
                        SolidWorks is not natively supported on Linux. We recommend dual booting with Windows, as SolidWorks will not
                        run in a virtual machine. You may also use the Texas A&M Virtual Online Access Labs (VOAL) to access SolidWorks.
                    </p>

                    <h3>VOAL</h3>
                    <ol>
                        <li>Go to the Texas A&M Virtual Online Access Labs: <ExternalLink href="https://voal.tamu.edu/">https://voal.tamu.edu/</ExternalLink></li>
                        <li>Log in with your Texas A&M credentials.</li>
                        <li>Launch SolidWorks from the available applications.</li>
                    </ol>

                    <h3>Dual Boot with Windows</h3>
                    <p>
                        Follow a guide for your distribution to set up dual booting with Windows. After installing Windows,
                        follow the Windows installation steps above to install SolidWorks.
                    </p>
                    <p>
                        <ExternalLink href="https://wiki.archlinux.org/title/Dual_boot_with_Windows#Installation">
                            Arch Linux Dual Boot Guide
                        </ExternalLink>
                    </p>
                </div>
            </Tabs>
        </Article>
    )
}

export default SolidWorks
