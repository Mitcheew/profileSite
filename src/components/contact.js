import React, { Component } from "react"
import Resume from "./../resume/EthanMitchellResume.pdf"
import ProPic from '../images/noImage.jpg'

export default class Contact extends Component {
    render() {
        return (
            <div>
                <h2>How to Engage with me</h2>
                <div>
                    <span>
                        <h3>Step 1:</h3>
                        <a href={Resume}><img src={ProPic} alt="" /></a>
                    </span>
                    <span>
                        <h3>Step 2:</h3>
                        <img src="" alt="" />
                    </span>
                    <span>
                        <h3>Step 3:</h3>
                        <img src="" alt="" />
                    </span>
                </div>
                <button>Send Me a Message</button>
            </div>
        )
    }

}