import './App.css';
import {Redirect, Route, Switch} from "react-router-dom";
import React from "react";
import Navbar from "./components/Navbar/Navbar";
import FAQ from "./components/FAQ/FAQ.";
import NotesContainer from "./components/Notes/NotesConteiner";

const App = () => {

    return (
        <div className="app-wrapper">
            <Navbar/>
            <div className="app-wrapper-content">
                <Switch>
                    <Route exact path='/' render={() => <Redirect to={'/notes'}/>}/>
                    <Route exact path='/notes' render={() => <NotesContainer />}/>
                    <Route path='/faq' render={() => <FAQ/>}/>
                </Switch>
            </div>
        </div>
    );
}

export default App;
