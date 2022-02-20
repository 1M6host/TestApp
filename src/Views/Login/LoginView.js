import React from 'react';
import { View } from 'react-native';
import TextView from '../../Components/TextView';
import { styles } from '../../Styles';
import LoginInputView from './LoginInputView';

const LoginView = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.container_Center_Vertical}>
                <TextView title={"Segwitz Test App"} style={styles.AppLoginHeader} />
            </View>
            <View style={{ flex: 2.5 }}>
                <LoginInputView restartApp={() => props.restart()} />
            </View>
        </View>

    )
}

export default LoginView;
