import {useRouteError} from "react-router-dom";

const Error = () => {
    const err = useRouteError;
    return (
        <>
        <h2>Opps, Something went wrong</h2>
        <p>{err.status}</p>
        <p>{err.statusText}</p>
        </>
    )
}

export default Error;