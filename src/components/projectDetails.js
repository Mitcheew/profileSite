import React from "react"

export default function ProjectDetails(props) {
    // share/star links??
    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            height: '500px', // <-- This sets the height
            overflow: 'auto' // <-- This tells the modal to scroll
        }
    };
    return (
        <span style={customStyles.content}>
            <h2>{props.title[props.index]}</h2>
            <img src={props.image[props.index]} alt={props.title[props.index]} />
            <h3>About this Project</h3>
            <p>{props.about[props.index]}</p>
            <h3>What I Learned</h3>
            <p>{props.learn[props.index]}</p>
            <h3>See this Project and my Code</h3>
            <a href={props.link[props.index]}>Live Project Site</a>
            <a href={props.repo[props.index]}>GitHub Repo</a>
        </span>
    )


}