import React, {Component} from 'react';

import GetImageButton from './GetImageButton';
import ImageDisplay from './ImageDisplay';

const API_KEY = "csniFJkbj1lhu7HRHLz6E0ZaojKXPAnCSXTghLAC";

export default class GetImageForm extends Component{

    constructor(props){
        super(props);
          this.state = {
            rover: "Curiosity",
            camera: "FHAZ",
            sol: "Choose a sol"
          }
      }

      handleRoverChange = (event) => {
        event.preventDefault()        
        this.setState({rover: event.target.value})
      }
    
      handleCameraChange = (event) => {
        event.preventDefault()        
        this.setState({camera: event.target.value})
      }
    
      handleSolChange = (event) => {
        event.preventDefault()        
        this.setState({sol: event.target.value})
      }

      fetchRoverImage = (event) =>{
        let cam = this.state.camera;
        let rove = this.state.rover;
        let num = this.state.sol;
        let imageUrl = `https://api.nasa.gov/mars-photos/api/v1/rovers/${rove}/photos?sol=${num}&camera=${cam}&api_key=${API_KEY}`;  
        console.log(imageUrl)
        this.props.populatePictures(imageUrl)
      }

    render(){
        return(
        <div className="container">
            <div className="center-me">
            <form className = "jumbotron ">
            <span>The Marsian</span>
            <p className="lead">This is a Mars Application that allows you to see pictures of Mars from specific rovers, from specific cameras, at specific points in time.</p>

            <label className="margin-left" htmlFor="rover">Rover</label>
            <select className="custom-select" onChange={this.handleRoverChange} value={this.state.value}id="rover">
              <option value="Curiosity">Curiosity</option>
              <option value="Opportunity">Opportunity</option>
              <option value="Spirit">Spirit</option>
            </select>
            <label className="margin-left" htmlFor="camera">Camera Type</label>
            <select className="custom-select" onChange={this.handleCameraChange} value={this.state.value} id="camera">
              <option value="fhaz">FHAZ (Front Hazard)</option>
              <option value="rhaz">RHAZ (Rear Hazard)</option>
              <option value="navcam">NAVCAM (Navigation Cam)</option>
            </select>
            <label className="margin-left" htmlFor="sol">Martian Sol: 1000-2000</label>
            <input onChange={this.handleSolChange} value={this.state.value} type="number" max="2000" min="1000"/>
            </form>
            <div className="color-change border">
            <h1>Rover: {this.state.rover} Camera: {this.state.camera}
              <hr />Sol: {this.state.sol}</h1>
            </div>
            <GetImageButton 
            fetchRoverImage = {this.fetchRoverImage}
            />
            </div>
            <div className="row">
            {this.props.photos.map((roverPhotos)=>{
                return(
                <ImageDisplay
                key={roverPhotos.id}
                roverPhotos={roverPhotos.img_src}
                />
                )
            }
            )}
            </div>
            
        </div>
        )
    }
}