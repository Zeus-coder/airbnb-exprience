import React from "react";
import logo from "../images/airbnb 1.png";


export default function Header(){
    return(
        <div className="header-conatiner">
            <header className="header">
                <img src={logo} alt="logo" className="logo"></img>
            </header>
        </div>
    )
}