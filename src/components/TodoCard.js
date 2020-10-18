import React from 'react'
import { View, Text } from 'react-native'
import { todocard } from '.'
export {todocard} from '../styles'

const TodoCard = (props) => {
    return (
        <View style={todocard.container}>
            <Text style={todocard.container}style={todocard.container}>{props.data.todo}</Text>
        </View>
    )
}

export  { TodoCard } 
