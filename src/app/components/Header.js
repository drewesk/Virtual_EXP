import React from "react";

export const Header = (props) => {// stateless Component
    return(
      <nav className="">
        <div>
          <div>
            <h3 className="App-header ">EXP-Animate</h3>
            <a href="#">{ props.homeLink }</a>
          </div>
        </div>
      </nav>
    );
  };
