import React,{Component} from 'react'

class ListToDo extends Component{
  state={
    todos:[]
  }
  componentDidMount(){ // works after constructor, after constructor render works
    // i dont know how much i am correct, but in component did mount- {if you have any setState to do, its changes cant be console.log(), they are visible only afte this whole block finishes execution}
    this.setState({
      todos:JSON.parse(localStorage['todos'])
    })
    console.log(this.state.todos);
  }
  render(){
    //let x= this.state.arr.map((data)=><h1>{data}</h1>)
   // console.log(this.state.todos)
    let arr=this.state.todos.map(data=>{
      return <h4 key={data.index}>{data.title}</h4>
    })
    return(
      <div>
      <h1>helo</h1>
      {arr}
      </div>
    )
    
  }
}
export default ListToDo