import React, { Component } from 'react';
import SingleBlock from '../utilities/singleEducationAndExperienceBlock';

class Education extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return ( 
            <div className="education">
                <h2 className='header-text'>Education</h2>
                <SingleBlock/>
            </div>
        );
    }
}
 
export default Education;