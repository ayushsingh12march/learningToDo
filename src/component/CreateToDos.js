import React, { Component } from "react";
import uuid from 'uuid'
class CreateToDos extends Component {
  state = {
    priority: "",
    descrition: "",
    title: "",
    index:""
  };
  handleChange =  e => {
    //console.log(e.target.value)
    this.setState({
      [event.target.name]: event.target.value
      //[event.target.name]:- in <input name=<whateveris there that is taken(ES6)>>
    });
  };
  handleClick =  async(e) => {
    e.preventDefault();
    let id = await uuid.v4() //Note :-  uuid uses promise takes some time, so other code may start executing, so use:--- await,async
    this.setState({
      index:id
    })
    console.log(this.state);
    let todos = localStorage.getItem("todos");
    console.log(todos);
    let newList = [];
    if (todos == null) {
      newList.push(this.state);
      console.log(newList);
      localStorage.setItem("todos", JSON.stringify(newList));
    } else {
      console.log(todos);
      let updatedTodos = JSON.parse(todos); //convert into data structure of js
      console.log(updatedTodos);
      updatedTodos.push(this.state);
      console.log(updatedTodos);
      localStorage.setItem("todos", JSON.stringify(updatedTodos));
    }
  };
  render() {
    //console.log("changes made")
    return (
      <div>
        <h4>Add your tasks here</h4>
        <form>
          <input
            type="text"
            name="title"
            placeholder="title"
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="description"
            placeholder="description"
            onChange={this.handleChange}
          />
          <input
            type="number"
            name="priority"
            placeholder="priority"
            onChange={this.handleChange}
          />
          <button onClick={this.handleClick}>Add to you list</button>
        </form>
      </div>
    );
  }
}
export default CreateToDos;
