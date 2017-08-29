import React, { Component } from 'react';
// parent of GetImageButton.js and ImageDisplay.js
// import GetImageButton from './GetImageButton';
// import ImageDisplay from './ImageDisplay';

//API Key
const API_KEY = 'wLGELuE2Lbs5nT1o25VTen0p3OAG4HfyvusVVZEp'

//API
// https://api.nasa.gov/planetary/apod?api_key=wLGELuE2Lbs5nT1o25VTen0p3OAG4HfyvusVVZEp
//
// be stateful

export default class GetImageForm extends Component {
  constructor() {
    super()

    //sets initial state for this component
    this.state = {
      rover: 'Curiosity',
      camera: 'fhaz',
      sol: '1000',
      images: []
    }

    // binds the changes
    this.handleRover = this.handleRover.bind(this);
    this.handleCamera = this.handleCamera.bind(this);
    this.handleSol = this.handleSol.bind(this);

  }

  // handles Rover select box
  handleRover(event) {
    this.setState({rover: event.target.value}, () => {
      console.log('User has selected ' + this.state.rover);
      console.log(this.state);
    });
  }

  // handles Camera select box
  handleCamera(event) {
    this.setState({camera: event.target.value}, () => {
      console.log('User has selected ' + this.state.camera);
      console.log(this.state);
    });
  }

  // handles Sol select box
  handleSol(event) {
    this.setState({sol: event.target.value}, () => {
      console.log('User has selected ' + this.state.sol);
      console.log(this.state);
    });
  }

  // handles form submission
  handleSubmit(event) {
    event.preventDefault();


  }

    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="rover">Rover</label>
            <select onChange={this.handleRover} id="rover" value={this.state.rover}>
              <option value="Curiosity">Curiosity</option>
              <option value="Opportunity">Opportunity</option>
              <option value="Spirit">Spirt</option>
            </select>
          <label htmlFor="camera">Camera Type</label>
            <select onChange={this.handleCamera} id="camera" value={this.state.camera}>
              <option value="fhaz">FHAZ (Front Hazard)</option>
              <option value="rhaz">RHAZ (Rear Hazard)</option>
              <option value="navcam">NAVCAM (Navigation Cam)</option>
            </select>
          <label htmlFor="sol">Martian Sol: 1000-2000</label>
          <input type="number" onChange={this.handleSol} max="2000" min="1000" value={this.state.sol}/>
        </form>
      )
    }
}
