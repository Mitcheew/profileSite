import React, { Component } from "react"
import Resume from "./../resume/EthanMitchellResume.pdf"
import ProPic from '../images/noImage.jpg'

export default class Contact extends Component {
    render() {
        return (
            <div className="contactSection">
                <h2>How to Engage with me</h2>
                <div>
                    <span>
                        <h3>View or download my Resume</h3>
                        <img src={ProPic} alt="" />
                        <a href={Resume} rel="noopener noreferrer" target="_blank"><button>View My Resume</button></a>
                    </span>
                    <span>
                        <h3>Email me!</h3>
                        <img src={ProPic} alt="" />
                        <a href="mailto:ethan@ethanwmitchell.com?subject=(Message from ethanwmitchell.com)" rel="noopener noreferrer" target="_blank"><button>Send Me a Message</button></a>
                    </span>
                    {/* <span>
                        <h3>Step 3:</h3>
                        <img src={ProPic} alt="" />
                    </span> */}
                </div>
                
            </div>
        )
    }

}