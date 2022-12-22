import { View, Text, StyleSheet } from 'react-native';
import React from 'react'

export default function TareasScreen() {
  return (
    <View style={styles.container}>
        <View style={styles.cajaMorada} />
        <View style={styles.cajaNaranja} />
        <View style={styles.cajaAzul} />
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:'#28425B',
    },
    cajaMorada:{
        width:100,
        height:100,
        borderWidth:10,
        borderColor:'white',
        backgroundColor:'#5856D6',
    },
    cajaNaranja:{
        width:100,
        height:'74%',
        borderWidth:10,
        borderColor:'white',
        backgroundColor:'#F0A23B',
        alignSelf:'stretch',
    },
    cajaAzul:{
        width:100,
        height:100,
        borderWidth:10,
        borderColor:'white',
        backgroundColor:'#28C4D9',
    },
});