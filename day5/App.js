import React from "react";
import ReactDOM from "react-dom/client"
import Header from "./components/Header"
import Body from "./components/Body"
import Footer from "./components/Footer"

const AppLayout = () => {
    return (
        /*
        - Header
            - Logo (Title)
            - Nav Items (right side)
            - Cart
        - Body
            - Search Bar
            - Restaurant List
                - Restaurant Card (many)
                    - Image
                    - Description
                    - Rating
                    - Cusines
        - Footer
            - Links
            - CopyRight
        */
        <>
            <Header />
            <Body />
            <Footer />
        </>
        
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);
