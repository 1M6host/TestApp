import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { connect, useDispatch } from 'react-redux';
import { login } from '../../app/actions';
import ButtonView from '../../Components/ButtonView';
import TextInputView from '../../Components/TextInputView';
import { Validate } from '../../Constants/Validations';
import { styles } from '../../Styles';

const LoginInputView = (props) => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const dispatcher = useDispatch()

    const onLoginClick = () => {
        if (Validate.checkText("ID", email) && Validate.checkText("Password", password)) {
            props.restartApp()
            dispatcher(login({ "email": email, "password": password }))
        }
    }

    return (
        <View style={styles.TextInputContainer}>
            <TextInputView
                title={"ID"}
                valueProp={email}
                onChangeProp={(text) => setEmail(text)}
            />
            <TextInputView
                title={"Password"}
                valueProp={password}
                onChangeProp={(text) => setPassword(text)}
                password
            />
            <ButtonView
                title={"Login"}
                onPressProp={() => onLoginClick()}
            />
        </View>
    );
}

export default LoginInputView;
