import { useEffect } from "react";
import Trail from "../components/Trail";
import BackButton from "../components/BackButton";

const title = "Processor 120";
const duration = "March 2023 - May 2023";
const intro = "This project focuses on developing an assembler, disassembler, and simulator for a processor system. \
  The assembler is designed to be case-insensitive and flexible in formatting, allowing various spacing conventions \
  between operation codes and register values. It processes assembly code into machine code, handling multiple labels \
  in a single line, and uses a series of formatting and conversion functions to ensure accurate assembly to machine \
  code translation."
const intro_2 = "The disassembler is responsible for translating machine code back into assembly instructions and simulating \
  the behavior of a processor. It decodes machine instructions into components like opcodes, registers, and immediate \
  values, using a set of logical operations to simulate memory access, arithmetic operations, and branching. Helper functions a\
  re employed to manage tasks such as extending values and handling signed numbers, ensuring smooth execution of processor commands."
const intro_3 = "The simulator mimics the processor's operation, with a strong focus on cache behavior. It supports up to two \
  customizable cache levels and handles memory read/write instructions through a cache lookup system. The program implements \
  policies like Least Recently Used (LRU) for cache eviction and requires correct cache configurations for proper execution, \
  as it doesn't automatically correct user input errors."

const Processor120 = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top
  }, []);
  return (
    <div className="relative h-screen overflow-visible antialiased">
        <div className="inset-0 bg-fixed bg-cover bg-center bg-img2">
            <BackButton />
            <div className="mx-10 md:mx-14 lg:mx-20">
                <div>
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
                  <p className="mt-10 text-white">
                    {intro_3}
                  </p>
                </div>
            </div>
            <div className="h-20 w-full" />
        </div>
    </div>
  )
}

export default Processor120