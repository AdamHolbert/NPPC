import React from 'react';
import {Route, Switch} from "react-router";
import '../App.css';
// import {base} from '../base';
import Homepage from './Homepage';
import View from './ViewPage';
import ErrorPage from './ErrorPage';

class App extends React.Component {
    render(){
        return(
            <>
                aksdf;lkajsdf;ljk
                <Switch>
                    <Route exact path='/view' component={View}/>
                    <Route exact path='/' component={Homepage}/>
                    <Route path='/' component={ErrorPage}/>
                </Switch>
            </>
        )
    };
};

export default App;
