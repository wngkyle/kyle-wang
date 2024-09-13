import { HERO } from "../constants";
import profilePic from "../assets/profile-pic.png";
import Trail from "./Trail";

const Hero = () => {

    return (
        <div>
            <section className="ml-10 flex min-h-screen flex-wrap items-center -mb-20">
                <div className="w-full md:w-1/2">
                    <Trail className="" height={90}>
                        <span className="my-8 text-5xl font-bold lg:text-7xl">
                            {HERO.name}
                        </span>
                    </Trail>
                    <Trail className="" height={50}>
                        <span className="text-3xl tracking-tighter lg:text-4lx">
                            {HERO.greet}
                        </span>
                    </Trail>
                    <Trail className="" height={100}>
                        <span className="mb-8 text-xl">
                            {HERO.description}
                        </span>
                    </Trail>
                </div>
                <div className="w-full md:w-1/2 lg:p-8">
                    <div className="flex justify-center">
                        <img src={profilePic} width={450} height={450} alt="Carl Frank" className="rounded-3xl"/>
                    </div>
                </div>
            </section>
        </div>
  )
}

export default Hero