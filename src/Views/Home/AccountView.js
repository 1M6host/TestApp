import React from 'react';
import { Text, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { logout } from '../../app/actions';
import ButtonView from '../../Components/ButtonView';
import { styles } from '../../Styles';

const AccountView = (props) => {
    const dispatcher = useDispatch()

    const logoutfUN = () => {
        dispatcher(logout())
        props.logoutProp()
    }

    return (
        <View style={styles.container}>
            <Text style={styles.text_H1}> Account </Text>
            <View style={styles.container_Center_All}>
                <Text style={styles.text_title}> is Pending ... </Text>
            </View>
            <ButtonView title={"Logout"} onPressProp={logoutfUN} />

        </View>
    )
};

export default AccountView;
