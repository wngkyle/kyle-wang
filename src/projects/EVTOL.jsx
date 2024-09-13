import { useEffect } from "react";
import evtol1 from "../assets/eVTOL-1.png";
import evtol2 from "../assets/eVTOL-2.png";
import evtol3 from "../assets/eVTOL-3.png";
import evtol4 from "../assets/eVTOL-4.png";
import evtol5 from "../assets/eVTOL-5.png";

import BackButton from "../components/BackButton";
import Trail from "../components/Trail";

const title = "Aeronova eVTOL";
const duration = "June 2023 - December 2023";
const overview = 
    "The aspiration for urban airborne transportation has captivated minds for decades, envisaging a realm of \
    flying cars and personal aerial vehicles. Recent focus on eVTOL (electric vertical take-off and landing) aircraft \
    signifies an unprecedented spotlight on the future of urban air mobility. Despite considerable strides within the \
    industry, the complexity of this pursuit has thwarted the emergence of a truly revolutionary product. Present eVTOL \
    vehicles, constrained by current technological limitations, exhibit significant drawbacks and lack the compelling \
    incentives necessary for widespread adoption. This project endeavors to not only learn from the successful strategies \
    of eVTOL pioneers but also to innovate and prototype our aircraft, striving to overcome existing limitations and pioneer \
    a transformative solution.";
const teensy = 
    "Teensy 4.1, armed with an ARM Cortex-M7 processor running at 600MHz, serves as the backbone of this project's flight control \
    system. Its processing power enables rapid data handling, digital signal processing, and swift communication which are critical \
    factors for smooth flight operations. Compared to alternatives like Arduino Mega or Nano, which operate at much lower speeds \
    (up to 16MHz), Teensy 4.1 has a significantly superior clock speed and performance. Moreover, its extensive connectivity options, \
    including multiple USB, serial, I2C, SPI, CAN ports, FlexIO, and Ethernet, provide enhanced compatibility with diverse sensors and \
    communication protocols. This versatility ensures seamless integration between the software and hardware, making our flight control \
    system more adaptable to various technologies. With 8MB of flash memory and 1MB of RAM, Teensy 4.1 also surpasses the storage and \
    memory capacities of Arduino Mega and Uno by a substantial margin. This expanded memory capacity allows for storing extensive code \
    and efficient handling of data-heavy operations.";
const aircraftConcept = 
    "This project adopts a direct-lift VTOL aircraft configuration using pre-built EDFs. Unlike quadcopter-like setups, it aligns closely \
    with fixed-wing aircraft principles. All engines are utilized for every flight phase, eliminating redundant weight. The initial design \
    features a tri-engine setup functioning as a tricopter for VTOL, transitioning to propel the aircraft forward for level flight after \
    reaching a safe altitude. Development is ongoing for the control mechanism facilitating this transition.";
const sizingDesign = 
    "The focus on urban air mobility necessitates a compact size. The aircraft's size constraint matches that of a standard parking space, \
    ensuring a balance between adaptability and performance. Proposed solutions in the preliminary design phase involve folding wings and a \
    streamlined fuselage to accommodate a single passenger, enabling the aircraft to fit into a parking space in both its landed and VTOL configurations.\
    The initial aircraft design incorporates a tapered wing with a low aspect ratio. Based on current estimates of wing geometry and gross weight, \
    the projected aircraft, when carrying a passenger/pilot of up to 100 [kg], is anticipated to maintain level flight at 87 [kph]. For the scaled-down \
    engineering sample that is to be built for this project, this value stands at 30 [kph]. It's important to note that the lift coefficient is currently \
    underestimated, and the lift contribution from the fuselage and tail is disregarded in this calculation. Consequently, these velocity estimations are \
    deemed conservative due to these factors not being fully accounted for.";


const EVTOL = () => {
    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top
    }, []);
    return (
        <div className="relative h-screen overflow-visible antialiased">
            <div className="inset-0 bg-fixed bg-cover bg-center bg-img2">
                <BackButton />
                <div className="mx-10 md:mx-14 lg:mx-20">
                    <div className="flex flex-row">
                        <div className="md:w-1/2">
                            <Trail height={80}>
                                <div />
                            </Trail>
                            <h1 className="text-white/90 text-4xl lg:text-5xl">
                                {title}
                            </h1>
                            <h3 className="mt-2 font-light text-white/80 text-xs lg:text-base">
                               {duration}
                            </h3>
                            <p className="mt-10 text-white">
                                {overview}
                            </p>
                            <p className="mt-10 text-white">
                                {teensy}
                            </p>
                            <p className="mt-10 text-white">
                                {aircraftConcept}
                            </p>
                            <p className="mt-10 text-white">
                                {sizingDesign}
                            </p>
                            
                            <div className="flex flex-col my-10 items-center justify-center lg:hidden">
                                <img src={evtol1} width={350} height={350} alt="eVTOL" className="rounded-3xl my-5"/>
                                <img src={evtol2} width={350} height={350} alt="eVTOL" className="rounded-3xl my-5"/>
                                <img src={evtol3} width={350} height={350} alt="eVTOL" className="rounded-3xl my-5"/>
                                <img src={evtol5} width={350} height={350} alt="eVTOL" className="rounded-3xl my-5"/>
                                <img src={evtol4} width={350} height={350} alt="eVTOL" className="rounded-3xl my-5"/>
                            </div>
                        </div>
                        <div className="hidden md:flex-col lg:flex w-1/2 mt-32 items-center">
                            <Trail height={80}>
                                <div />
                            </Trail>
                            <img src={evtol1} width={450} height={450} alt="eVTOL" className="rounded-3xl my-5"/>
                            <img src={evtol2} width={450} height={450} alt="eVTOL" className="rounded-3xl my-5"/>
                            <img src={evtol3} width={450} height={450} alt="eVTOL" className="rounded-3xl my-5"/>
                            <img src={evtol5} width={450} height={450} alt="eVTOL" className="rounded-3xl my-5"/>
                            <img src={evtol4} width={350} height={350} alt="eVTOL" className="rounded-3xl my-5"/>
                        </div>
                    </div>
                </div>
                <div className="h-20 w-full" />
            </div>
        </div>
    )
}

// eslint-disable-next-line react-refresh/only-export-components
export default EVTOL;

{/* <h2 className="mt-10 text-white text-lg">
    Technologies used:
</h2>
<ul className="ml-5 mt-1 text-white leading-7">
    <li> {`\u2022`} Circuit Design</li>
    <li> {`\u2022`} Electronics</li>
    <li> {`\u2022`} PCB Development</li>
    <li> {`\u2022`} Embedded Design</li>
    <li> {`\u2022`} MOSFET</li>
    <li> {`\u2022`} Semiconductor Testing</li>
</ul> */}