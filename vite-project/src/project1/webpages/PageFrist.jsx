import "./PageFrist.css";
import imggit from "../img/github.png";
import imglink from "../img/linkedin.png";
import imginsta from "../img/instagram.png";
import imgblue from "../img/Vector1.png";
import imgyellow from "../img/Vector2.png";
import imgboy from "../img/boy.png";
import imgthumb from "../img/thumbup.png";
import imgcrown from "../img/crown.png";
import imgglasi from "../img/glassesimoji.png";
import TagBar from "./TagBar";

export default function PageFrist() {
  return (
    <div>
      <div className="mainpage container">
        <div className="main_left">
          <h1>Hy! I Am</h1>
          <h1>Andrew Thomas</h1>
          <p>
            Frontend Devloper with high level of experience In web designing and
            development,
            <br /> producting the Quality work{" "}
          </p>
          <div>
            <button className="button h_button">Hire me</button>
            <div className="main_socialapp">
              <ul>
                <li>
                  <img src={imggit} alt="" />
                </li>
                <li>
                  {" "}
                  <img src={imglink} alt="" />{" "}
                </li>
                <li>
                  <img src={imginsta} alt="" />{" "}
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="main_right">
            <img src={imgblue} alt="" className="main_r_img" />
            <img src={imgyellow} alt=""
            className="main_r_img" />
            <img src={imgboy} alt="" 
            className="main_r_img"/>
            <div className="main_tag"  style={{top:"-10px", right:"-90px"}}>
            
               <TagBar img={imgcrown} tex="Web" texd="Developer"/>
             
            </div>
            <div className="main_tag"  style={{top:"353px", left:"57px"}}>
            
               <TagBar img={imgthumb} tex="Best Design" texd="Award"/>
             
            </div>
            <div className="blur"></div>
            <div className="blur blur1"></div>
            <div className="glassimmg">
              <img src={imgglasi} alt="" />
            </div>
        </div>
      </div>
      
    </div>
  );
}
