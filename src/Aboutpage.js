import React from "react";
import { Link,Outlet } from "react-router-dom";


const Aboutpage = () => {
    return(
        <div>
            <h2> Welcome to the Aboutpage</h2>
            <ul>
                <li><Link to="contentdetails1">Contentdetails1</Link></li>
                <li><Link to="contentdetails2">Contentdetails2</Link></li>
                <li><Link to="contentdetails3">Contentdetails3</Link></li>
            </ul>
            <Outlet/>
        </div>   
    );
}

export default Aboutpage;