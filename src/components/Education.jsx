import { EDUCATION } from "../constants"

const Education = () => {
  return (
    <section id="education" className="w-full">
      <div className="mt-20">
        <h2 className="mb-20 text-center text-4xl lg:text-5xl">Education</h2>
        <div className="lg:mx-10 px-10">
          <h3 className="text-xl lg:text-2xl">{EDUCATION.degree}</h3>
          <h4 className="text-xl lg:text-2xl">{EDUCATION.institution}</h4>
          <p className="text-white/80">{EDUCATION.duration}</p>
          <p className="mt-10">{EDUCATION.description}</p>
          <p className="mt-10">{EDUCATION.coursework}</p>
        </div>
      </div>
    </section>
  )
}

export default Education