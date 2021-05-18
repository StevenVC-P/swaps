import React from "react";

function Navbar() {
  return (
    <nav className="nav justify-content-end">
              
            <form className="px-4 py-3">
                <div className="form-group">
                    <input type="email" className="form-control" id="exampleDropdownFormEmail1" placeholder="Email"/>
                </div>
                <div className="form-group">
                    <input type="password" className="form-control" id="exampleDropdownFormPassword1" placeholder="Password"/>
                </div>
                <button type="submit" className="btn btn-primary">Sign in</button>
            </form>
        </nav>
  );
}

export default Navbar;