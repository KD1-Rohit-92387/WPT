import { useState } from 'react'
import GrandChild from './components/Assignment-Drilling/GrandChild'
import Parent from './components/Assignment-Drilling/Parent'
import ClassCounter from './components/Assignment-lifecycle/ClassCounter'
import FunctionCounter from './components/Assignment-lifecycle/FunctionCounter'
import AdvancedCounter from './components/Assignment-lifecycle/AdvancedCounter'
import DangerousCounter from './components/Assignment-lifecycle/DangerousCounter'


function App() {
  const[visible,setVisible]=useState(true)

  return (
    <>
   {/* <Parent/> */}
    <button onClick={()=>setVisible(!visible)}>Toggle</button>
    {/* {visible ? <ClassCounter/>: <div/>} */}
    {/* {visible && <ClassCounter/>} */}

    {/* {visible && <FunctionCounter/>} */}
    {/* {visible && <AdvancedCounter/>} */}
    {/* {visible && <DangerousCounter/>} */}
    <br />

    </>
  )
}

export default App
