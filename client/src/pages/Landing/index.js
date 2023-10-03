import React from "react";
import "./style.css";
import { Link} from "react-router-dom";

function Landing () {
    return(
        <main>
            <div className="container justify-content-end">
            <p className="display-2">Welcome to</p><p className = "display-2" id="swap">Swap</p>
            <article className="mission-statement">Here at Swap, we are dedicated to finding the best environmentally friendly substitutes for your everyday items.  Through our commmunity of Swappers, we our cultivating a list of items that are affordable and easy to make a change.</article>
            </div>
            <Link to="/signup"> <button type="button"  className="btn btn-outline-success">Sign Up</button>
            </Link>
        </main>
    )
}


export default Landing;