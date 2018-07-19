import React, { Component, Fragment } from "react";
import Editor from "./components/Editor";
import Previewer from "./components/Previewer";
import "./static/css/App.css";

export default class App extends Component {
  state = {
    markdown:
      "## Welcome to my React Markdown Previewer! \n\n ### This is a sub - heading!!!"
  };

  handleChange = markdown => {
    console.log(this.state);
    this.setState({ markdown });
  };

  render() {
    return (
      <Fragment>
        <Editor
          handleChange={this.handleChange}
          markdown={this.state.markdown}
        />
        <Previewer markdown={this.state.markdown} />
      </Fragment>
    );
  }
}
