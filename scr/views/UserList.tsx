import React from 'react'
import { View, Text, FlatList, Alert } from 'react-native'
import { Avatar, ListItem, Button, Icon } from 'react-native-elements'
import users from './data/users'

export default props => {

    function confirmUserDeletion(user) {
        Alert.alert('Excluir usuário', 'Deseja excluir o usuário', [
            {
                text: 'Sim',
                onPress() {
                    console.warn('Delete '+ user.name)
                }
            },
            {
                text: 'Não'
            }
        ])
    }

    function getActions(user) {
        return (
            <>            
                <Button
                    onPress={() => props.navigation.navigate('UserForm', user)}
                    type="clear"
                    icon={<Icon name="edit" size={25} color="orange" />}
                />
                <Button
                    onPress={() => confirmUserDeletion(user)}
                    type="clear"
                    icon={<Icon name="delete" size={25} color="red" />}
                />

            </>
        )
    }

    function getUserItem({ item }) {
        return (
            <ListItem
                bottomDivider                
                onPress={() => props.navigation.navigate('UserForm')}   
                //rightElement={getActions(item)} deprecate element
            >
                <Avatar title={item.name[0]} source={item.avatarUrl && { uri: item.avatarUrl }} />
                <ListItem.Content>
                    <ListItem.Title>{item.name}</ListItem.Title>
                    <ListItem.Subtitle>{item.email}</ListItem.Subtitle>                    
                </ListItem.Content>
                
                <ListItem.Content right >                    
                    {getActions(item)}
                </ListItem.Content>
              
            </ListItem>
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