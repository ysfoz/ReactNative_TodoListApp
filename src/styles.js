import {Dimensions, StyleSheet, TouchableWithoutFeedback} from 'react-native';

color = '#ff9b31' // yukarda color i degiskene tanimladim altta sadece color yazip virgul kooydum
//degiskene atanarakta kullanilabilir

/**
 * #303e45
 * #a7b6bd
 * #4a636e
 * #ff9b31
 */

const main = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#303e45'
    },
    banner:{
        flexDirection:'row',
        justifyContent:'space-between',
        padding:10,
        alignItems:'center'
        
        
    },
    todoText:{
        fontSize:45,
        fontWeight:'bold',
        color,
    },
    todoCount:{
        fontSize:35,
        color,
    },
})

const todo_input = StyleSheet.create({
    inputContainer:{
        backgroundColor:'#e0e0e0',
        padding:10,
        margin:10,
        borderRadius:10,

    },
    container:{
       backgroundColor:'#a7b6bd' ,
       padding:10,
       margin:10,
       borderRadius:5,
    },
    buttonContainer:{
        backgroundColor:'#4a636e',
        padding:10,
        margin:10,
        width:Dimensions.get('window').width / 2.5,
        alignSelf:'center',
        borderRadius:8
    },
    buttonText:{
        color: 'white',
        fontWeight:'bold',
        textAlign:'center'
    }
    
})

const todocard = StyleSheet.create({
    container:{
        backgroundColor:'#a7b6bd',
        padding:8,
        margin:5,
        borderRadius:7
    },
    text:{
        fontSize:18
    }
})
export {main,todo_input,todocard};
