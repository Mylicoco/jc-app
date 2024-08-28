import logo from "./logo.svg";
import { Component } from "react";
import "./App.css";
import Homepage from "./components/homepage/homepage.component";

class App extends Component {
  constructor() {
    super();
    this.state = {
     
    };
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
         <Homepage/>
        </header>
      </div>
    );
  }
}
export default App;
