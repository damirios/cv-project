import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// function for closing opened context windows like: new photo window, ...
const closeAllOpenContextWindows = function(e) {
  const newPhotoWindow = document.querySelector('.photo-window');
  if ( newPhotoWindow && !e.target.closest('.photo-window') && !e.target.closest('.name-and-photo') ) {
    newPhotoWindow.remove();
  }
}

window.addEventListener('click', closeAllOpenContextWindows);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
