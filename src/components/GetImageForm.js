import React, {Component} from 'react';

import GetImageButton from './GetImageButton';

export default class GetImageForm extends Component{



    render(){
        return(
        <div>
            <form className = "roverSearchBar">
            <label htmlFor="rover">Rover</label>
            <select id="rover">
              <option value="Curiosity">Curiosity</option>
              <option value="Opportunity">Opportunity</option>
              <option value="Spirit">Spirt</option>
            </select>
            <label htmlFor="camera">Camera Type</label>
            <select id="rover">
              <option value="fhaz">FHAZ (Front Hazard)</option>
              <option value="rhaz">RHAZ (Rear Hazard)</option>
              <option value="navcam">NAVCAM (Navigation Cam)</option>
            </select>
            <label htmlFor="sol">Martian Sol: 1000-2000</label>
            <input type="number" max="2000" min="1000"/>
            </form>
            <GetImageButton />
        </div>
        )
    }
}