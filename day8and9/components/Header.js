import { useState } from "react";
import food from "../food.png";
import {Title} from "./Title"
import { useState } from "react";
import {Link} from "react-router-dom";

const styleObj = {
    backgroundColor:"red"
}
const Header = () => {
    let [newTitle,changeTitle] = useState("Hello");
    console.log("test")
    return(
        <div style={styleObj} className="header">
            <a href="#">
                <img src ={food} className="logo"/>
            </a>
            <Title />
            <h1>{newTitle}</h1>
            <button type="button"
                value = {newTitle} 
                onClick={() => {
                    changeTitle("New");
                }}>Change Title
            </button>
            <div className="nav-items">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>                
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/instamart">Instamart</Link></li>
                    <li><Link to="/">Cart</Link></li>
                </ul>
            </div>
        </div>
    );
}

export default Header