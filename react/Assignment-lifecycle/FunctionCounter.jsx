import { useEffect,useState } from "react";


function FunctionCounter(){
    const[count,setCount]=useState(0);

    useEffect(()=>{
        console.log("like componentDidMount().")

        return()=>{
            console.log("like componentWillUnmount()")
        }

    },[])

    useEffect (()=>{
        console.log("like componentDidUpdate()")

    },[count])

    useEffect(()=>{console.log("post render")})

    return <div>
        <h3>Function counter</h3>
        <h4>count={count}</h4>
        <button onClick={()=>setCount(count+1)}>Incr</button>
    </div>
    


}

export default FunctionCounter