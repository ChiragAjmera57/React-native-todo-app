import React from 'react'
import { Wrapper } from './Wrapper'
import { StyleSheet, Text, View } from 'react-native'
import { rightArrow } from '../assets/svgs'
import { SvgXml } from 'react-native-svg'
import { useRef } from 'react'
import { useEffect } from 'react'
import * as Animatable from 'react-native-animatable';

export const ScheduleCard = () => {
  const viewRef = useRef(null)
  useEffect(()=>{
    viewRef.current.animate({0:  { translateX: 100 }, 1: { translateX: 0 } });
  })
  return (
    <Wrapper >
    <View style={styles.ScheduleCard}>
    <View>
    <Animatable.View
          animation='bounceOutLeft'  
          duration={500}
          ref={viewRef}
          >

    <Text style={{color:'black',fontFamily:'Poppins-Medium',fontSize:16,marginLeft:10}}>Client meeting</Text>
          </Animatable.View>
    <Text style={{color:'rgba(0, 0, 0, 0.90)',fontSize:12,marginLeft:10}}>Tomorrow | 10:30pm</Text>
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