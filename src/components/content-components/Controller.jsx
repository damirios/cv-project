import React, { Component } from 'react';

class Controller extends Component {
    constructor(props) {
        super(props);

        this.addEducation = this.addEducation.bind(this);

    }

    addEducation(e) {
        
    }

    render() { 
        return (
            <div className='controller'>
                <h2 className='header-text'>Control buttons</h2>
                <div className="controller__buttons">
                    <button type='button' className="controller__add-educ" onClick={this.addEducation}>Add education block</button>
                </div>
            </div>
        );
    }
}
 
export default Controller;