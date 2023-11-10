import React from 'react'
import { Wrapper } from './Wrapper'
import { StyleSheet, Text, View } from 'react-native'
import { profile, rightArrow } from '../assets/svgs'
import { SvgXml } from 'react-native-svg'

export const ScheduleCard3 = ({title,svgLink}) => {
  return (
    
    <View style={styles.ScheduleCard}>
        <SvgXml xml={svgLink} />
    <View>
    <Text style={{fontFamily:'Poppins-Medium',fontSize:16,marginLeft:10}}>{title}</Text>
    </View>
    <SvgXml style={{marginLeft:'auto',marginRight:15}} xml={rightArrow} />
    </View>
  )
}
const styles = StyleSheet.create({
    ScheduleCard:{
        display:'flex',
        flexDirection:'row',
        padding:10,
        borderBottomColor:"rgba(255, 255, 255, 0.25)",
        borderBottomWidth:1,
        marginBottom:10
      }
})