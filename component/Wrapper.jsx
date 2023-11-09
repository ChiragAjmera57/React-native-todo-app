import React from 'react'
import { StyleSheet, View } from 'react-native'

export const Wrapper = ({ children }) => {
  return (
    <View style={styles.container}>
        {children}
    </View>
  )
}
const styles = StyleSheet.create({
    container:{
      maxWidth: 330, // Set the maximum width as per your requirement
      alignSelf: 'center', // Center the content horizontally
      width: '100%', // Take up the available width
      
    }
})
