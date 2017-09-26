import React, {Component} from 'react';

export default class ImageDisplay extends Component{


    render(){
        return(
            <div className="col-md-6"> 
                <img src = {this.props.roverPhotos} alt="rover"/>
            </div>
        )
    }
}