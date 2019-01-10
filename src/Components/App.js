import React from 'react';
import {Route, Switch} from "react-router";
import '../App.css';
import {MDBBtn} from 'mdbreact'
// import {base} from '../base';
import Homepage from './Homepage';
import View from './ViewPage';
import ErrorPage from './ErrorPage';

class App extends React.Component {


    constructor(props) {
        super(props);

        this.increase = this.increase.bind(this);

        this.state = {
            clickCount: 1
        };
    }

    render() {
        return (
            <>
                <div className="card w-25 warning-color">
                        <div className="card-body" >
                            <h5 className="card-title">
                                Click Count: {this.state.clickCount}</h5>
                        </div>
                <MDBBtn color="orange" onClick={this.increase}>
                    increase
                </MDBBtn>
                </div>
                <Homepage/>
            </>
        )
    };

    increase() {
        this.setState({
            clickCount: this.state.clickCount + 1
        });
    }
};

export default App;
{/*<>*/
}
{/*aksdf;lkajsdf;ljk*/
}
{/*<Switch>*/
}
{/*<Route exact path='/view' component={View}/>*/
}
{/*<Route exact path='/' component={Homepage}/>*/
}
{/*<Route path='/' component={ErrorPage}/>*/
}
{/*</Switch>*/
}
{/*</>*/
}
