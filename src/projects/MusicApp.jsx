import { useEffect } from "react";
import Trail from "../components/Trail";
import BackButton from "../components/BackButton";

import musicapp2 from "../assets/musicapp-2.gif";

const title = "LyricStream";
const duration = "January 2022 - February 2022";
const intro = "This Music Web App is a React-based application that integrates with the Spotify Web API to \
  provide users with access to Spotify's entire music library. Designed to enhance the music streaming experience, \
  the app includes a unique feature that displays song lyrics during playback, allowing users to enjoy their favorite \
  tracks while following along with the lyrics."
const intro_2 = "Upon logging in with their Spotify accounts, users can explore the music library by searching for songs \
  or artists. The search results are conveniently displayed below the search bar, allowing easy navigation. Once a song is \
  selected, the app transitions to player mode, where users can control playback, adjust the volume, and add tracks to their \
  'Liked Songs' playlist. The inclusion of real-time lyrics adds an extra layer of engagement, making the streaming experience \
  more immersive and interactive."

const MusicApp = () => {
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
                            <img src={musicapp2} width={500} height={500} alt="eVTOL" className="rounded-3xl my-5"/> 
                        </div>
                    </div>
                    <div className="hidden md:flex-col lg:flex w-1/2 justify-center items-center">
                        <Trail height={80}>
                            <div />
                        </Trail>
                        <img src={musicapp2} width={500} height={500} alt="eVTOL" className="rounded-3xl my-5"/>
                    </div>
                </div>
            </div>
            <div className="h-20 w-full" />
        </div>
    </div>
  )
}

export default MusicApp