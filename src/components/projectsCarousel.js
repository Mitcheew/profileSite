import React, { useState } from "react"
import Slider from 'react-slick'
import ProjectDetails from "./projectDetails"
import Media from 'react-media';
import Popup from 'reactjs-popup'
import ProPic from '../images/noImage.jpg'

export default function Carousel() {
    const [project, setProject] = useState([
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
    ])
    const [popupTrigger, setPopupTrigger] = useState(false)
    const [image, setImage] = useState([])
    const [title, setTitle] = useState([])
    const [about, setAbout] = useState([])
    const [learn, setLearn] = useState([])
    const [link, setLink] = useState([])
    const [repo, setRepo] = useState([])
    const [index, setIndex] = useState(0)

    function popupOpen(newImage, newTitle, newAbout, newLearn, newLink, newRepo, newIndex) {
        if (!about[newIndex]) {
            let phImage = [...image]
            let phTitle = [...title]
            let phAbout = [...about]
            let phLearn = [...learn]
            let phLink = [...link]
            let phRepo = [...repo]
            phImage[newIndex] = newImage
            phTitle[newIndex] = newTitle
            phAbout[newIndex] = newAbout
            phLearn[newIndex] = newLearn
            phLink[newIndex] = newLink
            phRepo[newIndex] = newRepo
            setImage(phImage)
            setTitle(phTitle)
            setAbout(phAbout)
            setLearn(phLearn)
            setLink(phLink)
            setRepo(phRepo)
        }
        setIndex(newIndex)
        setPopupTrigger(true)
    }
    function popupClose() {
        setPopupTrigger(false)
    }
    let photoReel = project.map((project, index) => {
        return (
            <span onClick={() => popupOpen(project.image, project.title, project.about, project.learn, project.link, project.repo, index)} className='center-slide' key={project.project_id}>
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
        slidesToShow: photoReel.length < 3 ?
            photoReel.length
            :
            3,
        slidesToScroll: 1,
        swipeToSlide: true

    };
    let mobileSettings = {
        dots: false,
        lazyLoad: true,
        infinite: true,
        speed: 100,
        slidesToShow: photoReel.length <= 1 ?
            photoReel.length
            :
            1,
        slidesToScroll: 1,
        swipeToSlide: true

    };
    return (
        <div className="sliderSection">
            <Popup open={popupTrigger} closeOnDocumentClick onClose={popupClose} modal
            // style={customStyles.content}
            ><ProjectDetails image={image} title={title} about={about} learn={learn} link={link} repo={repo} index={index} /></Popup>
            <h2>My Projects</h2>
            < Media query='(max-width: 751px)' >
                {matches => matches ?
                    (
                        <Slider
                            className='SliderPhotos'
                            {...mobileSettings}
                        >
                            {photoReel}
                        </Slider>

                    )
                    :
                    (
                        <Slider
                            className='SliderPhotos'
                            {...settings}
                        >
                            {photoReel}
                        </Slider>
                    )
                }
            </Media >

        </div>
    )


}