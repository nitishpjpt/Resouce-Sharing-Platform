import React from "react";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";

import DashBoard from "./components.part/DashBoard.jsx";
import Teacher from "./components.part/Teacher.jsx";
import Notes from "./components.part/Notes.jsx";
import Navbar from "./components.part/navbar.jsx";
import Student from "./components.part/Student.jsx";

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/Login" element={<Login />}></Route>
          <Route path="/Register" element={<Register />}></Route>
          <Route path="/" element={<Home />}></Route>
          <Route path="/teachers" element={<Teacher />}></Route>
          <Route path="/dashboard" element={<DashBoard />}></Route>
          <Route path="/notes" element={<Notes />}></Route>
          <Route path="/student" element={<Student />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
