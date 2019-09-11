import React, { useState } from "react"
import Slider from 'react-slick'
import ProjectDetails from "./projectDetails"
import Media from 'react-media';
import Popup from 'reactjs-popup'
import ProPic from '../images/profile.PNG'
import BlogPic from '../images/blog.PNG'
import FridgePic from '../images/FridgeRaider.PNG'

export default function Carousel() {
    const [project] = useState([
        {
            project_id: 0,
            image: BlogPic,
            title: 'Private Blog',
            about: 'This is one of the first few projects I did as I was learning. This is a site where you can create, view and delete posts if you have an admin level account or just view as any other type of user.',
            learn: 'I learned a lot about how to use postgreSQL when making this site. I also started to learn how to use some CSS and some modules to make the site look better organized. I used HashRouter to help navigate between the different pages.',
            link: 'https://blog.ethanwmitchell.com/#/',
            repo: 'https://github.com/Mitcheew/personalPrivateBlog'
        },
        {
            project_id: 1,
            image: FridgePic,
            title: 'Fridge-Raiders',
            about: 'This was a final group project so that we could graduate from DevMountain. Our group which consisted of Lara Potjewyd, James Stevens, and I decided to create a recipe finding app where you find recipes based on manually entered ingredients',
            learn: 'I learned how valuable it is to communicate with others on your team who are working on the same project and to divide up responsibilities. My primary job was to create the backend and integrate our chosen API, but I was also able to help my other team members when they got stuck on something and vice-versa. I also learned how valuable time management is and how to prioritize which features you need more than others.',
            link: 'https://fridge-raiders.site/#/',
            repo: 'https://github.com/Fridgerators/fridgeraider'
        },
        {
            project_id: 2,
            image: ProPic,
            title: 'Profile Site',
            about: 'This project was created post-graduation so that I could have a profile site created from scratch by me. My brother helped come up with the design and I tweaked it to my liking.',
            learn: 'While working on this site, I learned about and used react-hooks and I learned more fully how to take advantage of the features of CSS and SASS. The next steps is to learn and implement a GraphQL database so that I can add that to my skillset and be able to put in more projects in the future without having to update a specific page every time I want to add a new project.',
            link: 'https://www.ethanwmitchell.com/',
            repo: 'https://github.com/Mitcheew/profileSite'
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
            ><ProjectDetails image={image} title={title} about={about} learn={learn} link={link} repo={repo} index={index} close={popupClose} numberOfProjects={project.length} /></Popup>
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