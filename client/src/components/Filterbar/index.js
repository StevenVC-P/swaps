import React from "react";
import Checkbox from "../Checkbox";

class Filterbar extends React.Component {

    state = { checked: false }
    handleCheckboxChange = event =>
      this.setState({ checked: event.target.checked })

    render(){  
    return(
        <ul class="list-group">
            <li class="list-group-item">
             <label for="cleaning">
                <Checkbox
                checked={this.state.checked}
                onChange={this.handleCheckboxChange}/>
                Cleaning
            </label>
            </li>
            <li class="list-group-item">
             <label for="bathroom">
                <Checkbox
                checked={this.state.checked}
                onChange={this.handleCheckboxChange}/>
                Bathroom
            </label>
            </li>
            <li class="list-group-item">
             <label for="kitchen">
                <Checkbox
                checked={this.state.checked}
                onChange={this.handleCheckboxChange}/>
               Kitchen
            </label>
            </li>
        </ul>
    )}
}

export default Filterbar;