import React, { useContext } from "react";
import { View } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { SvgXml } from "react-native-svg";
import { conversation, goBack, idea, logoutSvg, outerSvg,profile, terms } from "../assets/svgs";
import { Text } from "react-native";
import { ScheduleCard3 } from "../component/ScheduleCard3";
import { TouchableOpacity } from "react-native";
import { StyleSheet } from "react-native";
import { AuthContext } from "../Context/AuthContext";


const data = [
    {
        title:'Profile',svgLink:profile
    },
    {
        title:'Coversation',svgLink:conversation
    },
    {
        title:'Projects',svgLink:idea
    },
    {
        title:'Terms and Policies',svgLink:terms
    }
]
export const Setting = () => {
  const {store} = useContext(AuthContext)
  const {logOut} = store
  return (
    <LinearGradient
      LinearGradient
      colors={["#1253AA", "#05243E"]}
      style={{ flex: 1 }}
    >
      <View style={{display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'center',height:60,marginTop:40}}>
        <View style={{ position: "relative",marginBottom:'auto',marginTop:10,marginLeft:10}}>
          <SvgXml
            width={35}
            style={{ position: "absolute", top: 0, left: 15 }}
            xml={outerSvg}
          />
          <SvgXml
            width={35}
            style={{ position: "absolute", top: 7, left: 15 }}
            xml={goBack}
          />
        </View>
        <Text style={{textAlign:'center',marginLeft:'auto',marginRight:'auto',fontFamily:"Poppins-Medium",fontSize:24,color:'#FFF'}}>Settings</Text>
      </View>
      <View style={{marginTop:50}}>
        {
            data?.map((ele,i)=>{
                return(
                    <ScheduleCard3 key={i} title={ele.title} svgLink={ele.svgLink} />
                )
            })
        }
      </View>
      <TouchableOpacity style={styles.btn} onPress={()=>logOut()}>
        <SvgXml xml={logoutSvg} />
          <Text style={{ color: "#DC4343",marginLeft:15,fontSize:16,fontFamily:'Poppins-Regular' }}>Logout</Text>
        </TouchableOpacity>
    </LinearGradient>
  );
};
const styles = StyleSheet.create({
    btn: {
        display: "flex",
        alignItems: "center",
        borderRadius: 10,
        flexDirection:'row',
        width: "60%",
        justifyContent: "center",
        backgroundColor: "#FFF",
        padding: 10,
        marginLeft: "auto",
        marginRight: "auto",
        borderRadius:20,
        marginTop:40
      },
})