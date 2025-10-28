

function Child(props){

    return <div style={{border:'2px solid purple' , padding:'5px', display:'inline-block'}}>
        <h3>Child</h3>
        {props.children}
    </div>

    


}

export default Child