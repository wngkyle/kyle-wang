import { MdArrowOutward } from "react-icons/md"
import { PROJECTS } from "../constants"
import { useNavigate } from "react-router-dom";

const Projects = () => {
    const navigate = useNavigate();
  return (
    <section id="projects">
        <h2 className="mt-28 mb-20 text-center text-4xl lg:text-5xl">Projects</h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 px-16">
            {PROJECTS.map((project) => (
                <div key={project.id} className="group relative overflow-hidden rounded-3xl">
                    <img src={project.image} alt={project.name} className="h-full w-full object-cover transition-transform 
                    duration-500 group-hover:scale-110" />
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-whtie opacity-0 backdrop-blur-lg
                    transition-opacity duration-500 group-hover:opacity-100">
                        <h3 className={project.id === 3 ? "mb-2 text-xl" : "mb-2 text-xl text-black"}>
                            {project.name}
                        </h3>
                        <p className={project.id === 3 ? "mb-12 px-12" : "mb-12 px-12 text-black"}>
                            {project.description}
                        </p>
                        <button className="rounded-full bg-white px-4 py-2 text-black hover:bg-gray-300" onClick={() => navigate(project.href)}>
                            <div className="flex items-center justify-center">
                                <span className="mr-2">
                                    View Project
                                </span>
                                <MdArrowOutward/>
                            </div>                            
                        </button>

                    </div>
                </div>
            ))}
        </div>
    </section>
  )
}

export default Projects

{/* <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="rounded-full bg-white px-4
    py-2 text-black hover:bg-gray-300">
        <div className="flex items-center">
            <span>
                View on Github
            </span>
            <MdArrowOutward/>
        </div>
    </a> */}