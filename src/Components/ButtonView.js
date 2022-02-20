import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { Colors } from '../Constants/Colors';
import { styles } from '../Styles';

const ButtonView = (props) => {
    return (
        <TouchableOpacity
            onPress={props.onPressProp}
            style={[styles.buttonViewContainer, { backgroundColor: props.color ? props.color : Colors.orange }]}>
            <Text
                style={[styles.buttonView]}>
                {props.title}
            </Text>
        </TouchableOpacity>
    )
}


export default ButtonView;
