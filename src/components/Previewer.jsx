import React, { Component } from "react";
import marked from "marked";

export default class Previewer extends Component {
  markdownToHTML = () => {
    const { markdown } = this.props;
    document.getElementById("preview").innerHTML = marked(`${markdown}`);
  };

  componentDidMount() {
    this.markdownToHTML();
  }

  componentDidUpdate() {
    this.markdownToHTML();
  }

  render() {
    return (
      <div id="preview--container">
        Preview
        <div id="preview" />
      </div>
    );
  }
}
