import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import {Preview} from './components/Preview';

import './styles/style.css'
import { useState, useRef } from 'react';
import collectFormData from './components/utilities/collectFormData';
import { useReactToPrint } from 'react-to-print';


export default function App() {
	const [state, setState] = useState({
		cvFields: {
			personal: null,
			education: {
				1: null
			},
			experience: {
				1: null
			}
		},
		preview: false,
		exampleLoaded: false
	});

	const loadExample = () => {
		// if preview mode is on, then turn it off before load example
		const showPreviewButton = document.querySelector('.header__preview');

		if (state.preview) {
		  showPreviewButton.classList.remove('show-preview');
		}
	
		if (!state.exampleLoaded) {
			// reset form before loading example
			resetForm();
		
			// form fiiling example
			setState({
				preview: false,
				cvFields: {
					personal: {
						firstName: 'Irina', lastName: 'Kondrateva', position: 'Designer', photo: './images/ellie.jfif',
						address: 'Glazov, Pekhtina st., 114', phone: '+123456789',
						email: 'my@cool.email', description: "Some useful info about yourself should be here"
					},
					education: {
						1: {
						degree: 'Bachelor of Physics', university: 'Kazan Federal University',
						dateFrom: new Date(2018, 9, 1), dateTo: new Date(2022, 6, 30),
						details: 'Studied at KFU for 4 year.'
						},
					},
					experience: {
						1: {
						position: 'Junior Fullstack Developer', organization: 'The Odin Project',
						dateFrom: new Date(2022, 3, 9), dateTo: new Date(2022, 10, 17),
						details: 'Enjoy working as web developer!'
						}
					}
				},
				exampleLoaded: true
			});
		}
	}

	const showPreview = () => {
		const showPreviewButton = document.querySelector('.header__preview');

		if (state.preview) {
			setState({...state, preview: false});
			showPreviewButton.classList.remove('show-preview');
		} else {
			setState({
				...state, 
				preview: true,
				cvFields: collectFormData()
			});
			showPreviewButton.classList.add('show-preview');
		}
	}

	const resetForm = () => {
		// if preview mode is on, then turn it off before reset the form
		const showPreviewButton = document.querySelector('.header__preview');

		if (state.preview) {
			showPreviewButton.classList.remove('show-preview');
		}
	
		const form = document.querySelector('.content__form');
		if (form) {
		  	form.reset();
		}

		setState({
			preview: false,
			exampleLoaded: false,
			cvFields: {personal: null, education: {1: null}, experience: {1: null}}
		});
	
		// const avatarPhoto = document.querySelector('.personal-info__photo label img');
		// if (avatarPhoto) {
		//   avatarPhoto.src = DEFAULT_AVATAR_SRC;
		// }
	
	}

	const componentRef = useRef();
	const createPDF = useReactToPrint({
		content: () => componentRef.current,
	});

	const getPreviewOrContent = () => {
		if (state.preview) {
		  return <Preview ref={componentRef} cvInfo={state.cvFields}/>
		}
		return <Content cvFields={state.cvFields} />
	}

	const buttonFunctions = {
		loadExample,
		showPreview, 
		resetForm, 
		createPDF
	};

	return (
		<div className="App">
			<Header preview={state.preview} buttons={buttonFunctions} />
			{getPreviewOrContent()}
			<Footer />
		</div>
	);
}

// class App extends Component {
//   constructor(props) {
//     super(props);
    
//     this.state = {
//       cvFields: {
//         personal: null,
//         education: {
//           1: null
//         }, 
//         experience: {
//           1: null
//         }
//       },
//       preview: false,
//       exampleLoaded: false
//     }

//     // this.loadExample = this.loadExample.bind(this);
//     // this.showPreview = this.showPreview.bind(this);
//     // this.resetForm = this.resetForm.bind(this);
//     // this.createPDF = this.createPDF.bind(this);
//   }

//   loadExample = () => {
//     // if preview mode is on, then turn it off before load example
//     const showPreviewButton = document.querySelector('.header__preview');

//     if (this.state.preview) {
//       this.setState({preview: false});
//       showPreviewButton.classList.remove('show-preview');
//     }

//     if (!this.state.exampleLoaded) {
//       // reset form before loading example
//       this.resetForm();
  
//       // form fiiling example
//       this.setState({
//         cvFields: {
//           personal: {
//             firstName: 'Irina', lastName: 'Kondrateva', position: 'Designer', photo: './images/ellie.jfif',
//             address: 'Glazov, Pekhtina st., 114', phone: '+123456789',
//             email: 'my@cool.email', description: "Some useful info about yourself should be here"
//           },
//           education: {
//             1: {
//               degree: 'Bachelor of Physics', university: 'Kazan Federal University',
//               dateFrom: new Date(2018, 9, 1), dateTo: new Date(2022, 6, 30),
//               details: 'Studied at KFU for 4 year.'
//             },
//           },
//           experience: {
//             1: {
//               position: 'Junior Fullstack Developer', organization: 'The Odin Project',
//               dateFrom: new Date(2022, 3, 9), dateTo: new Date(2022, 10, 17),
//               details: 'Enjoy working as web developer!'
//             }
//           }
//         }
//       });
  
//       this.setState({exampleLoaded: true});
//     }
//   }

//   showPreview = () => {
//     const showPreviewButton = document.querySelector('.header__preview');

//     if (this.state.preview === true) {
//       this.setState({preview: false});
//       showPreviewButton.classList.remove('show-preview');
//     } else {
//       this.setState({
//         preview: true,
//         cvFields: collectFormData()
//       });
//       showPreviewButton.classList.add('show-preview');
//     }
//   }

//   resetForm = () => {
//     // if preview mode is on, then turn it off before reset the form
//     const showPreviewButton = document.querySelector('.header__preview');

//     if (this.state.preview) {
//       this.setState({preview: false});
//       showPreviewButton.classList.remove('show-preview');
//     }

//     this.setState({
//       cvFields: {personal: null, education: {1: null}, experience: {1: null}},
//     });

//     const form = document.querySelector('.content__form');
//     if (form) {
//       form.reset();
//     }

//     const avatarPhoto = document.querySelector('.personal-info__photo label img');
//     if (avatarPhoto) {
//       avatarPhoto.src = DEFAULT_AVATAR_SRC;
//     }

//     this.setState({exampleLoaded: false});
//   }

//   createPDF = () => {
//   }

//   getPreviewOrContent() {
//     if (this.state.preview) {
//       return <Preview cvInfo={this.state.cvFields}/>
//     }
//     return <Content cvFields={this.state.cvFields} />
//   }

//   buttonFunctions = {
//     loadExample: this.loadExample,
//     showPreview: this.showPreview, 
//     resetForm: this.resetForm, 
//     createPDF: this.createPDF
//   };

//   render() {
//     return (
//       <div className="App">
//         <Header preview={this.state.preview} buttons={this.buttonFunctions} />
//         {this.getPreviewOrContent()}
//         <Footer />
//       </div>
//     );
//   }
// }

