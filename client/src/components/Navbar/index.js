import React from "react";

function Navbar() {
  return (
    <nav class="nav justify-content-end">
              
            <form class="px-4 py-3">
                <div class="form-group">
                    <input type="email" class="form-control" id="exampleDropdownFormEmail1" placeholder="Email"/>
                </div>
                <div class="form-group">
                    <input type="password" class="form-control" id="exampleDropdownFormPassword1" placeholder="Password"/>
                </div>
                <button type="submit" class="btn btn-primary">Sign in</button>
            </form>
        </nav>
  );
}

export default Navbar;