import { Component } from "react"


class ClassCounter extends Component{

    state={count:0}
    constructor(){
        super()
        console.log("ClassCounter.constructor() called")
    }


componentDidMount(){
    console.log("ClassCounter.componentDidMount called")
}

componentWillUnmount(){
    console.log("ClassCounter.componentWillUnmount called")

}

componentDidUpdate(){
    console.log("ClassCounter.componentDidUpdate called")
}


    render() { 
        console.log("classcounter.render()called")
    
        return  <div>  
        
        <h3>ClassCounter</h3>
        <h4>count:{this.state.count}</h4> 
        
        <button onClick={()=>this.setState({count:this.state.count+1})}>Incr</button>
        </div>
      

    }
}

export default ClassCounter