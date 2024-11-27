import { Link } from "react-router-dom"

function NotFoundPage(){
    return(
        <>
            <div className="container">
                <p className="mt-4 mb-5"><span className="notfound_span">Home /</span> 404Error</p>
            </div>
            <div className="notfound container">
                <h1>404 Not Found</h1>
                <p>Your visited page not found. You may go home page.</p>
                <Link to={"/"}><button className="not_found_btn">Back to home page</button></Link>
            </div>
        </>
    )
}

export default NotFoundPage