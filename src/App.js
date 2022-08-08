import './styles/App.css';
import './styles/resetStyle.css';
import React from 'react';

// now import my components
import Main from './components/Main';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className='flex-container'>
      <Header/>
      <Main/>
      <Footer/>
    </div>
  );
}

// PERSONAL INFO FIELDS ===================================================================================================
// class InfoField extends Component {
//   render() {
//     return(
//       <div>
//         <label>{this.props.labelName}</label>
//         <input placeholder={this.props.inputPlaceholder}/>
//       </div>
//     );
//   }
// }


export default App;