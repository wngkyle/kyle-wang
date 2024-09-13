import { CONTACTS } from "../constants";

const Contact = () => {
  return (
    <section id="contact" className="flex flex-col items-center w-full">
        <h2 className="mt-16 mb-20 text-center text-4xl lg:text-5xl">Contact</h2>
        <div className="flex flex-row justify-between md:w-1/3 lg:w-1/3">
          {
            CONTACTS.map((item, index) => {
              return (
                <div key={index}>
                  {
                    item.href.includes("mailto") ? (
                      <a href={item.href}>
                        {item.icon}
                      </a>
                    ) : (
                      <a href={item.href} target="_blank">
                        {item.icon} 
                      </a>
                    )
                  }
                </div>
              )
            })
          }
        </div>
        <div className="h-22" />
        <p className="my-24 text-xs text-center text-white/80">This site is built with React, Tailwind CSS,<br/> Framer Motion, and React Spring. </p>
    </section>
  )
}

export default Contact