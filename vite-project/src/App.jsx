import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Reactstarp from './component/class/Reactstrap.jsx'
import FunCom from './component/functional/FunCom.jsx'
import ClassCom from './component/class/ClassCom.jsx'
import MainPage from'./project/MainPage'
import MainPa from './project/project1/MainPa'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <FunCom /> */}

  {/* <ClassCom/> */}
        
      {/* <Reactstarp/> */}
     {/* <MainPage/> */}
    <MainPa/>
    </>
  )
  
}

export default App
