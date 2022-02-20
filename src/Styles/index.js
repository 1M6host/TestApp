import { Dimensions, StyleSheet } from "react-native";
import { Colors } from "../Constants/Colors";
import { Fontsize } from "../Constants/Fontsize";
import { FontWeight } from "../Constants/FontWeights";

export const SHeight = (percentage) => { return Math.round((percentage * Dimensions.get("screen").height) / 100) }
export const SWidth = (percentage) => { return Math.round((percentage * Dimensions.get("screen").width) / 100) }

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white
    },
    container_Center_Vertical: {
        flex: 1,
        justifyContent: 'center',
    },
    container_Center_All: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.white
    },
    AppLoginHeader: {
        color: Colors.white,
        fontSize: Fontsize.LoginHeader,
        fontWeight: FontWeight.bold,
        alignSelf: 'center',
        marginBottom: SHeight(5)
    },
    text_H1: {
        color: Colors.black,
        fontSize: Fontsize.H1,
        fontWeight: FontWeight.bold
    },
    text_normal: {
        color: Colors.black,
        fontSize: Fontsize.normal,
        fontWeight: FontWeight.normal
    },
    text_title: {
        color: Colors.grey,
        fontSize: Fontsize.title,
        fontWeight: FontWeight.normal
    },
    TextInputContainer: {
        marginHorizontal: SWidth(5),
        marginVertical: SHeight(2),
        paddingHorizontal: SWidth(2.5),
        paddingVertical: SHeight(2),
        borderWidth: StyleSheet.hairlineWidth,
        backgroundColor: Colors.white,
        borderRadius: SWidth(2),
        overflow: 'hidden',
        elevation: 10,
    },
    inputViewStyles: {
        marginVertical: SHeight(1),
        backgroundColor: Colors.white,
        overflow: 'hidden',
    },
    inputView: {
        borderWidth: StyleSheet.hairlineWidth,
        borderRadius: SWidth(2),
        height: 55,
        overflow: 'hidden',
        color: Colors.black,
        paddingHorizontal: SWidth(2.5),
        marginHorizontal: SWidth(5),
        backgroundColor: Colors.white
    },
    inputTextStyles: {
        position: 'absolute',
        top: 0,
        left: SWidth(10),
        zIndex: 10,
        backgroundColor: Colors.white,
        paddingHorizontal: SWidth(1)

    },
    buttonViewContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'red',
        height: SHeight(6),
        marginVertical: SHeight(2),
        marginHorizontal: SWidth(5),
        borderRadius: SWidth(2),
    },
    buttonView: {
        color: Colors.white,
        fontSize: Fontsize.button,
        fontWeight: FontWeight.bold
    },
    searchViewStyles: {
        height: SHeight(6),
        flex: 1,
        backgroundColor: Colors.lightgrey,
        marginHorizontal: SWidth(5),
        marginVertical: SHeight(1),
        justifyContent: 'center',
        paddingHorizontal: SWidth(5),
        borderRadius:SWidth(1)
    }
})