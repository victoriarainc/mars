import React, { Component } from 'react';
import '../styles/App.css';
import GetImageForm from './GetImageForm';

export default class App extends Component {
  render() {
    return (
      <div>
        <p className='title'>mars</p>

        <GetImageForm />

      </div>
    );
  }
}
