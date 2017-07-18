import React from "react";
import { render } from "react-dom";

import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { Articles } from "./components/Articles";
import { User } from "./components/User";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      homeLink: "Home",
      homeMounted: true
    };
  }

  onGreet() {
    alert('This test is working.');
  }

  onChangeLinkName(name) {
    this.setState({
      homeLink: name
    });
  }

  onChangeHomeMounted() {
    this.setState({
      homeMounted: !this.state.homeMounted
    });
  }

  render() {

    const user = {
      name: "Michelle",
      hobbies: ["Running", "Art", "Traveling"]
    };

    let homeComponent = "";
    if(this.state.homeMounted) {
      homeComponent = (
            <Home greet={ this.onGreet }
            changeLink={ this.onChangeLinkName.bind(this) }
            initialLinkName={ this.state.homeLink }
            /> 
          );
    }
    return (
      <div className=".App">
        <Header homeLink={ this.state.homeLink }/>
        <div className="home-component">
          { homeComponent }
        </div>
        <div className="home-component-button">
          <button onClick={ this.onChangeHomeMounted.bind(this) }>(Un)Mount Home Component</button>
        </div>
        <Articles/>
        <User name={ "Andrew" }
              baseAge={ 24 }
              user={ user }>
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
