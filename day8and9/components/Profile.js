import { useEffect, useState } from "react";

const Profile = (props) => {
    const [count,setCount] = useState(0);
    const [count2, setCount2] = useState(0);
    useEffect(()=>{

    },[count,count2])
    return(
        <div>
            <h2>Profile Component of {props.name}</h2>
            <p>Count: {count}</p>
            <p>Count: {count2}</p>
            <button onClick={()=>{
                setCount(1);
                setCount2(2);
            }}>Set Count</button>
        </div>
    )
}

export default Profile;