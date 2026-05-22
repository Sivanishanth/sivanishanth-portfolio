import ProjectCard from "../components/ProjectCard";
import projects from "../data/projects";
import '../styles/ProjectCard.css'
import '../styles/Projects.css'

export default function Projects(){
    return(
        <section id="projects" className="projectSection">
            <h2 className="projectTitle">
                My Projects
            </h2>
            <div className="projectGrid">
                {projects.map((project) => (
                    <ProjectCard 
                        key={project.id}
                        title={project.title}
                        description={project.description}
                        tech={project.tech}
                        image={project.image}
                 github={project.github}
                 live={project.live}
                />
                ))}
            </div>
        </section>
    )
}