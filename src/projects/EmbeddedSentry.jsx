import { useEffect } from "react";
import Trail from "../components/Trail";
import BackButton from "../components/BackButton";

import embedded from "../assets/embeddedSentry-2.gif";

const title = "Embedded Sentry";
const duration = "April 2023 - May 2023"
const intro = " The aim of this project is to create a gesture-controlled lock, providing users with the ability \
  to define and activate a custom gesture for locking and unlocking. To unlock the device, users must replicate the \
  same gesture that they recorded. The outcome of the gesture verification will be conveyed through LED strips on \
  the device, accompanied by a musical effect played through the built-in speaker. A successful attempt will illuminate \
  the LEDs in a soothing green, while an unsuccessful one will be signaled by a red LED display. In the event of three \
  consecutive failed attempts, the device will automatically lock itself for a period of 3 minutes. After this duration, \
  users can resume their attempts to input the gesture."

const EmbeddedSentry = () => {
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
                        <div className="flex flex-col my-10 items-center justify-center lg:hidden">
                            <img src={embedded} width={300} height={300} alt="eVTOL" className="rounded-3xl my-5"/> 
                        </div>
                    </div>
                    <div className="hidden md:flex-col lg:flex w-1/2 items-center">
                        <Trail height={80}>
                            <div />
                        </Trail>
                        <img src={embedded} width={300} height={300} alt="eVTOL" className="rounded-3xl my-5"/>
                    </div>
                </div>
            </div>
            <div className="h-20 w-full" />
        </div>
    </div>
  )
}

export default EmbeddedSentry