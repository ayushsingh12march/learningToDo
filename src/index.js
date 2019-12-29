import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter,Route} from 'react-router-dom'
import CreateToDos from './component/CreateToDos'
import ListToDo from './component/ListToDo'
import "./styles.css";
//  Make Navbar global
// To avoid page reloading completely,alLternative for href- BrowseRouter
// Reason to use exact is to avoid regular expression, so that all do not load at once
//Note:- in VSCOde use Link to instead of a href
function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li>Todo</li>
          <li><a href="/">Create</a></li>
          <li><a href="/view">View</a></li>
          <BrowserRouter> 
              <Route exact path="/" component={CreateToDos} />
              <Route exact path="/view" component={ListToDo} />
          </BrowserRouter>
        </ul>
      </nav>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
