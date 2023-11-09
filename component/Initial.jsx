import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import LinearGradient from "react-native-linear-gradient";

export const Initial = () => {
  return (
    <LinearGradient colors={["#1253AA", "#05243E"]} style={{ flex: 1 ,justifyContent:'space-around'}}>
      <View style={styles.container} >
      <Image source={require("../img/Checkmark.png")} style={styles.img} />
      
      <Text style={styles.text} >DO IT</Text>
      </View>
      <Text style={styles.version} >v 1.0.0</Text>
    </LinearGradient>
  )
}
const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  img: {
    width: 100,
    height: 100,
    margin: "auto",
  },
  text:{
    color:'#FFF',
    textAlign:'center',
    fontSize: 36,
    fontWeight:'400',
    fontFamily:'DarumadropOne-Regular',
    // lineHeight:0.
    // lineHeight:'normal'
  },
  version:{
    color:'#FFF',
    textAlign:'center',
    fontSize: 12,
    fontFamily:'Darumadrop One',
    fontWeight:'400',
  }
});