import React, { useContext, useEffect, useReducer, useState } from 'react'
import { TextInput, View } from 'react-native'
import { calanderSvg, describeSVg, rightSvg, timeSvg } from '../assets/svgs'
import { StyleSheet } from 'react-native'
import DateTimePicker from '@react-native-community/datetimepicker';
import { SvgXml } from 'react-native-svg'
import { Pressable } from 'react-native'
import { Text } from 'react-native'
import { TouchableOpacity } from 'react-native'
import { CreateRequest } from '../utils/createTodo/CreateRequest';
import { AuthContext } from '../Context/AuthContext';
import { createTaskWithToken } from '../utils/createTodo/createTodoRequest';
import { updateTask } from '../utils/updateRequest/UpdatetodoReq';


const initialValue = {
  title:"",
  content:"",
}

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_TITLE":
      return { ...state, title: action.payload };
    case "SET_CONTENT":
      return { ...state, content: action.payload };
      case "RESET":
        return { ...initialValue };
    default:
      return state;
  }
};

export const UpdateTodoModal = ({closeModal,reFetchData}) => {

  const {store} = useContext(AuthContext)
  const {singleTodo} = store

  const {setSingleTodo } = store
  const [date, setDate] = useState(new Date);
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [state, dispatch] = useReducer(reducer, {
    title:singleTodo.title,
    content:singleTodo.content,
  });

const handleSubmit = ()=>{
  const {content,title} = state
  const {token} = store
  const {_id} = singleTodo
  updateTask(_id, content,title,date,token).then((res)=>{
     closeModal()
  reFetchData()
  }).catch((err)=>{
    console.log('====================================');
    console.log(err);
    console.log('====================================');
  })

}
useEffect(()=>{

})

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(false);
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };
  return (
    <View style={styles.container}>
         <View style={styles.searchbar}>
             <SvgXml style={styles.svg} xml={rightSvg} />
            <TextInput 
            placeholder='task'
            enterKeyHint='next'
            placeholderTextColor="rgba(255, 255, 255, 0.60)"
            style={styles.input}
            value={state.title}
            onChangeText={(text)=>dispatch({ type: "SET_TITLE", payload: text })}
            />
         </View>
         <View style={[styles.searchbar,{height:120,alignItems: 'center',}]}>
             <SvgXml style={[styles.svg,]} xml={describeSVg} />
            <TextInput 
            placeholder='Description'
            multiline
            placeholderTextColor="rgba(255, 255, 255, 0.60)"
            style={[styles.input,{height:'100%'}]}
            value={state.content}
            onChangeText={(text)=>dispatch({ type: "SET_CONTENT", payload: text })}
            />
         </View>
         <View style={{display:'flex',flexDirection:'row',width:'50%',justifyContent:'center',alignSelf:'center'}}>
            <View style={[styles.searchbar,{marginRight:'5%'}]}>
                <SvgXml style={styles.svg} xml={calanderSvg} />
                <TouchableOpacity style={styles.input} onPress={showDatepicker} >
                  <Text style={{color:'rgba(255, 255, 255, 0.60)'}}>Date</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.searchbar}>
                <SvgXml style={styles.svg} xml={timeSvg} />
               
                <TouchableOpacity style={styles.input} onPress={showTimepicker}>
                  <Text style={{color:'rgba(255, 255, 255, 0.60)'}}>Time</Text>
                </TouchableOpacity>
            </View>
         </View>
         <View style={{display:'flex',flexDirection:'row',width:'75%',justifyContent:'space-between',alignSelf:'center'}}>
            <Pressable style={[styles.btn,{backgroundColor:'white',borderColor:'#0EA5E9',borderWidth:2}]}>
            <Text style={[styles.btnText,{color:'#05243E'}]}>Cancel</Text>
            </Pressable>
            <Pressable style={styles.btn} onPress={handleSubmit}>
            <Text style={[styles.btnText,{color:'#FFF'}]}>Create</Text>
            </Pressable>
         </View>
         {show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode={mode}
            is24Hour={false}
            onChange={onChange}
          />
        )}
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        position:'absolute',
        zIndex:50,
        width:'100%',
        bottom:0,
        backgroundColor:'#FFF',
        height:'55%',
        borderTopLeftRadius:20,
        borderTopRightRadius:20
    },
    searchbar:{
        flexDirection: "row",
        alignItems: "center",
        borderRadius: 10,
        width:'70%',
        alignSelf:'center',
        justifyContent:'space-between',
        height: 40,
        backgroundColor:'#05243E',
        marginBottom: 20,
        marginTop:20

      },
      input:{
        height:40,
       width:"90%",
        borderRadius:10,
        padding:8,
        fontFamily:'Poppins-Light'
      },
      svg:{
        marginLeft:15
      },
      btn:{
        width:'47%',
        backgroundColor:'#0EA5E9',
        color:'black',
        height:47,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:10,
      },
      btnText:{
        fontSize:16,
        fontFamily:'Poppins-Regular'
      }

})