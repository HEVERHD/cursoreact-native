import { View, Text, TouchableOpacity, StyleSheet, TouchableNativeFeedback, Platform } from 'react-native';
import React from 'react'


interface Props {
    title : string
    position?:'br' | 'bl'
    onPress: () => void;
}

const Fab = ( {title , onPress, position = 'br' }: Props) => {


  const ios = () => {

    return (
      <TouchableOpacity 
        activeOpacity={ 0.75 }
        style={ [styles.fabLocation,
        (position === 'bl') ? styles.left : styles.rigth,
      ] }>

      <View style={ styles.fab }>
       <Text style={ styles.fabText }> { title } </Text>
      </View>

      </TouchableOpacity>
    );
  };



  const android = () => {
    return (
      <View style={ [styles.fabLocation,
        (position === 'bl') ? styles.left : styles.rigth,
      ] }>
      <TouchableNativeFeedback 
          background={TouchableNativeFeedback.Ripple('#413fa6', true, 30)}
          onPress={onPress}
    >
      <View style={ styles.fab }>
       <Text style={ styles.fabText }> { title } </Text>
      </View>
    </TouchableNativeFeedback>
      </View>
    );
  };


  return (Platform.OS === 'ios') ? ios() : android();
}


const styles = StyleSheet.create({

    fabLocation:{
        position: 'absolute',
        bottom: 25,
      },
      rigth:{
        right: 25,
      },
      left:{
        left: 25,
      },
      fab: {
        backgroundColor : '#5856D6',
        width :60,
        height : 60,
        borderRadius: 100,
        justifyContent: 'center',
        shadowColor:' #000',
        shadowOffset: {
          width: 0,
          height: 6,
        },
        shadowOpacity: 0.39,
        shadowRadius: 8.30,

        elevation: 5,
      },
      fabText: {
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
        alignSelf: 'center',
      },
});




export default Fab;
