import React, {useState} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import TopMenu from "./Components/TopMenu";
import HomePage from "./Components/HomePage";
import LoginPage from "./Components/LoginPage";
import BlogPosts from "./Components/BlogPosts";
import BlogView from "./Components/BlogView";

function App() {
    // We houden in de state bij of iemand is "ingelogd" (simpele versie)
    const [isAuthenticated, toggleIsAuthenticated] = useState(false);

    return (
        <div>
            <TopMenu/>
            <Switch>
                <Route path exact="/"> <HomePage/></Route>
                <Route path="/login"><LoginPage/></Route>
                <Route path="/blogposts"><BlogView/></Route>
                <Route path="/blogposts/blogId:"><BlogPosts/></Route>
            </Switch>
        </div>
    );
}

export default App;
