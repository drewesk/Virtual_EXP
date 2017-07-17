import React from "react";

export class Home extends React.Component {
  constructor(props) {
    super();
    this.state = {
      homeLink: props.initialLinkName
    }
  }

  onChangeLink() {
    this.props.changeLink(this.state.homeLink);
  }

  onHandleChange(event) {
    this.setState({
      homeLink: event.target.value
    });
  }

  render() {
    const content = "Ribeye ham hock officia, laborum sausage burgdoggen cillum salami in landjaeger strip steak short ribs. Fugiat ground round ham flank. Picanha in shoulder ex shankle. Irure hamburger drumstick eu voluptate swine tenderloin.";

    return(
      <div className="home">
        <main className="articles">
          <div className="App-logo">
            <img src="http://www.clker.com/cliparts/e/2/3/6/13688053311869152751fractal_yin_yang_by_toa267.jpg" alt="balance" height="30px" width="30px"/>
          </div>

          <p className="App-intro">
            Welcome to the home-page, { content }
          </p>
    
          <hr/>

          <button onClick={ this.props.greet }>
            Greet
          </button>

          <hr/>

          <input type="text"
                 value={ this.state.homeLink }
                 onChange={ (event) => this.onHandleChange(event) }/>

         <button onClick={ this.onChangeLink.bind(this) }>
           Change Link
         </button>
        </main>

      </div>

    );
  }
}

Home.propTypes = {
  greet: React.PropTypes.func,
  initialLinkName: React.PropTypes.string
}
