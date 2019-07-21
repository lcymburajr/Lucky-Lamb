import React, { Component } from 'react';
import Home from './Home';
import Privacy from './Privacy';
import { BrowserRouter, Route } from 'react-router-dom';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Route exact={true} path='/' render={() => (
                        <div className="App">
                            <Home />
                        </div>
                    )} />
                    <Route exact={true} path='/privacy' render={() => (
                        <div className="App">
                            <Privacy />
                        </div>
                    )} />
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
