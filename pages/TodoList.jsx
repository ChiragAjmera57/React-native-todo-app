import React from 'react'
import { FlatList, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native'
import { ScheduleCard } from '../component/ScheduleCard'
import { Wrapper } from '../component/Wrapper'
import { Text } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { Bar } from '../component/Bar'
import { SvgXml } from 'react-native-svg'
import { addSvg, pic4, pic5, plusSvg, searchSvg } from '../assets/svgs'
import { Modal } from 'react-native'
import { useState } from 'react'
import { AddTodoModal } from '../component/AddTodoModal'
import { ScrollView } from 'react-native'
import { Pressable } from 'react-native'


const data = [
    { id: '1', title: 'Design Meeting', timing: 'Tomorrow | 10:30pm' },
    { id: '2', title: 'Project Meeting', timing: 'Tomorrow | 10:30pm' },
    { id: '2', title: 'Project Meeting', timing: 'Tomorrow | 10:30pm' },
    { id: '2', title: 'Project Meeting', timing: 'Tomorrow | 10:30pm' },
    { id: '2', title: 'Project Meeting', timing: 'Tomorrow | 10:30pm' },
    { id: '2', title: 'Project Meeting', timing: 'Tomorrow | 10:30pm' },
    { id: '2', title: 'Project Meeting', timing: 'Tomorrow | 10:30pm' },
    { id: '2', title: 'Project Meeting', timing: 'Tomorrow | 10:30pm' },
    { id: '2', title: 'Project Meeting', timing: 'Tomorrow | 10:30pm' },
    { id: '2', title: 'Project Meeting', timing: 'Tomorrow | 10:30pm' },
];
export const TodoList = () => {
    const [showmodal,setshowmodal] =useState(false)
  return (
    <LinearGradient colors={["#1253AA", "#05243E"]} style={{flex:1}}>
         <Bar/>
         <View style={styles.searchbar}>
            <TextInput 
            placeholder='Search by task title'
            placeholderTextColor="rgba(255, 255, 255, 0.60)"
            style={styles.input}
            />
            <SvgXml style={styles.svg} xml={searchSvg} />
         </View>
       <ScrollView>
       <View>
      <Wrapper>
      <Text style={styles.groupText}>Tasks List</Text>
      </Wrapper>
           <View style={{display:'flex',gap:20,marginBottom:100}}>
           <FlatList
        data={data}
        keyExtractor={(item, index) => `${item.id}-${index}`}
        showsHorizontalScrollIndicator={false}
        ItemSeparatorComponent={<View style={styles.separator} />} 
        renderItem={({ item }) => (
          <ScheduleCard title={item.title} timing={item.timing} />
        )}
      />
           </View>
         
           
      </View>
       </ScrollView>
       <Pressable onPress={()=>setshowmodal(true)}>
            <View  style={{ position: 'absolute', top: -140,right:90}}>
                    <SvgXml
                    style={{ position: "absolute" }}
                    xml={addSvg}
                    />
                    <SvgXml
                    style={{ position: "absolute",top:15,left:20 }}
                    xml={plusSvg}
                    />
                </View>
          </Pressable>
      <Modal 
      visible={showmodal}
      onRequestClose={()=>setshowmodal(false)}
      animationType='slide'
      transparent
      >
        <AddTodoModal />
      </Modal>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
    groupText: {
        fontFamily: "Poppins-ExtraLight",
        color: "#FFF",
        letterSpacing: 1.5,
        fontSize: 16,
        padding: 5,
        marginBottom:20
      },
      groupCards:{
        display:'flex',
        flexDirection:'row',
        marginLeft:15
      },
      separator: {
        height: 25, // Adjust the height of the gap as needed
      },
      mb10:{
        marginBottom:10
      },
      searchbar:{
        flexDirection: "row",
        alignItems: "center",
        borderRadius: 10,
        width:'70%',
        alignSelf:'center',
        justifyContent:'space-between',
        height: 40,
        backgroundColor:'rgba(16, 45, 83, 0.80)',
        marginBottom: 20,
        marginTop:20

      },
      input:{
        height:40,
       width:"80%",
        borderRadius:10,
        padding:8,
        fontFamily:'Poppins-Light'
      },
      svg:{
        marginRight:15
      }
})