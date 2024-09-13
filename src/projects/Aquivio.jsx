import { useEffect } from "react";
import Trail from "../components/Trail";
import BackButton from "../components/BackButton";

import onboarding from "../assets/onboarding.gif";
import signIn from "../assets/signIn.gif";
import signUp from "../assets/signUp.gif";
import forgotPassword from "../assets/forgotPassword.gif";
import selection from "../assets/selection.gif";

const title = "Aquivio Mobile App";
const duration = "September 2023 - December 2023";
const intro = "The Aquivio app is a cross-platform mobile application designed to enhance user convenience and drive drink sales. \
    It allows customers to order drinks directly from their phones, eliminating the need to physically interact with the dispenser. I developed essential \
    features, including the onboarding UI, sign-in and sign-up pages, authentication, drink selection interface, and payment page, with a strong emphasis on creating a \
    seamless and intuitive user experience."
const intro_2 = "Beyond streamlining the user experience, the app also tracks and records user metrics, providing valuable insights for businesses. \
    This data helps them assess the performance of the dispenser and analyze sales trends, such as which drink flavors or infusions are most popular. \
    With this information, businesses can make informed decisions to optimize sales and operations. Additionally, the app offers a variety of \
    payment options, including credit cards, member points, and Easy Card, ensuring flexibility and convenience for customers."

const Aquivio = () => {
    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top
      }, []);
      return (
        <div className="relative h-screen overflow-visible antialiased">
            <div className="inset-0 bg-fixed bg-cover bg-center bg-img2">
                <BackButton />
                <div className="mx-10 md:mx-14 lg:mx-20">
                    <div className="flex flex-col">
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
                        </div>
                        <div className="flex flex-row flex-wrap items-center justify-center mt-12">
                            <div className="flex flex-col my-8 mx-8 items-center">
                                <img src={onboarding} width={300} height={300} alt="onboarding" className="rounded-3xl"/> 
                                <p className="mt-6 text-xl">Onboarding UI</p>
                            </div>
                            <div className="flex flex-col my-8 mx-8 items-center">
                                <img src={signIn} width={300} height={300} alt="singIn" className="rounded-3xl"/> 
                                <p className="mt-6 text-xl">Sign In</p>
                            </div>
                            <div className="flex flex-col my-8 mx-8 items-center">
                                <img src={forgotPassword} width={300} height={300} alt="forgotPassword" className="rounded-3xl"/> 
                                <p className="mt-6 text-xl">Forgot Password & Authentication</p>
                            </div>
                            <div className="flex flex-col my-8 mx-8 items-center">
                                <img src={signUp} width={300} height={300} alt="signUp" className="rounded-3xl"/>
                                <p className="mt-6 text-xl">Sign Up </p>
                            </div> 
                            <div className="flex flex-col my-8 mx-8 items-center">
                                <img src={selection} width={300} height={300} alt="selection" className="rounded-3xl"/>
                                <p className="mt-6 text-xl">Drink Selection</p>
                            </div> 
                        </div>
                    </div>
                </div>
                <div className="h-20 w-full" />
            </div>
        </div>
    )
}

export default Aquivio