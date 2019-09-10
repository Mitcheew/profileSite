import React, {useState} from "react"

export default function ProjectDetails(props) {
    // share/star links??
    
    const [index, setIndex] = useState(props.index)
    const [numberOfProjects, setNumberOfProjects] = useState(props.numberOfProjects)
    // function nextProject(){
    //     numberOfProjects === index + 1? setIndex(0) : setIndex(index + 1)
    // }
    // function previousProject(){
    //     index === 0? setIndex(numberOfProjects - 1) : setIndex( index - 1)
    // }
    return (
        <span id="projectDetails">
            <h2>{props.title[index]}</h2>
            <span onClick={props.close} className="xOut"></span>
            {/* <span onClick={() => previousProject()} className="slick-arrow slick-prev previousProject"></span>
            <span onClick={() => nextProject()} className="slick-arrow slick-next nextProject"></span> */}
            <img src={props.image[index]} alt={props.title[index]} />
            <h3>About this Project</h3>
            <p>{props.about[index]}</p>
            <h3>What I Learned</h3>
            <p>{props.learn[index]}</p>
            <span className="projectLinks">
                <a href={props.link[index]} target="_blank">Project Site</a>
                <a href={props.repo[index]} target="_blank">GitHub Repo</a>
            </span>
        </span>
    )


}