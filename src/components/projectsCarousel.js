import React, { Component } from "react"
import Slider from 'react-slick'

export default class Carousel extends Component {
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
            ]

        }
    }
    render() {
        let photoReel = this.state.project.map(project => {
            return (
                <a href="" className='center-slide' key={project.project_id}>
                    <img className='post-preview' src={project.image} alt="" />
                    <p>{project.title}</p>
                </a>
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
                <Slider
                    className='SliderPhotos'
                    {...settings}
                >
                    {photoReel}
                </Slider>                </div>
        )
    }

}