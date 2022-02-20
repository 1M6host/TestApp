import React from 'react';
import { Image, ScrollView, Text, View } from 'react-native';
import { SHeight, styles } from '../../Styles';
import OptionsView from './SubViews/OptionsView';
const HomeView = (props) => {

    return (
        <View style={styles.container}>
            <Image source={require("../../Assets/loginImage.png")} style={{ height: SHeight(22), position: "absolute", }} />
            <ScrollView style={{ paddingTop: SHeight(15) }}>
                <OptionsView />
            </ScrollView>
        </View>
    )
};

export default HomeView;
