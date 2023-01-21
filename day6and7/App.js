import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import {createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";

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
            <Outlet />
            <Footer />
        </>
        
    )
}

const appRouter = createBrowserRouter([
    {
         path: "/",
         element : <AppLayout />,
         errorElement : <Error />,
         children : [
            {
                path : "/about",
                element: <About />,
            },
            {
                path : "/",
                element: <Body />,
            },
            {
                path : "/contact",
                element: <Contact />,
            },
            {
                path : "/restaurant/:id",
                element: <RestaurantMenu />,
            }
         ]
    }
 ])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);
