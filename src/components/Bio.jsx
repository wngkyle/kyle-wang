import { BIO } from "../constants"
import military from "../assets/military.png";
import hockey from "../assets/hockey.png";
import diving from "../assets/diving.png";


const Bio = () => {
  return (
    <section id="bio" className="mt-10 md:mx-10">
      <h2 className="mt-32 mb-10 text-center text-4xl lg:text-5xl">Bio</h2>
      <p className="mx-8 md:mx-20 my-10 p-2 text-base text-center">
        {
          BIO.map((item, index) => {
            return (
              <div className="mb-10" key={index}>
                <p>
                  {item}
                </p>
              </div>
            )
          })
        }
      </p>
      <div className="flex justify-center gap-10">
        <div>
          <img src={military} width={250} height={250} alt="military" className="rounded-3xl"/>
        </div>
        <div className="flex">
          <img src={hockey} width={450} height={450} alt="hockey" className="rounded-3xl"/>
        </div>
        <div className="flex">
          <img src={diving} width={350} height={350} alt="diving" className="rounded-3xl"/>
        </div>
      </div>
      <div className="h-20" />
    </section>
  )
}

export default Bio