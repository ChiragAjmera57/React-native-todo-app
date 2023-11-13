import React, { useContext } from 'react'
import { Wrapper } from './Wrapper'
import { StyleSheet, Text, View } from 'react-native'
import { rightArrow } from '../assets/svgs'
import { SvgXml } from 'react-native-svg'
import { useRef } from 'react'
import { useEffect } from 'react'
import * as Animatable from 'react-native-animatable';
import { Pressable } from 'react-native'
import { TouchableOpacity } from 'react-native'
import { useState } from 'react'
import { Modal } from 'react-native'
import { TaskDetails } from './TaskDetails'
import { formatDate } from './TimeFormater'
import { AuthContext } from '../Context/AuthContext'

export const ScheduleCard = ({title,date,content,ele ,reFetchDataTohome}) => {
  const viewRef = useRef(null)
  const [modal,setshowmodal] = useState(false)
  const {store} = useContext(AuthContext)
  const {setSingleTodo} = store
  const {singleTodo} = store
   const handlePress =()=>{
    setSingleTodo(ele)
    setshowmodal(true)
  }


  useEffect(()=>{
    viewRef.current.animate({0:  { translateX: 100 }, 1: { translateX: 0 } });
  },[])
  return (
    <Wrapper >
    <TouchableOpacity onPress={handlePress}>
    <View style={styles.ScheduleCard}>
    <View>
    <Animatable.View
          animation='bounceOutLeft'  
          duration={500}
          ref={viewRef}
          >

    <Text style={{color:'black',fontFamily:'Poppins-Medium',fontSize:16,marginLeft:10}}>{title}</Text>
          </Animatable.View>
    <Text style={{color:'rgba(0, 0, 0, 0.90)',fontSize:12,marginLeft:10}}>{formatDate(date)}</Text>
    </View>
    <SvgXml style={{marginRight:20}} xml={rightArrow} />
    </View>
    </TouchableOpacity>
    <Modal
    visible={modal}
    onRequestClose={()=>setshowmodal(false)}
    animationType='slide'
    >
      <TaskDetails title={title} date={date} content={content} handleClose={()=>setshowmodal(false)} reFetchDataTohome={reFetchDataTohome} />
    </Modal>
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