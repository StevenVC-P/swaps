import React from "react";
import Checkbox from "../Checkbox";

class Filterbar extends React.Component {

    state = { checked: false }
    handleCheckboxChange = event =>
      this.setState({ checked: event.target.checked })

    render(){  
    return(
        <div>
             <label for="cleaning">
                <Checkbox
                checked={this.state.checked}
                onChange={this.handleCheckboxChange}/>
                <span>Cleaning</span>
            </label><br></br>
            <label for="pet">
                <Checkbox
                checked={this.state.checked}
                onChange={this.handleCheckboxChange}/>
               <span>Pet</span>
            </label>
            <label for="dishware">
                <Checkbox
                checked={this.state.checked}
                onChange={this.handleCheckboxChange}/>
               <span>Dishware</span>
            </label>
        </div>
    )}
}

export default Filterbar;