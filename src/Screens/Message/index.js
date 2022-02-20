import React, { Component } from 'react';
import { View, Text } from 'react-native';
import MessageView from '../../Views/Home/MessageView';

class Message extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <MessageView />
        );
    }
}

export default Message;
