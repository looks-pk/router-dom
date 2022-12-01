import logo from "./logo.svg";
import "./App.css";
import BG from "./components/BG";
import Navbar from "./components/Navbar";
import Pics from "./components/Pics";
import Video from "./components/Video";
import React from "react";
import { About } from "./components/About";
import { Users } from "./components/Users";
import { Home } from "./components/Home";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

function App() {
  return (
    <>
    <div>
      
        <Router>
    <Routes>
          <Route path="/About" element={<About/>}/>
          <Route path="/users" element={<Users/>}/>
          <Route path="/" element={<Home/>}/>
          <Route path="Navbar" element={<Navbar/>}/>
          <Route path="Pics" element={<Pics/>}/>
          <Route path="Video" element={<Video/>}/>
        </Routes>
        </Router>
      
      {/* <Navbar />
      <BG />
      <Pics />
      <Video/> */}
    </div>
    </>
  );
}

export default App;
