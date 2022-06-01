import React, { Component } from "react";
import "./cards.css";
import { Get_Projects, Get_images } from "./RestApi_control";
class Cards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arr_object: [],
      permit: 0,
    };
  }
  render() {
    let f_sub = this.props.filter.subject;
    let f_uni = this.props.filter.partner;
    let f_prog = this.props.filter.program;
    let f_level = this.props.filter.level;
    let f_available = this.props.filter.available;
    let f_language = this.props.filter.language;
    let arr = this.state.arr_object;
    let page_no = this.props.filter.page;
    let list = [];
    if (
      f_sub.length == 0 &&
      f_uni.length == 0 &&
      f_prog.length == 0 &&
      f_level.length == 0 &&
      f_available.length == 0 &&
      f_language.length == 0
    ) {
      if (page_no == 1) {
        let arr2 = this.state.arr_object;
        list = arr2.map((items) => {
          return (
            <li key={items.key} className="list">
              <Show_Card object={items}></Show_Card>
            </li>
          );
        });
        return <>{list}</>;
      } else if (page_no == 2 || page_no == 3 || page_no == 4) {
        for (let i = 0; i < arr.length; i++) {
          let index = (i * page_no) % arr.length;
          if (index == 0) {
            index = page_no;
          }
          list.push(arr[index]);
        }
        arr = list;
        list = [];
        list = new Set(arr);
        arr = Array.from(list);
        list = [];
        //console.log(arr);
        list = arr.map((items) => {
          return (
            <li key={items.key} className="list">
              <Show_Card object={items}></Show_Card>
            </li>
          );
        });
        return <>{list}</>;
      }
    } else {
      if (f_sub.length > 0) {
        for (let i = 0; i < arr.length; i++) {
          for (let j = 0; j < arr[i].subject.length; j++) {
            for (let k = 0; k < f_sub.length; k++) {
              if (f_sub[k] === arr[i].subject[j]) {
                list.push(arr[i]);
              }
            }
          }
        }
        arr = list;
        list = [];
      }

      if (f_uni.length > 0) {
        for (let i = 0; i < arr.length; i++) {
          for (let j = 0; j < f_uni.length; j++) {
            if (f_uni[j] === arr[i].University) {
              list.push(arr[i]);
            }
          }
        }
        arr = list;
        list = [];
      }

      if (f_prog.length > 0) {
        for (let i = 0; i < arr.length; i++) {
          for (let j = 0; j < arr[i].Programe.length; j++) {
            for (let k = 0; k < f_prog.length; k++) {
              if (f_prog[k] === arr[i].Programe[j]) {
                list.push(arr[i]);
              }
            }
          }
        }
        arr = list;
        list = [];
      }
      if (f_level.length > 0) {
        for (let i = 0; i < arr.length; i++) {
          for (let j = 0; j < f_level.length; j++) {
            if (f_level[j] === arr[i].Level) {
              list.push(arr[i]);
            }
          }
        }
        arr = list;
        list = [];
      }

      if (f_available.length > 0) {
        for (let i = 0; i < arr.length; i++) {
          for (let j = 0; j < f_available.length; j++) {
            if (f_available[j] === arr[i].Availabilty) {
              list.push(arr[i]);
            }
          }
        }
        arr = list;
        list = [];
      }
      if (f_language.length > 0) {
        for (let i = 0; i < arr.length; i++) {
          for (let j = 0; j < arr[i].Language.length; j++) {
            for (let k = 0; k < f_language.length; k++) {
              if (f_language[k] === arr[i].Language[j]) {
                list.push(arr[i]);
              }
            }
          }
        }
        arr = list;
        list = [];
      }

      list = new Set(arr);
      arr = Array.from(list);
      list = [];
      //console.log(arr);
      list = arr.map((items) => {
        return (
          <li key={items.key} className="list">
            <Show_Card object={items}></Show_Card>
          </li>
        );
      });
      return <>{list}</>;
    }
  }
  componentDidMount() {
    console.log("Component mounted sueessfuly");
    const proj = this.Fetch_project();
    //const img = this.Fetch_images();
    this.setState({ arr_object: proj });
  }
  Fetch_project() {
    Get_Projects().then((response) => {
      this.setState({ arr_object: response.data });
      for (let i = 0; i < this.state.arr_object.length; i++) {
        Get_images({ id: this.state.arr_object[i].bk_img }).then((res) => {
          //console.log(res.data);
          this.state.arr_object[i].bk_img = res.data;
          this.setState({ arr_object: this.state.arr_object });
        });
        Get_images({ id: this.state.arr_object[i].f_img }).then((res) => {
          //console.log(res.data);
          this.state.arr_object[i].f_img = res.data;
          this.setState({ arr_object: this.state.arr_object });
        });
      }
    });

    return [];
  }
}

function Show_Card(params) {
  return (
    <div className="div_imges_contianer">
      <div>
        <img
          src={params.object.f_img}
          alt="Loading"
          className="foreground_image"
        ></img>
        <img
          src={params.object.bk_img}
          alt="Loading"
          className="background_image"
        ></img>
      </div>
      <div>
        <div className="div_title">{params.object.title}</div>
        <div className="div_University">{params.object.University}</div>
      </div>
      <div className="div_course">Course</div>
    </div>
  );
}
export default Cards;
