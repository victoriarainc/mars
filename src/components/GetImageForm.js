import React, { Component } from 'react';
// parent of GetImageButton.js and ImageDisplay.js
import GetImageButton from './GetImageButton';
import ImageDisplay from './ImageDisplay';

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
    this.handleSubmit = this.handleSubmit.bind(this);
    this.fetchRoverImage = this.fetchRoverImage.bind(this);

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

  handleSubmit(event) {
    event.preventDefault();
  }

  // handles form submission
  fetchRoverImage(event) {
    event.preventDefault();

    let cam = this.state.camera;
    let rove = this.state.rover;
    let num = this.state.sol;
    let imageUrl = `https://api.nasa.gov/mars-photos/api/v1/rovers/${rove}/photos?sol=${num}&camera=${cam}&api_key=${API_KEY}`;
    // fetch call to retrieve pictures from the NASA Mars Rover API.
    fetch (imageUrl)
    .then(r => r.json() )
    .then((json) => {
      console.log("Data from fetch", json)
      this.setState({images: json.photos})
    })
  }

    render()

      {
      let divStyle = {
        display: 'flex',
        justifyContent: 'center',
        padding: '5%',
        borderRadius: '15px'
      }

      let conStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '5%'
      }

      let butt = {
        padding: '2%',
        width: '15%',
        fontSize: '20px',
        backgroundColor: '#00afce',
        color: 'white',
        textTransform: 'uppercase'
      }

      return (
        <div style={conStyle}>
          <form onSubmit={this.handleSubmit} style={divStyle} >
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
          <GetImageButton action={this.fetchRoverImage} prompt='Fuck Yeah' style={butt}/>
          <ImageDisplay images={this.state.images} style={conStyle}/>
        </div>
      )
    }
}
