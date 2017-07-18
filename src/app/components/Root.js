import React from "react";

import { Header } from "./Header";

export class Root extends React.Component {
  render() {
    return (
      <div className="root-wrap">
        <div className="root-header">
          <Header/>
          <hr/>
        </div>
        <div className="root-child-elements">
          {this.props.children}
        </div>
      </div>
    );
  }
}
