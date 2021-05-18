import React from "react";
import Checkbox from "../Checkbox";

class Filterbar extends React.Component {

    state = { checked: false }
    handleCheckboxChange = event =>
      this.setState({ checked: event.target.checked })

    render(){  
    return(
        <ul className="list-group">
            <li className="list-group-item">
            <Checkbox
                checked={this.state.checked}
                onChange={this.handleCheckboxChange}/>
             <label html="cleaning">
                
                  Cleaning
            </label>
            </li>
            <li className="list-group-item">
            <Checkbox
                checked={this.state.checked}
                onChange={this.handleCheckboxChange}/>
             <label html="bathroom">
                
                Bathroom
            </label>
            </li>
            <li className="list-group-item">
            <Checkbox
                checked={this.state.checked}
                onChange={this.handleCheckboxChange}/>
             <label html="kitchen">
                
               Kitchen
            </label>
            </li>
        </ul>
    )}
}

export default Filterbar;