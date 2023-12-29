import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Reactstarp from "./component/class/Reactstrap.jsx";
import FunCom from "./component/functional/FunCom.jsx";
import ClassCom from "./component/class/ClassCom.jsx";
import MainPage from "./project/MainPage";
import MainPa from "./project/project1/MainPa";
import UsestateFun from "./Hooks/usestate/UsestateFun";
import UsestatePro from "./Hooks/usestate/UsesatePro";
import UsestatePro2 from "./Hooks/usestate/UsestatePro2";
import UsestateClass from "./Hooks/usestate/UsestateClass";
import Fragment from "./map-key-Fragment/Fragment";
import MapKey from "./map-key-Fragment/MapKey";
import UseStatecolor from "./Hooks/usestate/UseStatecolor";
import UsestateAlert from "./Hooks/usestate/UsestateAlert.jsx";
import FunProps from "./props/FunProps.jsx";
import Classprops from "./props/Classprops.jsx";
import Propspro1 from "./props/Propspro1.jsx";
import PropsChange from "./props/PropsChange.jsx";
import LifecycleMethod from "./Lifecycle/LifecycleMethod.jsx";
import UseFor from "../UseFor.jsx";
import ExpApp from "./Expproject/Expenses/ExpApp.jsx";
import MainWeb from "./webpage/MainWeb.jsx";
import Use_State_Class_Task from "./Hooks/usestate/Use_State_Class_Task.jsx";
import StateHook from "./component/functional/StateHook.jsx";
import ArrayMap from "./module/ArrayMap.jsx";
import UniqueKey from "./module/UniqueKey.jsx";
import IndexUsekey from "./module/IndexUsekey.jsx";
import UseEffect from "./Hooks/usestate/UseEffect.jsx";
import UseEffectarry from "./Hooks/usestate/UseEffectarry.jsx";
import UseEffectmach from "./Hooks/usestate/UseEffectmach.jsx";
import InputValueget from "./Inputs/InputValueget.jsx";
import InputToken from "./Inputs/InputToken.jsx";
import BootstapCard from "./bootstapuse/BootstapCard.jsx";
import InputMulty from "./Inputs/InputMulty.jsx";
import { ToastContainer } from "react-toastify";
import InputPractice from "./Inputs/InputPractice.jsx";
import InputDeleteupdate from "./Inputs/InputDeleteupdate.jsx";
import DataManagementComponent from "./Inputs/InputPractice.jsx";
import ExlocalStorage from "./LocalStorage/ExlocalStorage.jsx";
import ProMainpage from "./project1/ProMainpage.jsx";
import UseRefCom from "./Hooks/usestate/UseRefCom.jsx";
import UseContaxtCom from "./Hooks/usestate/UseContaxt/UseContaxtCom.jsx";
import UseRedeuserCom from "./Hooks/usestate/UseRedeuserCom.jsx";
import UseoneReduser from "./Hooks/usestate/UseoneReduser.jsx";
import RoutingCom from "./Hooks/usestate/Routing/RoutingCom.jsx";
import Routing from "./Routing/Routing.jsx";
import ProtectRoute from "./ProtecRouting/ProtectRoute.jsx";
import ProtectRoutTask1 from "./ProtecRouting/ProtectTask1/ProtectRoutTask1.jsx";
import RadioButton from "./RadioButton.jsx/RadioButton.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <FunCom /> */}

      {/* <ClassCom/> */}

      {/* <Reactstarp/> */}
      {/* <MainPage/> */}
      {/* <MainPa/> */}
      {/* <UsestateFun/> */}
      {/* <UsestatePro/> */}
      {/* <UsestatePro2/> */}
      {/* <UsestateClass/> */}
      {/* <Fragment/> */}
      {/* <Fragment/> */}

      {/* <MapKey/> */}
      {/* <UseStatecolor/> */}
      {/* <UsestateAlert/> */}
      {/* <FunProps name={"shivam"} age={25} color={"purple"}/> */}
      {/* <FunProps name={"gouri"} age={20} color={"orange"}/> */}
      {/* <Classprops data={{name:"shivam",greeting:"Good Morning"}}/> */}
      {/* <Classprops/>    */}
      {/* <Propspro1/> */}
      {/* <PropsChange name="shivam"/> */}
      {/* <Use_State_Class_Task/> */}
      {/* <LifecycleMethod/>   */}
      {/* <UseFor/> */}
      {/* <ExpApp/> */}
      {/* <StateHook/> */}
      {/* <ArrayMap/> */}
      {/* <IndexUsekey/> */}
      {/* <UniqueKey/> */}
      {/* <UseEffect/> */}
      {/* <UseEffectarry/> */}
      {/* <UseEffectmach/> */}
      {/* <InputValueget/> */}
      {/* <InputToken/> */}
      {/* <MainWeb/> */}
      {/* <BootstapCard/> */}
      {/* <InputMulty/> */}
      {/* <InputDeleteupdate/> */}
      {/* <InputPractice/> */}
      {/* <DataManagementComponent/> */}
      {/* <ExlocalStorage/> */}
      {/* <ProMainpage/> */}
      {/* <UseRefCom/> */}
      {/* <UseRedeuserCom/> */}
      {/* <UseContaxtCom/> */}
      {/* <UseoneReduser/> */}
      {/* <RoutingCom/> */}
      {/* <Routing/> */}
      {/* <ProtectRoute /> */}
      {/* <ProtectRoutTask1/> */}
      <RadioButton/>

      <ToastContainer />
    </>
  );
}

export default App;
