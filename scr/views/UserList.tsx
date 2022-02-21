import React from 'react'
import { View, Text, FlatList } from 'react-native'
import { ListItem } from 'react-native-elements'
import users from './data/user'

export default props => {

    function getUserItem({ item: user }) {
        return (
            <ListItem
                leftAvatar={{ source: { uri: user.avatarUrl } }}
                key={user.id}
                title={user.name}
                subtitle={user.email}
                bottomDivider
            />
        )

    }

    return (
        <View>
            <FlatList
                keyExtractor={user => user.id.toString()}
                data={users}
                renderItem={getUserItem}
            />
        </View>
    )
}