import { EXPERIENCES } from "../constants";

const Work = () => {
  const fetchDescription = (item) => {
    if (item.company == "Bright Toward Industrial Co., Ltd") {
      return (
        <>
          <p className="-mx-5 text-xl font-bold">Hardware</p>
          {item.description_hardware.map((script, index) => {
            return (
              <li key={index}>{script}</li>
            );
          })}
          <br/>
          <p className="-mx-5 text-xl font-medium">Software</p>
          {item.description_software.map((script, index) => {
            return (
              <li key={index}>{script}</li>
            );
          })}
        </>
      )
    } else {
      return item.description.map((script, index) => {
        return (
          <li key={index}>{script}</li>
        )
      })
    }
  }

  return (
    <section id="work" className="m-10 w-full">
      <h2 className="mt-24 mb-10 text-center text-4xl lg:text-5xl">Work Experience</h2>
      <div className="mx-6 md:mx-16 lg:mx-32 mt-20">
        {
          EXPERIENCES.map((item, index) => {
            return (
              <div key={index} className="flex flex-col items-center">
                <div className="w-full border border-white p-6 rounded-lg bg-white/10">
                  <h3 className="text-xl lg:text-2xl">{item.title}</h3>
                  <h4 className="my-0.5 text-white/85 text-base lg:text-xl">{item.company}</h4>
                  <p className="text-white/60">{item.duration}</p>
                  <ul className="mt-6 mb-4 mx-8 list-disc">
                    {fetchDescription(item)}
                  </ul>
                </div>
                {
                  EXPERIENCES.length === index + 1 ? <div/> : (<div className="h-16 lg:h-24 w-1 bg-white/50"/>)
                }
              </div>
            )
          })
        }
      </div>
    </section>
  )
}

export default Work