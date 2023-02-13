import React from "react";
//import card_1_image from "../images/image 12.png";
import star_icon from "../images/Star 1.png";

export default function Card(props){
    let badgeText
    if (props.data.openSpots === 0){
        badgeText = "SOLD OUT"
    }
    else if(props.data.location === "Online"){
        badgeText = "Online"
    }
    else{
        badgeText = props.data.location
    }
    return(
        
        <div className="card-section">
            {badgeText && <div className="card-badge">{badgeText}</div>}
            <img src={props.data.img} alt="first_card"></img>
            <p><img src={star_icon} alt="star_icon" className="star-icon"></img>{props.data.stats.rating} ({props.data.stats.reviewCount}) {props.data.location}</p>
            <p className="card--title">{props.data.title}</p>
            <p className="card--price"><strong>From ${props.data.price}</strong> / person</p>
        </div>
    )
}

