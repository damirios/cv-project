import React, {Component} from "react";
import Education from "./content-components/Education";
import Experience from "./content-components/Experience";
import PersonalInfo from "./content-components/Personal-info";

class Content extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {example} = this.props;

        return (
            <div className="content">
                <div className="container">
                    <form className="content__form">
                        <PersonalInfo example={example.personal} />
                        <div className="education-and-experience">
                            <Education example={example.education} />
                            <Experience example={example.experience} /> 
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default Content;