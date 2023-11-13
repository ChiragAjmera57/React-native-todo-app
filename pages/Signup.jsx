import React, { useEffect, useRef, useState } from "react";
import { BackHandler, Image, Keyboard, KeyboardAvoidingView, Modal, Text, TextInput, TouchableOpacity} from "react-native";
import { StyleSheet, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { SvgXml } from "react-native-svg";
import { svgXmlData, svglock, userLogo } from "../assets/svgs";
import { Bar } from "../component/Bar";
import { ComponentPop } from "../component/ComponentPop";
import { useReducer } from "react";
import { signUpUser } from "../utils/signup/PostSignupRequest";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import { Pressable } from "react-native";



const initialState = {
  name: "",
  email: "",
  password: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_FULL_NAME":
      return { ...state, name: action.payload };
    case "SET_EMAIL":
      return { ...state, email: action.payload };
    case "SET_PASSWORD":
      return { ...state, password: action.payload };
    default:
      return state;
  }
};

export const Signup = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);
  const [state, dispatch] = useReducer(reducer, initialState);
  
  const inputref = useRef(null);
 
  const handleSubmit = ()=>{
    const result = signUpUser(state).then((res)=>{
      setModalVisible(true)
      
      setTimeout(() => {
      
        navigation.replace('Login')
      }, 1500);
      
    }).catch((err)=>{
      console.log(`error ${err}`);
    })
  }

  const handleBackButton = () => {
    Keyboard.dismiss(() => {
      inputref.current.blur();
    });
    // Handle your back button logic (e.g., navigate back)
    return false; // Return false to prevent the default behavior
  };

  useEffect(() => {
   
    BackHandler.addEventListener("hardwareBackPress", handleBackButton);
    return () => {
      BackHandler.removeEventListener("hardwareBackPress", handleBackButton);
    };
  }, []);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      () => {
        setKeyboardVisible(true);
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => {
        setKeyboardVisible(false);
      }
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);
  return (
    <LinearGradient colors={["#1253AA", "#05243E"]} style={styles.container}>
      <Bar />
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
       
        onRequestClose={() => setModalVisible(false)}
      >
      

          <ComponentPop />
       
       
      </Modal>
      <View style={[styles.view1,modalVisible?{display:'none'}:{}]}>
        <Image style={styles.img} source={require("../img/Checkmark.png")} />
        <Text style={styles.head}>Welcome to DO IT </Text>
        <Text style={styles.head2}>create an account and Join us now!</Text>
      </View>
      <KeyboardAvoidingView style={[styles.inputsBox, { zIndex: 5 },modalVisible?{display:'none'}:{}]}>
        <View style={[styles.inputContainer]}>
          <View style={styles.inputWrapper}>
            <SvgXml xml={userLogo} width="20" height="20" style={styles.icon} />
            <TextInput
              style={styles.input}
              placeholder="Full Name"
              autoCapitalize="none"
              maxLength={30}
              placeholderTextColor="rgba(0, 0, 0, 0.44)"
              onChangeText={(text) => dispatch({ type: "SET_FULL_NAME", payload: text })}
              value={state.name}
            />
          </View>
        </View>
        <View style={styles.inputContainer}>
          <View style={[styles.inputWrapper]}>
            <SvgXml
              xml={svgXmlData}
              width="20"
              height="20"
              style={styles.icon}
            />
            <TextInput
              ref={inputref}
              style={styles.input}
              placeholder="Email Address"
              keyboardType="email-address"
              autoCapitalize="none"
              placeholderTextColor="rgba(0, 0, 0, 0.44)"
              maxLength={30}
              onChangeText={(text) => dispatch({ type: "SET_EMAIL", payload: text })}
              value={state.email}
            />
          </View>
        </View>
        <View style={styles.inputContainer}>
          <View style={styles.inputWrapper}>
            <SvgXml xml={svglock} width="20" height="20" style={styles.icon} />
            <TextInput
              style={styles.input}
              placeholder="Password"
              secureTextEntry={true}
              autoCapitalize="none"
              maxLength={30}
              placeholderTextColor="rgba(0, 0, 0, 0.44)"
              onChangeText={(text) => dispatch({ type: "SET_PASSWORD", payload: text })}
              value={state.password}
            />
          </View>
        </View>

        <TouchableOpacity onPress={handleSubmit}  style={styles.btn}>
          <Text style={{ color: "white" }}>Sign up</Text>
        </TouchableOpacity>
        <Pressable onPress={()=>navigation.replace('Login')}>
        <Text
          style={{
            fontFamily: "Poppins-Regular",
            textAlign: "center",
            marginTop: 15,
            color: "white",
          }}
        >
          Already have an account? sign in
        </Text>
        </Pressable>
      </KeyboardAvoidingView>
      <View
        style={[styles.view3, isKeyboardVisible ? { display: "none" } : {},modalVisible?{display:'none'}:{}]}
      >
        <View
          style={{
            display: "flex",
            width: "100%",
            flexDirection: "row",
            height: "30%",
            alignItems: "center",
          }}
        >
          <Text style={{ fontFamily: "Poppins-Regular" }}>Sign In with:</Text>
          <View style={styles.imgContainer}>
            <Image
              style={styles.bottomLogo}
              source={require("../img/Apple-Logo.png")}
            />
          </View>
          <View style={styles.imgContainer}>
            <Image
              style={styles.bottomLogo}
              source={require("../img/Google.png")}
            />
          </View>
        </View>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    textTransform: "none",
    // display:'none'
  },
  head: {
    color: "#FFF",
    fontSize: 22,
    fontWeight: "500",
    fontFamily: "Poppins-SemiBold",
    textAlign: "left",
  },
  view1: {
    width: "100%",
    gap: 15,
    alignItems: "center",
    flex: 1,
    marginTop: 50,
    textAlign: "left",
    marginBottom: 15,
  },

  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 5,
    height: 40,
    backgroundColor: "white",
    padding: 10,
    marginBottom: 30,
  },
  head2: {
    color: "#FFF",
    fontSize: 15,
    fontWeight: "500",
    fontFamily: "Poppins-Light",
    textAlign: "left",
  },
  img: { width: 70, height: 70 },
  input: {
    color: "rgba(0, 0, 0, 0.8)",
    padding: -7,
    fontSize: 15,
    marginLeft: 5,
    height: 40,
    width: "90%",
  },

  btn: {
    display: "flex",
    alignItems: "center",
    borderRadius: 10,
    width: "95%",
    justifyContent: "center",
    backgroundColor: "#0EA5E9",
    padding: 10,
    marginLeft: "auto",
    marginRight: "auto",
  },

  inputsBox: {
    width: "90%",
    marginBottom: 10,
    padding: 10,
    textAlign: "center",
    flex: 2,
  },
  view3: {
    width: "80%",
    display: "flex",
    flexDirection: "row",
    flex: 1,
  },
  bottomLogo: {
    padding: 5,
  },
  imgContainer: {
    width: 35,
    height: 35,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 7,
    marginLeft: 25,
  },
});
