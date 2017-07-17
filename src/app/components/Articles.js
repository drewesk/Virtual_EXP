import React from "react";

export class Articles extends React.Component {
  render() {
    const artContent = "There is no Article content yet.";
    return(
      <div className="article-content">
        <p>
          { artContent || "Content... Not Yet." }
        </p>
      </div>
    );
  }
}
