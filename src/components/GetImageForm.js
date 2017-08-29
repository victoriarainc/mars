import React, { Component } from 'react';
// parent of GetImageButton.js and ImageDisplay.js
import GetImageButton from './GetImageButton';
import ImageDisplay from './ImageDisplay';

//API Key
const API_KEY = 'wLGELuE2Lbs5nT1o25VTen0p3OAG4HfyvusVVZEp'

//API
https://api.nasa.gov/planetary/apod?api_key=wLGELuE2Lbs5nT1o25VTen0p3OAG4HfyvusVVZEp

be stateful

export default class GetImageForm extends Component {
  constructor() {
    super()
    //sets initial state for this component
    this.state = {}
  }
    render() {
      return (
        <form>
          <label htmlFor="rover">Rover</label>
            <select onChange={this.handleRover} id="rover" value={this.state.value}>
              <option value="Curiosity">Curiosity</option>
              <option value="Opportunity">Opportunity</option>
              <option value="Spirit">Spirt</option>
            </select>
          <label htmlFor="camera">Camera Type</label>
            <select onChange={this.handleCamera} id="rover" value={this.state.value}>
              <option value="fhaz">FHAZ (Front Hazard)</option>
              <option value="rhaz">RHAZ (Rear Hazard)</option>
              <option value="navcam">NAVCAM (Navigation Cam)</option>
            </select>
          <label htmlFor="sol">Martian Sol: 1000-2000</label>
          <input type="number" onChange={this.handleSol} max="2000" min="1000" value={this.state.value}/>
        </form>
      )
    }
}
