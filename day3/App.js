import React from "react";
import ReactDOM from "react-dom/client"
import icon from "./React-icon.png"
import user from "./user.png"

/*const heading3 = React.createElement("h3",{
    className:"title",
    key:"h3"
},"Heading 3");
const heading2 = React.createElement("h2",{
    className:"title",
    key:"h2"
},"Heading 2");
const heading1 = React.createElement("h1",{
    className:"title",
    key:"h1"
},"Heading 1");
const divContainer = React.createElement("div",{
    className:"title"
},[heading1,heading2,heading3]);*/

const heading1 = <h1>Heading 1</h1>;
const heading2 = <h2>Heading 2</h2>;
const heading3 = <h3>Heading 3</h3>;

const Logo = () => {
    return (
        <div className="flex-item">
        <img width='100px' src={icon} />
        <div>This is logo area</div>
        </div>
    );
}

const SearchBar = () => {
    return (
        <div className="flex-item">
        <div>This is search bar area</div>
        </div>
    );
}

const Usericon = () => {
    return (
        <div className="flex-item">
            <img src={user} width='100px;'/>
            <div>This is Usericon area</div>
        </div>
    );
}

const Container = () => {
    return(
        <div>
            {heading1}
            {heading2}
            {heading3}
            <div className="flex-container">
                <Logo />
                <SearchBar />
                <Usericon />
            </div>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Container />);
