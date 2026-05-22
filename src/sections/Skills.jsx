// import data from "../data/skills"
import data from "../data/skills.jsx"

export default function Skills() {
    return (
        <section className="skills-container" id="skills">
            <div className="skill-title">
                <h1 className="title">Skills</h1>
            </div>
            <div className="skills-section">
                {Object.entries(data).map(([category, skills], index) => {
                    return (
                        <ul key={index}>

                            <li className="category-title">
                                {category}
                            </li>

                            {
                                skills.map((skill, index) => {
                                    return (
                                        <li key={index}>

                                            {skill.icon}

                                            {skill.name}

                                        </li>
                                    )
                                })
                            }

                        </ul>
                    )
                })}
            </div>
        </section>
    )
}