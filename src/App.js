import React from "react";
import "./App.css";
import Board from "../src/pages/board";
import School from "../src/pages/school";
import Student from "../src/pages/student";
import Navbar from "./components/navbar";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/home";
import AddBoard from "./pages/addBoard";
import AddStudent from "./pages/addStudent";
import AddSchool from "./pages/addSchool";
function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <Switch>
          <Route path="/board/:id" component={AddBoard} />
          <Route path="/student/:id" component={AddStudent} />
          <Route path="/school/:id" component={AddSchool} />
          <Route path="/board" component={Board} />
          <Route path="/school" component={School} />
          <Route path="/student" component={Student} />
          <Route path="/" exact component={Home} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
