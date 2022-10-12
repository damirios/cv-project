import React, {Component} from "react";
import Education from "./content-components/Education";
import Experience from "./content-components/Experience";
import PersonalInfo from "./content-components/Personal-info";
import Controller from "./content-components/Controller";

class Content extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="content">
                <div className="container">
                    <form className="content__form">
                        <PersonalInfo/>
                        <div className="education-and-experience">
                            <Education/>
                            <Experience/> 
                        </div>
                        <Controller/>
                    </form>
                </div>
            </div>
        );
    }
}

export default Content;