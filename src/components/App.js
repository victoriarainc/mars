import React, { Component } from 'react';
import '../styles/App.css';
import GetImageForm from './GetImageForm';

export default class App extends Component {
  render() {
    return (
      <div>
        <p className='title'>mars</p>
        <div className='intro'>
          <div className='intro_img'>image here</div>
          <div className='intro_txt'>"Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System after Mercury. In English, Mars carries a name of the Roman god of war, and is often referred to as the "Red Planet"[13][14] because the reddish iron oxide prevalent on its surface gives it a reddish appearance that is distinctive among the astronomical bodies visible to the naked eye.[15] Mars is a terrestrial planet with a thin atmosphere, having surface features reminiscent both of the impact craters of the Moon and the valleys, deserts, and polar ice caps of Earth." -Wikipedia</div>
        </div>
        <GetImageForm />

      </div>
    );
  }
}
