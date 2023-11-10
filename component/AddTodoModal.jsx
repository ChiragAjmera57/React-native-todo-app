import React from 'react'
import { TextInput, View } from 'react-native'
import { calanderSvg, describeSVg, rightSvg, timeSvg } from '../assets/svgs'
import { StyleSheet } from 'react-native'
import { SvgXml } from 'react-native-svg'
import { Pressable } from 'react-native'
import { Text } from 'react-native'

export const AddTodoModal = () => {
  return (
    <View style={styles.container}>
         <View style={styles.searchbar}>
             <SvgXml style={styles.svg} xml={rightSvg} />
            <TextInput 
            placeholder='task'
            enterKeyHint='next'
            placeholderTextColor="rgba(255, 255, 255, 0.60)"
            style={styles.input}
            />
         </View>
         <View style={[styles.searchbar,{height:120,alignItems: 'center',}]}>
             <SvgXml style={[styles.svg,]} xml={describeSVg} />
            <TextInput 
            placeholder='Description'
            multiline
            placeholderTextColor="rgba(255, 255, 255, 0.60)"
            style={[styles.input,{height:'100%'}]}
            />
         </View>
         <View style={{display:'flex',flexDirection:'row',width:'50%',justifyContent:'center',alignSelf:'center'}}>
            <View style={[styles.searchbar,{marginRight:'5%'}]}>
                <SvgXml style={styles.svg} xml={calanderSvg} />
                <TextInput 
                placeholder='Date'
                placeholderTextColor="rgba(255, 255, 255, 0.60)"
                style={styles.input}
                />
            </View>
            <View style={styles.searchbar}>
                <SvgXml style={styles.svg} xml={timeSvg} />
                <TextInput 
                placeholder='Time'
                placeholderTextColor="rgba(255, 255, 255, 0.60)"
                style={styles.input}
                />
            </View>
         </View>
         <View style={{display:'flex',flexDirection:'row',width:'75%',justifyContent:'space-between',alignSelf:'center'}}>
            <Pressable style={[styles.btn,{backgroundColor:'white',borderColor:'#0EA5E9',borderWidth:2}]}>
            <Text style={[styles.btnText,{color:'#05243E'}]}>Cancel</Text>
            </Pressable>
            <Pressable style={styles.btn}>
            <Text style={[styles.btnText,{color:'#FFF'}]}>Create</Text>
            </Pressable>
         </View>
       
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