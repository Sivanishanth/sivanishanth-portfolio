

export default function ProjectCard(props) {
    return (
        <div className="projectCard">
            <div className="projectMedia">
                <img src={props.image} alt={props.title} />
            </div>
            <div className="projectContent">
                <h2>{props.title}</h2>
                <p>{props.description}</p>
            </div>
            <div className="techStack">
                {props.tech.map((techItem , index)=>{
                    return <span key={index}>{techItem}</span>
                })}
            </div>
            <div className="projectLinks">
                <a href={props.github} target='_blank'>GitHub</a>
                {props.live && (
                    <a href={props.live} target='_blank'>Live</a>
                )}
            </div>
        </div>
    )
}