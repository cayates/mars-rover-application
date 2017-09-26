import React, {Component} from 'react';

export default class ImageDisplay extends Component{


    render(){
        return(
            <div> 
                <img src = {this.props.roverPhotos} alt="rover"/>
            </div>
        )
    }
}