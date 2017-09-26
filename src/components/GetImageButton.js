// // GetImageButton should be a functional stateless component.

// It should return a <button> and receive props. It should fire the fetchRoverImage function when clicked and return the images if there were any from that day.

import React, {Component} from 'react';

export default class GetImageButton extends Component{


    render(){
        return(
            <div> 
                <button onClick={this.props.fetchRoverImage}>Get Image!</button>
            </div>
        )
    }
}