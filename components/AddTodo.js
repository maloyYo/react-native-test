import React, {useState} from "react";
import { Alert, Button, StyleSheet, TextInput, View } from "react-native";



export const AddTodo = (props) =>{

    const [value,setValue] = useState('')

    const pressHandler = () =>{
        if (value.trim()){
            props.onSubmit(value)
            setValue('')
        }else{    
         Alert.alert('Вы не ввелли задачу')
        }
    }
    return(
        <View style={styles.block}>
            <TextInput 
                style={styles.input} 
                onChangeText={setValue}
                value={value}
                placeholder="Введите дело"
                autoCorrect={false}
                
            />
            <Button title='Добавить' onPress={pressHandler}/>
        </View>
    )
}

const styles = StyleSheet.create({
    block:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginBottom:15
    },
    input:{
        width:'70%',
        borderStyle:'solid',
        borderBottomWidth:2,
        borderBottomColor:'#3949ab',
        padding:10,
    }
})