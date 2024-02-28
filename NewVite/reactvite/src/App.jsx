import { ToastContainer } from "react-toastify";
import ApiPost from "./Api/ApiPost";
import Product from "./Api/Product";
import SimpleApi from "./Api/SimpleApi";
import "./App.css";
import BellaRouter from "./Bellavitaluxury/Router/BellaRouter";
import Checkbox from "./Inputs/Checkbox";
import MainLogin from "./Inputs/FilterUser/MainLogin";
import RouteMain from "./Inputs/Rigister&Login/RouteMain";
import SimpleInput from "./Inputs/SingleInput";
import ToDoList from "./Inputs/TodoList";
import ToDoList1 from "./Inputs1/TodoList1";
import AppRedux from "./Redux/AppRedux";
import Slidercheck from "./Slidercheck";
import TravelProjectmain from "./TravelProject/TravelProjectmain";
import UseforPractice from "./UseforPractice";
import IndexDisplay from "./inputdd/indexdisplay";
import ReduxMain from "./rrrrr/ReduxMain";
function App() {
  return (
    <>
      {/* <ToDoList/>  */}
      {/* <Checkbox/>  */}
      {/* <SimpleInput/> */}
      {/* <TravelProjectmain /> */}
      {/* <RouteMain/> */}
      {/* <SimpleApi/> */}
      {/* <ApiPost/> */}
      {/* <Product /> */}
      {/* <UseforPractice/> */}
      <BellaRouter/>
      {/* <Slidercheck/> */}
      {/* <MainLogin/>   */}
      {/* =======redux====== */}
      {/* <AppRedux /> */}
      {/* <ReduxMain/> */}
   

   
      {/* <IndexDisplay/> */}
      <ToastContainer />

    </>
  );
}

export default App;
