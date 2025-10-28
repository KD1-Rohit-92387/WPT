


function GrandChild({count,setCount}){

        return <div style={{border:'2px solid red',padding:'5px',display:'inline-block'}}>
            <h3>GrandChild</h3>
            <button onClick={()=>setCount(count+1)}>Increment</button>

        </div>
}

export default GrandChild