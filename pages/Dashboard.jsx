import React, { useEffect, useState } from "react";
import { FlatList, Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { SvgXml } from "react-native-svg";
import { pic1, pic2, pic3, pic4, pic5, rightArrow } from "../assets/svgs";
import { GroupCard } from "../component/GroupCard";
import { Wrapper } from "../component/Wrapper";
import { ScheduleCard } from "../component/ScheduleCard";
import { ScheduleCard2 } from "../component/ScheduleCard2";
import { Bar } from "../component/Bar";
import * as Animatable from 'react-native-animatable';
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import { fetchDataWithAuthentication } from "../utils/fetchTodo/fetchTodosRequest";
import { fetchuser } from "../utils/fetchuser/fetchuser";

const data = [
    { id: '1', title: 'Design Meeting', timing: 'Tomorrow | 10:30pm' },
    { id: '2', title: 'Project Meeting', timing: 'Tomorrow | 10:30pm' },
];


export const Dashboard = (props) => {


  const [tasks,settasks] = useState([])
  const {store} =useContext(AuthContext)
 const {token} =store
 const[user,setuser] = useState({})
 
 const reFetchDataTohome =()=>{
  fetchDataWithAuthentication(token).then((res)=>{
    settasks(res.tasks)
  }).catch((err)=>{
    console.log(err);
  })
 }
 useEffect(()=>{
   fetchDataWithAuthentication(token).then((res)=>{
     settasks(res.tasks)
   }).catch((err)=>{
     console.log(err);
   })
   fetchuser(token).then((res)=>{
    setuser(res.findUser)
   })
 })
  return (
    <LinearGradient colors={["#1253AA", "#05243E"]} style={styles.container}>
      <Bar />
      <View style={styles.view1}>
        <Image source={require("../img/userLogo.png")} />
        <View style={{ marginLeft: 12 }}>
          <Text style={styles.nameText}>{user.name}</Text> 
          <Text style={styles.emailText}>{user.email}</Text>
        </View>
        <Image style={{ marginLeft: 19 }} source={require("../img/bell.png")} />
      </View>
     <ScrollView>
     <View style={styles.mb10}>
        <Wrapper>
        <Text style={styles.groupText}>Group tasks</Text>
        </Wrapper>
        <View style={styles.groupCards}>
        <FlatList
        data={data}
        keyExtractor={(item, index) => `${item.id}-${index}`}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          
          <GroupCard title={item.title} timing={item.timing} />
        )}
      />
        </View>
      </View>


      <View style={styles.mb10}>
      <Wrapper>
      <Text style={styles.groupText}>Incomplete Tasks</Text>
      </Wrapper>
           <View style={{display:'flex',gap:20}}>
           <FlatList
        data={tasks}
        keyExtractor={(item, index) => `${item.id}-${index}`}
        showsHorizontalScrollIndicator={false}
        ItemSeparatorComponent={<View style={styles.separator} />} 
        renderItem={({ item }) => (
          <ScheduleCard ele={item} title={item.title} date={item.date} content={item.content} reFetchDataTohome={reFetchDataTohome} />
        )}
      />
           </View>
      </View>


      <View style={{marginBottom:80}}>
      <Wrapper>
      <Text style={styles.groupText}>Completed Tasks</Text>
      </Wrapper>
           <View style={{display:'flex',gap:20}}>
           <FlatList
        data={data}
        keyExtractor={(item, index) => `${item.id}-${index}`}
        showsHorizontalScrollIndicator={false}
        ItemSeparatorComponent={<View style={styles.separator} />} 
        renderItem={({ item }) => (
          <ScheduleCard2 title={item.title} timing={item.timing} />
        )}
      />
           </View>
      </View>
     </ScrollView>
    </LinearGradient>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  view1: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    padding: 15,
    marginTop: 15,
    alignItems: "center",
  },
  nameText: {
    fontFamily: "Poppins-Medium",
    fontSize: 18,
  },
  emailText: {
    fontFamily: "Poppins-Regular",
    fontSize: 14,
    color: "rgba(255, 255, 255, 0.50)",
  },
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
    height: 20, // Adjust the height of the gap as needed
  },
  mb10:{
    marginBottom:10
  }
});
