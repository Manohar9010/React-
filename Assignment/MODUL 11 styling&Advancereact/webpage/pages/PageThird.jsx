import React from "react";
import PageThirdcard from "./PageThirdcard";
// import './PageThird.css'
import imgpath from "../images/c1.jpg";
import imgpath1 from "../images/c2.jpg";
import imgpath2 from "../images/c3.jpg";
export default function PageThird() {
  let learnde = [
    {
      id: 1,
      rate: "53.00",
      caption: "How to make singapore chicken rise at home",
      enrolld: "68 Students Enrolled",
      tag1: "Begginer",
      tag2: "New",
      image: "../images/c3.jpg",
    },
    {
      id: 2,
      rate: "70.00",
      caption: "Make a delicious vegan burger at home",
      enrolld: "44 Students Enrolled",
      tag1: "Cooking",
      tag2: "Recipe",
    },
    {
      id: 3,
      rate: "69.00",
      caption: "How to make simple delicious noodles",
      enrolld: " 74 Students Enrolled",
      tag1: "Begginer",
      tag2: "free",
    },
  ];

  return (
    <div>
      <div className="main_course">
        <div className="container">
          <div className="card_flex">
            <PageThirdcard
              rate={learnde[0].rate}
              caption={learnde[0].caption}
              enrolld={learnde[0].enrolld}
              tag1={learnde[0].tag1}
              tag2={learnde[0].tag2}
              imgpath={imgpath}
            />
            <PageThirdcard
              rate={learnde[1].rate}
              caption={learnde[1].caption}
              enrolld={learnde[1].enrolld}
              tag1={learnde[1].tag1}
              tag2={learnde[1].tag2}
              imgpath={imgpath1}
            />
            <PageThirdcard
              rate={learnde[2].rate}
              caption={learnde[2].caption}
              enrolld={learnde[2].enrolld}
              tag1={learnde[2].tag1}
              tag2={learnde[2].tag2}
              imgpath={imgpath2}
            />
          </div>
          <div className="btn1">
            <button>Viem All Courses</button>
          </div>
        </div>
      </div>
    </div>
  );
}
