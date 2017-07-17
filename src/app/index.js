import React from "react";
import { render } from "react-dom";

import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { Articles } from "./components/Articles";
import { User } from "./components/User";

class App extends React.Component {
  render() {

    const user = {
      name: "Michelle",
      hobbies: ["Running", "Art", "Traveling"]
    };

    return (
      <div className=".App">
        <Header homeLink="Home"/>
        <Home/>
        <Articles/>
        <User name={ "Andrew" } baseAge={ 24 } user={ user }>
          <p>This is a test!</p>
          <p>This is a test!</p>
          <p>This is a test!</p>
          <p>This is a test!</p>
          <p>This is a test!</p>
        </User>
      </div>
    );
  }
}

render(<App/>, window.document.getElementById('appRoot'));
