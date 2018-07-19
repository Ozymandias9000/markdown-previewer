import React, { Fragment } from "react";
import Editor from "./components/Editor";
import Previewer from "./components/Previewer";
import "./static/css/App.css";

const App = () => (
  <Fragment>
    <Editor />
    <Previewer />
  </Fragment>
);

export default App;
