import React from "react";
import FormInput from "../forminput/form-input.component";
import "./signin.style.scss";
import Costombotom from "../costum-botom/costombotom.component";
import { signInWithGoogle } from "../../firebase/firebase.config";
class SignIn extends React.Component {
    constructor() {
        super();
        this.state = {
            email: "",
            password: "",
        }
    };
      handleSubmit = event => {
          event.preventDefault();
          this.setState({ email: '', password: '' })
      }
      
      handlechange=event=>{
          const { value, name } = event.target;
          this.setState({[name]:value});
      }
  render() {
    return (
      <div className="sign-in">
        <h1>Already have an account ??</h1>
        <span>Sign in with your email and password.</span>
        <form onSubmit={this.handleSubmit}>
          {" "}
          <FormInput
            type="email"
            label="email"
            name="email"
            value={this.state.email}
            handlechange={this.handlechange}
            required
          />
          <FormInput
            type="password"
            label="password"
            name="password"
            value={this.state.password}
            handlechange={this.handlechange}
            required
          />
          <div className="buttom-div">
            <Costombotom type="submit" value="submit form">
              Sign In
            </Costombotom>
            <Costombotom color="#75B9BE" onClick={signInWithGoogle}>
              Sign In with Google
            </Costombotom>
          </div>
        </form>
      </div>
    );
  }
}
export default SignIn;
