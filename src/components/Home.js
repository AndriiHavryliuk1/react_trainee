import React from "react";

export class Home extends React.Component {
    constructor(props) {
        super();
        this.state = { 
            user: props.user,
            status: 0,
            homeLink: props.initialLinkName
        }
        setTimeout(() => {
            this.setState({
                status: 1
            })
        }, 3000);
        console.log("constructor");
    }

    componentWillMount() {
        console.log("Conponent will mount");
    }

    componentDidMount() {
        console.log("Component did mount");
    }

    componentWillReceiveProps() {
        console.log("Component will recieve proprs");
    }

    shouldComponentUpdate() {
        console.log("Should component update");
        return true;
    }

    componentWillUpdate(nextProps, nextState) {
        console.log("Component will update: ", nextProps, nextState);
    }

    componentDidUpdate(previousProps, previousState) {
        console.log("Component did update: ", previousProps, previousState);
    }

    componentWillUnmount() {
        console.log("component will unmount");
    }

    onMakeOlder() {
        let user = Object.assign({}, this.state.user);
        user.age +=3;
        this.setState({user: user});
    }
    onChangeLink() {
        this.props.onChangeLink(this.state.homeLink);
    }
    onChangeHandler(event) {
        this.setState({
            homeLink: event.target.value
        })
    }
    render() {
        return (
            <div>
                <p>In a new Component! {this.props.name}</p>
                <p>User name: {this.state.user.name}</p>
                <p>User age: {this.state.user.age}</p>
                <p>Status: {this.state.status}</p>
                <button onClick={this.onMakeOlder.bind(this)}>Increase age</button>
                <div><span>Marks:</span>
                    <ul>
                        {this.state.user.marks.map((mark, i) => <li key={i}><span>{mark}</span></li>)}
                        
                    </ul>
                </div>
                <button onClick={this.props.onGreet}>Greet</button>
                <hr/>
                <input type="text" value={this.state.homeLink} onChange={this.onChangeHandler.bind(this)}/>
                <button onClick={this.onChangeLink.bind(this)} className="btn btn-primary">Change Link</button>
            </div>
        )
    }
}

