import React, {Component} from 'react';
import {AppRegistry,Text} from 'react-native';

class HelloWorldApp extends Component {
    render() {
        return (<Text>Hlo Word!!</Text>);
    }
}

class Blink extends Component{
    constructor(props){
        super(props);
        this.state = {showText: true};

        setInterval(() => {
            this.setState({showText: !this.state.showText});
        }, 1000);
    }

    render() {
        let display = this.state.showText ? this.props.text : '';
        return(
            <Text>{display}</Text>
        );
    }
}

export default HelloWorldApp;