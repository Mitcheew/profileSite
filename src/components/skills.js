import React, { Component } from "react"
import AngularLogo from "../images/angular.png"
// import GraphqlLogo from "../images/graphql.png"
import JavascriptLogo from "../images/javascript.png"
import NodeLogo from "../images/node.png"
import PostgresLogo from "../images/postgres.png"
import ReactLogo from "../images/react.png"

export default class Skills extends Component {
    render() {
        return (
            <div className="skillsPage">
                <h2>Some of my skills include</h2>
                <div className="skillsList">
                    <span className="skills">
                        <img src={ReactLogo} alt="React" />
                        <p>React</p>
                    </span>
                    <span className="skills">
                        <img src={AngularLogo} alt="Angular" />
                        <p>Angular</p>
                    </span>
                    <span className="skills">
                        <img src={NodeLogo} alt="Node" />
                        <p>Node</p>
                    </span>
                    <span className="skills">
                        <img src={JavascriptLogo} alt="JavaScript" />
                        <p>JavaScript</p>
                    </span>
                    {/* <span className="skills">
                    <img src={GraphqlLogo} alt="GraphQL" />
                    <p>GraphQL</p>
                </span> */}
                    <span className="skills">
                        <img src={PostgresLogo} alt="Postgres" />
                        <p>Postgres</p>
                    </span>
                </div>
            </div>

        )
    }

}