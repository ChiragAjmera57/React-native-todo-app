import React from 'react'
import { Wrapper } from './Wrapper'
import { StyleSheet, Text, View } from 'react-native'
import { done, rightArrow } from '../assets/svgs'
import { SvgXml } from 'react-native-svg'

export const ScheduleCard2 = () => {
  return (
    <Wrapper >
    <View style={styles.ScheduleCard}>
    <View style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
        <SvgXml xml={done} />
    <View>
    <Text style={{color:'black',fontFamily:'Poppins-Medium',fontSize:16,marginLeft:10}}>Client meeting</Text>
    <Text style={{color:'rgba(0, 0, 0, 0.90)',fontSize:12,marginLeft:10}}>Tomorrow | 10:30pm</Text>
    </View>
    </View>
    <SvgXml style={{marginRight:20}} xml={rightArrow} />
    </View>
</Wrapper>
  )
}
const styles = StyleSheet.create({
    ScheduleCard:{
        padding:5,
        backgroundColor:'rgba(255, 255, 255, 0.9)',
        borderRadius:5,
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
      }
})