// import React, {Component} from "react";
import Education from "./content-components/Education";
import Experience from "./content-components/Experience";
import PersonalInfo from "./content-components/PersonalInfo";

function Content(props) {
    const { cvFields } = props;

    return (
        <div className="content">
            <div className="container">
                <form className="content__form">
                    <PersonalInfo personal={cvFields.personal} />
                    <div className="education-and-experience">
                        <Education educationFields={cvFields.education} />
                        <Experience experienceFields={cvFields.experience} />
                    </div>
                </form>
            </div>
        </div>
    );
}

// class Content extends Component {
//     constructor(props) {
//         super(props);
//     }

//     render() {
//         const {cvFields} = this.props;
        
//         return (
//             <div className="content">
//                 <div className="container">
//                     <form className="content__form">
//                         <PersonalInfo personal={cvFields.personal} />
//                         <div className="education-and-experience">
//                             <Education educationFields={cvFields.education} />
//                             <Experience experienceFields={cvFields.experience} /> 
//                         </div>
//                     </form>
//                 </div>
//             </div>
//         );
//     }
// }

export default Content;