import React from "react";
import "./App.css";
import Header from "./components/Header/header";

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <div className="App">{this.props.children}</div>
      </>
    );
  }
}

export default App;
