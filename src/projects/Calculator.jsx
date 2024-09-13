import { useEffect } from "react";
import Trail from "../components/Trail";
import BackButton from "../components/BackButton";

const title = "iCalc";
const duration = "November 2022 - December 2022";
const intro = "This user-friendly calculator, developed using React, is designed to perform essential mathematical operations \
  such as addition, subtraction, multiplication, and division. The calculator is flexible, allowing users to work with both \
  whole numbers and decimals, making it a versatile tool for everyday calculations. Its intuitive interface lets users simply \
  tap the number buttons and operators to perform their calculations, with results displayed at the top of the screen."
const intro_2 = "Built with React, HTML, CSS, and Javascript using CreateReactApp, the calculator combines simplicity and \
  functionality, offering a smooth and efficient user experience."

import cal_2 from "../assets/calculator-2.gif";

const Calculator = () => {
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
                            <img src={cal_2} width={500} height={500} alt="eVTOL" className="rounded-3xl my-5"/> 
                        </div>
                    </div>
                    <div className="hidden md:flex-col lg:flex w-1/2 justify-center items-center">
                        <Trail height={80}>
                            <div />
                        </Trail>
                        <img src={cal_2} width={500} height={500} alt="eVTOL" className="rounded-3xl my-5"/>
                    </div>
                </div>
            </div>
            <div className="h-20 w-full" />
        </div>
    </div>
  )
}

export default Calculator