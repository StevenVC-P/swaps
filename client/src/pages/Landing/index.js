import React from "react";
import "./style.css"

function Landing () {
    return(
        <main>
    <div class="container justify-content-end">
        <p class="display-2">Welcome to</p><p class = "display-2" id="swap">Swap</p>
        <article class="mission-statement">Here at Swap, we are dedicated to finding the best environmentally friendly substitutes for your everyday items.  Through our commmunity of Swappers, we our cultivating a list of items that are affordable and easy to make a change.</article>
    </div>

    <button type="button" class="btn btn-outline-success">Sign Up</button>
    
    </main>
    )
}


export default Landing;