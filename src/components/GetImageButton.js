import React, { Component } from 'react';

export default class GetImageButton extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <button className='form_button' onClick={this.props.action}>{this.props.prompt}</button>
    );
  }
}
