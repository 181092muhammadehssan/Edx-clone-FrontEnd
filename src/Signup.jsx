import React, { Component } from "react";
import Select from "react-select";
import "./signup.css";
import bg1 from "./images/logo.svg";
import { Post_signup } from "./RestApi_control";
import { Link, Redirect } from "react-router-dom";
import apple_logo from "./images/Left_White_Logo_Large2x.png";
import fb_logo from "./images/f_logo_RGB-White_58.png";
import google_logo from "./images/btn_google_light.svg";
import microsoft_logo from "./images/MSFT-logo-only.png";
import Webapp from "./webapp";
class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        full_name: "",
        public_name: "",
        email: "",
        password: "",
        country: "",
      },
      Status: "",
    };
  }
  handleChange(e) {
    this.state.person.country = e.value;
    console.log(this.state.person.country);
  }
  render() {
    var filter_partners = [
      {
        value: "Afghanistan",
        label: "Afghanistan",
      },
      {
        value: "Albania",
        label: "Albania",
      },
      {
        value: "Algeria",
        label: "Algeria",
      },
      {
        value: "American Samoa",
        label: "American Samoa",
      },
      {
        value: "Andorra",
        label: "Andorra",
      },
      {
        value: "Angola",
        label: "Angola",
      },
      {
        value: "Anguilla",
        label: "Anguilla",
      },
      {
        value: "Antarctica",
        label: "Antarctica",
      },
      {
        value: "Antigua and Barbuda",
        label: "Antigua and Barbuda",
      },
      {
        value: "Argentina",
        label: "Argentina",
      },
      {
        value: "Armenia",
        label: "Armenia",
      },
      {
        value: "Aruba",
        label: "Aruba",
      },
      {
        value: "Australia",
        label: "Australia",
      },
      {
        value: "Austria",
        label: "Austria",
      },
      {
        value: "Azerbaijan",
        label: "Azerbaijan",
      },
      {
        value: "Burundi",
        label: "Burundi",
      },
      {
        value: "Cambodia",
        label: "Cambodia",
      },
      {
        value: "Cayman Islands",
        label: "Cayman Islands",
      },
      {
        value: "Congo",
        label: "Congo",
      },
      {
        value: "Falkland Islands (Malvinas)",
        label: "Falkland Islands (Malvinas)",
      },
      {
        value: "Iran, Islamic Republic of",
        label: "Iran, Islamic Republic of",
      },
      {
        value: "Kuwait",
        label: "Kuwait",
      },
      {
        value: "Madagascar",
        label: "Madagascar",
      },
      {
        value: "Macao",
        label: "Macao",
      },
      {
        value: "Libya",
        label: "Libya",
      },
      {
        value: "Marshall Islands",
        label: "Marshall Islands",
      },
      {
        value: "Pakistan",
        label: "Pakistan",
      },
      {
        value: "India",
        label: "India",
      },
    ];
    if (this.state.Status == "Sign Up successful") {
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
            <Link to={{ pathname: "/Login", state: "Register Successful" }}>
              Already have an edX account?Sign in.
            </Link>
          </div>
          <hr className="new1"></hr>
          <div className="txt2">Create a new account</div>
          <form
            onSubmit={(e) => {
              {
                let response = Post_signup({ person: this.state.person });
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
              placeholder="Full name (required)"
              className="Placeholder"
              onChange={(e) => {
                this.state.person.full_name = e.target.value;
              }}
            ></input>
            <input
              type="text"
              placeholder="Public username (required)"
              className="Placeholder"
              onChange={(e) => {
                this.state.person.public_name = e.target.value;
              }}
            ></input>
            <input
              type="text"
              placeholder="Email (required)"
              className="Placeholder"
              onChange={(e) => {
                this.state.person.email = e.target.value;
              }}
            ></input>
            <input
              type="password"
              placeholder="Password (required)"
              className="Placeholder"
              onChange={(e) => {
                this.state.person.password = e.target.value;
              }}
            ></input>

            <Select
              defaultValue={[""]}
              placeholder="Country or region  of  residence (required)"
              name="colors"
              options={filter_partners}
              className="basic_single"
              classNamePrefix="select"
              onChange={this.handleChange.bind(this)}
            />
            <div className="txt4">
              By creating an account, you agree to the Terms of Service and
              Honor Code and you acknowledge that edX and each Member process
              your personal data in accordance with the Privacy Policy.
            </div>
            <input
              type="submit"
              value="Create Account"
              className="Submit"
            ></input>
          </form>
          <hr className="line"></hr>
          <div className="Txt">or create an account using</div>

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

export default Signup;
