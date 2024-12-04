import logo from "./logo.svg";
import { Component } from "react";
import "./App.css";
import Homepage from "./components/pages/homepage/homepage.component";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "./components/pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInAndUp from "./components/pages/signinAndUp/signInAndUp.component";
import { auth } from "./firebase/firebase.config";

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentUser: null,
    };
  }
  unsuscribefromauth = null;
  componentDidMount() {
   this.unsuscribefromauth= auth.onAuthStateChanged((user) => {
     this.setState({ currentUser: user }); 
     console.log(user);
    });
  }
  componentWillUnmount(){
    this.unsuscribefromauth();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <BrowserRouter>
            <Header currentUser={this.state.currentUser} />
            <Routes>
              <Route exact path="/" element={<Homepage />} />
              <Route path="shop" element={<Shop />} />
              <Route path="signin" element={<SignInAndUp />} />
            </Routes>
          </BrowserRouter>
        </header>
      </div>
    );
  }
}
export default App;
