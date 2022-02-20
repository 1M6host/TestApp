import React from 'react';
import { Text, TextInput, View } from 'react-native';
import { styles } from '../Styles';

const TextInputView = (props) => (
    <View style={styles.inputViewStyles}>
        <View style={{ paddingTop: 10, paddingBottom: 5 }}>
            {
                props.title && <Text style={[styles.text_title, styles.inputTextStyles]} >
                    {props.title}
                </Text>
            }
            <TextInput
                style={styles.inputView}
                secureTextEntry={props.password}
                value={props.valueProp}
                onChangeText={props.onChangeProp}
            />
        </View>

    </View>
);

export default TextInputView;
