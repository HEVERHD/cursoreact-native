import { View, Text, StyleSheet } from 'react-native';
import React from 'react'

const BoxObjectModelScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>BoxObjectModelSreen</Text>
    </View>
  );
};


const styles = StyleSheet.create({
    container :{
      flex: 1,
      backgroundColor: 'red',
    },
    title: {
      padding: 50,
      fontSize: 20,
      borderWidth: 10,
    },
});


export default BoxObjectModelScreen;
