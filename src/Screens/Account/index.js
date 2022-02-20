import React, { Component } from 'react';
import { View, Text } from 'react-native';
import AccountView from '../../Views/Home/AccountView';
import BookingView from '../../Views/Home/BookingView';

class Account extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }


    logout = () => {
        this.props.navigation.replace("Splash")
    }

    render() {
        return (
            <AccountView logoutProp={() => this.logout()} />
        );
    }
}

export default Account;
