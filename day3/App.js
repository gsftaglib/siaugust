import React from "react";
import ReactDOM from "react-dom/client"
import dice from "./dice.png"

const heading = (
    <h1>This is dcoument Header from JSX</h1>
);
const Header = () => {
    return (
        <div>
        {heading}
        <h2>Namaste React from Header Component</h2>
        <Body />
        <Footer />        
        </div>
    );
} 
const Body = () => {
    return (
        <div>
        <h2>This is document Body with a dice image below</h2>
        <img src={dice} alt="logo"/>
        </div>
    );
}
const Footer = () => {
    return (
        <div>
            <h1>
                This is document Footer
            </h1>
        </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Header />);
