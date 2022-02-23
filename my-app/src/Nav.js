import { Link } from "react-router-dom";
export function Nav(props)
{
    return (
        <>
            <div id="page-button-cluster">
                <Link class="bar-button" to={`/`}>
                    <div class="bar-div">
                        <h4>Home</h4>
                    </div>
                </Link> 
                <Link class="bar-button" to={`./shows`}>
                    <div class="bar-div">
                        <h4>Shows</h4>
                    </div>
                </Link>
                {/*<Link to={`./`}>Media</Link>
                <Link to={`./`}>Contact</Link>*/}
            </div>
        </>
    );
}