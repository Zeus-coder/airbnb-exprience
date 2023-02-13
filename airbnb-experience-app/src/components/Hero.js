import React from "react";
import hero_image from "../images/Group 77.png"


export default function Hero(){
    return(
        <div>
            <section className="hero-image-container">
                <img src={hero_image} alt="hero_img" className="hero-image"></img>
                <h1 className="hero-h1" >Online Experiences</h1>
                <p className="hero-p1">
                    Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.

                </p>
            </section>
        </div>
    )
}