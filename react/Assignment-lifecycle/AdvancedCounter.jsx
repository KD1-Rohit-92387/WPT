import { useEffect,useState } from "react";

function AdvancedCounter(){
    const[count,setCount]=useState(0);
    const[color,setColor]=useState('lightgreen')

    useEffect(()=>{
        console.log("like componentDidMount()")
    },[])

    useEffect(()=>{
        console.log("like componentDidUpdate() for 'count'")
        if(count%2==0)
            setColor('lightGreen')
        else
            setColor('lightBlue')
    },[count])

    useEffect(()=>{
        console.log("like componentDidUpdate for 'color'")
    },[color])

    return <div style={{backgroundColor:color,padding:'2px',display:'inline-block'}}>
        <h3>Advanced counter</h3>
        <h4>count={count}</h4><br />
        <hr />
        <button onClick={()=> setCount(count+1)}>Incr</button>

    </div>
}

export default AdvancedCounter