import React from 'react';
import { FlatList, Text, View } from 'react-native';
import OptionsItemView from './OptionsItemView';

const OptionsListView = (props) => {
    return (
        <FlatList
            data={props.listData}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={({ item, index }) => String(index)}
            contentContainerStyle={{ flexDirection: 'row', flexWrap: 'wrap', flex: 1 }}
            renderItem={({ item }) => {
                return (
                    <OptionsItemView title={item.title} />
                )
            }}
        />
    )
}

export default OptionsListView;
