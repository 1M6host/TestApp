import React from 'react';
import { Text, View } from 'react-native';

const TextView = (props) => {
    return (
        <Text style={props.style}>{props.title}</Text>
    )
}

export default TextView;
