import { Outlet } from "react-router-dom";
import Profile from "./ProfileClass";
import ProfileFunctional from './Profile';
import React from "react";
import {Component} from "react";

class About extends Component {
    constructor(props) {
        super(props);
        
        console.log("Parent Constructor")
    }
    componentDidMount() {
        console.log("Parent Comp Did Mount");
    }
    render() {
        console.log("Parent Render");
        return(
            <div>
                <h1>About Us</h1>
                <p>This is Namaste React</p>
                <Profile name="Sithara" />
                <ProfileFunctional name="Sithara"/>
            </div>
        )
    }
}
export default About;