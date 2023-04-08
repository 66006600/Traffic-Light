import React, {useState} from "react";

//create your first component
const Home = () => {
    const [selectedColor, setSelectedColor] = useState("red");

    return (
        <div className="traffic-Light">
            <div className={"light red"+ ((selectedColor === "red") ? " glow": "")}> </div>
            <div className={"light yellow"+ ((selectedColor === "yellow") ? " glow" : "")}> </div>
            <div className={"light green"+ ((selectedColor === "green") ? " glow" : "")}> </div>
            
        </div>
    );
};

export default Home;