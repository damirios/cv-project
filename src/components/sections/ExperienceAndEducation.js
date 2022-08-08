import React, {Component} from 'react';

class ExperienceAndEducation extends Component {

  render() {
    return(
      <section className='experience-and-education'>
        <Experience/>
        <Education/>
      </section>
    );
  }
}

// ExperienceAndEducation Components
class Experience extends Component {

  render() {
    return(
      <div className='experience'>
        
      </div>
    );
  }
}

class Education extends Component {

  render() {
    return(
      <div className='education'>

      </div>
    );
  }
}

export default ExperienceAndEducation;