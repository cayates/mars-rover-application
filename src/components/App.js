import React, { Component } from 'react';
import '../styles/App.css';

import {getPictures} from '../services';

import GetImageForm from './GetImageForm';

class App extends Component {

  constructor(props){
    super(props);
      this.state = {
        images: []
      }
  }

  populatePictures = (imageUrl) =>{
    getPictures(imageUrl).then((response)=>{
    console.log(response.data)
      this.setState({images: response.data})
    })
  }

  render() {
    return (
      <div>
        <GetImageForm 
        populatePictures = {this.populatePictures}

        />
      </div>
    );
  }
}

export default App;
