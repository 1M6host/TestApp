import React from 'react';
import { View } from 'react-native';
import { Colors } from '../../../Constants/Colors';
import { SHeight, SWidth } from '../../../Styles';
import OptionsListView from './OptionsListView';
import SearchView from './SearchView';
const listData = [
    { id: 0, title: "Hotel" },
    { id: 1, title: "Tour" },
    { id: 2, title: "Car" },
    { id: 3, title: "Flight" },
    { id: 4, title: "Cruise" },
    { id: 5, title: "Bus" },
    { id: 6, title: "Event" },
    { id: 7, title: "More" },
]
const OptionsView = (props) => {
    return (
        <View style={{ backgroundColor: Colors.white, marginHorizontal: SWidth(5), marginVertical: SHeight(1), borderRadius: SWidth(1), elevation: 5, flexGrow: 1 }}>
            <SearchView />
            <OptionsListView listData={listData} />
        </View>
    )
};

export default OptionsView;
