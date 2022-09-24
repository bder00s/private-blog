// import React, {useState} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import './App.css';
import TopMenu from "./Pages/TopMenu";
import HomePage from "./Pages/HomePage";
import LoginPage from "./Pages/LoginPage";
import BlogPosts from "./Pages/BlogPosts";
import BlogView from "./Pages/BlogView";
import {useState} from "react";

function App() {
    // We houden in de state bij of iemand is "ingelogd" (simpele versie)
    const [isAuthenticated, toggleIsAuthenticated] = useState(false);

    return (
        <div>
            <TopMenu />
            <Switch>
                <Route exact path="/"> <HomePage/></Route>
                <Route path="/login"><LoginPage/></Route>
                <Route path="/blogposts"><BlogView/>
                    {isAuthenticated ? <BlogView/> : <Redirect to="/login"/>}
                </Route>
                <Route path="/blogposts/:blogId"><BlogPosts/>
                    {isAuthenticated ? <BlogPosts/> : <Redirect to="/login"/>}
                </Route>
            </Switch>

        </div>
    );
}

export default App;
