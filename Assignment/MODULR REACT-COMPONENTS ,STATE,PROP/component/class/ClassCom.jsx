import { Component } from "react";
import "../class/index.css"

export default class ClassCom extends Component{
   

    render(){
        let cssinvariable={
            height:"200px",
            width:"200px",
            backgroundColor:"lightpink",
            Color:"white",
            display:"grid",
            placeContent:"center",
            fontSize:"30px",
            fontWeight:"800",
            color:"white",
            boxShadow: "10px 10px 10px 10px lightblue",
        }
        return(
            <div><h1 style={{color:"lightpink",fontFamily:"vardana", display:"grid",placeContent:"center",textShadow:"10px 10px 10px grey"}}>hello class component</h1>
            
                
               <div style={cssinvariable}> css in variable</div>

             <div className="external"> External css</div>
             
             <div><h1 className="text-danger ">hello reactstrap</h1></div>  
            </div>
        )
    }
}
