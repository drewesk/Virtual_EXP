import React from "react";

export class User extends React.Component {
  constructor(props) {
    super();
    this.state = {
      age: props.baseAge,
      status: 0
    };
    setTimeout(() => {
      this.setState({
        status: 1
      });
    }, 3000);
  }

  onMakeOlder() {
    this.setState({
      age: this.state.age + 3
    });
  }

  render() {
    return(
      <div className="user-content">
        <p>
          Hello { this.props.name }, you are { this.state.age } years old! <br/>
          Status: { this.state.status }
        </p>

        <hr/>
        
        <button onClick={ this.onMakeOlder.bind(this) }>Age++</button>
        <p>
          { this.props.user.name } likes { this.props.user.hobbies
            .map((hobby, index) =>
              <li key={ index }>{ hobby }</li>) }
        </p>
      </div>
    );
  }
}

User.propTypes = {
  name: React.PropTypes.string,
  baseAge: React.PropTypes.number,
  user: React.PropTypes.object
};
