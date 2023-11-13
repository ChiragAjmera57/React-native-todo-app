import React, { useContext, useEffect, useState } from "react";
import { View } from "react-native-animatable";
import { SvgXml } from "react-native-svg";
import { backSvg, calenderSmall, deleteSvg, doneSvg, editSvg } from "../assets/svgs";
import { Modal, Pressable, Text } from "react-native";
import { Wrapper } from "./Wrapper";
import LinearGradient from "react-native-linear-gradient";
import { StyleSheet } from "react-native";
import { formatDate } from "./TimeFormater";
import { AuthContext } from "../Context/AuthContext";
import { AddTodoModal } from "./AddTodoModal";
import { UpdateTodoModal } from "./UpdateTodoModal";
import { fetchsingletodo } from "../utils/fetchTodo/fetchSingleTodo";
import { deleteTaskWithToken } from "../utils/deleteReq/todoDeleteReq";

export const TaskDetails = ({handleClose,title,date,content}) => {
  const {store} = useContext(AuthContext)
  const [task,settask] = useState({})
  const {setSingleTodo} = store
  const {singleTodo} = store
  const{token} = store
  const[modal,setshowmodal] = useState(false)


  const reFetchData = ()=>{
    fetchsingletodo(task._id).then((res)=>{
      console.log('====================================');
      settask(res)
      setSingleTodo(res)
      console.log('====================================');
    }).catch((err)=>{
      console.log('====================================');
      console.log(err);
      console.log('====================================');
    })
  }

  const handleDelete =()=>{
    deleteTaskWithToken(singleTodo._id,token).then((res)=>{
      handleClose()

    }).catch((err)=>{
      console.log(err);
    })
  }
useEffect(()=>{
console.log(singleTodo,"from taskDetailpage");
settask(singleTodo)
})
  return (
    <LinearGradient colors={["#1253AA", "#05243E"]} style={{flex:1}}>
           <View style={{maxWidth: 300,alignSelf:'center'}}>
      <Pressable onPress={()=>handleClose()}>
      <View style={styles.head}>
            <SvgXml style={{padding:5}}  xml={backSvg} />
            <Text style={styles.headText}>Task Details</Text>
      </View>
      </Pressable>
      <View style={styles.title}>
            <View style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
              <Text style={{fontFamily:'Poppins-Medium',fontSize:18,marginRight:15}}>{task.title}</Text>
              <Pressable onPress={()=>setshowmodal(true)}>
              <SvgXml xml={editSvg} />
              </Pressable>
            </View>
            <View style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
              <SvgXml xml={calenderSmall} />
              <Text style={{fontFamily:'Poppins-Medium',fontSize:13,marginRight:15}}>{formatDate(singleTodo.date.toString())}</Text>
            </View>
      </View>
      <View style={styles.detail}>
        <Text style={styles.detailText}>
        {task.content}
        </Text>
      </View>
      <View style={styles.bottomSec}> 
            <View style={styles.btn}>
                <SvgXml xml={doneSvg} />
                <Text style={{fontFamily:'Poppins-Regular',textAlign:'center',marginTop:15}}>
                    Done
                </Text>
            </View>
           <Pressable style={styles.btn} onPress={handleDelete}>
           
                <SvgXml xml={deleteSvg} />
                <Text style={{fontFamily:'Poppins-Regular',textAlign:'center'}}  >
                    Delete
                </Text>
            
           </Pressable>
      </View>
    </View>
    <Modal
    transparent
    animationType='slide'
    visible={modal}
    onRequestClose={()=>setshowmodal(false)}
    >
      <UpdateTodoModal closeModal={()=>setshowmodal(false)} reFetchData={reFetchData}  />
    </Modal>
    </LinearGradient>
   
  );
};

const styles = StyleSheet.create({
  head:{
    display:'flex',
    flexDirection:'row',
    marginTop:60,
    alignItems:'center'
  },
  headText:{
    fontFamily:'Poppins-Regular',
    fontSize:16,
    marginLeft:15
  },
  title:{
    marginTop:30,
    paddingTop:15,
    paddingBottom:15,
    borderBottomColor:'rgba(255, 255, 255, 0.25)',
    borderBottomWidth:1
  },
  detail:{
    padding:5,
    marginTop:15
  },
  detailText:{
    fontFamily:'Poppins-Regular',
    letterSpacing:1.26
  },
  bottomSec:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-around',
    marginTop:20,
  },
  btn:{
    display:'flex',
    alignItems:'center',
    justifyContent:'space-around',
    backgroundColor:'#05243E',
    borderRadius:10,
    width:'35%',
    shadowColor: '#05243E',
  shadowOffset: { width: 10, height: 12 },
  shadowOpacity: 1,
  shadowRadius: 10,
  // Android
  padding:5,
  elevation: 10,

  // Border and background adjustments
  }
})