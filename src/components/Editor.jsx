import React, { Component } from "react";

export default class Editor extends Component {
  state = {
    markdown: this.props.markdown
  };

  update = e => {
    this.props.handleChange(e.target.value);
    this.setState({ markdown: e.target.value });
  };

  render() {
    return (
      <main>
        <label htmlFor="editor">Editor</label>
        <textarea
          id="editor"
          name="editor"
          onChange={this.update}
          defaultValue={this.state.markdown}
        />
      </main>
    );
  }
}
