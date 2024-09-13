import { BIO } from "../constants"

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
    </section>
  )
}

export default Bio