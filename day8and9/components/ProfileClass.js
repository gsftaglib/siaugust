import React from 'react';
import { Outlet } from 'react-router-dom';


class Profile extends React.Component {
    constructor(props) {
        super(props);
        // Create State
        this.state = {
            count: 10,
            count2: 100,
            userInfo : {
                name: "Dummy name",
                location: "Dummy location"
            }
        };
        console.log("Child Constructor")
    }

    async componentDidMount() {
        const data = await fetch("https://api.github.com/users/sitharaaugustine");
        const json = await data.json();
        console.log(json)
        this.setState({
            userInfo: json,
        })
        
        console.log("Child Comp Did Mount");
    }

    componentDidUpdate(prevProps,prevState) {
        if(this.state.count !== prevState.count ||
            this.state.count !== prevProps.count) {
                console.log("Child Comp Did Update");
        }

    }
    componentWillUnmount() {

    }
    render() {
        console.log("Child Render");
        return(
        <div>
            <h1>Profile Class Component of {this.props.name}</h1>
            <p>Name: {this.state.userInfo.login}</p>
            <p>Count: {this.state.count}</p>
            <p>Count2 {this.state.count2}</p>
            <button onClick={()=>{
                this.setState({
                    count:1,
                    count2:2,
                })
            }}>Set Count</button>
        </div>
        );
    }
} 

export default Profile;