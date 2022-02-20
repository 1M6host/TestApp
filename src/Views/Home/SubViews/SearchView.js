import React from 'react';
import { Text, TextInput, View } from 'react-native';
import { Colors } from '../../../Constants/Colors';
import { SHeight, styles, SWidth } from '../../../Styles';

const SearchView = (props) => {
    return (
        <View style={styles.searchViewStyles}>
            <TextInput
                style={styles.text_normal}
                placeholder={"What are you looking for?"}
                placeholderTextColor={Colors.grey}
            />
        </View>
    )
};

export default SearchView;
