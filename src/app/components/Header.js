import React from "react";
import { Link } from "react-router";

export const Header = (props) => {// stateless Component
    return(
      <nav className="navbar-header">
        <div>
          <div>
            <h3 className="App-header ">EXP-Animate</h3>
          </div>
          <ul className="navbar-links">
            <li><Link to={ "/home" }>Home</Link></li>
            <li><Link to={ `user/10` }>User</Link></li>
          </ul>
        </div>
      </nav>
    );
  };
