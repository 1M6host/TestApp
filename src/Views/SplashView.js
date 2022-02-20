import React, { useEffect } from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import { styles } from '../Styles';

function SplashView() {
    return (
        <SafeAreaView style={styles.container_Center_All}>
            <Text style={styles.text_H1}>SegWitz Test</Text>
        </SafeAreaView>
    );
}


export default SplashView;
