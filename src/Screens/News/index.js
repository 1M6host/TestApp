import React, { Component } from 'react';
import { View, Text } from 'react-native';
import NewsView from '../../Views/Home/NewsView';

class News extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <NewsView />
        );
    }
}

export default News;
