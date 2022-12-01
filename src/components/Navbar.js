import React from "react";
import { Link } from "react-router-dom";
import "./nav.css";

const Navbar = () => {
  const bgcolor  = document.getElementsByClassName("bgcolor");
 function changeclr () {
    document.body.classList.toggle("dark-theme");
  };
  const peela  = document.getElementsByClassName("peela");
  function changeclrs () {
     document.body.classList.toggle("peelas");
   };
   const neela  = document.getElementsByClassName("neela");
   function changeclrss () {
      document.body.classList.toggle("neelas");
    };
  return (
    <>
      <nav>
        <ul>
          <li><Link className="linkline" to="/">Home</Link></li>
          <li><Link className="linkline" to="/users">Users</Link></li>
          <li><Link className="linkline" to="/About" >About Us</Link></li>
          <li><Link className="linkline" to="/Pics">pics</Link> </li>
          <li><Link className="linkline" to="/video">Videos</Link></li>
          <div className="dropdown">
  <button class="dropbtn">Jo Marzi</button>
  <div class="dropdown-content">
  <a className="bgcolor" onClick={changeclr}>Kaala</a>
    <a className="peela" onClick={changeclrs}>Peela</a>
    <a className="neela" onClick={changeclrss}>Neela</a>
  </div>
  </div>
        </ul>
      </nav>
    </>
  );
};
export default Navbar;
