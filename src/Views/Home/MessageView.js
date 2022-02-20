import React from 'react';
import { Text, View } from 'react-native';
import { styles } from '../../Styles';

const MessageView = (props) => {
   
    return (
        <View style={styles.container}>
            <Text style={styles.text_H1}> Messages </Text>
            <View style={styles.container_Center_All}>
                <Text style={styles.text_title}> is Pending ... </Text>
            </View>
        </View>
    )
};

export default MessageView;
