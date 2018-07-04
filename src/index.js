import React from 'react';
import ReactDom from 'react-dom';

import { Home } from './components/Home';
import { Header } from './components/Header';

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            homeLink: "Home"
        }
    }
    onGreet() {
        console.log("Hello");
    }
    onChangeLinkName(newName) {
        this.setState({
            homeLink: newName
        })
    }
    render() {
        let user = {
            name: "Bob",
            age: 27,
            marks: [2,3,4,1,14]
        }
        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-10 xol-xs-offset-1">
                        <Header homeLink={this.state.homeLink}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-10 xol-xs-offset-1">
                        <Home name={"First App"} user={user} onGreet={this.onGreet} onChangeLink={this.onChangeLinkName.bind(this)}/>
                    </div>
                </div>
            </div>
         )
    }
}

ReactDom.render(<App />, document.getElementById("app"));