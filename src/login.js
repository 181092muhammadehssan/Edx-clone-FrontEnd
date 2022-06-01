import React, { Component } from "react";
import "./signup.css";
import bg1 from "./images/logo.svg";
import apple_logo from "./images/Left_White_Logo_Large2x.png";
import fb_logo from "./images/f_logo_RGB-White_58.png";
import google_logo from "./images/btn_google_light.svg";
import microsoft_logo from "./images/MSFT-logo-only.png";
import { Validate_user } from "./RestApi_control";
import { Link, Redirect } from "react-router-dom";
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        email: "",
        password: "",
      },
      status: "",
    };
  }
  render() {
    if (this.state.Status == "Successfull") {
      return <Redirect to="/" />;
    }
    return (
      <div className="Main">
        <Link to={"/"}>
          <img src={bg1} className="logo"></img>
        </Link>
        <hr className="line"></hr>
        <div className="Container">
          <div className="error">
            <h5>{this.state.Status}</h5>
          </div>
          <div className="Txt">
            <Link to={{ pathname: "/Signup", state: "Login Successfull" }}>
              First time here? Sign up
            </Link>
          </div>
          <hr className="new1"></hr>
          <div className="txt2">Sign in</div>
          <form
            onSubmit={(e) => {
              {
                let response = Validate_user({ person: this.state.person });
                response.then((result) => {
                  console.log(result.data); // "Some User token"
                  this.setState({ Status: result.data });
                  window.alert(this.state.Status);
                });
                e.preventDefault();
              }
            }}
          >
            <input
              type="text"
              placeholder="Email"
              className="Placeholder"
              onChange={(e) => {
                this.state.person.email = e.target.value;
              }}
            ></input>
            <input
              type="password"
              placeholder="Password"
              className="Placeholder"
              onChange={(e) => {
                this.state.person.password = e.target.value;
              }}
            ></input>
            <div className="txt4">
              Need help signing in? <br></br>
              Sign in with you scholl or company
            </div>
            <input type="submit" value="Sign in" className="Submit"></input>
          </form>
          <hr className="line"></hr>
          <div className="Txt">or sign in with</div>

          <div className="Logo_cont">
            <div className="Block">
              <img src={apple_logo} className="apple_pic"></img>
              <div className="txt10"> Apple</div>
            </div>
            <div className="Block2">
              <img src={fb_logo} className="fb_pic"></img>
              <div className="txt10"> Facebook</div>
            </div>
          </div>
          <div className="Logo_cont">
            <div className="Block2">
              <img src={google_logo} className="google_pic"></img>
              <div className="txt10"> Google</div>
            </div>
            <div className="Block4">
              <img src={microsoft_logo} className="microsoft_pic"></img>
              <div className="txt10"> Microsoft</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
