import React, { Component } from "react"
import HdrImg from "../images/header-placeholder.png"
import ProPic from "../images/noImage.jpg"

export default class HeaderImage extends Component{
    render() {
        return (
                <span className="headerImage">
                    <img src={HdrImg} alt="Header Image" />
                    <img src={ProPic} alt="Ethan" />
                    <p>I am a Full Stack Web Developer specializing in React, Redux, Node, GraphQL, PostgreSQL</p>
                </span>
        )
    }

}