import { useEffect } from "react"
import Trail from "../components/Trail"
import BackButton from "../components/BackButton"

import m2 from "../assets/modula-2.jpg";
import m4 from "../assets/modula-4.png";

const title = "Modula";
const duration = "September 2022 - December 2022";
const intro = "Modular is an innovative, portable smart cooling pad designed to optimize device cooling by monitoring critical \
  performance metrics in real-time. The motive behind this project was a common challenge faced by engineering students: running heavy software and \
  tools on laptops, which often leads to overheating and slower processing speeds. Most cooling pads available in the market \
  are large, bulky, and inconvenient to carry, making them impractical for students who need portability. Our goal with Modular \
  is to create a portable, modular cooling pad that can be stacked, folded, and adjusted to fit various device sizes, offering \
  flexibility and saving space."
const intro_2 = "In addition to portability, we wanted to make Modular a smart cooling solution. It tracks internal device \
  temperature, CPU usage, and memory activity, enabling efficient cooling management based on actual device demands. The system \
  dynamically adjusts its cooling performance to prevent overheating and improve energy efficiency, extending the life of \
  devices and enhancing user experiences."


const Modula = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top
  }, []);
  return (
    <div className="relative h-screen overflow-visible antialiased">
        <div className="inset-0 bg-fixed bg-cover bg-center bg-img2">
            <BackButton />
            <div className="mx-10 md:mx-14 lg:mx-20">
                <div className="flex flex-row">
                    <div className="lg:w-1/2">
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
                            {intro}
                        </p>
                        <p className="mt-10 text-white">
                            {intro_2}
                        </p>
                        <div className="flex flex-col my-10 items-center justify-center lg:hidden">
                            <img src={m4} width={300} height={300} alt="eVTOL" className="rounded-3xl my-5"/> 
                            <img src={m2} width={300} height={300} alt="eVTOL" className="rounded-3xl my-5"/> 
                        </div>
                    </div>
                    <div className="hidden md:flex-col lg:flex w-1/2 items-center">
                        <Trail height={80}>
                            <div />
                        </Trail>
                        <img src={m4} width={300} height={300} alt="eVTOL" className="rounded-3xl my-5"/>
                        <img src={m2} width={300} height={300} alt="eVTOL" className="rounded-3xl my-5"/> 
                    </div>
                </div>
            </div>
            <div className="h-20 w-full" />
        </div>
    </div>
  )
}

export default Modula