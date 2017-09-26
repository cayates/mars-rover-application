import React, { Component } from 'react';
import '../styles/App.css';

import {getPictures} from '../services';

import GetImageForm from './GetImageForm';

class App extends Component {

  constructor(props){
    super(props);
      this.state = {
        rover: "Curiosity",
        camera: "FHAZ",
        images: [],
        sol: ""
      }
  }

  handleRoverChange = (event) => {
    this.setState({rover: this.state.rover})
  }

  handleCameraChange = (event) => {
    this.setState({camera: this.state.camera})
  }

  handleSolChange = (event) => {
    this.setState({sol: this.state.sol})
  }

//   _handleChange = (event) => {
//     this.setState({pilot: event.target.value})
// }

//   _handleSubmit = (event) => {
//     event.preventDefault()
//     this.props.nameChange(this.state.pilot)
// }

  populatePictures = () =>{
    getPictures().then((response)=>{
    console.log(response)
  
      this.setState({images: response.data.results})
    })
  }

  componentDidMount(){
    this.populatePictures()
  }

  render() {
    return (
      <div>
        <GetImageForm 

        
        />
      </div>
    );
  }
}

export default App;
