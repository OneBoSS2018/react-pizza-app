import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import {MainPage} from "../mainPage/mainPage";
import FullMenu from "../full menu/fullMenu";


function Routes() {
    return (
        <Router>
            <Switch>
                <Route path="/menu">
                    <FullMenu />
                </Route>
                <Route path="/" exact>
                    <MainPage />
                </Route>
            </Switch>
        </Router>
    );
}

export default Routes