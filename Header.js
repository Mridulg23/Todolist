import React from "react";
import { Link } from "react-router-dom"; 
function Header(){
    return <>
    <nav> Your To Do List </nav>
    <div className="header">
        <Link to="Home">Home</Link>
        <Link to="About">About</Link>
        <Link to="Contact">Contact</Link>
        </div>
      </>;
};
export default Header;
