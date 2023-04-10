import React, { useState } from "react";
import Button from "./Button.js";

//create your first component
const Home = () => {
    const [selectedColor, setSelectedColor] = useState("red");

    const changeToPurple = () => {
        setSelectedColor("purple");
    };

    return (
        <div className="semaforo">
            <div className="Palito"> </div>

            <div className="traffic-Light">

                <div onClick={() => setSelectedColor("red")}
                    className={"light red" + ((selectedColor === "red") ? " glow" : "")}> </div>

                <div onClick={() => setSelectedColor("yellow")}
                    className={"light yellow" + ((selectedColor === "yellow") ? " glow" : "")}> </div>

                <div onClick={() => setSelectedColor("green")}
                    className={"light green" + ((selectedColor === "green") ? " glow" : "")}> </div>
                <br></br>

                <div className="Button" onClick={changeToPurple}>Purple</div>
            </div>
        </div>
    );
};


export default Home;