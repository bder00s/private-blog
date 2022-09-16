import React from "react";
import {NavLink} from "react-router-dom";


function TopMenu() {
    return (
        <div >
            <nav>
                <ul className="navBar">
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/login">Login pagina</NavLink></li>
                    <li><NavLink to="/blogposts">Blog Overview</NavLink></li>
                    <li><NavLink to="/blogposts/blogId:">Blogposts</NavLink></li>
                </ul>
            </nav>
        </div>
    )
}

export default TopMenu