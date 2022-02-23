import { Link } from "react-router-dom";
export function Nav(props)
{
    return (
        <>
            <div id="page-button-custer">
                <h1>header here</h1>
                <Link to={`./`}>Home</Link>
                <Link to={`./`}>Events</Link>
                <Link to={`./`}>Media</Link>
                <Link to={`./`}>Contact</Link>
            </div>
        </>
    );
}