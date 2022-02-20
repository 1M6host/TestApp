import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { login } from '../../app/actions';
import { getData } from '../../Constants/Utls';
import SplashView from '../../Views/SplashView';

class Splash extends Component {

    render() {
        return (
            <SplashView />
        );
    }

    async componentDidMount() {
        const loginData = await getData("loginCreds")
        setTimeout(() => {
            if (loginData?.email) {
                this.props.dispatch(login(loginData))
                this.props.navigation.replace("HomeNav")
            }
            else {
                this.props.navigation.replace("LoginNav")
            }
        }, 3000);
    }

}

const mapStateToProps = (state) => {
    return {
        loginCreds: state.Reducer ? state.Reducer : {}
    }
}

export default connect(mapStateToProps)(Splash);
