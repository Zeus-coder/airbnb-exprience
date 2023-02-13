import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Hero from "./components/Hero"
import Card from "./components/Card";
import "../src/index.css";
import CardDatas from "./components/CardDatas";



function Page(){
    const cardData = CardDatas.map(data => {
        return <Card 
                    key = {data.id}
                    data ={data}               
                />
    })
    return(
        <>
            <Header/>
            <Hero/>
            <div className="card-container">
                {cardData}
            </div>
        </>

    )
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Page/>);

