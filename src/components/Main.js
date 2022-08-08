import React, {Component} from 'react';
import PersonalInfo from './sections/PersonalInfo';
import ExperienceAndEducation from './sections/ExperienceAndEducation';

class Main extends Component {

  render() {
    return(
      <main className='main'>
        <PersonalInfo/>
        <ExperienceAndEducation/>
      </main>
    );
  }
}

export default Main;