import React, { Component } from 'react';
import { View, Text, KeyboardAvoidingView, Image, ImageBackground, TouchableOpacity } from 'react-native';
import ButtonView from '../../Components/ButtonView';
import TextView from '../../Components/TextView';
import { Colors } from '../../Constants/Colors';
import { styles } from '../../Styles';
import LoginView from '../../Views/Login/LoginView';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    restartApp = () => {
        this.props.navigation.replace("Splash")
    }

    backPress = () => {
        this.props.navigation.goBack()
    }

    render() {
        return (
            <ImageBackground
                style={[{ flex: 1, resizeMode: 'stretch' }]}
                source={require("../../Assets/background.gif")}
            >
                <TouchableOpacity onPress={() => this.backPress()} style={{ padding: 20 }}>
                    <Image
                        source={{ uri: "https://cdn.iconscout.com/icon/free/png-256/back-arrow-1780575-1514451.png" }}
                        style={{ height: 30, aspectRatio: 1, tintColor: Colors.white }}
                    />
                </TouchableOpacity>
                <KeyboardAvoidingView style={styles.container_Center_Vertical}>
                    <LoginView restart={() => this.restartApp()} />
                </KeyboardAvoidingView>

            </ImageBackground>

        );
    }
}

export default Login;
