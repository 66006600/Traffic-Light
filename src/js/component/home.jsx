import React, { useState } from "react";

const Home = () => {

    const [selectedColor, setSelectedColor] = useState("red");
    const [purple, setPurple] = useState(false);
    const changeToPurple = () => {
        setPurple(purple => !purple);
    };

    {purple ? "Red" : "Purple"}

    return (
        <div className="semaforo">

            <div className="traffic-Light">

                <div onClick={() => setSelectedColor("red")}
                    className={"light " + ((purple === true) ? "purple" : "red") + ((selectedColor === "red") ? " glow-animation" : "")}> </div>

                <div onClick={() => setSelectedColor("yellow")}
                    className={"light yellow" + ((selectedColor === "yellow") ? " glow-animation" : "")}> </div>

                <div onClick={() => setSelectedColor("green")}
                    className={"light green" + ((selectedColor === "green") ? " glow-animation" : "")}> </div>
                <br></br>

                <div className="btn" onClick={changeToPurple}>Purple</div>
                

            </div>
        </div>
    );
};
export default Home;