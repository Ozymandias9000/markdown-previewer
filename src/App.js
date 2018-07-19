import React, { Component, Fragment } from "react";
import Editor from "./components/Editor";
import Previewer from "./components/Previewer";
import "./static/css/App.css";

export default class App extends Component {
  state = {
    markdown:
      "# Welcome to my React Markdown Previewer! \n\n ## This is a sub - heading...\n### And here's some other cool stuff:\n Here's some code, `<div></div>`, between 2 backticks.\n\n ``` \n // this is multi-line code \n\n function anotherExample(firstLine, lastLine) { \n  if(firstLine === '```' && lastLine === '```') { \n   return multiLineCode; \n  } \n } \n\n ``` \n\n You can also make text **bold**! Or _italic_. \n\n There's also  [links](https://www.freecodecamp.com), and \n\n > Block Quotes!\n     - And of course lists \n - Bulleted sometimes\n\n * And last but not least, let's not forget embedded images: \n\n ![React Logo w / Text](https://goo.gl/Umyytc) "
  };

  handleChange = markdown => {
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
