import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { SHeight, styles, SWidth } from '../../../Styles';

const OptionsItemView = (props) => {
    return (
        <TouchableOpacity style={{ alignItems: 'center', width: SWidth(22.5), padding: SWidth(2) }}>
            <Image
                source={require("../../../Assets/loginImage.png")}
                style={{ height: SHeight(5), aspectRatio: 1, marginVertical: SWidth(2), paddingVertical: SHeight(2), borderRadius: SWidth(10) }}
            />
            <Text style={styles.text_title}>
                {props.title}
            </Text>
        </TouchableOpacity>


    )
};

export default OptionsItemView;
