
import React, {useState} from 'react';
import { SafeAreaView, Text, View,FlatList,KeyboardAvoidingView } from 'react-native';
import {main} from './styles'

import {TodoCard,TodoInput} from './components/index'

const Main = () => {

    const[list,setlist] =useState([])
    
    function addTodo(params) {
        const element = {
            id:list.length,
            todo: params,
            isDone:false
        }
        const newArray = [...list,element]
        // newArray.push(element) bu sekilde push etmek yerine spread yontemi ile yazdik
        
        setlist(newArray)
}
    const renderTodo = ({item}) => <TodoCard data ={item}/>
    return (
        <SafeAreaView style={main.container}>
            <KeyboardAvoidingView style={main.container} behavior='padding'>
                <View style={main.banner}>
                    <Text style={main.todoText}>TODO</Text>
    <Text style={main.todoCount}>{list.length}</Text>
                </View>
                <FlatList
                    data = {list}
                    renderItem={renderTodo}
                />

                    <TodoInput
                    onTodoEnter = {todoText => addTodo(todoText)}
                    />
                   
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}

export default Main;