import React from 'react';
import { Image, Text, View } from 'react-native';
import ButtonView from '../../Components/ButtonView';
import { Colors } from '../../Constants/Colors';
import { fbLoginManager } from '../../Constants/LoginManager';
import { SHeight, styles, SWidth } from '../../Styles';

const LandingView = (props) => {
    return (
        <View style={styles.container_Center_Vertical}>
            <View style={styles.TextInputContainer}>
                <Image
                    source={require("../../Assets/loginImage.png")}
                    style={{ height: SHeight(25), aspectRatio: 1, alignSelf: 'center', marginVertical: SHeight(2.5), borderWidth: SHeight(1), borderColor: Colors.lightgrey, borderRadius: SWidth(50), }}
                />
                <ButtonView title={"Login With Facebook"} color={Colors.fbBlue} onPressProp={() => {
                    fbLoginManager().then(res => {
                        // console.log("fbLoginManager:----- ", res);
                        //{"id":"141369681697380","email":"samsungtest2706@gmail.com","name":"Samtest Sungtest"}
                        res && props.navigateLoginFacebookProps(res)
                    })


                }} />
                <ButtonView title={"Login with ID"} onPressProp={props.navigateLoginProps} />

            </View>
        </View>
    )
};

export default LandingView;
