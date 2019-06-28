import React, { Component } from "react"

export default class ProjectDetails extends Component{
    constructor(props){
        super(props)
        this.state = {
            projectTitle: this.props.title,
            projectImage: this.props.image,
            projectAbout: this.props.about,
            projectLearn: this.props.learn,
            projectLink: this.props.link,
            projectRepo: this.props.repo
            // share/star links??
        }
    }
    render() {
        const customStyles = {
            content : {
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
                    <h2>{this.state.projectTitle}</h2>
                    <img src={this.state.projectImage} alt={this.state.projectTitle} />
                    <h3>About this Project</h3>
                    <p>{this.state.projectAbout}</p>
                    <h3>What I Learned</h3>
                    <p>{this.state.projectLearn}</p>
                    <h3>See this Project and my Code</h3>
                    <a href={this.state.projectLink}>Live Project Site</a>
                    <a href={this.state.projectRepo}>GitHub Repo</a>
                </span>
        )
    }

}