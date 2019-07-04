import React, { Component } from "react"

export default class ProjectDetails extends Component {
    constructor(props) {
        super(props)
        this.state = {
            projectTitle: this.props.title,
            projectImage: this.props.image,
            projectAbout: this.props.about,
            projectLearn: this.props.learn,
            projectLink: this.props.link,
            projectRepo: this.props.repo,
            index: this.props.index
            // share/star links??
        }
    }
    render() {
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
                <h2>{this.state.projectTitle[this.state.index]}</h2>
                <img src={this.state.projectImage[this.state.index]} alt={this.state.projectTitle[this.state.index]} />
                <h3>About this Project</h3>
                <p>{this.state.projectAbout[this.state.index]}</p>
                <h3>What I Learned</h3>
                <p>{this.state.projectLearn[this.state.index]}</p>
                <h3>See this Project and my Code</h3>
                <a href={this.state.projectLink[this.state.index]}>Live Project Site</a>
                <a href={this.state.projectRepo[this.state.index]}>GitHub Repo</a>
            </span>
        )
    }

}