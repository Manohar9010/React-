import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Reactstarp from './component/class/Reactstrap.jsx'
import FunCom from './component/functional/FunCom.jsx'
import ClassCom from './component/class/ClassCom.jsx'
import MainPage from'./project/MainPage'
import MainPa from './project/project1/MainPa'
import UsestateFun from './Hooks/usestate/UsestateFun'
import UsestatePro from './Hooks/usestate/UsesatePro'
import UsestatePro2 from './Hooks/usestate/UsestatePro2'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <FunCom /> */}

  {/* <ClassCom/> */}
        
      {/* <Reactstarp/> */}
     {/* <MainPage/> */}
    {/* <MainPa/> */}
  <UsestateFun/>
  <UsestatePro/>
  <UsestatePro2/>
    </>
  )
  
}

export default App
