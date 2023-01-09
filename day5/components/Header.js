import food from "../food.png";
import {Title} from "./Title"

const styleObj = {
    backgroundColor:"red"
}
const Header = () => {
    return(
        <div style={styleObj} className="header">
            <a href="#">
                <img src ={food} className="logo"/>
            </a>
            <Title />
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
}

export default Header