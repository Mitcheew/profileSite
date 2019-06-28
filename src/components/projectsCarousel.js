import React, { Component } from "react"
import Slider from 'react-slick'
import ProjectDetails from "./projectDetails"
import Popup from 'reactjs-popup'
import ProPic from '../images/noImage.jpg'

export default class Carousel extends Component {
    constructor() {
        super()
        this.state = {
            project: [
                {
                    project_id: 0,
                    image: ProPic,
                    title: 'Project 1',
                    about: 'About 1',
                    learn: 'Learn 1',
                    link: '#',
                    repo: '#'
                },
                {
                    project_id: 1,
                    image: ProPic,
                    title: 'Project 2',
                    about: 'About 2',
                    learn: 'Learn 2',
                    link: '#',
                    repo: '#'
                },
                {
                    project_id: 2,
                    image: ProPic,
                    title: 'Project 3',
                    about: 'About 3',
                    learn: 'Learn 3',
                    link: '#',
                    repo: '#'
                },
                {
                    project_id: 3,
                    image: ProPic,
                    title: 'Project 4',
                    about: 'About 4',
                    learn: 'Learn 4',
                    link: '#',
                    repo: '#'
                },
                {
                    project_id: 4,
                    image: ProPic,
                    title: 'Project 5',
                    about: 'About 5',
                    learn: 'Learn 5',
                    link: '#',
                    repo: '#'
                },
                {
                    project_id: 5,
                    image: ProPic,
                    title: 'Project 6',
                    about: 'About 6',
                    learn: 'Learn 6',
                    link: '#',
                    repo: '#'
                }
            ],
            popupTrigger: false,
            image: [],
            title: [],
            about: [],
            learn: [],
            link: [],
            repo: [],
            index: 0

        }
        this.popupClose = this.popupClose.bind(this);
    }
    popupOpen(image, title, about, learn, link, repo, i) {
        if (!this.state.title[i]) {
            let phImage = [...this.state.image]
            let phTitle = [...this.state.title]
            let phAbout = [...this.state.about]
            let phLearn = [...this.state.learn]
            let phLink = [...this.state.link]
            let phRepo = [...this.state.repo]
            phImage[i] = image
            phTitle[i] = title
            phAbout[i] = about
            phLearn[i] = learn
            phLink[i] = link
            phRepo[i] = repo
            this.setState({
                image: phImage,
                title: phTitle,
                about: phAbout,
                learn: phLearn,
                link: phLink,
                repo: phRepo
            })
        }
        this.setState({
            popupTrigger: true,
            index: i
        })
    }
    popupClose() {
        this.setState({
            popupTrigger: false
        })
    }
    render() {
        let photoReel = this.state.project.map((project, index) => {
            return (
                <span onClick={() => this.popupOpen(project.image, project.title, project.about, project.learn, project.link, project.repo, index)} className='center-slide' key={project.project_id}>
                    <img className='post-preview' src={project.image} alt="" />
                    <p>{project.title}</p>
                </span>
            )
        })
        let settings = {
            dots: false,
            lazyLoad: true,
            infinite: true,
            speed: 100,
            slidesToShow: photoReel.length < 5 ?
                photoReel.length
                :
                5,
            slidesToScroll: 1,
            swipeToSlide: true

        };
        return (
            <div>
                <Popup open={this.state.popupTrigger} closeOnDocumentClick onClose={this.popupClose} modal
                // style={customStyles.content}
                ><ProjectDetails image={this.state.image} title={this.state.title} about={this.state.about} learn={this.state.learn} link={this.state.link} repo={this.state.repo} index={this.state.index} /></Popup>
                <Slider
                    className='SliderPhotos'
                    {...settings}
                >
                    {photoReel}
                </Slider>
            </div>
        )
    }

}