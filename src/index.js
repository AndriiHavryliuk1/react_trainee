import React from 'react';
import ReactDom from 'react-dom';

import { Home } from './components/Home';
import { Header } from './components/Header';

class App extends React.Component {
    render() {
         return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-10 xol-xs-offset-1">
                        <Header/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-10 xol-xs-offset-1">
                        <Home/>
                    </div>
                </div>
            </div>
         )
    }
}

ReactDom.render(<App />, document.getElementById("app"));


