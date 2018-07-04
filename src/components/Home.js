import React from "react";

export class Home extends React.Component {
    constructor(props) {
        super();
        this.state = { 
            user: props.user,
            status: 0
        }
        setTimeout(() => {
            this.setState({
                status: 1
            })
        }, 3000)
    }
    onMakeOlder() {
        let user = Object.assign({}, this.state.user);
        user.age +=3;
        this.setState({user: user});
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
            </div>
        )
    }
}

