import React, { useState } from "react";
import Button from "./Button.js";

//create your first component
const Home = () => {
    const [selectedColor, setSelectedColor] = useState("red");

    const [purple, setPurple] = useState(false) 

    const changeToPurple = () => {
        setPurple(true) ? "purple" : "red";
        

    };

    return (
        <div className="semaforo">

            <div className="traffic-Light">

                <div onClick={() => setSelectedColor("red")}
                    className={"light " + ((purple === true) ? "purple" : "red") + ((selectedColor === "red") ? " glow" : "")}> </div>

                <div onClick={() => setSelectedColor("yellow")}
                    className={"light yellow" + ((selectedColor === "yellow") ? " glow" : "")}> </div>

                <div onClick={() => setSelectedColor("green")}
                    className={"light green" + ((selectedColor === "green") ? " glow" : "")}> </div>
                <br></br>

                <div className="btn" onClick={changeToPurple}>Purple</div>
            </div>
        </div>
    );
};


export default Home;