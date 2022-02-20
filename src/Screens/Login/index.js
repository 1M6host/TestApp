import React, { Component } from 'react';
import { View, Text, ImageBackground } from 'react-native';
import ButtonView from '../../Components/ButtonView';
import LandingView from '../../Views/Login/LandingView';

class LandingPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    navigateLogin = () => {
        this.props.navigation.navigate("Login")
    }

    loginWithFacebook = (res) => {
        this.props.dispatch(login({ "email": res.email, "password": res.name }))
        this.props.navigation.navigate("HomeNav")
    }

    render() {
        return (
            <ImageBackground
                style={[{ flex: 1, resizeMode: 'stretch' }]}
                source={require("../../Assets/background.gif")}
            >
                <LandingView
                    navigateLoginProps={() => this.navigateLogin()}
                    navigateLoginFacebookProps={(res) => this.loginWithFacebook(res)}
                />
            </ImageBackground>

        );
    }
}

export default LandingPage;
