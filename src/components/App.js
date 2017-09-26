import React, { Component } from 'react';
import '../styles/App.css';

import {getPictures} from '../services';

import GetImageForm from './GetImageForm';
import Header from './Header';

class App extends Component {

  constructor(props){
    super(props);
      this.state = {
        photos: []
      }
  }

  populatePictures = (imageUrl) =>{
    getPictures(imageUrl).then((response)=>{
    console.log(response)
      this.setState({photos: response.data.photos})
    })
  }

  render() {
    return (
      <div>
        <Header 
        
        
        />
        <GetImageForm 
        populatePictures = {this.populatePictures}
        photos={this.state.photos}
        />
      </div>
    );
  }
}

export default App;
