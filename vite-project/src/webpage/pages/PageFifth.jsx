import React from 'react'
import './PageFifth.css'
import PageFifthcard from './PageFifthcard'
import img1 from'../images/team1.jpg'
import img2 from'../images/team2.jpg'
import img3 from'../images/team3.jpg'

let carddetailes =[
  {
    id:1,
    name:"Olive Yew",
    titel:"Masterchef",
    decs:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit,sed diam nonummy nibh.",
  },
  {
    id:1,
    name:"Aida Joe",
    titel:"Masterchef",
    decs:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit,sed diam nonummy nibh.",
  },
  {
    id:1,
    name:"Teri Dac",
    titel:"Masterchef",
    decs:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit,sed diam nonummy nibh.",
  }
]


export default function PageFifth() {
  return (
    <div>
     <div className="mainbestcheft">
        <div className="container">
            <div className="besttitle">
                <h6>Team of Professionals</h6>
                <h1>Our Best Chefs</h1>
               
            </div>
            <div className="best_flex">
            <PageFifthcard name={carddetailes[0].name} title={carddetailes[0].titel} decs={carddetailes[0].decs} img={img1}/>
                <PageFifthcard  name={carddetailes[1].name} title={carddetailes[1].titel} decs={carddetailes[1].decs} img=
                {img2}/>
                <PageFifthcard  name={carddetailes[2].name} title={carddetailes[2].titel} decs={carddetailes[2].decs} img=
                {img3}/>
            </div>
            

        </div>
     </div>
     
    </div>
  )
}
