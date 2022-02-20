import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { styles } from '../../Styles';
import HomeView from '../../Views/Home/HomeView';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }


    render() {
        return (
            <HomeView />
        );
    }
}

export default Home;
