import React, { Component } from "react";
import Cards from "./Cards";
import "./webapp.css";
import { Link, useLocation } from "react-router-dom";
import Select, { NonceProvider } from "react-select";
import Navbar from "./navbar";
import Search from "./search";
import Buttons from "./buttons";
import Footer from "./footer";

function Read() {
  let location = useLocation();
  // console.log(location.state);
  return <div></div>;
}

class Webapp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      subject: [],
      partner: [],
      program: [],
      level: [],
      available: [],
      language: [],
      page: 1,
    };
  }

  val2 = (a) => {
    let page = document.getElementsByClassName("div_p_btn" + this.state.page);
    page[0].style.backgroundColor = "white";
    page[0].style.color = "#00262b";
    page[1].style.backgroundColor = "white";
    page[1].style.color = "#00262b";

    if (this.state.page + a > 4) {
      this.state.page = 1;
    } else if (this.state.page + a < 1) {
      this.state.page = 4;
    } else {
      this.state.page += a;
    }
    let page2 = document.getElementsByClassName("div_p_btn" + this.state.page);
    page2[0].style.backgroundColor = " #00262b";
    page2[0].style.color = "white";
    page2[1].style.backgroundColor = " #00262b";
    page2[1].style.color = "white";
    this.setState({ page: this.state.page });
  };
  val = (a) => {
    let page = document.getElementsByClassName("div_p_btn" + this.state.page);
    let page2 = document.getElementsByClassName("div_p_btn" + a);

    page[0].style.backgroundColor = "white";
    page[0].style.color = "#00262b";
    page[1].style.backgroundColor = "white";
    page[1].style.color = "#00262b";

    page2[0].style.backgroundColor = " #00262b";
    page2[0].style.color = "white";
    page2[1].style.backgroundColor = " #00262b";
    page2[1].style.color = "white";

    this.setState({ page: a });

    // let c_p = document.getElementById("btn" + this.state.page);
    // c_p.style.backgroundColor = "black";
    // c_p.style.color = "white";
  };

  handleChange(e) {
    let subject_list = e.map((items) => {
      return items.value;
    });
    this.setState({ subject: subject_list });
    this.setState({ page: 1 });
  }
  handleChange2(e) {
    let partner_list = e.map((items) => {
      return items.value;
    });
    this.setState({ partner: partner_list });
    this.setState({ page: 1 });
  }
  handleChange3(e) {
    let program_list = e.map((items) => {
      return items.value;
    });
    this.setState({ program: program_list });
    this.setState({ page: 1 });
  }
  handleChange4(e) {
    let level_list = e.map((items) => {
      return items.value;
    });
    this.setState({ level: level_list });
    this.setState({ page: 1 });
  }
  handleChange5(e) {
    let available_list = e.map((items) => {
      return items.value;
    });
    this.setState({ available: available_list });
    this.setState({ page: 1 });
  }
  handleChange6(e) {
    let language_list = e.map((items) => {
      return items.value;
    });
    this.setState({ language: language_list });
    this.setState({ page: 1 });
  }
  render() {
    let f_sub = this.state.subject;
    let f_uni = this.state.partner;
    let f_prog = this.state.program;
    let f_level = this.state.level;
    let f_available = this.state.available;
    let f_language = this.state.language;
    if (
      f_sub.length == 0 &&
      f_uni.length == 0 &&
      f_prog.length == 0 &&
      f_level.length == 0 &&
      f_available.length == 0 &&
      f_language.length == 0
    ) {
      return (
        <div>
          <Read></Read>
          <Navbar></Navbar>
          <div className="div_filter">
            <div className="div_2nd_search">
              <div className="div_txt">Search Courses and Programs</div>
              <div className="div_search">
                <Search></Search>
              </div>
            </div>
            <div className="div_filters">{this.Filters()}</div>
            <div className="div_c_btn">
              <Buttons></Buttons>
            </div>
          </div>
          <div>
            <div className="inner">
              "computer science" Courses (176 results)
              {this.Radio_button()}
            </div>
            <div className="div_Cards">
              <Cards filter={this.state}></Cards>
            </div>
            {this.Radio_button()}
          </div>
          <Footer></Footer>
        </div>
      );
    } else {
      return (
        <div>
          <Navbar></Navbar>
          <div className="div_filter">
            <div className="div_2nd_search">
              <div className="div_txt">Search Courses and Programs</div>
              <div className="div_search">
                <Search></Search>
              </div>
            </div>
            <div>{this.Filters()}</div>
            <div className="div_c_btn">
              <Buttons></Buttons>
            </div>
          </div>
          <div>
            <div className="div_Cards">
              <Cards filter={this.state}></Cards>
            </div>
          </div>
          <Footer></Footer>
        </div>
      );
    }
  }

  Radio_button(params) {
    return (
      <div className="div_p_btn_container">
        <button className="div_p_btn" onClick={() => this.val2(-1)}>
          &#8249;
        </button>
        <button className="div_p_btn1" onClick={() => this.val(1)}>
          1
        </button>
        <button className="div_p_btn2" onClick={() => this.val(2)}>
          2
        </button>
        <button className="div_p_btn3" onClick={() => this.val(3)}>
          3
        </button>
        <button className="div_p_btn4" onClick={() => this.val(4)}>
          4
        </button>
        <button className="div_p_btn" onClick={() => this.val2(1)}>
          &#8250;
        </button>
      </div>
    );
  }

  Filters(params) {
    var filters_subject = [
      {
        value: "Computer Science",
        label: "Computer Science",
      },
      {
        value: "Business",
        label: "Business",
      },
      {
        value: "Math",
        label: "Math",
      },
      {
        value: "Engineering",
        label: "Engineering",
      },
    ];

    var filter_partners = [
      {
        value: "HarvardX",
        label: "HarvardX",
      },
      {
        value: "StandfordOnline",
        label: "StandfordOnline",
      },
      {
        value: "TokyoTechX",
        label: "TokyoTechX",
      },
      {
        value: "PurdueX",
        label: "PurdueX",
      },
      {
        value: "MiTx",
        label: "MiTx",
      },
      {
        value: "PekingX",
        label: "PekingX",
      },
    ];

    var filter_programe = [
      {
        value: "Xseries",
        label: "Xseries",
      },
      {
        value: "Professional",
        label: "Professional Certificate",
      },
      {
        value: "Microbechlor",
        label: "MicroBachelors Program",
      },
      {
        value: "Micromaster",
        label: "MicroMasters Program",
      },
    ];

    var filter_Level = [
      {
        value: "Introductory",
        label: "Introductory",
      },
      {
        value: "Intermediate",
        label: "Intermediate",
      },
      {
        value: "Advanced",
        label: "Advanced",
      },
    ];

    var filter_Availabilty = [
      {
        value: "Available",
        label: "Available",
      },
      {
        value: "Upcoming",
        label: "Upcoming",
      },
      {
        value: "Archived",
        label: "Archived",
      },
    ];

    var filter_Language = [
      {
        value: "English",
        label: "English",
      },
      {
        value: "French",
        label: "French",
      },
      {
        value: "Italian",
        label: "Italian",
      },
      {
        value: "Chinesse",
        label: "Chinese - Mandarian",
      },
    ];
    const checkstyle = {
      control: (provided, state) => ({
        ...provided,
        // none of react-select's styles are passed to <Control />

        borderRadius: 0,
        width: 200,
        cursor: "pointer",
      }),
    };
    return (
      <div className="div_Filters_container">
        <Select
          isMulti
          options={filters_subject}
          placeholder="Subject"
          className="react-select-container"
          classNamePrefix="react-select"
          styles={checkstyle}
          isSearchable={false}
          theme={(theme) => ({
            ...theme,
            border: "none",
            colors: {
              ...theme.colors,
              primary25: "white",
              primary: "black",
            },
          })}
          onChange={this.handleChange.bind(this)}
        ></Select>

        <Select
          isMulti
          options={filter_partners}
          placeholder="Partner"
          className="react-select-container"
          classNamePrefix="react-select"
          styles={checkstyle}
          isSearchable={false}
          theme={(theme) => ({
            ...theme,
            border: "none",
            colors: {
              ...theme.colors,
              primary25: "white",
              primary: "black",
            },
          })}
          onChange={this.handleChange2.bind(this)}
        ></Select>

        <Select
          isMulti
          options={filter_programe}
          placeholder="Program"
          className="react-select-container"
          classNamePrefix="react-select"
          styles={checkstyle}
          isSearchable={false}
          theme={(theme) => ({
            ...theme,
            border: "none",
            colors: {
              ...theme.colors,
              primary25: "white",
              primary: "black",
            },
          })}
          onChange={this.handleChange3.bind(this)}
        ></Select>

        <Select
          isMulti
          options={filter_Level}
          placeholder="Level"
          className="react-select-container"
          classNamePrefix="react-select"
          styles={checkstyle}
          isSearchable={false}
          theme={(theme) => ({
            ...theme,
            border: "none",
            colors: {
              ...theme.colors,
              primary25: "white",
              primary: "black",
            },
          })}
          onChange={this.handleChange4.bind(this)}
        ></Select>

        <Select
          isMulti
          options={filter_Availabilty}
          placeholder="Availabity"
          className="react-select-container"
          classNamePrefix="react-select"
          styles={checkstyle}
          isSearchable={false}
          theme={(theme) => ({
            ...theme,
            border: "none",
            colors: {
              ...theme.colors,
              primary25: "white",
              primary: "black",
            },
          })}
          onChange={this.handleChange5.bind(this)}
        ></Select>

        <Select
          isMulti
          options={filter_Language}
          placeholder="Language"
          className="react-select-container"
          classNamePrefix="react-select"
          styles={checkstyle}
          isSearchable={false}
          theme={(theme) => ({
            ...theme,

            colors: {
              ...theme.colors,
              primary25: "white",
              primary: "black",
            },
          })}
          onChange={this.handleChange6.bind(this)}
        ></Select>
      </div>
    );
  }
}

export default Webapp;
