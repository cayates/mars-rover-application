import React, { Component } from 'react';
import '../styles/App.css';

import {getPictures} from '../services';

import GetImageForm from './GetImageForm';

class App extends Component {

  constructor(props){
    super(props);
      this.state = {
        pictures: []
      }
  }

  populatePictures = () =>{
    getPictures().then((response)=>{
    console.log(response)
  
      this.setState({pictures: response.data.results})
    })
  console.log(getPictures)
  }

  componentDidMount(){
    this.populatePictures()
  }

  render() {
    return (
      <div>
        <GetImageForm />
      </div>
    );
  }
}

export default App;
