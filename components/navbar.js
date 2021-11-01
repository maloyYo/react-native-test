import React from "react";
import { View,Text,StyleSheet } from "react-native";


export const Navbar = (props) =>{
    return (
        <View style={styles.navbar}>
            <Text style={styles.text}>{props.title} </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    navbar:{
        height:70,
        backgroundColor:'#000',
        justifyContent:'flex-end',
        paddingBottom:10,
        alignItems:'center',
    },
    text:{
        color:'#fff',
        fontSize:20,
    },
})