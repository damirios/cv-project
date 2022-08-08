import React, {Component} from 'react';
import SingleField from '../Utiles/SingleField';
import '../../styles/PersonalInfo.css';

class PersonalInfo extends Component {

  constructor(props) {
    super(props);

    this.changePhoto = this.changePhoto.bind(this);
  }

  changePhoto(e) {
    if ( !document.querySelector('.photo-window') ) {
      const photoWindow = document.createElement('div');
      photoWindow.classList.add('photo-window');

      const labelURL = document.createElement('label');
      labelURL.textContent = 'Enter Photo URL';
      
      const inputURL = document.createElement('input');
      inputURL.type = 'text';
      inputURL.placeholder = 'https://...';

      const buttonURL = document.createElement('button');
      buttonURL.classList.add('change-photo-button');
      buttonURL.textContent = 'Change photo';
      buttonURL.addEventListener('click', (e) => {
        const photo = document.querySelector('.photo-box img');
        const newPhotoURL = inputURL.value;
        photo.src = newPhotoURL;
        photoWindow.remove();
      });

      photoWindow.appendChild(labelURL);
      photoWindow.appendChild(inputURL);
      photoWindow.appendChild(buttonURL);
      const nameAndPhotoBlock = document.querySelector('.name-and-photo');
      nameAndPhotoBlock.appendChild(photoWindow);
    }
  }

  render() {
    return(
      <section className='personal-info'>
        <div className='personal-info__form'>
        <NameAndPhoto clickedOnPhoto={this.changePhoto}/>
        <Contacts/>
        <Description/>
        </div>
      </section>
    );
  }
}

// PersonalInfo Components
class NameAndPhoto extends Component {

  render() {
    return(
      <div className='name-and-photo'>
        <div className='photo-box'>
          <img src={require('../../images/profile.jpg')} alt='profile' onClick={this.props.clickedOnPhoto}/>
        </div>
        <div className='name-box'>
          <SingleField fieldClassName='first-name' inputPlaceholder='First Name' inputName='firstName' inputType='text'/>
          <SingleField fieldClassName='last-name' inputPlaceholder='Last Name' inputName='lastName' inputType='text'/>
        </div>
      </div>
    );
  }
}

class Contacts extends Component {

  render() {
    return(
      <div className='contacts'>
        <SingleField fieldClassName='contacts__address' inputPlaceholder='Address (London, 221B Baker Street)' inputName='address' inputType='text'/>
        <SingleField fieldClassName='contacts__phone' inputPlaceholder='Phone (+1 234...)' inputName='phone' inputType='tel'/>
        <SingleField fieldClassName='contacts__email' inputPlaceholder='Email (abc@def.gh)' inputName='email' inputType='email'/>
        <SingleField fieldClassName='contacts__site' inputPlaceholder='Site (http://...)' inputName='site' inputType='url'/>
      </div>
    );
  }
}

class Description extends Component {

  render() {
    return(
      <div className='description'>
        <textarea placeholder='Description (Small biography here)' name='description'/>
      </div>
    );
  }
}

export default PersonalInfo;