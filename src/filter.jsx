/*import React, { Component } from "react";
import "./cards.css";
import bg1 from "./images/1.jpg";
import fg1 from "./images/f1.png";
import bg2 from "./images/2.png";
import fg2 from "./images/f2.png";
import bg3 from "./images/3.jpg";
import bg4 from "./images/4.jpeg";
import fg4 from "./images/f4.png";

class Cards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arr_object: [
        {
          title: "CS50's Introduction to computer science",
          University: "HarvardX",
          bk_img: bg1,
          f_img: fg1,
          subject: ["Computer Science"],
        },
        {
          title: "Computer Science 101",
          University: "StanfordOnline",
          bk_img: bg2,
          f_img: fg2,
          subject: ["Computer Science"],
        },
        {
          title: "CS50's Computer Science for Business Professionals",
          University: "harvardX",
          bk_img: bg3,
          f_img: fg1,
          subject: ["Computer Science", "Business"],
        },
        {
          title: "Introduction to Computer Science and Programming",
          University: "TokyoTechX",
          bk_img: bg4,
          f_img: fg4,
          subject: ["Computer Science"],
        },
      ],
    };
  }
  render() {
    if (this.props.apply_filter === "Yes") {
      let list = this.state.arr_object;
      let list_render = list.map((item) => {
        let list_item = item.subject;
        let list_item_render = list_item.map((item_subject) => {
          if (item_subject === this.props.filter.subject) {
            return <Show_Card object={item} />;
          }
        });

        return <>{list_item_render}</>;
      });

      return <>{list_render}</>;
      //return <Show_Card object={this.state.arr_object[0]}></Show_Card>;
    } else {
      return <Show_Card object={this.state.arr_object[1]}></Show_Card>;
    }
  }
}

function Show_Card(params) {
  console.log("Inside Show_Card");
  return (
    <div className="div_imges_contianer">
      <div>
        <img src={params.object.f_img} className="foreground_image"></img>
        <img src={params.object.bk_img} className="background_image"></img>
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
*/
/////////////////////////////////////////////////////////////

/*
import React, { Component } from "react";
import "./cards.css";
import bg1 from "./images/1.jpg";
import fg1 from "./images/f1.png";
import bg2 from "./images/2.png";
import fg2 from "./images/f2.png";
import bg3 from "./images/3.jpg";
import bg4 from "./images/4.jpeg";
import fg4 from "./images/f4.png";
import bg5 from "./images/5.png";
import fg5 from "./images/f5.png";
import bg6 from "./images/6.jpg";
import fg6 from "./images/f6.png";
import bg7 from "./images/7.jpg";
import fg7 from "./images/f7.png";
import bg8 from "./images/8.jpg";
import fg8 from "./images/f8.png";
import bg9 from "./images/9.jpg";
import fg9 from "./images/f9.png";
import bg10 from "./images/10.jpg";
import fg10 from "./images/f10.png";
import bg11 from "./images/11.jpg";
import fg11 from "./images/f11.png";
import bg12 from "./images/12.jpg";
import fg12 from "./images/f12.png";
import bg13 from "./images/13.jpg";
import fg13 from "./images/f13.png";
import bg14 from "./images/14.jpg";
import fg14 from "./images/f14.jpg";
import bg15 from "./images/15.jpg";
import fg15 from "./images/f15.jpg";
import bg16 from "./images/16.jpg";
import fg16 from "./images/f16.png";
import bg17 from "./images/17.png";
import fg17 from "./images/f17.png";
import bg18 from "./images/18.jpeg";
import fg18 from "./images/f18.png";
import bg19 from "./images/19.jpg";
import fg19 from "./images/f19.png";
import bg20 from "./images/20.jpg";
import fg20 from "./images/f20.png";
import bg21 from "./images/21.jpeg";
import bg22 from "./images/22.jpeg";
import bg23 from "./images/23.png";
import bg24 from "./images/24.jpg";
import fg24 from "./images/f24.png";
class Cards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arr_object: [
        {
          key: 1,
          title: "CS50's Introduction to computer science",
          University: "HarvardX",
          bk_img: bg1,
          f_img: fg1,
          subject: ["Computer Science", "Engineering"],
        },
        {
          key: 2,
          title: "Computer Science 101",
          University: "StanfordOnline",
          bk_img: bg2,
          f_img: fg2,
          subject: ["Computer Science"],
        },
        {
          key: 3,
          title: "CS50's Computer Science for Business Professionals",
          University: "harvardX",
          bk_img: bg3,
          f_img: fg1,
          subject: ["Computer Science", "Business"],
        },
        {
          key: 4,
          title: "Introduction to Computer Science and Programming",
          University: "TokyoTechX",
          bk_img: bg4,
          f_img: fg4,
          subject: ["Computer Science"],
        },
        {
          key: 5,
          title: "プログラミングしなが",
          University: "TokyoTechX",
          bk_img: bg5,
          f_img: fg5,
          subject: ["Computer Science"],
        },
        {
          key: 6,
          title: "Introduction to Computer Science and Programming Using P...",
          University: "MiTx",
          bk_img: bg6,
          f_img: fg6,
          subject: ["Computer Science"],
        },
        {
          key: 7,
          title: "AP Computer Science      A: Java Programming",
          University: "PurdueX",
          bk_img: bg7,
          f_img: fg7,
          subject: ["Computer Science"],
        },
        {
          key: 8,
          title:
            "CS for All: Introduction to Computer Science and Python Programm...",
          University: "TokyoTechX",
          bk_img: bg8,
          f_img: fg8,
          subject: ["Computer Science"],
        },
        {
          key: 9,
          title: "AP COmputer Science A: Java Programming Classes and Objects",
          University: "PurdueX",
          bk_img: bg9,
          f_img: fg9,
          subject: ["Computer Science"],
        },
        {
          key: 10,
          title:
            "AP COmputer Science A: Java Programming Ploymorphism and Ad...",
          University: "PurdueX",
          bk_img: bg10,
          f_img: fg10,
          subject: ["Computer Science"],
        },
        {
          key: 11,
          title:
            "AP COmputer Science A: Java Programming Loops and Data Struct...",
          University: "PurdueX",
          bk_img: bg11,
          f_img: fg11,
          subject: ["Computer Science"],
        },
        {
          key: 12,
          title: "Introduction to Theoretical Computer...",
          University: "PekingX",
          bk_img: bg12,
          f_img: fg12,
          subject: ["Computer Science"],
        },
        {
          key: 13,
          title: "CS50's AP Computer Science Principles",
          University: "HarvardX",
          bk_img: bg13,
          f_img: fg13,
          subject: ["Computer Science", "Engineering"],
        },
        {
          key: 14,
          title: "Preparing for the AP* Computer Science A Exam --- Part 2",
          University: "Cooper Union",
          bk_img: bg14,
          f_img: fg14,
          subject: ["Computer Science"],
        },
        {
          key: 15,
          title: "Preparing for the AP* Computer Science A Exam --- Part 1",
          University: "Cooper Union",
          bk_img: bg15,
          f_img: fg15,
          subject: ["Computer Science"],
        },
        {
          key: 16,
          title: "MyCS: Computer Scienc for Begineners",
          University: "HarveyMuddX",
          bk_img: bg16,
          f_img: fg16,
          subject: ["Computer Science"],
        },
        {
          key: 17,
          title: "CS50 for Lawyers",
          University: "HarvardX",
          bk_img: bg17,
          f_img: fg17,
          subject: ["Computer Science"],
        },
        {
          key: 18,
          title: "Algorithms: Design and Analysis, Part1",
          University: "StandfordOnline",
          bk_img: bg18,
          f_img: fg18,
          subject: ["Computer Science", "Engineering"],
        },
        {
          key: 19,
          title: "Introduction to Java Programming: Writing Good Code",
          University: "UC3Mx",
          bk_img: bg19,
          f_img: fg19,
          subject: ["Computer Science"],
        },
        {
          key: 20,
          title: "Algorithms Design and Analysis",
          University: "PennX",
          bk_img: bg20,
          f_img: fg20,
          subject: ["Computer Science", "Engineering"],
        },
        {
          key: 21,
          title: "Algorithms: Design and Analysis, Part 2",
          University: "StandfordOnline",
          bk_img: bg21,
          f_img: fg18,
          subject: ["Computer Science", "Engineering"],
        },
        {
          key: 22,
          title: "Introduction to Haptics",
          University: "StandfordOnline",
          bk_img: bg22,
          f_img: fg18,
          subject: ["Computer Science", "Engineering"],
        },
        {
          key: 23,
          title: "Semantics of First-Order Logic",
          University: "StandfordOnline",
          bk_img: bg23,
          f_img: fg18,
          subject: ["Computer Science", "Math"],
        },
        {
          key: 24,
          title: "Combinatorial Mathematics | 组合数学 ",
          University: "TsinghuaX",
          bk_img: bg24,
          f_img: fg24,
          subject: ["Computer Science", "Math"],
        },
      ],
    };
  }
  render() {
    let filter_sub_arr = this.props.filter.subject;

    let sub_arr = this.state.arr_object;
    let list = [];
    console.log(filter_sub_arr);
    console.log("Page number is :" + this.props.filter.page);
    if (
      filter_sub_arr === "Subject" ||
      filter_sub_arr.length == 0 ||
      filter_sub_arr === "" ||
      filter_sub_arr === "Computer Science"
    ) {
      console.log("First if check");
      if (this.props.filter.page === "" || this.props.filter.page == 1) {
        console.log("Inisde    11   First if check");
        list = sub_arr.map((item) => {
          return (
            <li key={item.key} className="list">
              <Show_Card object={item} />
            </li>
          );
        });
        return <>{list}</>;
      } else {
        console.log("Inside 222 First else check");
        for (
          let i =
            (((sub_arr.length - 1) * this.props.filter.page) % sub_arr.length) -
            1;
          i > 0;
          i--
        ) {
          list.push(
            <li key={this.state.arr_object[i].key} className="list">
              <Show_Card object={this.state.arr_object[i]}></Show_Card>
            </li>
          );
        }
        return <>{list}</>;
      }
    } else {
      for (let i = 0; i < sub_arr.length; i++) {
        for (let j = 0; j < filter_sub_arr.length; j++) {
          for (let k = 0; k < sub_arr[i].subject.length; k++) {
            if (sub_arr[i].subject[k] === filter_sub_arr[j]) {
              list.push(
                <li key={this.state.arr_object[i].key} className="list">
                  <Show_Card object={this.state.arr_object[i]}></Show_Card>
                </li>
              );
            }
          }
        }
      }
      return <>{list}</>;
    }
  }
}

function Show_Card(params) {
  return (
    <div className="div_imges_contianer">
      <div>
        <img src={params.object.f_img} className="foreground_image"></img>
        <img src={params.object.bk_img} className="background_image"></img>
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

*/
