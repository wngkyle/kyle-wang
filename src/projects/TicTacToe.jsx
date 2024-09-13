import { useEffect } from "react"
import Trail from "../components/Trail";
import BackButton from "../components/BackButton";

import t2 from "../assets/tictactoe-2.gif";

const title = "Tic Tac Toe Pro";
const duration = "November 2022 - December 2022";
const intro = "Tic-Tac-Toe Pro is an interactive tic-tac-toe game developed using React JavaScript. This application \
  elevates the classic game with new features, including the ability to backtrack and revisit previous moves, adding \
  a strategic layer to the gameplay. Whether you're playing against a friend or challenging yourself, Tic-Tac-Toe Pro \
  offers an engaging and dynamic experience."

const TicTacToe = () => {
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
                            <img src={t2} width={500} height={500} alt="eVTOL" className="rounded-3xl my-5"/> 
                        </div>
                    </div>
                    <div className="hidden md:flex-col lg:flex w-1/2 justify-center items-center">
                        <Trail height={80}>
                            <div />
                        </Trail>
                        <img src={t2} width={500} height={500} alt="eVTOL" className="rounded-3xl my-5"/>
                    </div>
                </div>
            </div>
            <div className="h-64 w-full" />
        </div>
    </div>
  )
}

export default TicTacToe