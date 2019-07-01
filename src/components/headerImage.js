import React, { Component } from "react"
import HdrImg from "../images/header-placeholder.png"
import ProPic from "../images/noImage.jpg"

export default function HeaderImage() {
    return (
        <span className="headerImage">
            <img src={HdrImg} alt="" />
            <img src={ProPic} alt="Ethan" />
            <p>I am a Full Stack Web Developer specializing in React, Redux, Node, GraphQL, PostgreSQL</p>
        </span>
    )

}