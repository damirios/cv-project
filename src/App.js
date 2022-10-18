import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';

import './styles/style.css'
import { Component } from 'react';
import { DEFAULT_AVATAR_SRC } from './components/utilities/variables';


class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      example: {personal: null, education: null, experience: null}
    }

    // this.loadExample = this.loadExample.bind(this);
    // this.showPreview = this.showPreview.bind(this);
    // this.resetForm = this.resetForm.bind(this);
    // this.createPDF = this.createPDF.bind(this);
  }

  loadExample = () => {
    // form fiiling example
    this.setState({
      example: {
        personal: {
          firstName: 'Irina', lastName: 'Kondrateva', position: 'Designer', photoSRC: './images/ellie.jfif',
          address: 'Glazov, Pekhtina st., 114', phone: '+123456789',
          email: 'my@cool.email', aboutMe: "Some useful info about yourself should be here"
        },
        education: {
          degree: 'Bachelor of Physics', university: 'Kazan Federal University',
          from: new Date(2018, 9, 1), to: new Date(2022, 6, 30),
          details: 'Studied at KFU for 4 year.'
        },
        experience: {
          position: 'Junior Fullstack Developer', organization: 'The Odin Project',
          from: new Date(2022, 3, 9), to: new Date(2022, 10, 17),
          details: 'Enjoy working as web developer!'
        }
      }
    }); 
  }

  showPreview = () => {
    console.log(this);
  }

  resetForm = () => {
    this.setState({
      example: {personal: null, education: null, experience: null}
    });

    const form = document.querySelector('.content__form');
    form.reset();

    const avatarPhoto = document.querySelector('.personal-info__photo label img');
    avatarPhoto.src = DEFAULT_AVATAR_SRC;
  }

  createPDF = () => {
    console.log(this);
  }

  buttonFunctions = {
    loadExample: this.loadExample,
    showPreview: this.showPreview, 
    resetForm: this.resetForm, 
    createPDF: this.createPDF
  };

  render() {
    return (
      <div className="App">
        <Header buttons={this.buttonFunctions}/>
        <Content example={this.state.example}/>
        <Footer/>
      </div>
    );
  }
}

export default App;
