import React, { Component } from 'react';
import { View, Text } from 'react-native';
import BookingView from '../../Views/Home/BookingView';

class Booking extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <BookingView />
        );
    }
}

export default Booking;
