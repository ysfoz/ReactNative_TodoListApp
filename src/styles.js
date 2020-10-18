import {StyleSheet} from 'react-native';

color = '#ff9b31' // yukarda color i degiskene tanimladim altta sadece color yazip virgul kooydum
//degiskene atanarakta kullanilabilir

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

export default main;
