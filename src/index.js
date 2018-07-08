import React from 'react';
import ReactDom from 'react-dom';

import { Home } from './components/Home';
import { Header } from './components/Header';

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            homeLink: "Home",
            homeMounted: true
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
    onChangeHomeMounted() {
        this.setState({
            homeMounted: !this.state.homeMounted
        })
    }
    render() {
        let user = {
            name: "Bob",
            age: 27,
            marks: [2,3,4,1,14]
        }
        let homeComp = "";
        if (this.state.homeMounted) {
            homeComp = (
                <Home 
                            name={"First App"} 
                            user={user} 
                            onGreet={this.onGreet} 
                            onChangeLink={this.onChangeLinkName.bind(this)}
                            initialLinkName={this.state.homeLink}/>
            )
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
                        {homeComp}
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-10 xol-xs-offset-1">
                        <button onClick={this.onChangeHomeMounted.bind(this)} className="btn btn-primary">(Un)Mount Home component</button>
                    </div>
                </div>
            </div>
         )
    }
}

ReactDom.render(<App />, document.getElementById("app"));