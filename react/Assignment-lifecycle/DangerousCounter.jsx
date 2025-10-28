import { useEffect,useState } from "react"


function DangerousCounter(){
    const[count,setCount]=useState(0)
    useEffect(()=>{
        console.log("like componentDidMount()")
    },[])

    useEffect(()=>{
        console.log("like componentDidUpdate")
        setCount(count+1)
    },[count])

    return <div>
        <h3>Dangerous counter</h3>
        <h4>Count={count}</h4>
        <button onClick={()=>setCount(count+1)}>Incr</button>
    </div>

}

export default DangerousCounter