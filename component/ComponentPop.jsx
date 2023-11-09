import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

export const ComponentPop = () => {
  return (
    <View style={styles.container}>
        <Image source={require('../img/Checkmark-green.png')} />
        <Text style={{width:'80%',textAlign:'center',color:'black',fontFamily:'Inter-Regular',marginBottom:15}}>Your account  has been created successfully</Text>
    </View>
  )
}
const styles = StyleSheet.create({
    container:{
        width:'93%',
        borderRadius:7,
        padding:10,
        alignSelf:'center',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'white',
        marginTop:155,
        shadowColor: 'white',
        shadowOffset: {
          width: 10,
          height: 20,
        },
        shadowOpacity: 10,
        shadowRadius: 40,
        elevation: 10,
    }
})