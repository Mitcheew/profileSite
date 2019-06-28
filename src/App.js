import React, { Component } from 'react';
import Skills from "./components/skills"
import NameTopBar from "./components/nameTopBar"
import HeaderImage from "./components/headerImage"
// import ProjectsCarousel from "./components/projectsCarousel"
import Slider from 'react-slick'
import ProjectDetails from "./components/projectDetails"
import Popup from 'reactjs-popup'
import Contact from "./components/contact"
import Links from "./components/links"

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      project: [
        {
          project_id: 0,
          image: 'https://media.licdn.com/dms/image/C4D03AQFmgEk0L8B-vA/profile-displayphoto-shrink_200_200/0?e=1567036800&v=beta&t=zulFNTd1EXRnjT52OCGxUZeHp4KzLlwGmauIs889Kro',
          title: 'Project 1'
        },
        {
          project_id: 1,
          image: 'https://media.licdn.com/dms/image/C4D03AQFmgEk0L8B-vA/profile-displayphoto-shrink_200_200/0?e=1567036800&v=beta&t=zulFNTd1EXRnjT52OCGxUZeHp4KzLlwGmauIs889Kro',
          title: 'Project 2'
        },
        {
          project_id: 2,
          image: 'https://media.licdn.com/dms/image/C4D03AQFmgEk0L8B-vA/profile-displayphoto-shrink_200_200/0?e=1567036800&v=beta&t=zulFNTd1EXRnjT52OCGxUZeHp4KzLlwGmauIs889Kro',
          title: 'Project 3'
        },
        {
          project_id: 3,
          image: 'https://media.licdn.com/dms/image/C4D03AQFmgEk0L8B-vA/profile-displayphoto-shrink_200_200/0?e=1567036800&v=beta&t=zulFNTd1EXRnjT52OCGxUZeHp4KzLlwGmauIs889Kro',
          title: 'Project 4'
        },
        {
          project_id: 4,
          image: 'https://media.licdn.com/dms/image/C4D03AQFmgEk0L8B-vA/profile-displayphoto-shrink_200_200/0?e=1567036800&v=beta&t=zulFNTd1EXRnjT52OCGxUZeHp4KzLlwGmauIs889Kro',
          title: 'Project 5'
        },
        {
          project_id: 5,
          image: 'https://media.licdn.com/dms/image/C4D03AQFmgEk0L8B-vA/profile-displayphoto-shrink_200_200/0?e=1567036800&v=beta&t=zulFNTd1EXRnjT52OCGxUZeHp4KzLlwGmauIs889Kro',
          title: 'Project 6'
        }
      ],
      popupTrigger: false,
      image: '',
      title: '',
      about: '',
      learn: '',
      link: '',
      repo: ''

    }
  }

    popup(image, title, about, learn, link, repo){
      this.setState({
        image: image,
        title: title,
        about: about,
        learn: learn,
        link: link,
        repo: repo,
        popupTrigger: true
      })
      return (
      <Popup trigger={<a className='center-slide'>
      <img className='post-preview' src={image} alt="" />
      <p>{title}</p>
    </a>
    } modal
    // style={customStyles.content}
    ><ProjectDetails image={image} title={title} about={'About text'} learn={'hi learn'} link={'#'} repo={'#'} /></Popup>
      )
    }
  render() {
    let photoReel = this.state.project.map(project => {
      return (
        <span onClick={() => this.popup(project.image, project.title)} className='center-slide' key={project.project_id}>
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
      <div className="App">
        <NameTopBar />
        <HeaderImage />
        <Skills />
        {
          this.state.popupTrigger ? <Popup trigger={ this.state.popupTrigger } modal
        // style={customStyles.content}
        ><ProjectDetails image={this.state.image} title={this.state.title} about={'About text'} learn={'hi learn'} link={'#'} repo={'#'} /></Popup> : 0
        }
        <Slider
          className=''
          {...settings}
        >
          {photoReel}
        </Slider>
        <Contact />
        <Links />
      </div>

    )

  }
}