import React from "react"
import HdrImg from "../images/mt_timpanogos.jpg"
import ProPic from "../images/profilePic.jpg"

export default function HeaderImage() {
    return (
            <span className="headerImage">
                <img className="headerPic" src={HdrImg} alt="" />
                <img className="profilePic" src={ProPic} alt="Ethan" />
                <p className="profileDescription">I am a Full Stack Web Developer specializing in React, Redux, Node, GraphQL, PostgreSQL</p>
            </span>
    )

}