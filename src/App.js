// import React, {useState} from 'react';
import { Switch, Route} from 'react-router-dom';
import './App.css';
import TopMenu from "./Pages/TopMenu";
import HomePage from "./Pages/HomePage";
import LoginPage from "./Pages/LoginPage";
import BlogPosts from "./Pages/BlogPosts";
import BlogView from "./Pages/BlogView";

function App() {
    // We houden in de state bij of iemand is "ingelogd" (simpele versie)
    // const [isAuthenticated, toggleIsAuthenticated] = useState(false);

    return (
        <div>
            <TopMenu />
            <Switch>
                <Route exact path="/"> <HomePage/></Route>
                <Route path="/login"><LoginPage/></Route>
                <Route path="/blogposts"><BlogView/></Route>
                <Route path="/blogposts/:blogId"><BlogPosts/></Route>
            </Switch>

        </div>
    );
}

export default App;
