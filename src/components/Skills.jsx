import { HARDWARE_SKILLS, SOFTWARE_SKILLS, LANGUAGES } from "../constants";

const Skills = () => {
  const SkillContainer = ({ children }) => {
    return (
      <div className="w-1/2 rounded-lg bg-white/10 border border-white">
        {children}
      </div>
    )
  }

  return (
    <section id="skills" className="w-full flex flex-col items-center">
      <h2 className="mt-6 mb-10 text-center text-4xl lg:text-5xl">Skills</h2>
      <div className="flex flex-row justify-between px-16">
        <SkillContainer>
          <h3 className="my-5 text-center text-3xl">Hardware</h3>
          {
            HARDWARE_SKILLS.map((item, index) => {
              return (
                <div>
                  <div className="flex flex-row justify-between mx-8 my-5">
                    <p>{item.name}</p>
                    <p>{item.experience}</p>
                  </div>
                  {index + 1 !== HARDWARE_SKILLS.length ? <div className="h-0.5 mx-8 bg-white/20"/> : <div/>}
                </div>
              )
            })
          }
        </SkillContainer>
        <div className="w-10"/>
        <SkillContainer>
          <h3 className="my-5 text-center text-3xl">Software</h3>
          {
            SOFTWARE_SKILLS.map((item, index) => {
              return (
                <div>
                  <div className="flex flex-row justify-between mx-8 my-5">
                    <div className="w-6/12">
                      <p>{item.name}</p>
                      {item.name === "React" ? <p className="text-xs text-white/80 leading-5">( This site is built with React, Tailwind CSS, Framer Motion, and React Spring!!! )</p> : <div/>}
                    </div>
                    <p>{item.experience}</p>
                  </div>
                  {index + 1 !== SOFTWARE_SKILLS.length ? <div className="h-0.5 mx-8 bg-white/20"/> : <div/>}
                </div>
              )
            })
          }
        </SkillContainer>
      </div>
      <div className="mt-10 px-5 rounded-lg bg-white/10 border border-white ">
        <h3 className="my-5 mx-5 text-center text-3xl">Languages</h3>
        <div className="flex flex-col md:flex-row justify-center items-center mb-5">
          {
            LANGUAGES.map((item, index) => {
              return (
                <p key={index} className="mx-5">{item}</p>
              )
            })
          }
        </div>
      </div>
    </section>
  )
}

export default Skills