import React, { Component } from "react"
import Slider from 'react-slick'

export default class Carousel extends Component {
    render() {
        let settings = {
            dots: false,
            lazyLoad: true,
            infinite: true,
            speed: 100,
            slidesToShow: 1,
            slidesToScroll: 1

        };
        let photoReel = this.state.image.map(photo => {
            return (
                <div className='center-slide' key={photo.photo_id}>
                    <img className='post-preview' src={photo.image} alt="" />
                </div>
            )
        })
        return (
            <div>
                <Slider
                    className='SliderPhotos'
                    dots={false}
                    lazyLoad={true}
                    infinite={true}
                    speed={100}
                    slidesToScroll={1}
                    asNavFor={this.state.nav1}
                    ref={slider => (this.slider2 = slider)}
                    slidesToShow={photoReel.length < 5 ?
                        photoReel.length
                        :
                        5
                    }
                    swipeToSlide={true}
                    focusOnSelect={true}
                >
                    {photoReel.length > 1 ?
                        photoReel
                        :
                        null
                    }
                </Slider>                </div>
        )
    }

}